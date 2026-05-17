## ✏️ Inline Text Semantics

| ✅ | Element     | Type   | Description                                | Key Attributes            |
|----|-------------|--------|--------------------------------------------|---------------------------|
| [x] | `<a>`      | Inline | Hyperlink                                  | `href`, `target`, `rel`   |
| [x] | `<strong>` | Inline | Important text (bold)                      | None                      |
| [x] | `<em>`     | Inline | Emphasized text (italic)                   | None                      |
| [x] | `<mark>`   | Inline | Highlighted text                           | None                      |
| [x] | `<small>`  | Inline | Side comments or fine print                | None                      |
| [x] | `<del>`    | Inline | Deleted/removed text                       | `cite`, `datetime`        |
| [x] | `<ins>`    | Inline | Inserted text                              | `cite`, `datetime`        |
| [x] | `<sub>`    | Inline | Subscript                                  | None                      |
| [x] | `<sup>`    | Inline | Superscript                                | None                      |
| [x] | `<code>`   | Inline | Inline code                                | None                      |
| [x] | `<kbd>`    | Inline | Keyboard input                             | None                      |
| [x] | `<samp>`   | Inline | Sample output                              | None                      |
| [x] | `<var>`    | Inline | Variable (programming or math)             | None                      |
| [x] | `<abbr>`   | Inline | Abbreviation                               | `title`                   |
| [x] | `<time>`   | Inline | Time/date with machine-readability         | `datetime`                |
| [x] | `<bdi>`    | Inline | Isolate bidirectional text                 | None                      |
| [x] | `<bdo>`    | Inline | Override text direction                    | `dir`                     |
| [x] | `<ruby>`   | Inline | Ruby annotation container                  | None                      |
| [x] | `<rt>`     | Inline | Ruby text pronunciation                    | None                      |
| [x] | `<rp>`     | Inline | Fallback parentheses for ruby              | None                      |
| [x] | `<wbr>`    | Void   | Line break opportunity                     | None                      |
| [x] | `<b>`      | Inline | Bold text (no importance meaning)          | None                      |
| [x] | `<i>`      | Inline | Italic text (alternate voice/term)         | None                      |
| [x] | `<u>`      | Inline | Underlined text                            | None                      |
| [x] | `<s>`      | Inline | No longer accurate/relevant text           | None                      |
| [x] | `<q>`      | Inline | Short inline quotation                     | `cite`                    |
| [x] | `<cite>`   | Inline | Citation / reference source                | None                      |
| [x] | `<dfn>`    | Inline | Definition term                            | None                      |
| [x] | `<data>`   | Inline | Machine-readable value                     | `value`                   |

# ✏️ Inline Text Semantics in HTML

Inline semantic elements give meaning to text while keeping the content inside the normal text flow.
They help with:

Accessibility
SEO
Screen readers
Text styling with meaning
Machine readability


## <a> — Anchor / Hyperlink
Description

Used to create links.

| Attribute | Value Example          | Description           |
| --------- | ---------------------- | --------------------- |
| `href`    | `"https://google.com"` | Link destination      |
| `target`  | `"_blank"`             | Open in new tab       |
| `rel`     | `"noopener"`           | Security relationship |

```
<a href="https://google.com" target="_blank" rel="noopener">
  Visit Google
</a>
```
Use Cases
    Navigation menus
    External websites
    Download links
    Email links

## <strong> — Important Text
Description

Shows important text.

Usually bold.

```
<strong>Warning!</strong>
```
Use Cases
    Warnings
    Important instructions
    Critical messages

## <em> — Emphasized Text
Description

Adds stress/emphasis.

Usually italic.

```
I <em>really</em> need this.
```

Use Cases
    Emotional emphasis
    Spoken stress
    Important words

## <mark> — Highlighted Text
Description

Highlights relevant text.

```
Search result: <mark>HTML Elements</mark>
```

Use Cases
    Search highlighting
    Notes
    Important keywords

## <small> — Fine Print
Description

Represents small comments/legal text.

Use Cases
    Copyright
    Legal text
    Footnotes

## <del> — Deleted Text
Description

Represents removed text.

Usually strike-through.

| Attribute  | Value Example   | Description   |
| ---------- | --------------- | ------------- |
| `cite`     | `"update.html"` | Reason/source |
| `datetime` | `"2026-05-16"`  | Deletion date |

```
<del datetime="2026-05-16">
  ₹500
</del>
```
Use Cases
    Old prices
    Removed content
    Revision history

## <ins> — Inserted Text
Description

Represents newly added text.

Usually underlined.

| Attribute  | Value Example    |
| ---------- | ---------------- |
| `cite`     | `"changes.html"` |
| `datetime` | `"2026-05-16"`   |

