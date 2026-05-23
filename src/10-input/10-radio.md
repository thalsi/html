# <input type="radio">

<input type="radio"> is used to:

Select ONE option from multiple choices.

Used for:

Gender
Payment method
Language selection
Delivery option

✅ Only ONE radio button can be selected in the same group.

```
<h3>Select Gender</h3>

<label>
  <input
    type="radio"
    name="gender"
    value="Male"
  >
  Male
</label>

<label>
  <input
    type="radio"
    name="gender"
    value="Female"
  >
  Female
</label>
```

## Important Rule

Radio buttons must share the same name to become a group.

```
<input type="radio" name="gender">
<input type="radio" name="gender">
```
Now:

Selecting one automatically deselects the other.

Common Attributes for radio

| Attribute      | Description              |
| -------------- | ------------------------ |
| `type="radio"` | Creates radio button     |
| `name`         | Groups radio buttons     |
| `id`           | Unique identifier        |
| `class`        | CSS styling              |
| `value`        | Value sent when selected |
| `checked`      | Selected by default      |
| `required`     | Must select one option   |
| `disabled`     | Disables radio button    |
| `autofocus`    | Auto focus radio         |
| `form`         | Connects radio to form   |
| `title`        | Extra help message       |

## Usually Add required to One Radio Only

✅ Correct:
```
<input type="radio" name="gender" required>
<input type="radio" name="gender">
```

❌ Not necessary:
```
<input type="radio" name="gender" required>
<input type="radio" name="gender" required>
```
Because:

One required applies to the whole group.