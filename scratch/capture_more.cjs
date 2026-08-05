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
    console.log(`Capturing 3 distinct screens for ${p.slug}...`);
    const page = await context.newPage();
    try {
      await page.goto(p.url, { waitUntil: "networkidle", timeout: 35000 });
      await page.waitForTimeout(3000);

      // Slide 1: Top Hero
      await page.screenshot({ path: path.join(outputDir, `${p.slug}-1.png`), fullPage: false });

      // Slide 2: Middle Section
      await page.evaluate(() => window.scrollTo(0, 550));
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(outputDir, `${p.slug}-2.png`), fullPage: false });

      // Slide 3: Lower Section
      await page.evaluate(() => window.scrollTo(0, 1150));
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(outputDir, `${p.slug}-3.png`), fullPage: false });

      console.log(`Done capturing 3 slides for ${p.slug}`);
    } catch (err) {
      console.error(`Error capturing ${p.slug}:`, err);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("SUCCESS: Captured 3 distinct slides for all projects!");
}

capture();
