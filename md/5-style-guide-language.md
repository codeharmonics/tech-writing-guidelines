# Language Guidelines 

## What's on this Page?

TODO

## Spelling

- Use **American spelling** in all text and code snippets.

- Only use British spelling when it's used in an API interface. But even that's not necessary - exceptions should be minimized and treated case-by-case.

- Always use **"indices"** for the plural of "index". We do this to be consistent with the majority of all clint-facing content in Algolia which does the same. Maybe this should change. The verb, of course, remains "indexes" ("the engine indexes").

## Word Usage / Terminology

General comment: Writers need synonyms. For high-level content - landing pages, some in-depth, how-to for non-developers - precise vocabulary can get in the way of explaining things. For example, “The sun shines” is better than “The sun radiates energy”, which is better than “The central star of our solar system burns hydrogen and helium producing radiation which causes us to perceive color and heat …” 

However, for all technical content - refs, developer how-tos and in-depths - precision is important. “The central star of our solar system..." is better than the "sun". Sometimes.

## Jargon
There is nothing worse when a technical word is repeated over and over without any definition or explanation. That said, developers need to understand our jargon, and we need to sound like developers. So feel free to use jargon but here are some guidelines.

Be reasonable. Make sure our wide readership will understand a technical word on the spot. Introduce the word from general to specific.

Jargon should rarely be used on the menu or on navigation pages, unless the people who need to click on that page are all aware of the typical jargon (SOC 2, GDPR, CSS, Ascii), or a reasonable expectation (UI), or where any other word would just not make sense (servers, client-side). 

Jargon should be properly introduced. Here are some ideas:
- Speak about the idea first and then introduce the term just after.
- Introduce the term and define it parenthetically (put a simple word or phrase it in parentheses).
- Introduce the term and make it clear that you will be defining it right away or very soon after. Don't delay.
- Hyperlink to the word's definition (glossary) or full treatment on another page (landing, in-depth).

## When to use "Algolia", "the engine", or "we"

Alternate between these terms. Here are some guidelines.

- Use Algolia and We. Alternate between the two. Creates variety. We have no preference: "*we* store your data" is just nas good as "*Algolia* stores your data".

- Consider the engine an implementation detail. When talking about our technology, mix it up between "the engine" and "Algolia". Both terms are effective. Typically, the *engine* processes a request but *Algolia* returns a response. Algolia is the service, the black box. The engine is the processing that goes on inside the box or the cloud.

## Synonyms, in general

Synonyms are useful, giving flexibility, variety, and style to your text. And many are interchangeable, so don't overthink their differences. Just try to be consistent.

Here are some common synonyms used in our docs:

- Get <=> Receive
- Set <=> Save <=> Update <=> Change <=> Modify
- Add <=> create <=> insert
- login, logon, log on, logged in or on, etc..

But not all words are interchangeable. 

Here's a list of keywords that all have distinct meanings. 

### Hit vs result

A hit is Algolia jargon for “a result”. Result is used everywhere. It's the more general term. Only use hit when referring to code or front-end InstantSearch.

### Query vs Search 

Seems interchangeable.

### Response vs results

Plain english vs (easy) jargon. Use response when referring to the client-server interaction, use results when describing the details of the response. 

### Object / Record
We use these 2 words interchangeably. They mean the same thing:

- indices contain objects or records
- JSON contains objects or records

### Attribute
All objects and records contain "attributes". Use only this word. Avoid "fields", "elements", or any other term. Consistency will help in understanding this important term.

But we should introduce the concept from time to time. For example, "distinct pieces of data called attributes" or "an index has records which have fields of data called attributes".  

Some attributes are simple **key/value pairs**, such as booleans or single-value strings (isDisabled, synonymType). But others can be more **complex**, such as **arrays**, **lists**, **collections**, or full **objects**. Use all of these terms when needed, keeping in mind that not all people have the same notion behind these terms: for example, not all people give the same meaning to "array". So it's also good to be descriptive when using these terms.

