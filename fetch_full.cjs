const https = require('https');
const fs = require('fs');

const pages = ['events', 'notices', 'publication', 'job-circular'];

pages.forEach(page => {
  https.get(`https://itetbd.net/${page}`, res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      fs.writeFileSync(`full_${page}.html`, data);
      console.log(`Saved full_${page}.html (${data.length} bytes)`);
    });
  });
});
