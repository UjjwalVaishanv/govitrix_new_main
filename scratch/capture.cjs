const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const projects = [
  { slug: "medicare-hms", url: "https://clinicrafter-pro.lovable.app" },
  { slug: "finbud", url: "https://quant-glow-nexus.lovable.app/" },
  { slug: "sellmate", url: "https://sellmate-mvp.lovable.app" },
  { slug: "apexscore", url: "https://trophy-track-flow.lovable.app" },
];

async function capture() {
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
    console.log(`Navigating to ${p.slug}: ${p.url}`);
    const page = await context.newPage();
    try {
      await page.goto(p.url, { waitUntil: "networkidle", timeout: 35000 });
      await page.waitForTimeout(4000);

      const mainPath = path.join(outputDir, `${p.slug}-1.png`);
      await page.screenshot({ path: mainPath, fullPage: false });
      console.log(`Saved ${mainPath}`);

      await page.evaluate(() => window.scrollBy(0, 600));
      await page.waitForTimeout(1500);
      const subPath = path.join(outputDir, `${p.slug}-2.png`);
      await page.screenshot({ path: subPath, fullPage: false });
      console.log(`Saved ${subPath}`);
    } catch (err) {
      console.error(`Error capturing ${p.slug}:`, err);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("SUCCESS: All screenshots captured!");
}

capture();