### Settings and Parameters
We often speak of index settings and query parameters. High-level, these words are interchangeable: they affect how the engine processes a request. However, in the how-to and refs, we should use the appropriate term.

High-level, it's perfectly ok to say that we have 3 layers of settings:

- Your index comes with out-of-the-box **default settings**.
- you can change these default settings, and/or set additional **index settings**, which are set **at indexing time**, which have a **permanent effect** on the index, they affect **every search**.
- you can override and/or add new settings with every query using query parameters.

On the other hand, in our ref and how-tos, or wherever we have code, we assume the reader knows the difference between parameters and settings, so use the appropriate term

### File / Array / Element
These terms all refer to JSON. A JSON *object*, for example, is an entire JSON file or array. A JSON file is also the full JSON - and, ironically, not necessarily a physical file on a hard-drive. A JSON array is therefore no different from a file - both are blocks of JSON elements (or objects).

Preference for objects. There is no precise guideline here except to avoid using file and to be consistent.

## Lists

### Bullet points
- Use bullet points whenever the reader must know that you are discussing two or more items.  - You can sometimes use inline lists separating the items with either (1) commas or (2) numbers, as seen here. Numbers are best with phrases. 
- Use bullet points when writing a checklist or a style guide.

### A list of items
- An incomplete list of items (usually 3 simple nouns) is sufficient when used to illustrate a point. But be exhaustive whenever the list is central to the subject at hand or the list is short enough to be complete.

### A list of phrases
- Sentences in a list must all be in the **same form**: 
  - if one is active, they should all be active
  - if they start with "-ing", they all should do so
  - If they are incomplete sentences, they all must be incomplete.

### Ellipses
- "..."
- ".."
- "and so on"
- "etc."

Preference for "etc." 

Don't forget the "." After "etc". At the end of a sentence, make it "etc.."

### Bullet point punctuation
Don't overthink this one, and don't try to be consistent throughout the docs, only on the page. Easy answer is 2 options for bullet points: no punctuation, commas, or periods. Just keep in mind:

