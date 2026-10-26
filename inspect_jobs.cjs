const fs = require('fs');
const html = fs.readFileSync('full_job-circular.html', 'utf8');
const searchWords = ['Job', 'Circular', 'Career', 'Vacancy', 'Apply'];
searchWords.forEach(w => {
  let idx = 0;
  while ((idx = html.indexOf(w, idx)) !== -1) {
    if (idx > 25000) {
      console.log(`Found "${w}" at ${idx}:`, html.slice(Math.max(0, idx - 100), idx + 200));
      break;
    }
    idx += w.length;
  }
});
