
# 📘 Complete HTML5 Elements Reference

All standard HTML elements, grouped by category with attributes and usage notes. Includes:
- ✅ Checklist
- Element Type (Block, Inline, Void, etc.)

---

## 🌍 Global Attributes (Applied to most elements)

| ✅ Check | Attribute       | Description                                                                           |
|----------|----------------|-----------------------------------------------------------------------------------------|
| [x]      | accesskey       | Keyboard shortcut to activate/focus the element. (ALT+H)                               |
| [x]      | class           | Space-separated list of CSS classes.                                                   |
| [X]      | contenteditable | Makes the element editable (`true`/`false`).(WYSIWYG editors, Real-time collaborativ ) |
| [x]      | data-*          | Custom data attributes (e.g., `data-id="123"`).      |
| [x]      | dir             | Text direction (`ltr`, `rtl`, `auto`).               |
| [x]      | draggable       | Whether the element can be dragged (`true`/`false`). |
| [x]      | hidden          | Hides the element from rendering.                    |
| [x]      | id              | Unique identifier for the element.                   |
| [x]      | lang            | Language of the element’s content (e.g., `en`, `es`).|
| [x]      | spellcheck      | Enables spell-checking (`true`/`false`).             |
| [x]      | style           | Inline CSS styles.                                   |
| [x]      | tabindex        | Controls tab order (`0`, `-1`).                      |
| [x]      | title           | Tooltip text on hover.                               |
| [x]      | translate       | Whether content should be translated (`yes`/`no`).(company name, book name, etc..)  |
| [x]      | role & aria-*   | Accessibility attributes (`role`, `aria-*`).         |

---

## 📑 Document Structure

| ✅ | Element       | Type      | Description                          | Key Attributes              |
|----|--------------|-----------|--------------------------------------|-----------------------------|
| [x]| `<!DOCTYPE>` | Declaration | Declares HTML5 document type        | None                        |
| [x]| `<html>`     | Root       | Root element                         | `lang`, `manifest`          |
| [x]| `<head>`     | Metadata   | Contains metadata                    | None                        |
| [x]| `<title>`    | Metadata   | Page title in browser tab            | None                        |
| [x]| `<base>`     | Metadata   | Base URL for relative links          | `href`, `target`            |
| [x]| `<meta>`     | Metadata   | Metadata for page                    | `charset`, `name`, `content`|
| [x]| `<link>`     | Metadata   | Links to external resources          | `rel`, `href`, `type`       |
| [x]| `<style>`    | Metadata   | Internal CSS                         | `type`, `media`             |
| [x]| `<script>`   | Metadata   | JavaScript                           | `src`, `async`, `defer`     |
| [x]| `<noscript>` | Block      | Fallback if JS disabled              | None                        |
| [x]| `<body>`     | Block      | Document body                        | None                        |

---

## 🏗️ Content Sectioning

| ✅ | Element      | Type   | Description                              | Key Attributes |
|----|-------------|--------|------------------------------------------|----------------|
| [x]| `<header>`  | Block  | Introductory content                     | None           |
| [x]| `<footer>`  | Block  | Footer content                           | None           |
| [x]| `<nav>`     | Block  | Navigation links                         | None           |
| [x]| `<main>`    | Block  | Main content of page                     | None           |
| [x]| `<article>` | Block  | Self-contained composition               | None           |
| [x]| `<section>` | Block  | Thematic grouping of content             | None           |
| [x]| `<aside>`   | Block  | Sidebar or supplementary content         | None           |
| [x]| `<h1>`–`<h6>`| Block | Headings (h1 = most important)           | None           |
| [x]| `<address>` | Block  | Contact information                      | None           |

---

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

---

## ✏️ Inline Text Semantics

| ✅ | Element     | Type   | Description                      | Key Attributes            |
|----|------------|--------|----------------------------------|---------------------------|
| [ ]| `<a>`      | Inline | Hyperlink                        | `href`, `target`, `rel`   |
| [ ]| `<strong>` | Inline | Important text (bold)            | None                      |
| [ ]| `<em>`     | Inline | Emphasized text (italic)         | None                      |
| [ ]| `<mark>`   | Inline | Highlighted text                 | None                      |
| [ ]| `<small>`  | Inline | Side comments or fine print      | None                      |
| [ ]| `<del>`    | Inline | Deleted/removed text             | `cite`, `datetime`        |
| [ ]| `<ins>`    | Inline | Inserted text                    | `cite`, `datetime`        |
| [ ]| `<sub>`    | Inline | Subscript                        | None                      |
| [ ]| `<sup>`    | Inline | Superscript                      | None                      |
| [ ]| `<code>`   | Inline | Inline code                      | None                      |
| [ ]| `<kbd>`    | Inline | Keyboard input                   | None                      |
| [ ]| `<samp>`   | Inline | Sample output                    | None                      |
| [ ]| `<var>`    | Inline | Variable                         | None                      |
| [ ]| `<abbr>`   | Inline | Abbreviation                     | `title`                   |
| [ ]| `<time>`   | Inline | Time/date with machine-readability | `datetime`              |
| [ ]| `<bdi>`    | Inline | Isolate bidirectional text       | None                      |
| [ ]| `<bdo>`    | Inline | Override text direction          | `dir`                     |
| [ ]| `<ruby>`   | Inline | Ruby annotation (East Asian)     | None                      |
| [ ]| `<rt>`     | Inline | Ruby pronunciation               | None                      |
| [ ]| `<rp>`     | Inline | Fallback for ruby                | None                      |
| [ ]| `<wbr>`    | Void   | Line break opportunity           | None                      |

---

