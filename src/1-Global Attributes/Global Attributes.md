## 🌍 1. Global Attributes (Applied to most elements)

| ✅ Check | Attribute         | Description                                                                 |
|----------|------------------|-----------------------------------------------------------------------------|
| [x]      | `accesskey`      | Keyboard shortcut to activate/focus the element.                           |
| [x]      | `class`          | Space-separated list of CSS classes.                                       |
| [x]      | `contenteditable`| Makes the element editable (`true` / `false`).                             |
| [x]      | `data-*`         | Custom data attributes (e.g., `data-id="123"`).                            |
| [x]      | `dir`            | Text direction (`ltr`, `rtl`, `auto`).                                     |
| [x]      | `draggable`      | Whether the element can be dragged (`true` / `false`).                     |
| [x]      | `hidden`         | Hides the element from rendering.                                          |
| [x]      | `id`             | Unique identifier for the element.                                         |
| [x]      | `lang`           | Language of the element content (e.g., `en`, `ml`, `es`).                  |
| [x]      | `spellcheck`     | Enables spell-checking (`true` / `false`).                                 |
| [x]      | `style`          | Inline CSS styles.                                                         |
| [x]      | `tabindex`       | Controls keyboard tab order (`0`, `-1`, etc.).                             |
| [x]      | `title`          | Tooltip/advisory text shown on hover.                                      |
| [x]      | `translate`      | Whether content should be translated (`yes` / `no`).                       |
| [x]      | `role` & `aria-*`| Accessibility attributes for assistive technologies.                       |
| [x]      | `inert`          | Makes subtree completely non-interactive.                                  |
| [x]      | `popover`        | Native popover UI support.                                                 |
| [x]      | `exportparts`    | Exposes Shadow DOM parts for external styling.                             |
---

🌍 HTML Global Attributes — Full Explanation

Global attributes are special HTML attributes that can be used on most HTML elements.

Example:
```
<div class="box" id="main"></div>
<p title="Hello">Text</p>
<input tabindex="0">
```

These attributes help with:

Styling
Accessibility
Keyboard control
Custom data
Internationalization
Interactivity

## 1. accesskey

Keyboard shortcut for focusing or activating an element.
```
<button accesskey="s">Save</button>
```

Example

Pressing:

Alt + Shift + S (Windows)
Ctrl + Option + S (Mac)

may activate the button.

Use Case

Quick keyboard shortcuts.

Notes
Browser shortcut keys vary.
Avoid conflicts with browser shortcuts.


## 2. class

Adds one or more CSS class names.
```
<div class="card active"></div>
```

Multiple Classes
```
<p class="text red bold"></p>
```

Use Case
CSS styling
JavaScript selection
CSS Example
```
.card {
  padding: 20px;
}
```

## 3. contenteditable

Makes content editable directly in the browser.
```
<div contenteditable="true">
  Edit this text
</div>
```

| Value   | Meaning      |
| ------- | ------------ |
| `true`  | Editable     |
| `false` | Not editable |


Use Case
Rich text editors
Notes apps
CMS systems

## 4. data-*

Custom data storage inside HTML.
```
<div data-id="101" data-role="admin"></div>
```

Access in JavaScript
```
const el = document.querySelector("div");

console.log(el.dataset.id);
console.log(el.dataset.role);
```

Use Case

Store custom information.

## 5. dir

Controls text direction.
```
<p dir="ltr">Hello</p>
<p dir="rtl">مرحبا</p>
```

| Value  | Meaning         |
| ------ | --------------- |
| `ltr`  | Left to right   |
| `rtl`  | Right to left   |
| `auto` | Browser detects |


Use Case

Arabic, Hebrew languages.

## 6. draggable

Allows dragging elements.
```
<img src="img.jpg" draggable="true">
```

| Value   | Meaning       |
| ------- | ------------- |
| `true`  | Draggable     |
| `false` | Not draggable |


Use Case
Drag-and-drop UI
Kanban boards
File managers

## 7. hidden

Hides the element.
```
<p hidden>This is hidden</p>
```

Browser acts like:
```
display: none;
```

Use Case
Toggle UI
Conditional rendering

## 8. id

Unique identifier.
```
<div id="header"></div>
```
Rules
Must be unique
No duplicates
CSS
```
#header {
  background: black;
}
```
JavaScript
```
document.getElementById("header");
```

## 9. lang

Defines language.
```
<p lang="en">Hello</p>
<p lang="ml">നമസ്കാരം</p>
```

Use Case
Accessibility
SEO
Screen readers
Translation tools

## 10. spellcheck

Enables spelling check.
```
<textarea spellcheck="true"></textarea>
```

| Value   | Meaning |
| ------- | ------- |
| `true`  | Enable  |
| `false` | Disable |

Use Case

Forms and editors.

## 11. style

Inline CSS styles.
```
<p style="color:red; font-size:20px;">
  Hello
</p>
```

Use Case

Quick styling.

Best Practice

Prefer external CSS for large projects.

## 12. tabindex

Controls keyboard tab navigation.
```
<button tabindex="0">Button</button>
```
| Value | Meaning                    |
| ----- | -------------------------- |
| `0`   | Normal tab order           |
| `-1`  | Focusable but not tabbable |
| `1+`  | Custom order               |
Example
```
<div tabindex="0">Focusable Div</div>
```
Use Case

Accessibility and keyboard navigation.

## 13. title

Tooltip text.
```
<p title="This is tooltip text">
  Hover me
</p>
```
Use Case

Extra information on hover.

## 14. translate

Controls automatic translation.
```
<p translate="no">BrandName</p>
```
| Value | Meaning          |
| ----- | ---------------- |
| `yes` | Translate        |
| `no`  | Do not translate |


Use Case

Protect:

Brand names
Code
Product names

## 15. role and aria-*

Accessibility attributes.

These help:

Screen readers
Assistive technologies

role

Defines element purpose.
```
<div role="button">Click</div>
```
Common Roles
| Role         | Meaning         |
| ------------ | --------------- |
| `button`     | Button          |
| `dialog`     | Modal           |
| `navigation` | Navigation area |
| `alert`      | Important alert |

aria-*

Extra accessibility information.
```
<button aria-label="Close menu">
  X
</button>
```

Common Attributes
```
| Attribute       | Purpose                  |
| --------------- | ------------------------ |
| `aria-label`    | Accessible label         |
| `aria-hidden`   | Hide from screen readers |
| `aria-expanded` | Expanded/collapsed state |
| `aria-live`     | Dynamic content updates  |

```
Use Case

Modern accessible websites.

## 16. inert

Makes element completely non-interactive.
```
<div inert>
  <button>Cannot click</button>
</div>
```
Effects
No clicking
No focus
Ignored by screen readers

Use Case

Background content behind modals.

## 17. popover

Native popup/popover feature.
```
<button popovertarget="menu">
  Open
</button>

<div id="menu" popover>
  Popover Content
</div>
```
Use Case
Menus
Tooltips
Dropdowns
Small dialogs

Modern Feature

New HTML feature replacing custom JS popups.

## 18. exportparts

Used with Shadow DOM.

Allows styling internal component parts.
```
<my-card exportparts="title"></my-card>
```
Use Case

Web Components.

Advanced Topic

Mostly used in:

Design systems
Component libraries
Shadow DOM architecture