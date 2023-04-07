let jokes = [
  {
    "category": "Pun",
    "type": "twopart",
    "setup": "What did the customer say to the waiter?",
    "delivery": "I'm all fed up with your service.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 190,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I don't know where I stand on abortion. I like killing babies, but I don't like giving women a choice.",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": true,
      "explicit": true
    },
    "id": 228,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "twopart",
    "setup": "Why do front end developers eat lunch alone?",
    "delivery": "Because they don't know how to join tables.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 254,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 5,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "id": 55,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "twopart",
    "setup": "To prove he was right, the flat-earther walked to the end of the Earth.",
    "delivery": "He eventually came around.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "safe": true,
    "id": 280,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "twopart",
    "setup": "When I was a kid, I made a really big sandcastle with my grandma.",
    "delivery": "Unfortunately, that didn't impress anyone at the cremation...",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 143,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "id": 30,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Debugging: Removing the needles from the haystack.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 40,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "twopart",
    "setup": "Mickey Mouse and Minnie Mouse are in the divorce court.\n\"Mickey\", the judge says, \"I'm sorry. I can't grant you a divorce on the grounds of insanity. Minnie seems quite sane to me.\"",
    "delivery": "\"I didn't say she was insane\", exclaims Mickey.\n\"I said she was fucking Goofy.\"",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "id": 225,
    "safe": false,
    "lang": "en"
  }
]

let a = Math.floor(Math.random() * jokes.length)
alert(jokes[a].setup)
// console.log(jokes)