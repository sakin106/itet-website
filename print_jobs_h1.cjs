const fs = require('fs');
const html = fs.readFileSync('full_job-circular.html', 'utf8');

// Look for <h1 in full_job-circular.html
const h1Idx = html.indexOf('<h1');
console.log('h1Idx:', h1Idx);
if (h1Idx !== -1) {
  console.log(html.slice(h1Idx - 300, h1Idx + 3000));
} else {
  // search for "Career" or "Job" or "Circular"
  console.log('Searching for "Job"');
  let pos = 0;
  while ((pos = html.indexOf('Job', pos)) !== -1) {
    console.log(`pos ${pos}:`, html.slice(pos - 20, pos + 80));
    pos += 4;
  }
}
