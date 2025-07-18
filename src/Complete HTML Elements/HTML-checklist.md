
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
| [x]| `<a>`      | Inline | Hyperlink                        | `href`, `target`, `rel`   |
| [x]| `<strong>` | Inline | Important text (bold)            | None                      |
| [x]| `<em>`     | Inline | Emphasized text (italic)         | None                      |
| [x]| `<mark>`   | Inline | Highlighted text                 | None                      |
| [x]| `<small>`  | Inline | Side comments or fine print      | None                      |
| [x]| `<del>`    | Inline | Deleted/removed text             | `cite`, `datetime`        |
| [x]| `<ins>`    | Inline | Inserted text                    | `cite`, `datetime`        |
| [x]| `<sub>`    | Inline | Subscript                        | None                      |
| [x]| `<sup>`    | Inline | Superscript                      | None                      |
| [x]| `<code>`   | Inline | Inline code                      | None                      |
| [x]| `<kbd>`    | Inline | Keyboard input                   | None                      |
| [x]| `<samp>`   | Inline | Sample output                    | None                      |
| [x]| `<var>`    | Inline | Variable ( programming or math)  | None                      |
| [x]| `<abbr>`   | Inline | Abbreviation (fullform ISRO,ISL) | `title`                   |
| [x]| `<time>`   | Inline | Time/date with machine-readability | `datetime`              |
| [x]| `<bdi>`    | Inline | Isolate bidirectional text (arbic text)| None                |
| [x]| `<bdo>`    | Inline | Override text direction          | `dir`                     |
| [x]| `<ruby>`   | Inline | Ruby annotation (East Asian)     | None                      |
| [x]| `<rt>`     | Inline | Ruby pronunciation               | None                      |
| [x]| `<rp>`     | Inline | Fallback for ruby                | None                      |
| [x]| `<wbr>`    | Void   | Line break opportunity           | None                      |

---

## 🖼️ Media & Embedded Content

| ✅ | Element     | Type   | Description                | Key Attributes                         |
|----|------------|--------|----------------------------|----------------------------------------|
| [x]| `<img>`    | Void   | Image                      | `src`, `alt`, `width`, `height`, `loading` |
| [x]| `<audio>`  | Block  | Audio player               | `src`, `controls`, `loop`, `muted`     |
| [x]| `<video>`  | Block  | Video player               | `src`, `controls`, `poster`            |
| [x]| `<source>` | Void   | Source for media           | `src`, `type`                          |
| [x]| `<track>`  | Void   | Subtitles/captions         | `kind`, `src`, `srclang`               |
| [x]| `<embed>`  | Void   | External content           | `src`, `type`                          |
| [x]| `<object>` | Block  | Embedded resource          | `data`, `type`                         |
| [x]| `<param>`  | Void   | Parameters for `<object>`  | `name`, `value`                        |
| [x]| `<iframe>` | Block  | Embedded page/frame        | `src`, `width`, `height`, `sandbox`, `referrerpolicy`    |
| [x]| `<picture>`| Block  | Responsive image container | None                                   |
| [x]| `<figure>` | Block  | Figure with caption        | None                                   |
| [x]| `<figcaption>`| Block| Caption for `<figure>`    | None                                   |
| [x]| `<canvas>` | Block  | Drawing surface            | `width`, `height`                      |
| [x]| `<svg>`    | Inline | Scalable Vector Graphics   | SVG-specific                           |

---

## 📊 Tables

| ✅ | Element      | Type   | Description             | Key Attributes            |
|----|-------------|--------|-------------------------|---------------------------|
| [x]| `<table>`    | Block  | Table container         | None                      |
| [x]| `<caption>`  | Block  | Table title             | None                      |
| [x]| `<thead>`    | Block  | Table header            | None                      |
| [x]| `<tbody>`    | Block  | Table body              | None                      |
| [x]| `<tfoot>`    | Block  | Table footer            | None                      |
| [x]| `<tr>`       | Block  | Table row               | None                      |
| [x]| `<td>`       | Block  | Table cell              | `colspan`, `rowspan`      |
| [x]| `<th>`       | Block  | Header cell             | `colspan`, `rowspan`, `scope` |
| [x]| `<col>`      | Void   | Column definition       | `span`                    |
| [x]| `<colgroup>` | Block  | Group of columns        | `span`                    |

