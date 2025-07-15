# 📘 Complete HTML Elements Reference

A full list of HTML5 elements grouped by category, including element type, description, and common attributes.

---
## Global HTML Attributes

## ✅ HTML Global Attributes Checklist

| ✅ Done | 🏷️ Attribute         | 🌐 Description                                                           |
|--------|----------------------|----------------------------------------------------------------------------|
| [x]    | `class`              | Specifies one or more class names for the element (used in CSS/JS)         |
| [x]    | `id`                 | Unique identifier for the element                                          |
| [x]    | `style`              | Inline CSS styles                                                          |
| [x]    | `title`              | Extra information shown as a tooltip                                       |
| [x]    | `hidden`             | Hides the element                                                          |
| [x]    | `tabindex`           | Sets the tab order of the element                                          |
| [x]    | `accesskey`          | Defines a keyboard shortcut to activate/focus the element                  |
| [x]    | `draggable`          | Specifies whether the element can be dragged (`true`, `false`)             |
| [x]    | `spellcheck`         | Specifies if the element should be checked for spelling errors             |
| [x]    | `contenteditable`    | Specifies if the element is editable (`true`, `false`)                     |
| [x]    | `dir`                | Text direction (`ltr`, `rtl`, `auto`)                                      |
| [x]    | `lang`               | Language of the element’s content (e.g., `en`, `fr`, `hi`)                 |
| [x]    | `translate`          | Specifies whether the content is translatable (`yes`, `no`)                |
| [x]    | `data-*`             | Custom data attributes (e.g., `data-user-id="123"`), All data-* become available as element.dataset.*                        |
| [x]    | `role`               | Accessibility role (used by screen readers and assistive tech)             |
| [x]    | `aria-*`             | Accessibility attributes (ARIA: e.g., `aria-label`, `aria-hidden`, etc.)   |


---

## 🗂 Table of Contents

