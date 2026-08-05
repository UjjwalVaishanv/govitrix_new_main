const { chromium } = require("@playwright/test");

async function inspect() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log("--- Medicare HMS ---");
  await page.goto("https://clinicrafter-pro.lovable.app", { waitUntil: "networkidle" });
  const hmsButtons = await page.locator("button, a, nav *, [role='tab']").allInnerTexts();
  console.log("HMS Interactive elements:", hmsButtons.map(s => s.trim()).filter(Boolean).slice(0, 20));

  console.log("\n--- SellMate ---");
  await page.goto("https://sellmate-mvp.lovable.app", { waitUntil: "networkidle" });
  const sellButtons = await page.locator("button, a, nav *, [role='tab']").allInnerTexts();
  console.log("SellMate Interactive elements:", sellButtons.map(s => s.trim()).filter(Boolean).slice(0, 20));

  await browser.close();
}

inspect();