- A list of one or a few words should have no punctuation after the word or phrase
- A list of incomplete sentences should use commas or nothing (writer's choice)
- A single phrase broken down into bullet points should use commas, but nothing is also ok
- Full sentences, periods.

Try to end the bullet points with "." but it's also ok not to. For example, we have three kinds of settings:
- index settings
- query parameters
- default settings

Use ":" to introduce a bullet point list. 

## Miscellaneous

### Introducing Acronyms

### Quotations or parentheses or brackets, etc.

Never put a comma or period just before the last quote/bracket. Question marks and exclamations are an exception to this, put them inside.

Do not bold the quote or parentheses even if "the entire phrase within the quotes is bolded or italicized". And keep bolded phrases short and standalone, so that the hungry skimmer has something substantive to eat.

### Oxford comma
Commas - Use the Oxford comma: put a comma before the final 2 items in a list, even if they are separated by "and" or "or". But don't sweat it if it's forgotten. Probably not an appropriate PR. Example: blue, white**, **and red.

### Commas and and

In a list of two items:
- "X and Y" when the 2 items are in a related list or dependent on each other
- "X, and Y" when the 2 items are independent to each other  

Sorting give users more choice and control. We'll show you how to do it, and when. Keep in mind, sorting adds more indices to your account, and it also eats up your server's space. You can go to the dashboard and view and manage your replicas there.

### Pronouns
- don't use "he" when writing "user did x and then he did y." Nor she. Use plurals or singular with "they". Avoid he/she and all its variations because some people are called "they".

### Numbers

Depends on the situation. Use numbers when enumerating steps and items. Write out the numbers when in more descriptive phrases. 

This?
- We have 3 libraries that contain 10 methods that implement our 2 most important features. Each 1 has 3 parameters.

Or this?
- We have three libraries that contain ten methods that implement our two most important features. Each one has three parameters.

Or mix them? 
- We have 3 libraries that contain 10 methods that implement our 2 most important features. Each one has 3 parameters.

We can use bolding sometimes, but not always:
- There are **three** types of ...
- There are **3** types of ..

We can use bolding

#### Commas or not
Preference:
- 10 000
Good:
- 10,000
- 10K
Not good:
- 10000

### Word Capitalization 
- API Client or API client. Many companies that offer API Clients capitalize the "C" (https://developers.google.com/api-client-library/java/google-api-java-client/dev-guide). Many don't. 
- Google the terms "API client" and you'll see both upper and lower case). 
- This is a preference. Ours should be ...??? (I vote for "C"). We are consistent in our docs (lower case), but not in all communications (blog, homepage).

### SEO-tip

Search engines (read: Google) give higher scores to links that are descriptive. Don't say "read [this]()". Some examples:

- Change `read more [here](http://link.site)` to  `read more about [Query Rules](http://link.site)`
- Change `download [this](http://download.it)` to `download [our dataset](http://download.it)`

- Words
  - Employ the verb "use" instead "utilize" or "usage".

- Prepositions
  - Index into vs Index on. The verb is "to index on" not "to index into".

### Dashes
- Dashes as part of a sentence, normally you would use the long dash (–), but because of rendering problems, use the short one (-). 
- All other dashes are short.

### Hyphenating 
- Warning: Don't trust your spell checker on this. Google-it.
- When words words qualify a noun, us a hyphen. Noun qualifiers are words that precede a noun, describing it. Example: Front-end developer, where "developer" is qualified (described) as coding the "front end". Note that front dnd is not hyphenated when not qualifying a noun.
- Note that "frontend" (no space) is used throughout the web and even in our own code. We'll nonetheless use the spaced or hyphenated versions in our written content.

- Note that some words are hyphened as part of their spelling, so they always get a hyphen. Like code-switching, good-hearted. Best advice here is whenever you have 2 or more words that form a single noun, google it to see if a hyphen is used.
- Last but not least: There are examples where 2 or more words are not combined at all, like geo coordinates (correct). Not geo-coordinates and not geocoordinates. 
- On the other hand, it seems that geosearch has neither space nor hyphen. Google-it.

Example: checkout vs check out

Look out for plurals: trial-and-errors or trials and errors

### Slashes
- Do not use spaces on either side
- ranking/sorting (not ranking / sorting)

### Exclamation Points
To Discuss. 
Preference for:
- only in tutorials and how-to
- rarely in bolded phrases, warnings.

### hyperlink styling
- When hyperlinking parameters, methods, etc. between single quotes (\`\`), put the single quotes inside the link: [`method_name`](/link/)
- punctuation as part of the link or not?

### Bolding
- Purpose: takeaway. It's for scanners or to underscore the purpose of a paragraph.
- Don't overdo it. Too many takeaways on a page or paragraph looks cluttered, and takes the focus off the most important ones.
- When bolding partial sentences, do not include the ending punctuation.
- For a full sentence, put all punctuation inside the bold.
- For more than one sentence, always start at the beginning of the first sentence and go all the way to the end of the last, including all punctuation.

## The structure of our style guide

- [Why a Style Guide?](https://github.com/algolia/doc/blob/style-docs/doc_team/1-style-guide-start-here.md)
- [Cheat Sheet](https://github.com/algolia/doc/blob/style-docs/doc_team/2-style-guide-cheat-sheet.md)
- [Overall Approach](https://github.com/algolia/doc/blob/style-docs/doc_team/3-style-guide-first-principles.md)
- [How We Structured Our Docs](https://github.com/algolia/doc/blob/style-docs/doc_team/4-style-guide-structure.md)
- [Language Choices](https://github.com/algolia/doc/blob/style-docs/doc_team/5-style-guide-language.md)
- [Voice and Tone](https://github.com/algolia/doc/blob/style-docs/doc_team/6-style-guide-voice-and-tone.md)
- [Reprint of Our Writing Choices Blog](https://github.com/algolia/doc/blob/style-docs/doc_team/7-style-guide-progressive-approach.md)
