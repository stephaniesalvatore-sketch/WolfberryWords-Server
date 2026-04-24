const words = require('../../words/words.json');

exports.handler = async function(event, context) {

  // Calculate today's word based on days since launch date
  // Launch date: April 22, 2026 — do not change this
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
      'Cache-Control': 'public, max-age=3600' // cache for 1 hour
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
