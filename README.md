# WolfberryWords Server

Backend API for the WolfberryWords iPhone widget.
Serves today's word of the day based on days since launch.

## Endpoint

GET `/.netlify/functions/word`

Returns today's word as JSON:
```json
{
  "word": "Vellichor",
  "phonetic": "/ vel-i-KOR /",
  "pos": "noun",
  "definition": "The strange wistfulness of used bookshops.",
  "index": 0,
  "total": 15
}
```

## Adding New Words

Open `words/words.json` and add new entries following this format:
```json
{ "word": "YourWord", "phonetic": "/ your-foh-NET-ik /", "pos": "noun", "definition": "Your definition here." }
```

Commit and push — Netlify deploys automatically within seconds.

## Launch Date

April 22, 2026. Do not change this — it anchors the word rotation
so every widget user sees the same word on the same day.
