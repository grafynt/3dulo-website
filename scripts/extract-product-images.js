/**
 * @file extract-product-images.js
 * @description Renders PDF catalog pages using puppeteer + Chrome, then crops
 *              individual product images using sharp. Run once to populate
 *              public/images/products/
 */

const puppeteer = require('puppeteer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PDF_PATH = path.resolve('D:/Download/3Dulo Product Catalog (1).pdf');
const OUT_BASE = path.resolve('./public/images/products');

// Page dimensions from PDF (A4 portrait: 595×842 pt at 72dpi)
// We render at 2x scale → 1190×1684px per page
const SCALE = 2.5;
const PAGE_W = Math.round(595 * SCALE);
const PAGE_H = Math.round(842 * SCALE);

// ─── CROP DEFINITIONS ────────────────────────────────────────────────────────
// Coordinates are in the rendered image (after SCALE applied).
// [pdfPage, left, top, width, height, slug, filename]
// PDF page 3 = price list page 1 (Wall Mount V1 Plain, Padel Desk Stand, Wall Mount V1 Semi, V3, V1 Contour, Large Wave)
// PDF page 4 = price list page 2 (Triple Take, Wall Mount Large, Desk Stand Legacy, Metalbone, Batman, Heart)
// PDF page 5 = price list page 3 (Strap Adjuster Round, Adidas)
// PDF page 2 = catalog overview (small thumbnails — use as fallback if needed)

// We use page 3 & 4 large product photos.
// Measured as fraction of page then multiplied by pixel size.
// Format: { page, x, y, w, h, slug, file }
const CROPS = [
  // ── PAGE 3 (index 2, 0-based) ──────────────────────────────────────────────
  // Row 1: Wall Mount V1 (Plain) top-left, Padel Desk Stand top-right
  { page: 2, x: 0.03, y: 0.20, w: 0.29, h: 0.22, slug: 'wall-mount-v1',       file: '1.jpg' },
  { page: 2, x: 0.52, y: 0.20, w: 0.29, h: 0.22, slug: 'desk-stand-padel',    file: '1.jpg' },
  // Row 2: Wall Mount V1 Semi Contour (left), Wall Mount V3 (right)
  { page: 2, x: 0.03, y: 0.45, w: 0.29, h: 0.22, slug: 'wall-mount-v1-semi',  file: '1.jpg' },
  { page: 2, x: 0.52, y: 0.45, w: 0.29, h: 0.22, slug: 'wall-mount-v3',       file: '1.jpg' },
  // Row 3: Wall Mount V1 Contour (left), Wall Mount Large Wave (right)
  { page: 2, x: 0.03, y: 0.69, w: 0.29, h: 0.22, slug: 'wall-mount-v1-contour', file: '1.jpg' },
  { page: 2, x: 0.52, y: 0.69, w: 0.29, h: 0.22, slug: 'wall-mount-large-wave', file: '1.jpg' },

  // ── PAGE 4 (index 3, 0-based) ──────────────────────────────────────────────
  // Row 1: Triple Take (left), Wall Mount Large (right)
  { page: 3, x: 0.03, y: 0.20, w: 0.29, h: 0.22, slug: 'triple-take-padel',   file: '1.jpg' },
  { page: 3, x: 0.52, y: 0.20, w: 0.29, h: 0.22, slug: 'wall-mount-large',    file: '1.jpg' },
  // Row 2: Desk Stand Legacy (left), Metalbone 3.3 Bolt Case (right)
  { page: 3, x: 0.03, y: 0.44, w: 0.29, h: 0.22, slug: 'desk-stand-legacy',   file: '1.jpg' },
  { page: 3, x: 0.52, y: 0.44, w: 0.29, h: 0.22, slug: 'metalbone-bolt-case', file: '1.jpg' },
  // Row 3: Wall Mount Batman (left), Wall Mount Heart (right)
  { page: 3, x: 0.03, y: 0.68, w: 0.29, h: 0.22, slug: 'batman-edition-padel', file: '1.jpg' },
  { page: 3, x: 0.52, y: 0.68, w: 0.29, h: 0.22, slug: 'wall-mount-heart',     file: '1.jpg' },

  // ── PAGE 5 (index 4) ──────────────────────────────────────────────────────
  { page: 4, x: 0.03, y: 0.20, w: 0.29, h: 0.22, slug: 'strap-adjuster-round', file: '1.jpg' },
  { page: 4, x: 0.52, y: 0.20, w: 0.29, h: 0.22, slug: 'strap-adjuster-adidas', file: '1.jpg' },

  // ── PAGE 2 (index 1) — catalog grid, use for additional thumbnails ─────────
  // Grid: 4 cols × 3 rows. col width ~0.235, row height ~0.22
  // Row 1: Wall Mount V1, Wall Mount Large Wave, Padel Desk Stand, Wall Mount V3
  { page: 1, x: 0.02, y: 0.19, w: 0.22, h: 0.17, slug: 'wall-mount-v1',        file: '2.jpg' },
  { page: 1, x: 0.27, y: 0.19, w: 0.22, h: 0.17, slug: 'wall-mount-large-wave', file: '2.jpg' },
  { page: 1, x: 0.52, y: 0.19, w: 0.22, h: 0.17, slug: 'desk-stand-padel',      file: '2.jpg' },
  { page: 1, x: 0.77, y: 0.19, w: 0.22, h: 0.17, slug: 'wall-mount-v3',         file: '2.jpg' },
  // Row 2: Triple Take, Wall Mount Large, Desk Stand Legacy, Metalbone
  { page: 1, x: 0.02, y: 0.39, w: 0.22, h: 0.17, slug: 'triple-take-padel',    file: '2.jpg' },
  { page: 1, x: 0.27, y: 0.39, w: 0.22, h: 0.17, slug: 'wall-mount-large',     file: '2.jpg' },
  { page: 1, x: 0.52, y: 0.39, w: 0.22, h: 0.17, slug: 'desk-stand-legacy',    file: '2.jpg' },
  { page: 1, x: 0.77, y: 0.39, w: 0.22, h: 0.17, slug: 'metalbone-bolt-case',  file: '2.jpg' },
  // Row 3: Wall Mount Batman, Strap Adjuster Round, Strap Adjuster Adidas, Wall Mount Heart
  { page: 1, x: 0.02, y: 0.59, w: 0.22, h: 0.17, slug: 'batman-edition-padel', file: '2.jpg' },
  { page: 1, x: 0.27, y: 0.59, w: 0.22, h: 0.17, slug: 'strap-adjuster-round', file: '2.jpg' },
  { page: 1, x: 0.52, y: 0.59, w: 0.22, h: 0.17, slug: 'strap-adjuster-adidas', file: '2.jpg' },
  { page: 1, x: 0.77, y: 0.59, w: 0.22, h: 0.17, slug: 'wall-mount-heart',     file: '2.jpg' },
];

async function renderPage(browser, pageIndex) {
  const page = await browser.newPage();
  await page.setViewport({ width: PAGE_W, height: PAGE_H, deviceScaleFactor: 1 });

  // Load PDF via Chrome's built-in PDF viewer
  const fileUrl = `file:///${PDF_PATH.replace(/\\/g, '/')}#page=${pageIndex + 1}`;

  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
  // Wait for PDF to render
  await new Promise(r => setTimeout(r, 2000));

  const screenshot = await page.screenshot({ type: 'png', fullPage: false });
  await page.close();
  return screenshot;
}

async function main() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  // Collect unique pages needed
  const pagesNeeded = [...new Set(CROPS.map(c => c.page))].sort((a, b) => a - b);
  const renderedPages = {};

  for (const pageIdx of pagesNeeded) {
    console.log(`Rendering PDF page ${pageIdx + 1}...`);
    try {
      renderedPages[pageIdx] = await renderPage(browser, pageIdx);
      console.log(`  ✓ Page ${pageIdx + 1} rendered (${renderedPages[pageIdx].length} bytes)`);
    } catch (e) {
      console.error(`  ✗ Page ${pageIdx + 1} failed: ${e.message}`);
    }
  }

  await browser.close();

  // Crop each product image
  let ok = 0, fail = 0;
  for (const crop of CROPS) {
    const pageBuffer = renderedPages[crop.page];
    if (!pageBuffer) {
      console.warn(`Skipping ${crop.slug}/${crop.file} — page not rendered`);
      fail++;
      continue;
    }

    const left   = Math.round(crop.x * PAGE_W);
    const top    = Math.round(crop.y * PAGE_H);
    const width  = Math.round(crop.w * PAGE_W);
    const height = Math.round(crop.h * PAGE_H);

    const outDir = path.join(OUT_BASE, crop.slug);
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, crop.file);

    try {
      await sharp(pageBuffer)
        .extract({ left, top, width, height })
        .jpeg({ quality: 90 })
        .toFile(outPath);
      console.log(`  ✓ ${crop.slug}/${crop.file}`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${crop.slug}/${crop.file}: ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone: ${ok} saved, ${fail} failed.`);
}

main().catch(e => { console.error(e); process.exit(1); });