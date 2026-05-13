## 📝 Text Content & Semantics

| ✅ | Element        | Type   | Description                         | Key Attributes              |
|----|---------------|--------|-------------------------------------|-----------------------------|
| [x]| `<p>`         | Block  | Paragraph                           | None                        |
| [x]| `<br>`        | Void   | Line break                          | None                        |
| [x]| `<hr>`        | Void   | Thematic break                      | None                        |
| [x]| `<pre>`       | Block  | Preformatted text                   | None                        |
| [x]| `<blockquote>`| Block  | Long quotation                      | `cite`                      |
| [x]| `<ol>`        | Block  | Ordered list                        | `type`, `start`, `reversed` |
| [x]| `<ul>`        | Block  | Unordered list                      | None                        |
| [x]| `<li>`        | Block  | List item                           | `value`                     |
| [x]| `<dl>`        | Block  | Description list                    | None                        |
| [x]| `<dt>`        | Block  | Term in description list            | None                        |
| [x]| `<dd>`        | Block  | Description/definition              | None                        |
| [x]| `<div>`       | Block  | Generic container                   | None                        |
| [x]| `<span>`      | Inline | Generic inline container            | None                        |
| [x]| `<div>`      | Block |Generic block container.         | None                        |

# 📘 HTML Text Content Elements — Use Cases

| Element | Type | Common Use Cases | Example Scenario |
|---|---|---|---|
| `<p>` | Block | Writing paragraphs, descriptions, article text | Blog content, product description |
| `<br>` | Void | Breaking text into new lines without new paragraph | Address, poem, chat message |
| `<hr>` | Void | Separating sections/topics | Between chapters, sections, articles |
| `<pre>` | Block | Displaying formatted text exactly as written | Code snippets, logs, ASCII art |
| `<blockquote>` | Block | Showing long quotations from external sources | Quotes in articles or blogs |
| `<ol>` | Block | Ordered/numbered items | Step-by-step tutorial, ranking |
| `<ul>` | Block | Unordered/bulleted items | Features list, menu items |
| `<li>` | Block | Individual list item | Item inside `<ol>` or `<ul>` |
| `<dl>` | Block | Term-definition pairs | FAQ, glossary, dictionary |
| `<dt>` | Block | Title/term in description list | Technology name, question title |
| `<dd>` | Block | Description/details of a term | Explanation, answer, definition |
| `<div>` | Block | Grouping large sections/layouts | Card, sidebar, page section |
| `<span>` | Inline | Styling small text portions inline | Highlighting words, colored text |

---

# 📌 Real Website Examples

| Element | Real Website Usage |
|---|---|
| `<p>` | Article paragraphs in news websites |
| `<br>` | Address formatting in contact pages |
| `<hr>` | Section separators in blogs |
| `<pre>` | Code examples in documentation sites |
| `<blockquote>` | Author quotes in blogs |
| `<ol>` | Cooking recipe steps |
| `<ul>` | Navigation menus or feature lists |
| `<li>` | Individual menu or feature item |
| `<dl>` | FAQ section |
| `<dt>` | FAQ question |
| `<dd>` | FAQ answer |
| `<div>` | Main layout containers |
| `<span>` | Highlighting a word inside text |

---

# 📌 When to Use

| Situation | Recommended Element |
|---|---|
| Writing normal text | `<p>` |
| Need line break only | `<br>` |
| Separate content sections | `<hr>` |
| Preserve spaces and formatting | `<pre>` |
| Show quoted content | `<blockquote>` |
| Numbered steps | `<ol>` |
| Bullet points | `<ul>` |
| Term + definition structure | `<dl>` |
| Generic large container | `<div>` |
| Generic inline styling | `<span>` |


# 1. `<p>` — Paragraph

## 📌 Description
The `<p>` element defines a paragraph of text.

- Block-level element
- Automatically adds spacing before and after

---

## ✅ Example

```html
<p>This is a paragraph.</p>

<p>
    HTML is used to structure web pages.
</p>
```

# 2. <br> — Line Break
📌 Description

The <br> element inserts a single line break.

Void element
No closing tag
```
<p>
    Hello<br>
    Welcome<br>
    HTML
</p>
```

# 3. <hr> — Thematic Break
📌 Description

The <hr> element represents a thematic break or horizontal line.

Void element
Used to separate content sections

```
<p>Chapter 1</p>

<hr>

<p>Chapter 2</p>
```

# 4. <pre> — Preformatted Text
📌 Description

The <pre> element preserves:

Spaces
Line breaks
Formatting

Text appears exactly as written.

```
<pre>
Name: John
Age : 25
City: Kochi
</pre>
```

# 5. <blockquote> — Long Quotation
📌 Description

The <blockquote> element represents a long quotation from another source.

```
<blockquote cite="https://example.com">
    Education is the most powerful weapon
    which you can use to change the world.
</blockquote>
```