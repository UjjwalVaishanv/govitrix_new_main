const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const projects = [
  { slug: "medicare-hms", url: "https://clinicrafter-pro.lovable.app" },
  { slug: "finbud", url: "https://quant-glow-nexus.lovable.app/" },
  { slug: "sellmate", url: "https://sellmate-mvp.lovable.app" },
  { slug: "apexscore", url: "https://trophy-track-flow.lovable.app" },
];

async function removeLovableElements(page) {
  await page.evaluate(() => {
    // Hide or remove any Lovable badge elements, buttons, links, or overlay elements
    const selectors = [
      "#lovable-badge",
      "[id*='lovable']",
      "[class*='lovable']",
      "a[href*='lovable.dev']",
      "iframe[src*='lovable']",
    ];
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.style.display = "none";
        el.style.visibility = "hidden";
        el.remove();
      });
    });

    // Remove any elements containing text "Edit with Lovable" or "Lovable"
    const allEls = document.querySelectorAll("div, button, a, span, p, iframe");
    allEls.forEach((el) => {
      if (el.textContent && el.textContent.toLowerCase().includes("edit with lovable")) {
        el.style.display = "none";
        el.style.visibility = "hidden";
        el.remove();
      }
    });

    // Inject CSS rule to permanently hide anything related to lovable badges
    const style = document.createElement("style");
    style.innerHTML = `
      #lovable-badge, [id*="lovable"], [class*="lovable"], a[href*="lovable.dev"] {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  });
}

async function captureAllClean() {
  const outputDir = path.resolve("public/projects");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  for (const p of projects) {
    console.log(`\n--- Capturing ${p.slug}: ${p.url} ---`);
    const page = await context.newPage();
    try {
      await page.goto(p.url, { waitUntil: "networkidle", timeout: 35000 });
      await page.waitForTimeout(3000);
      await removeLovableElements(page);
      await page.waitForTimeout(500);

      // Screen 1
      const path1 = path.join(outputDir, `${p.slug}-1.png`);
      await page.screenshot({ path: path1, fullPage: false });
      console.log(`Captured ${p.slug}-1.png`);

      // Screen 2
      await page.evaluate(() => window.scrollBy(0, 600));
      await page.waitForTimeout(1000);
      await removeLovableElements(page);
      const path2 = path.join(outputDir, `${p.slug}-2.png`);
      await page.screenshot({ path: path2, fullPage: false });
      console.log(`Captured ${p.slug}-2.png`);

      // Screen 3
      await page.evaluate(() => window.scrollBy(0, 600));
      await page.waitForTimeout(1000);
      await removeLovableElements(page);
      const path3 = path.join(outputDir, `${p.slug}-3.png`);
      await page.screenshot({ path: path3, fullPage: false });
      console.log(`Captured ${p.slug}-3.png`);
    } catch (err) {
      console.error(`Error capturing ${p.slug}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\nSUCCESS: All clean screenshots captured without Lovable tags!");
}

captureAllClean();
