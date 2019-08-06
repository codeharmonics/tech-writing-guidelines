# How We Structured Our Docs

Some facts to keep in mind when thinking about length of pages, paragraphs, and sentences, and the complexity of ideas:
- 10 seconds - Average time on a page before most people leave
- 60 seconds - Average time for an experienced user looking for something
- A blink of an eye - the time it takes for a reader to assess a page

[Feel free to add more such statistics, fun facts]

## What's on this Page?

- The Page - Keep it short and simple
- Three Main Page Types
- The Basic Structure of a Page
- Titling Guidelines
- Lengths - of Page, Paragraph, Sentence, ...

## The Page - Keep it short and simple

Keep your pages short and on point.

Stay with one topic per page.

Don't put too much in a page, and only go as detailed as necessary: how much detail you include depends on the context.

Always make it clear to the reader where to find further, related information.

Don't say everything on one page, otherwise the reader will lose focus. Don't say too little, otherwise the reader will need to hop around the docs looking for a complete answer.

## Page Types

### We have 3 main page types in our guides

- **Landing pages**. Introduce a subject and describe the most important aspects of a topic, with just enough detail to give an overview. Going deeper requires one of the next 2 types.

- **How-To Guides**. Provide detailed information necessary to do something, usually code samples, examples of data, and/or dashboard screenshots. How-to pages are normally created to solve a single problem/use case.

- **In-Depth Guides**. Go into more detail that the landing page left out due to the need for brevity on the landing page. They're not about doing anything (that's the purpose of the how-tos); instead, they're about understanding.

### How they relate to each other

The idea is to have **one Landing Page per main topic**. It should be a starting point. For some users, it might also be a stopping point. The information on a landing page should cover the full subject in a clear but condensed way - which might enough for some readers.

However, many readers will need to see and copy/paste code, or see how to implement some particular use case, or require a bit more explanation on a particular point.

In sum, the landing page frames both the doing (how-to) and deeper learning (in-depth).

