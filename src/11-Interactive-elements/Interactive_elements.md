# 🕹️ Interactive Elements — HTML Guide

Interactive elements help users open, close, select, trigger actions, or interact with content.

1. <details>

Expandable / collapsible content.

✅ Use Case
FAQ sections
Hidden information
Accordion UI
“Read More”

```
<details>
  <summary>Click Here</summary>
  <p>Hello World</p>
</details>
```
✅ Result
User clicks summary
Content opens/closes

| Attribute | Description              |
| --------- | ------------------------ |
| `open`    | Opens details by default |


✅ Important Notes
<summary> MUST be first child
Works without JavaScript
Good for accessibility


2. <summary>
   
✅ Use Case
Expand/collapse title
FAQ question
Accordion heading

```
<details>
  <summary>Show Info</summary>

  <p>Information here</p>
</details>
```
✅ Notes
Only works inside <details>
Clicking toggles open/close

3. <dialog>

Creates a modal dialog / popup.

✅ Use Case
Login popup
Confirm box
Alert modal
Settings popup
```
<dialog open>
  <h2>Login Required</h2>

  <p>Please login first.</p>

  <button>Close</button>
</dialog>

<dialog id="myDialog">
  <p>Welcome!</p>

  <button onclick="myDialog.close()">
    Close
  </button>
</dialog>

<button onclick="myDialog.showModal()">
  Open Dialog
</button>
```

| Method        | Description        |
| ------------- | ------------------ |
| `show()`      | Opens dialog       |
| `showModal()` | Opens modal dialog |
| `close()`     | Closes dialog      |

| Attribute | Description  |
| --------- | ------------ |
| `open`    | Opens dialog |

✅ Notes
Requires JavaScript for full control
Better than custom popup divs
Accessible modal system

4. <menu> ⚠️ Deprecated

Used for menu lists.

❌ Status

Deprecated → Avoid using.

