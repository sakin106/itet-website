const https = require('https');
const fs = require('fs');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const pages = ['events', 'notices', 'publication', 'job-circular'];
  for (const page of pages) {
    console.log(`\n=================== PAGE: ${page} ===================`);
    const html = await fetchPage(`https://itetbd.net/${page}`);
    // Find where footer begins
    const footerIdx = html.indexOf('<footer');
    // Find where mobile drawer ends
    const drawerIdx = html.indexOf('aria-label="Close menu"');
    const searchFrom = drawerIdx !== -1 ? drawerIdx + 200 : 10000;
    
    // Grab the content between drawer and footer
    const content = html.slice(searchFrom, footerIdx !== -1 ? footerIdx : html.length);
    // Find first <h2> or <h1>
    const h1Idx = content.indexOf('<h1');
    const h2Idx = content.indexOf('<h2');
    console.log(`Content length: ${content.length}`);
    fs.writeFileSync(`scratch_${page}.html`, content);
    console.log(`Saved scratch_${page}.html`);
  }
}

main().catch(console.error);
