const fs = require('fs');

console.log("\n==================== PUBLICATION ====================");
const pub = fs.readFileSync('dump_publication.html', 'utf8');
console.log(pub.slice(0, 4500));
