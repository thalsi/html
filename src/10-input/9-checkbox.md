# <input type="checkbox">

<input type="checkbox"> is used for:

Yes/No options
Multiple selections
Agreement checkboxes
Preferences

A checkbox can be:

Checked ✅
Unchecked ⬜

```
<label for="agree">
  Accept Terms
</label>

<input type="checkbox" id="agree">

<input
  type="checkbox"
  name="language"
  value="English"
>
```

Common Attributes for checkbox

| Attribute         | Description                  |
| ----------------- | ---------------------------- |
| `type="checkbox"` | Creates checkbox             |
| `name`            | Sends form data              |
| `id`              | Unique identifier            |
| `class`           | CSS styling                  |
| `value`           | Value sent when checked      |
| `checked`         | Checkbox selected by default |
| `required`        | Must check checkbox          |
| `disabled`        | Disables checkbox            |
| `autofocus`       | Auto focus checkbox          |
| `form`            | Connects checkbox to form    |
| `title`           | Extra help message           |
