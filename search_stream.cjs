const fs = require('fs');
const html = fs.readFileSync('full_job-circular.html', 'utf8');

// Look at the React stream payload between 60000 and 88000
const slice = html.slice(50000, 88000);
fs.writeFileSync('stream_job.txt', slice);
console.log('Saved stream_job.txt, searching text...');

const keywords = ['Career', 'Opportunities', 'Job Circular', 'Circulars', 'text-primary'];
keywords.forEach(k => {
  let idx = 0;
  while ((idx = slice.indexOf(k, idx)) !== -1) {
    console.log(`Found "${k}" in stream:`, slice.slice(Math.max(0, idx - 100), idx + 200));
    break;
  }
});
