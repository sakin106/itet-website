const fs = require('fs');
const notices = fs.readFileSync('dump_notices.html', 'utf8');
console.log(notices.slice(7500, 12500));
