const fs = require('fs');

['events', 'notices', 'publication', 'job-circular'].forEach(page => {
  const html = fs.readFileSync(`full_${page}.html`, 'utf8');
  console.log(`\n=================== ${page.toUpperCase()} ===================`);
  
  // Find "id=\"S:"
  const sIdx = html.indexOf('id="S:');
  if (sIdx !== -1) {
    console.log('Found id="S: at', sIdx);
    // Find the end of this div or next script
    const scriptEnd = html.indexOf('</script>', sIdx);
    const content = html.slice(sIdx, sIdx + 4000);
    fs.writeFileSync(`dump_${page}.html`, html.slice(sIdx));
    console.log(`Saved dump_${page}.html from sIdx`);
  } else {
    console.log('Could not find id="S:');
  }
});