```
<ins datetime="2026-05-16">
  ₹300
</ins>
```
Use Cases
    Updated prices
    Added content
    Version updates

## <sub> — Subscript
Description

Displays text below baseline.

```
<sub> — Subscript
Description

Displays text below baseline.
```
Use Cases
    Chemical formulas
    Math formulas

## <sup> — Superscript
Description

Displays text above baseline.

```
x<sup>2</sup>
```

Use Cases
    Powers/exponents
    Footnotes
    Ordinals


## <code> — Inline Code
Description

Represents code snippet.
```
Use <code>console.log()</code>
```
Use Cases
    Programming tutorials
    API documentation

## <kbd> — Keyboard Input
Description

Represents keyboard keys.
```
Press <kbd>Ctrl</kbd> + <kbd>C</kbd>
```
Use Cases
    Shortcut guides
    User instructions

## <samp> — Sample Output
Description

Represents program output.

```
<samp>Upload completed.</samp>
```
Use Cases
    Terminal output
    System messages

## <var> — Variable
Description

Represents variables.

```
<var>x</var> + <var>y</var>
```
Use Cases
    Mathematics
    Algorithms
    Programming

## <abbr> — Abbreviation

Description

Represents abbreviations/acronyms.

| Attribute | Value Example                 | Description  |
| --------- | ----------------------------- | ------------ |
| `title`   | `"HyperText Markup Language"` | Full meaning |


```
<abbr title="HyperText Markup Language">
  HTML
</abbr>
```
Use Cases
    Technical terms
    Acronyms

## <time> — Time/Date
Description

Machine-readable date/time.

| Attribute  | Value Example  |
| ---------- | -------------- |
| `datetime` | `"2026-05-16"` |


```
<time datetime="2026-05-16">
  May 16, 2026
</time>
```

Use Cases
    Blog publish dates
    Events
    Schedules

## <bdi> — Bidirectional Isolation
Description

Separates text direction.

```
User: <bdi>مرحبا</bdi>
```
Use Cases
    Arabic + English mix
    User-generated content

## <bdo> — Bidirectional Override
Description

Overrides text direction.

| Attribute | Value Example |
| --------- | ------------- |
| `dir`     | `"rtl"`       |


```
<bdo dir="rtl">Hello</bdo>
```
Use Cases
    RTL testing
    Special layouts

## <ruby> — Ruby Annotation
Description

Container for pronunciation text.

```
<ruby>
  漢字
  <rt>かんじ</rt>
</ruby>
```
Use Cases
    Japanese pronunciation
    Language learning

## <rt> — Ruby Text
Description

Pronunciation text inside <ruby>.
```
<rt>かんじ</rt>
```
Use Cases
    Pronunciation guides

## <rp> — Ruby Parentheses
Description

Fallback text for unsupported browsers.
```
<ruby>
  漢字
  <rp>(</rp>
  <rt>かんじ</rt>
  <rp>)</rp>
</ruby>
```

## <wbr> — Word Break Opportunity
Description

Optional line-break point.

Void element.
```
verylongword<wbr>example
```
Use Cases
    Long URLs
    Responsive text

## <b> — Bold Text
Description

Bold styling without importance meaning.
```
<b>Product Name</b>
```
Use Cases
    Keywords
    Product names

## <i> — Alternate Voice
Description

Represents alternate mood/voice.

Usually italic.
```
<i>Bonjour</i>
```
Use Cases
    Foreign words
    Technical terms
    Thoughts

## <u> — Underlined Text
Description

Represents annotations/non-text meaning.
```
<u>Incorrect spelling</u>
```
Use Cases
    Spell-check indicators
    Proper names

## <s> — No Longer Accurate
Description

Represents outdated content.
```
<s>Offer available</s>
```

## <q> — Inline Quote
Description

Short inline quotation.

| Attribute | Value Example   |
| --------- | --------------- |
| `cite`    | `"quotes.html"` |

```
<q cite="quotes.html">
  Knowledge is power.
</q>
```

Use Cases
    Quotes
    Testimonials

## <cite> — Citation
Description

Represents source/title of work.
```
<cite>Harry Potter</cite>
```
Use Cases
    Book names
    Movie titles
    Research sources

## <dfn> — Definition Term
Description

Represents the term being defined.

```
<dfn>HTML</dfn> is a markup language.
```
Use Cases
    Dictionaries
    Glossaries
    Definitions

## <data> — Machine Readable Data
Description

Stores machine-readable value.

| Attribute | Value Example | Description          |
| --------- | ------------- | -------------------- |
| `value`   | `"1001"`      | Actual machine value |

```
<data value="1001">
  Product ID
</data>
```
Use Cases
    Product IDs
    SKU values
    Structured data