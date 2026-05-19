### 2. <input> 
 
|  Input Type      | Description                           |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`text`       | Single-line text (e.g. name, address) | `type`, `name`, `id`, `class`, `value`, `placeholder`  |
|                  |                                       | `required`, `readonly`, `disabled`, `maxlength`,`size` |
|                  |                                       | `minlength`, `autocomplete`, `autofocus`, `pattern`    |
|                  |                                       | `form`, `title`, `spellcheck`, `inputmode`, `list`     |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`password`   | Hidden input for passwords            |  Same as `text`                                        |
|                  |                                       |  plus: `pattern`                                       |
|                  |                                       | `autocomplete="current-password"` or `"new-password"`  |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`email`      | Validated email entry                 |  Same as `text`                                        |
|                  |                                       |  plus: `multiple`, `inputmode="email"`,                |
|                  |                                       |  `autocomplete="email"`, `pattern`                     |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`number`     | Only numeric input                    | `type`, `name`, `id`, `class`, `value`, `min`, `max`,  |
|                  |                                       | `step`, `placeholder`, `required`, `readonly`, `title` |
|                  |                                       | `disabled`, `autocomplete`, `inputmode="numeric"`,     |
|                  |                                       | `form`                                                 |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`tel`        | Telephone input                       |  Same as `text`,                                       |
|                  |                                       |  plus: `pattern`, `autocomplete="tel"`,                |
|                  |                                       | `inputmode="tel"`                                      |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`url`        | Website or link entry                 |  Same as `text`,                                       |
|                  |                                       |  plus: `pattern`, `autocomplete="url"`                 |
|                  |                                       | `inputmode="url"`                                      |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`search`     | Search bar (clearable by browser)     |  Same as `text`                                        |
|                  |                                       |  plus: `autocomplete`, `list`, `placeholder`           |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`checkbox`   | Boolean or multiple-choice toggle     | `type`, `name`, `id`, `class`                          |
|                  |                                       | `value`, `checked`, `required`, `disabled`             |
|                  |                                       | `autofocus`, `form`, `title`                           |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`radio`      | Select one option from a group        |  Same as `checkbox`                                    |
|                  |                                       | (must share the same `name` with other radios in group)|
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`date`       | Select a calendar date                | `type`, `name`, `id`, `class`, `value`, `min`, `max`   |
|                  |                                       | `required`, `disabled`, `readonly`, `autocomplete`,    |
|                  |                                       | `form`, `autofocus`, `title`, `inputmode`, `step`      |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`time`       | Select a time value                   |  Same as `date`                                        |
|                  |                                       |  plus: `step` (e.g., seconds interval)                 |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`datetime-local`| Select date and time (no timezone) |  Same as `date`                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`month`      | Select month & year                   |  Same as `date`                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`week`       | Select week & year                    |  Same as `date`                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`file`       | Upload files                          | `type`, `name`, `id`, `class`, `accept`,               |
|                  |                                       | `multiple`, `required`, `disabled`,                    |
|                  |                                       | `form`, `capture`, `title`                             |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`range`      | Slider for numeric value              | `type`, `name`, `id`, `class`, `value`, `min`, `max`   |
|                  |                                       | `step`, `required`, `disabled`, `autofocus`, `form`,   |
|                  |                                       | `title`                                                |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`color`      | Pick a color using browser UI         | `type`, `name`, `id`, `class`, `value`                 |
|                  |                                       | `required`, `disabled`, `readonly`                     |
|                  |                                       | `autofocus`, `form`, `title`                           |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`submit`     | Submit a form                         | `type`, `name`, `id`, `class`, `value`                 |
|                  |                                       | `form`, `formaction`, `formenctype`, `formmethod`      |
|                  |                                       | `formtarget`, `formnovalidate`, `title`                |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`reset`      | Reset form to original values         | `type`, `name`, `id`, `class`                          |
|                  |                                       | `value`, `form`, `title`                               |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`button`     | Custom button (used with JavaScript)  | `type`, `name`, `id`, `class`                          |
|                  |                                       | `value`, `onclick`, `form`, `title`                    |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`image`      | Submit button with an image           | `type`, `name`, `id`, `class`, `value`                 |
|                  |                                       | `form`, `src`, `alt`, `width`, `height`, `formaction`  |
|                  |                                       | `formenctype`, `formmethod`, `formtarget`,             |
|                  |                                       | `formnovalidate`, `title`                              |
| ---------------- | ------------------------------------- |--------------------------------------------------------|
|  [x]`hidden`     | Hidden form field (backend data)      | `type`, `name`, `id`, `class`,                         |
|                  |                                       | `value`, `form`                                        |
|                  |                                       |                                                        |
|                  |                                       |                                                        |
| ---------------- | ------------------------------------- |--------------------------------------------------------|

