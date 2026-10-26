const fs = require('fs');
const events = fs.readFileSync('dump_events.html', 'utf8');
const cardIdx = events.indexOf('Installation Ceremony') !== -1 ? events.indexOf('Installation Ceremony') : events.indexOf('bg-white rounded');
console.log('cardIdx:', cardIdx);
console.log(events.slice(Math.max(0, cardIdx - 400), cardIdx + 2500));
