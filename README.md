# Language switcher in next application

## Here are the steps to switch the language

Step01 : Make the middleware.ts and import some library to determind user prefered language

```javascript
yarn add @formatjs/intl-localematcher
yarn add @types/negotiator
```

@formatjs/intl-localematcher:
This library is used for language/locale matching. It helps you determine the best-matching locale based on the user's preferences and the locales you support. In other words, it helps you figure out which language to show to the user based on their browser's preferred languages and the languages your application supports.

Negotiator:
Negotiator is a library that helps you handle HTTP content negotiation. In this context, content negotiation means figuring out what type of content the user prefers. In your code, you're using it to extract the languages the user prefers based on the accept-language header in the HTTP request.

Code: 

```javascript
import { match } from '@formatjs/intl-localematcher' // yarn add @formatjs/intl-localematcher
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages() // This will extract user prefered language
let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'
```

After that we imported:
```javascript
import 'server-only'
import type { Locale } from './i8n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  cs: () => import('./dictionaries/cs.json').then((module) => module.default),
  urdu: () => import('./dictionaries/cs.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()

```

Each dictionaries files such cs.json, de.json and en.json are presented the content in json form. You can also use it as constants of the web application. 