## <input type="text"> Attributes Explained
<input type="text">

Used for single-line text input like:

Name
Address
Username
City

```
<input type="text">
```

1. type

Defines the input type.
```
<input type="text">
```
text = normal single-line text field

2. name

Name used when sending form data to the server.

```
<input type="text" name="username">
```
Submitted data:
```
username=Ali
```

3. id

Unique identifier for the input.

Used with:

CSS
JavaScript
<label>
```
<label for="fullname">Name</label>
<input type="text" id="fullname">
```

4. class

Used for CSS styling or JavaScript selection.

```
<input type="text" class="input-box">
```
css:
```
.input-box{
  border: 2px solid blue;
}
```

5. value

Default value inside the input.
```
<input type="text" value="new data here">
```
Result:

Input already contains "new data here"

6. placeholder

Shows temporary hint text.
```
<input type="text" placeholder="Enter your name">
```
Disappears when typing starts

7. required

Makes the field mandatory.
```
<input type="text" required>
```
Form cannot submit if empty

8. readonly

User can see the value but cannot edit it.
```
<input type="text" value="Admin" readonly>
```
Value is still submitted with form

9. disabled

Disables the input completely.
```
<input type="text" disabled>
```
Cannot type
Cannot focus
Value is NOT submitted

10. maxlength

Maximum number of characters allowed.
```
<input type="text" maxlength="10">
```
User cannot type more than 10 characters

11. size

Visible width of input (approximate characters).
```
<input type="text" size="40">
```
Makes input visually wider

12. minlength

Minimum required character count.
```
<input type="text" minlength="5">
```
User must type at least 5 characters

13. autocomplete

Controls browser auto-suggestions.
```
<input type="text" autocomplete="on">
```
Common values:

name
email
username
street-address

14. autofocus

Automatically focuses the input when page loads.
```
<input type="text" autofocus>
```
Cursor automatically appears inside input

15. pattern

Validation using Regular Expression.
```
<input type="text" pattern="[A-Za-z]{3,}">
```
Meaning:

Only letters allowed
Minimum 3 characters

Example:
```
<input 
  type="text"
  pattern="[0-9]{10}"
  placeholder="Enter 10 digit number"
>
```

16. form

Connects input to a form even if outside the form.
```
<form id="myForm">
</form>

<input type="text" form="myForm">
```
Input belongs to myForm

17. title

Extra information shown on hover.
```
<input type="text" title="Enter your full name">
```
Useful with validation.

18. spellcheck

Enables/disables spelling correction.
```
<input type="text" spellcheck="true">
```

19. inputmode

Shows suitable keyboard on mobile devices.
```
<input type="text" inputmode="numeric">
```
| Value     | Keyboard Type   |
| --------- | --------------- |
| `text`    | Normal keyboard |
| `numeric` | Number keypad   |
| `decimal` | Decimal keypad  |
| `email`   | Email keyboard  |
| `tel`     | Phone keypad    |
| `search`  | Search keyboard |
| `url`     | URL keyboard    |

20. list

Connects input with <datalist> suggestions.
```
<input type="text" list="cities">

<datalist id="cities">
  <option value="Kochi">
  <option value="Calicut">
  <option value="Kannur">
</datalist>
```
User gets suggestion dropdown