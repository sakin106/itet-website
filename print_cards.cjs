const fs = require('fs');

console.log("\n==================== EVENTS CARDS ====================");
const events = fs.readFileSync('dump_events.html', 'utf8');
console.log(events.slice(3000, 7500));

console.log("\n==================== NOTICES CARDS ====================");
const notices = fs.readFileSync('dump_notices.html', 'utf8');
console.log(notices.slice(3000, 7500));
