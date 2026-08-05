const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

async function captureDashboards() {
  const outputDir = path.resolve("public/projects");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  // --- MEDICARE HMS ---
  console.log("Capturing Medicare HMS unique screens...");
  const pageHms = await context.newPage();
  await pageHms.goto("https://clinicrafter-pro.lovable.app", { waitUntil: "networkidle" });
  await pageHms.waitForTimeout(3000);

  // Screen 1: Login / Welcome screen
  await pageHms.screenshot({ path: path.join(outputDir, "medicare-hms-1.png") });
  console.log("Saved medicare-hms-1.png");

  // Try clicking "Sign in" or form submit to enter dashboard
  try {
    const signInBtn = pageHms.locator("button:has-text('Sign in'), button[type='submit']").first();
    if (await signInBtn.isVisible()) {
      await signInBtn.click();
      await pageHms.waitForTimeout(3000);
      // Screen 2: Main Dashboard EMR view
      await pageHms.screenshot({ path: path.join(outputDir, "medicare-hms-2.png") });
      console.log("Saved medicare-hms-2.png (Dashboard EMR)");

      // Look for sidebar navigation tabs (e.g. Appointments, Patients, Billing, Pharmacy, Analytics)
      const sideNavButtons = await pageHms.locator("button, a, [role='tab']").all();
      if (sideNavButtons.length > 3) {
        await sideNavButtons[3].click().catch(() => {});
        await pageHms.waitForTimeout(2000);
      } else {
        await pageHms.evaluate(() => window.scrollTo(0, 500));
      }
      // Screen 3: Modules / Analytics view
      await pageHms.screenshot({ path: path.join(outputDir, "medicare-hms-3.png") });
      console.log("Saved medicare-hms-3.png (Modules view)");
    }
  } catch (err) {
    console.error("HMS error:", err);
  }
  await pageHms.close();

  // --- SELLMATE ---
  console.log("\nCapturing SellMate unique screens...");
  const pageSell = await context.newPage();
  await pageSell.goto("https://sellmate-mvp.lovable.app", { waitUntil: "networkidle" });
  await pageSell.waitForTimeout(3000);

  // Screen 1: Landing / Overview
  await pageSell.screenshot({ path: path.join(outputDir, "sellmate-1.png") });
  console.log("Saved sellmate-1.png");

  try {
    const loginBtn = pageSell.locator("button:has-text('Login'), button:has-text('Start Free'), a:has-text('Login')").first();
    if (await loginBtn.isVisible()) {
      await loginBtn.click();
      await pageSell.waitForTimeout(3000);
      // Screen 2: Inside CRM Pipeline / Dashboard
      await pageSell.screenshot({ path: path.join(outputDir, "sellmate-2.png") });
      console.log("Saved sellmate-2.png (CRM Dashboard)");

      // Look for tabs / secondary views
      const tabs = await pageSell.locator("button, a, [role='tab']").all();
      if (tabs.length > 4) {
        await tabs[4].click().catch(() => {});
        await pageSell.waitForTimeout(2000);
      } else {
        await pageSell.evaluate(() => window.scrollTo(0, 600));
      }
      // Screen 3: Secondary CRM view
      await pageSell.screenshot({ path: path.join(outputDir, "sellmate-3.png") });
      console.log("Saved sellmate-3.png (Analytics view)");
    }
  } catch (err) {
    console.error("SellMate error:", err);
  }
  await pageSell.close();

  await browser.close();
  console.log("\nSUCCESS: All Medicare HMS and SellMate unique screens captured!");
}

captureDashboards();
