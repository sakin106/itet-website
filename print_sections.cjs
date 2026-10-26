const fs = require('fs');

console.log("\n==================== EVENTS DUMP ====================");
const events = fs.readFileSync('dump_events.html', 'utf8');
console.log(events.slice(0, 3500));

console.log("\n==================== NOTICES DUMP ====================");
const notices = fs.readFileSync('dump_notices.html', 'utf8');
console.log(notices.slice(0, 3500));
