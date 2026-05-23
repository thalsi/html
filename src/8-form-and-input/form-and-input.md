# 📝 Forms & Input Elements — Explanation & Examples

1. <form>


Creates a form container to send user data.
```
<form action="/login" method="post">
  <input type="text" placeholder="Username">
  <button type="submit">Login</button>
</form>
```

| Attribute | Description                   |
| --------- | ----------------------------- |
| `action`  | Where form data goes          |
| `method`  | HTTP method (`GET` or `POST`) |
| `enctype` | Data encoding type            |

1. <input>

Single-line input field.

```
<input type="text">
```
| Type       | Use          |
| ---------- | ------------ |
| `text`     | Text         |
| `email`    | Email        |
| `password` | Password     |
| `number`   | Numbers      |
| `checkbox` | Checkbox     |
| `radio`    | Radio button |
| `file`     | File upload  |

3. <textarea>

Multi-line text input.

```
<textarea></textarea>
```
| Attribute     | Description  |
| ------------- | ------------ |
| `rows`        | Height lines |
| `cols`        | Width        |
| `placeholder` | Hint text    |

4. <button>

Creates clickable button.
```
<button>Click</button>
```
| Type     | Use           |
| -------- | ------------- |
| `submit` | Submit form   |
| `button` | Normal button |
| `reset`  | Reset form    |

5. <select>

Creates dropdown menu.
```
<select>
</select>
```
| Attribute  | Description         |
| ---------- | ------------------- |
| `name`     | Field name          |
| `multiple` | Select many options |

6. <option>

Defines dropdown item.
```
<option>Kerala</option>
```
| Attribute  | Description      |
| ---------- | ---------------- |
| `value`    | Option value     |
| `selected` | Default selected |

7. <optgroup>

Groups related options.

```
<select>

  <optgroup label="India">
    <option>Kerala</option>
    <option>Tamil Nadu</option>
  </optgroup>

  <optgroup label="USA">
    <option>Texas</option>
    <option>California</option>
  </optgroup>

</select>
```

8. <label>

Label for form element.

✅ Why Important?
Better accessibility
Clicking label focuses input
Better UX
✅ Example
```
<label for="email">Email</label>

<input type="email" id="email">
```

9. <fieldset>

Groups related form controls.

✅ Example
```
<fieldset>

  <legend>Personal Info</legend>

  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">

</fieldset>
```

10. <legend>

Title/caption for <fieldset>.

✅ Example
```
<legend>Account Details</legend>
```

11. <datalist>

Provides predefined suggestions.

✅ Example
```
<input list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
</datalist>

<input type="search" list="products" placeholder="Search product">

<datalist id="products">

  <option value="iPhone 16">
  <option value="Samsung S25">
  <option value="MacBook Pro">

</datalist>
```
✅ Result

User can type OR choose suggestion.

12. <output>

Displays calculation result.

✅ Example
```
<form oninput="result.value = Number(a.value) + Number(b.value)">

  <input type="number" id="a">
  <input type="number" id="b">

  <output name="result"></output>

</form>
```

13. <meter>

Shows measurement within range.

Used for:

Battery
Score
Disk usage
Strength
✅ Example
```
<meter value="70" min="0" max="100"></meter>
```
✅ Result

70% filled meter.

14. <progress>

Shows task progress.

Used for:

Loading
Uploading
Downloading
✅ Example
```
<progress value="40" max="100"></progress>
```
✅ Result

40% progress bar.