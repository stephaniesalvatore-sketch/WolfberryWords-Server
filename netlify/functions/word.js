const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {

  // Read words.json fresh on every request (no module-level caching)
  const wordsPath = path.join(__dirname, '../../words/words.json');
  const words = JSON.parse(fs.readFileSync(wordsPath, 'utf8'));

  // Calculate today's word based on days since launch date
  // Launch date: April 22, 2026
  const LAUNCH_DATE = new Date('2026-04-22T00:00:00.000Z');
  const today = new Date();
  const daysSinceLaunch = Math.floor((today - LAUNCH_DATE) / (1000 * 60 * 60 * 24));
  const index = daysSinceLaunch % words.length;
  const entry = words[index];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    },
    body: JSON.stringify({
      word:       entry.word,
      phonetic:   entry.phonetic,
      pos:        entry.pos,
      definition: entry.definition,
      index:      index,
      total:      words.length
    })
  };
};