1. [Inline Text Semantics](#-inline-text-semantics)
2. [Text Content](#-text-content)
3. [Content Sectioning](#-content-sectioning)
4. [Image & Media](#-image--media)
5. [Table Content](#-table-content)
6. [Forms and Input](#-forms-and-input)
7. [Scripting](#-scripting)
8. [Interactive Elements](#-interactive-elements)
9. [Web Components](#-web-components)
10. [Document Metadata](#-document-metadata)

---

## 🟦 Inline Text Semantics

| ✅ Check | Element    | Element Type | Description                        | Common Attributes                                 |
|---------|------------|--------------|------------------------------------|-----------------------------------------------------|
| [x]     | `<a>`      | Inline       | Hyperlink to another page or place | `href`, `target`, `rel`, `download`, `type`, Global |
| [x]     | `<strong>` | Inline       | Strong importance (bold)           | Global attributes                                   |
| [x]     | `<em>`     | Inline       | Emphasized text (italic)           | Global attributes                                   |
| [x]     | `<span>`   | Inline       | Generic inline container           | Global attributes                                   |
| [x]     | `<mark>`   | Inline       | Highlighted or marked text         | Global attributes                                   |
| [x]     | `<abbr>`   | Inline       | Abbreviation or acronym            | `title`, Global attributes                          |
| [x]     | `<b>`      | Inline       | Bold text without importance       | Global attributes                                   |
| [x]     | `<i>`      | Inline       | Italic text without importance     | Global attributes                                   |
| [x]     | `<u>`      | Inline       | Underlined text                    | Global attributes                                   |
| [x]     | `<small>`  | Inline       | Smaller, less important text       | Global attributes                                   |
| [x]     | `<sub>`    | Inline       | Subscript text                     | Global attributes                                   |
| [x]     | `<sup>`    | Inline       | Superscript text                   | Global attributes                                   |
| [x]     | `<code>`   | Inline       | Inline code sample                 | Global attributes                                   |
| [x]     | `<kbd>`    | Inline       | Keyboard input                     | Global attributes                                   |
| [x]     | `<samp>`   | Inline       | Sample output                      | Global attributes                                   |
| [x]     | `<var>`    | Inline       | Variable in programming or math    | Global attributes                                   |
| [x]     | `<cite>`   | Inline       | Citation or reference              | Global attributes                                   |
| [x]     | `<del>`    | Inline       | Deleted (removed) text             | `cite`, `datetime`, Global attributes               |
| [x]     | `<ins>`    | Inline       | Inserted (added) text              | `cite`, `datetime`, Global attributes               |

---
| Element    | Detailed Use Case                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `<a>`      | Link to another page, file, email, phone number, or anchor in the same page (e.g., navigation menu, "Read more" link).             |
| `<strong>` | Highlight *critical* information like warnings, security messages, or instructions in bold for accessibility.                      |
| `<em>`     | Emphasize or stress a word within a sentence to change the tone or meaning (e.g., "You **must** do this").                         |
| `<span>`   | Apply custom styles, classes, or scripting to a part of text without affecting layout (e.g., color specific words).                |
| `<mark>`   | Highlight important changes, search terms, or user-focused keywords (e.g., search result: "You searched for `<mark>HTML</mark>`"). |
| `<abbr>`   | Provide full form on hover using `title` attribute (e.g., `<abbr title="World Health Organization">WHO</abbr>`).                   |
| `<b>`      | Draw attention visually to names, headings, or labels (e.g., "Price: <b>\$99</b>"), but not semantically important.                |
| `<i>`      | Add stylistic emphasis or use for foreign words, taxonomic names, or thoughts (e.g., "She murmured, <i>c’est la vie</i>").         |
| `<u>`      | Indicate misspelled words, annotation, or clickable text in custom UI designs (e.g., underlined promo code).                       |
| `<small>`  | Display legal disclaimers, copyright, or fine print (e.g., "© 2025 Your Company. All rights reserved.").                           |
| `<sub>`    | Scientific or chemical notation (e.g., H<sub>2</sub>O), mathematical indices, or footnotes references.                             |
| `<sup>`    | Exponents (e.g., x<sup>2</sup>), ordinal indicators (e.g., 1<sup>st</sup>), or reference superscripts (e.g., note<sup>1</sup>).    |
| `<code>`   | Present code snippets or commands inline with other text (e.g., Use `<code>git status</code>` to check).                           |
| `<kbd>`    | Show keyboard input combinations (e.g., Press <kbd>Ctrl</kbd> + <kbd>P</kbd> to print).                                            |
| `<samp>`   | Show sample output from a computer program or shell command (e.g., `<samp>Hello, World!</samp>`).                                  |
| `<var>`    | Represent mathematical variables or arguments (e.g., Area = <var>π</var> × <var>r</var><sup>2</sup>).                              |
| `<cite>`   | Refer to a cited work like books, songs, movies (e.g., `<cite>To Kill a Mockingbird</cite>` by Harper Lee).                        |
| `<del>`    | Indicate removed content, like tracking changes or price drops (e.g., <del>\$99.99</del> \$59.99).                                 |
| `<ins>`    | Mark inserted content in a revision (e.g., Added terms: `<ins>Free shipping</ins>`).                                               |

----

## 🟩 Text Content

| Element        | Element Type | Description                         | Common Attributes                   |
| -------------- | ------------ | ----------------------------------- | ----------------------------------- |
| `<p>`          | Block        | Paragraph                           | Global attributes                   |
| `<br>`         | Void         | Line break                          | Global attributes                   |
| `<hr>`         | Void         | Thematic break (horizontal line)    | Global attributes                   |
| `<pre>`        | Block        | Preformatted text                   | Global attributes                   |
| `<blockquote>` | Block        | Long quotation                      | `cite`, Global attributes           |
| `<ol>`         | Block        | Ordered list                        | `type`, `start`, `reversed`, Global |
| `<ul>`         | Block        | Unordered list                      | Global attributes                   |
| `<li>`         | Block        | List item                           | `value`, Global attributes          |
| `<dl>`         | Block        | Description list                    | Global attributes                   |
| `<dt>`         | Block        | Term in a description list          | Global attributes                   |
| `<dd>`         | Block        | Description of a term               | Global attributes                   |
| `<figure>`     | Block        | Group of media content and caption  | Global attributes                   |
| `<figcaption>` | Block        | Caption for a `<figure>`            | Global attributes                   |
| `<div>`        | Block        | Generic container for block content | Global attributes                   |

---

## 🟨 Content Sectioning

| Element       | Element Type | Description                        | Common Attributes |
| ------------- | ------------ | ---------------------------------- | ----------------- |
| `<header>`    | Block        | Introductory content or navigation | Global attributes |
| `<nav>`       | Block        | Section with navigation links      | Global attributes |
| `<main>`      | Block        | Main content unique to document    | Global attributes |
| `<section>`   | Block        | Thematic grouping of content       | Global attributes |
| `<article>`   | Block        | Self-contained content             | Global attributes |
| `<aside>`     | Block        | Tangential content (sidebar)       | Global attributes |
| `<footer>`    | Block        | Footer for a section/page          | Global attributes |
| `<h1>`-`<h6>` | Block        | Headings (level 1 to 6)            | Global attributes |
| `<address>`   | Block        | Contact information                | Global attributes |

---

## 🖼️ Image & Media

| Element        | Element Type | Description                       | Common Attributes                                                                   |
| -------------- | ------------ | --------------------------------- | ----------------------------------------------------------------------------------- |
| `<img>`        | Void         | Embeds an image                   | `src`, `alt`, `width`, `height`, `loading`, Global                                  |
| `<audio>`      | Block        | Audio content                     | `src`, `controls`, `autoplay`, `loop`, `muted`, Global                              |
| `<video>`      | Block        | Video content                     | `src`, `controls`, `autoplay`, `loop`, `muted`, `poster`, `width`, `height`, Global |
| `<source>`     | Void         | Source for `<audio>` or `<video>` | `src`, `type`, Global                                                               |
| `<track>`      | Void         | Tracks for subtitles/captions     | `kind`, `src`, `srclang`, `label`, `default`, Global                                |
| `<map>`        | Block        | Client-side image map             | `name`, Global                                                                      |
| `<area>`       | Void         | Hotspot area in image map         | `alt`, `coords`, `href`, `shape`, `target`, Global                                  |
| `<canvas>`     | Block        | Drawing area for scripts          | `width`, `height`, Global                                                           |
| `<figcaption>` | Block        | Caption for image/media           | Global attributes                                                                   |
| `<picture>`    | Block        | Container for multiple `<source>` | Global attributes                                                                   |
| `<svg>`        | Inline/Block | Scalable Vector Graphics          | SVG-specific + Global                                                               |

---

## 📊 Table Content

| Element      | Element Type | Description            | Common Attributes                     |
| ------------ | ------------ | ---------------------- | ------------------------------------- |
| `<table>`    | Block        | Table container        | Global attributes                     |
| `<caption>`  | Block        | Table title            | Global attributes                     |
| `<thead>`    | Block        | Table head             | Global attributes                     |
| `<tbody>`    | Block        | Table body             | Global attributes                     |
| `<tfoot>`    | Block        | Table footer           | Global attributes                     |
| `<tr>`       | Block        | Table row              | Global attributes                     |
| `<td>`       | Block        | Table cell (data)      | `colspan`, `rowspan`, Global          |
| `<th>`       | Block        | Table header cell      | `colspan`, `rowspan`, `scope`, Global |
| `<col>`      | Void         | Column formatting      | `span`, Global                        |
| `<colgroup>` | Block        | Group of table columns | `span`, Global                        |

---

## 📝 Forms and Input

| Element      | Element Type | Description                  | Common Attributes                                                                                          |
| ------------ | ------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `<form>`     | Block        | Form container               | `action`, `method`, `enctype`, `novalidate`, `target`, Global                                              |
| `<input>`    | Void         | Input control                | `type`, `name`, `value`, `placeholder`, `required`, `readonly`, `disabled`, `maxlength`, `pattern`, Global |
| `<textarea>` | Block        | Multi-line text input        | `name`, `rows`, `cols`, `placeholder`, `required`, Global                                                  |
| `<button>`   | Inline/Block | Clickable button             | `type`, `disabled`, `name`, `value`, Global                                                                |
| `<select>`   | Block        | Drop-down list               | `name`, `multiple`, `required`, Global                                                                     |
| `<option>`   | Inline       | Option in select             | `value`, `selected`, `disabled`, Global                                                                    |
| `<optgroup>` | Block        | Group options in select      | `label`, `disabled`, Global                                                                                |
| `<label>`    | Inline       | Label for a form input       | `for`, Global                                                                                              |
| `<fieldset>` | Block        | Group form elements          | `disabled`, `form`, `name`, Global                                                                         |
| `<legend>`   | Block        | Title for fieldset           | Global attributes                                                                                          |
| `<datalist>` | Block        | Predefined `<input>` options | Global attributes                                                                                          |
| `<output>`   | Inline       | Output result                | `for`, `form`, `name`, Global                                                                              |
| `<meter>`    | Inline       | Scalar measurement           | `min`, `max`, `value`, `low`, `high`, `optimum`, Global                                                    |
| `<progress>` | Inline       | Progress indicator           | `max`, `value`, Global                                                                                     |

---

## ⚙️ Scripting

| Element      | Element Type | Description                      | Common Attributes                       |
| ------------ | ------------ | -------------------------------- | --------------------------------------- |
| `<script>`   | Block        | Embeds JavaScript code           | `src`, `type`, `async`, `defer`, Global |
| `<noscript>` | Block        | Fallback for no JavaScript       | Global attributes                       |
| `<template>` | Block        | Client-side template             | Global attributes                       |
| `<slot>`     | Inline       | Placeholder inside Web Component | `name`, Global                          |
| `<canvas>`   | Block        | Scriptable drawing area          | `width`, `height`, Global               |

---

## 🧩 Interactive Elements

| Element      | Element Type     | Description                     | Common Attributes         |
| ------------ | ---------------- | ------------------------------- | ------------------------- |
| `<details>`  | Block            | Expandable content section      | `open`, Global attributes |
| `<summary>`  | Block            | Summary heading for `<details>` | Global attributes         |
| `<dialog>`   | Block            | Dialog box or modal             | `open`, Global attributes |
| `<menu>`     | Block            | List/menu of commands           | Global attributes         |
| `<menuitem>` | Block (Obsolete) | Command item in menu            | Global attributes         |

---

## 📦 Web Components

| Element      | Element Type | Description                            | Common Attributes         |
| ------------ | ------------ | -------------------------------------- | ------------------------- |
| `<slot>`     | Inline       | Placeholder inside Shadow DOM          | `name`, Global attributes |
| `<template>` | Block        | Holds client-side content not rendered | Global attributes         |

---

## 📑 Document Metadata

| Element      | Element Type | Description                        | Common Attributes                                           |
| ------------ | ------------ | ---------------------------------- | ----------------------------------------------------------- |
| `<!DOCTYPE>` | Declaration  | Defines document type and version  | None                                                        |
| `<html>`     | Root         | Root element of the HTML document  | `lang`, Global                                              |
| `<head>`     | Metadata     | Container for metadata             | Global attributes                                           |
| `<title>`    | Metadata     | Document title                     | Global attributes                                           |
| `<base>`     | Metadata     | Base URL for relative links        | `href`, `target`, Global                                    |
| `<link>`     | Void         | External resource reference        | `href`, `rel`, `type`, `media`, `hreflang`, `sizes`, Global |
| `<meta>`     | Void         | Metadata (e.g., charset, viewport) | `name`, `content`, `charset`, `http-equiv`, Global          |
| `<style>`    | Metadata     | Internal CSS                       | `type`, `media`, Global                                     |
