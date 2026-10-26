const fs = require('fs');

['events', 'notices', 'publication', 'job-circular'].forEach(page => {
  const html = fs.readFileSync(`full_${page}.html`, 'utf8');
  console.log(`\n=================== ${page.toUpperCase()} ===================`);
  
  // Look for $RC("B:0" or template replacement
  const rcMatch = html.match(/\$RC\("B:0",\s*"([^"]+)"\)/);
  if (rcMatch) {
    // Unescape hex/unicode
    let unescaped = rcMatch[1].replace(/\\"/g, '"').replace(/\\u003c/g, '<').replace(/\\u003e/g, '>').replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    fs.writeFileSync(`parsed_${page}.html`, unescaped);
    console.log(`Successfully extracted streamed content to parsed_${page}.html (${unescaped.length} bytes)`);
  } else {
    // Search for headings or relevant text
    const idx = html.indexOf('&amp; Notice Board') || html.indexOf('Notice Board') || html.indexOf('Events');
    console.log('No $RC match, search idx:', idx);
    // Find all script contents or templates
    const matches = [...html.matchAll(/<template[^>]*>(.*?)<\/template>/gs)];
    console.log(`Found ${matches.length} templates`);
    matches.forEach((m, i) => {
      fs.writeFileSync(`parsed_${page}_tmpl${i}.html`, m[1]);
    });
  }
});