## 🖼️ Media & Embedded Content

| ✅ | Element     | Type   | Description                | Key Attributes                         |
|----|------------|--------|----------------------------|----------------------------------------|
| [ ]| `<img>`    | Void   | Image                      | `src`, `alt`, `width`, `height`, `loading` |
| [ ]| `<audio>`  | Block  | Audio player               | `src`, `controls`, `loop`, `muted`     |
| [ ]| `<video>`  | Block  | Video player               | `src`, `controls`, `poster`            |
| [ ]| `<source>` | Void   | Source for media           | `src`, `type`                          |
| [ ]| `<track>`  | Void   | Subtitles/captions         | `kind`, `src`, `srclang`               |
| [ ]| `<embed>`  | Void   | External content           | `src`, `type`                          |
| [ ]| `<object>` | Block  | Embedded resource          | `data`, `type`                         |
| [ ]| `<param>`  | Void   | Parameters for `<object>`  | `name`, `value`                        |
| [ ]| `<iframe>` | Block  | Embedded page/frame        | `src`, `width`, `height`, `sandbox`    |
| [ ]| `<picture>`| Block  | Responsive image container | None                                   |
| [ ]| `<figure>` | Block  | Figure with caption        | None                                   |
| [ ]| `<figcaption>`| Block| Caption for `<figure>`    | None                                   |
| [ ]| `<canvas>` | Block  | Drawing surface            | `width`, `height`                      |
| [ ]| `<svg>`    | Inline | Scalable Vector Graphics   | SVG-specific                           |

---

## 📊 Tables

| ✅ | Element      | Type   | Description             | Key Attributes            |
|----|-------------|--------|-------------------------|---------------------------|
| [ ]| `<table>`    | Block  | Table container         | None                      |
| [ ]| `<caption>`  | Block  | Table title             | None                      |
| [ ]| `<thead>`    | Block  | Table header            | None                      |
| [ ]| `<tbody>`    | Block  | Table body              | None                      |
| [ ]| `<tfoot>`    | Block  | Table footer            | None                      |
| [ ]| `<tr>`       | Block  | Table row               | None                      |
| [ ]| `<td>`       | Block  | Table cell              | `colspan`, `rowspan`      |
| [ ]| `<th>`       | Block  | Header cell             | `colspan`, `rowspan`, `scope` |
| [ ]| `<col>`      | Void   | Column definition       | `span`                    |
| [ ]| `<colgroup>` | Block  | Group of columns        | `span`                    |

---

## 📝 Forms & Input

| ✅ | Element      | Type   | Description            | Key Attributes                     |
|----|-------------|--------|------------------------|------------------------------------|
| [ ]| `<form>`     | Block  | Form                   | `action`, `method`, `enctype`      |
| [ ]| `<input>`    | Void   | Input field            | `type`, `name`, `placeholder`, `required` |
| [ ]| `<textarea>` | Block  | Multi-line text input  | `rows`, `cols`, `placeholder`      |
| [ ]| `<button>`   | Inline | Button                 | `type`, `disabled`                 |
| [ ]| `<select>`   | Inline | Dropdown               | `name`, `multiple`                 |
| [ ]| `<option>`   | Inline | Dropdown option        | `value`, `selected`                |
| [ ]| `<optgroup>` | Inline | Option group           | `label`                            |
| [ ]| `<label>`    | Inline | Label for input        | `for`                              |
| [ ]| `<fieldset>` | Block  | Group controls         | `disabled`                         |
| [ ]| `<legend>`   | Block  | Title for fieldset     | None                               |
| [ ]| `<datalist>` | Block  | List of predefined options | None                           |
| [ ]| `<output>`   | Inline | Display result         | `for`                              |
| [ ]| `<meter>`    | Inline | Scalar measurement     | `min`, `max`, `value`              |
| [ ]| `<progress>` | Inline | Progress indicator     | `max`, `value`                     |

---

## 🕹️ Interactive Elements

| ✅ | Element     | Type   | Description              | Key Attributes |
|----|------------|--------|--------------------------|----------------|
| [ ]| `<details>`| Block  | Expandable widget        | `open`         |
| [ ]| `<summary>`| Block  | Summary for `<details>` | None           |
| [ ]| `<dialog>` | Block  | Modal dialog             | `open`         |
| [ ]| `<menu>`   | Block  | Context menu (deprecated)| None           |

---

## ⚙️ Web Components

| ✅ | Element      | Type        | Description                   | Key Attributes |
|----|-------------|-------------|-------------------------------|----------------|
| [ ]| `<template>` | Metadata    | Client-side template holder   | None           |
| [ ]| `<slot>`     | Shadow DOM  | Placeholder in Shadow DOM     | `name`         |

---

## 🧯 Deprecated/Obsolete Elements

| ✅ | Element       | Type       | Use Instead             |
|----|--------------|------------|--------------------------|
| [ ]| `<acronym>`   | Inline     | `<abbr>`                 |
| [ ]| `<applet>`    | Block      | `<object>`               |
| [ ]| `<big>`       | Inline     | CSS `font-size`          |
| [ ]| `<center>`    | Block      | CSS `text-align`         |
| [ ]| `<font>`      | Inline     | CSS styling              |
| [ ]| `<frame>`     | Frame/Old  | `<iframe>` or avoid      |
| [ ]| `<frameset>`  | Frame/Old  | CSS Layout               |
| [ ]| `<marquee>`   | Inline     | CSS/JS animation         |
| [ ]| `<nobr>`      | Inline     | CSS `white-space: nowrap`|
| [ ]| `<strike>`    | Inline     | `<del>` or CSS           |

