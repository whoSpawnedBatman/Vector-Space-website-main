const fs = require('fs');

async function scrape(page) {
  const info = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img, video, svg')).map(el => {
      let src = '';
      if (el.tagName === 'IMG') src = el.src || el.currentSrc || el.srcset;
      if (el.tagName === 'VIDEO') src = el.src || el.querySelector('source')?.src;
      return {
        tag: el.tagName,
        src: src,
        alt: el.alt || '',
        class: el.className,
        w: el.clientWidth,
        h: el.clientHeight
      };
    });

    const texts = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, button'))
      .map(el => ({
        tag: el.tagName,
        text: el.innerText ? el.innerText.trim() : '',
        href: el.href || null,
        className: el.className
      }))
      .filter(item => item.text && item.text.length > 0 && item.text.length < 500);

    return {
      title: document.title,
      images,
      texts
    };
  });

  fs.writeFileSync('.playwright-cli/scraped_data.json', JSON.stringify(info, null, 2));

  // Capture slices
  const totalH = await page.evaluate(() => document.body.scrollHeight);
  console.log('Total height:', totalH);

  for (let y = 0, idx = 0; y < totalH; y += 850, idx++) {
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), y);
    await page.waitForTimeout(300);
    await page.screenshot({ path: `.playwright-cli/slice-${idx}.png` });
  }

  // Click menu button
  try {
    const menuRef = await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('*'));
      const btn = all.find(el => el.textContent && el.textContent.trim().toUpperCase() === 'MENU');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    if (menuRef) {
      await page.waitForTimeout(600);
      await page.screenshot({ path: '.playwright-cli/target-menu.png' });
    }
  } catch (e) {
    console.error('Menu click error', e);
  }
}

module.exports = scrape;