---

## 📝 Forms & Input

| ✅ | Element      | Type   | Description            | Key Attributes                     |
|----|-------------|--------|------------------------|------------------------------------|
| [x]| `<form>`     | Block  | Form                   | `action`, `method`, `enctype`      |
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

## Full <input> Types Reference Table
 
| **Input Type**   | **Use Case**                          | **All Supported Attributes**                                                                                                                                                                                            |
| ---------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`           | Single-line text (e.g. name, address) | `type`, `name`, `id`, `class`, `value`, `placeholder`, `required`, `readonly`, `disabled`, `maxlength`, `minlength`, `autocomplete`, `autofocus`, `pattern`, `form`, `title`, `spellcheck`, `inputmode`, `list`, `size` |
| `password`       | Hidden input for passwords            | All from `text`, commonly with `pattern` and `autocomplete="current-password"` or `new-password`                                                                                                                        |
| `email`          | Validated email entry                 | All from `text` + `multiple`, `inputmode=email`, `autocomplete=email`, `pattern`                                                                                                                                        |
| `number`         | Only numeric input                    | `min`, `max`, `step`, `value`, `placeholder`, `required`, `readonly`, `disabled`, `autocomplete`, `inputmode=numeric`, `form`, `title`, `id`, `class`, `name`                                                           |
| `tel`            | Telephone input                       | Same as `text`, + `pattern`, `autocomplete=tel`, `inputmode=tel`                                                                                                                                                        |
| `url`            | Website or link entry                 | Same as `text`, + `pattern`, `autocomplete=url`, `inputmode=url`                                                                                                                                                        |
| `search`         | Search bar (clearable by browser)     | Same as `text`, usually with `autocomplete`, `placeholder`, `list`                                                                                                                                                      |
| `checkbox`       | Boolean or multiple-choice toggle     | `name`, `value`, `checked`, `required`, `disabled`, `autofocus`, `form`, `title`, `id`, `class`                                                                                                                         |
| `radio`          | Select one option from a group        | Same as `checkbox`, must share the same `name` value in the group                                                                                                                                                       |
| `date`           | Select a calendar date                | `min`, `max`, `value`, `required`, `disabled`, `readonly`, `autocomplete`, `form`, `autofocus`, `title`, `inputmode`, `name`, `id`, `class`                                                                             |
| `time`           | Select a time value                   | Same as `date`, includes `step` for seconds                                                                                                                                                                             |
| `datetime-local` | Select date and time (no timezone)    | Same as `date`, used for precise scheduling                                                                                                                                                                             |
| `month`          | Select month & year                   | Same as `date`, used for credit card expiry, billing periods                                                                                                                                                            |
| `week`           | Select week & year                    | Same as `date`, used for weekly planning                                                                                                                                                                                |
| `file`           | Upload files                          | `name`, `accept`, `multiple`, `required`, `disabled`, `form`, `id`, `class`, `capture`, `title`                                                                                                                         |
| `range`          | Slider for numeric value              | `min`, `max`, `step`, `value`, `name`, `required`, `disabled`, `autofocus`, `form`, `id`, `class`, `title`                                                                                                              |
| `color`          | Pick a color using browser UI         | `value`, `name`, `required`, `disabled`, `readonly`, `autofocus`, `form`, `id`, `class`, `title`                                                                                                                        |
| `submit`         | Submit a form                         | `value`, `form`, `formaction`, `formenctype`, `formmethod`, `formtarget`, `formnovalidate`, `id`, `class`, `title`, `name`                                                                                              |
| `reset`          | Reset form to original values         | `value`, `form`, `id`, `class`, `title`, `name`                                                                                                                                                                         |
| `button`         | Custom button (used with JavaScript)  | `value`, `onclick`, `form`, `id`, `class`, `title`, `name`                                                                                                                                                              |
| `image`          | Submit button with an image           | `src`, `alt`, `width`, `height`, `formaction`, `formenctype`, `formmethod`, `formtarget`, `formnovalidate`, `value`, `form`, `title`, `id`, `class`, `name`                                                             |
| `hidden`         | Hidden form field (backend data)      | `name`, `value`, `form`, `id`, `class`                                                                                                                                                                                  |

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

