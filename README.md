# Keyword Combiner

Easy keyword combiner for SEO.

## Configuration

1. Create a `plan.js` file on project root:

```javascript
module.exports = {
  "fathead": {
    "keywords": [
      "notebook",
      "computer",
      "pc"
    ],
  },

  "longtail": {
    "suffixes": [
      [
        "to sell",
      ],

      [
        "in sao paulo",
        "sao paulo",
        "sp",
      ]
    ]
  }
}
```

2. Run script and store output

    `node index.js > keywords.txt`

## TODO

- Publish to NPM
- Implement longtail prefixes

## Contributing

PRs are always welcome.