To learn more about these page types, check out the reasoning behind [the different kinds of pages](https://github.com/algolia/doc/blob/style-docs/doc_team/7-style-guide-progressive-approach.md#creating-new-kinds-of-pages).

### Language style on each page type

In terms of language and the progressive approach, all 3 types follow pretty much the same guidelines as described in this style guide.

One significant difference is that the landing page is written for *all* readers, with any level of technical expertise. Therefore, you need to write with the most appeal - plain English, little technical detail, higher-level, no code.

On the other hand, the other pages have more flexibility. You need to be clear about who your audience is and then write for them. Make good use of code and screen shots on these pages.

### The how-to page

The *How-To* page usually follows the same pattern:

- presentation of the problem that needs to be solved
- overview of the solution, providing an example that you will use to illustrate the solution
- sample data
- steps to solve the problem.

For the *In-Depth*, it is mostly free form. Again, think of your audience. And keep the progressive approach in mind.

## Titles

H1 = Pager Title
H2 = Main page headers or sections
H3 = subsections within H2
H4 = subsections within H3

### General flow

**All pages follow the pattern of one H1 at the top of the page and a few well-chosen H2 subsections.**

In between the H1 and the very first H2, you can have one or two **introductory paragraphs**. This is not an obligation, nor does it need to be consistent for every page. Avoid creating an H2 with the words "Introduction" or "Overview".

**H3 and especially H4 should be used sparingly.** H3s should be used when the H2 gets too long or there's a natural sub-grouping. Likewise for H3/H4. The goal is to keep our pages short. If you have an H2-H3-H3 construction, it's good to keep the H3 content very small. And see if it makes sense to turn an H3 into an H2, or if the additional detail of an H3 cannot be turned into an entirely new page.

Titles are the visible structure of your page, they frame the page for our users. It is for this reason that the H2s are used to create the table of contents.

Read your H2s vertically, from top-to-bottom, and see if this flow tells a story.

Some vertical/storytelling patterns we've seen:

- What-Why-How
- Intro-How-Step 1-Step 2, etc.
- Do this, Do that
- Understanding, Starting, Building (and more related "ing" words)
- Follow a logical breakdown of topic (H1) to subtopics (H2s)
- Add some questions

Keep it consistent. For example, if you've started with action verbs (Do X, Build Y), don't switch into the "ing" form (Doing X, Building Y). On the other hand, mixing questions with phrases can be quite effective.

### Capitalization

#### **H1** is the main title of the page
- H1 capitalization is done automatically for you. To make that work, type everything in lowercase except for acronyms, proper nouns, and special usages (JavaScript). Any letter you capitalize will remain capitalized.
- Try to avoid word wrap.
- The wording of the page title should be simple and catchy. It can be one word, but very rarely. Usually it's three or more words, but it can also be a full sentence or a question. It should not be too technical, and it should be written in plain English. 
- Try to imagine what a user *needing* that page would want to see as a title, or would search for when looking for the subject of that page. Also make sure it fits into the larger story being told in that section of the docs.

#### **H2** are used for the table of contents and the main subsections of a page

- Length: 1 to 5 words. Try to avoid word-wrapped titles.
- Same capitalization rule as H1. Capitalize the first letter, acronyms, and all special usages (JavaScript). Lowercase the rest.

#### **H3**, **H4**

- Capitalize the first letter, acronyms, and all special usages (JavaScript). Lowercase the rest.

## Lengths

### Page

There's not much to say here - keep it reasonable, keep it to one topic, don't go beyond 3 page downs on a normal desktop screen. If it starts getting too detailed, or other related subjects start showing up on the page, move them over to a new page (a new landing page, in-depth, or how-to).

It's difficult for a reader to make sense of one page with too much detail or too many different ideas. It's easier to read 2 pages, where each page is clearly defined and shorter.

### Page Sections (H2, H3, ...)

1 to 3 paragraphs. Otherwise, start using subsections (Hn+1), or create a new section, or a new page.

### Paragraphs

3 to 5 sentences on the average.

Keep it to one topic.

1 sentence is ok from time to time.

Organize the paragraph, by thinking of the whole page. it's really the primary unit of documentation. It conveys a full chunk of information. 

Ask yourself - What is the point of the paragraph? Make sure every sentence addresses that point. Make the paragraph's point clear up front, usually in the first sentence. And then illustrate, elaborate, and then repeat first sentence, a bit rephrased.

### Sentences

10 to 20 words. 

One thought per sentence. Break up complex sentences whenever possible.

Vary sentence length. Otherwise, it's boring. Short sentences are smart. Sometimes. But if they all are short it's choppy. Torturous to read. Almost sounds stupid. Sometimes a longer sentence, one that begins with an indisputable claim, but immediately adds nuance and attempts to synthesis on the spot, this kind of longer flow can be more satisfying to a reader, as it allows them to wade a bit and let the new idea seep slowly in. Or not.

Sentences are all about rhythm. In English, if you can speak what you write, then it's normally good.

### Words

3 syllables at most. Joking. See more on Jargon.

## The structure of our style guide

- [Why a Style Guide?](https://github.com/algolia/doc/blob/style-docs/doc_team/1-style-guide-start-here.md)
- [Cheat Sheet](https://github.com/algolia/doc/blob/style-docs/doc_team/2-style-guide-cheat-sheet.md)
- [Overall Approach](https://github.com/algolia/doc/blob/style-docs/doc_team/3-style-guide-first-principles.md)
- [How We Structured Our Docs](https://github.com/algolia/doc/blob/style-docs/doc_team/4-style-guide-structure.md)
- [Language Choices](https://github.com/algolia/doc/blob/style-docs/doc_team/5-style-guide-language.md)
- [Voice and Tone](https://github.com/algolia/doc/blob/style-docs/doc_team/6-style-guide-voice-and-tone.md)
- [Reprint of Our Writing Choices Blog](https://github.com/algolia/doc/blob/style-docs/doc_team/7-style-guide-progressive-approach.md)
