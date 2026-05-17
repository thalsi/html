## 📝 Forms & Input

| ✅ | Element      | Type   | Description            | Key Attributes                     |
|----|-------------|--------|------------------------|------------------------------------|
| [x]| `<form>`     | Block  | Form                   | `action`, `method`, `enctype`      |
| [x]| `<input>`    | Void   | Input field            | `type`, `name`, `placeholder`, `required` |
| [x]| `<textarea>` | Block  | Multi-line text input  | `rows`, `cols`, `placeholder`      |
| [x]| `<button>`   | Inline | Button                 | `type`, `disabled`                 |
| [x]| `<select>`   | Inline | Dropdown               | `name`, `multiple`                 |
| [x]| `<option>`   | Inline | Dropdown option        | `value`, `selected`                |
| [x]| `<optgroup>` | Inline | Option group           | `label`                            |
| [x]| `<label>`    | Inline | Label for input        | `for`                              |
| [x]| `<fieldset>` | Block  | Group controls         | `disabled`                         |
| [x]| `<legend>`   | Block  | Title for fieldset     | None                               |
| [x]| `<datalist>` | Block  | List of predefined options | None                           |
| [x]| `<output>`   | Inline | Display result         | `for`                              |
| [x]| `<meter>`    | Inline | Scalar measurement     | `min`, `max`, `value`              |
| [x]| `<progress>` | Inline | Progress indicator     | `max`, `value`                     |


# 📝 Forms & Input Elements in HTML

HTML forms are used to collect user data like login details, search input, feedback, payments, registrations, and more.

## <form>
Description

The <form> element is the main container for all form controls.

It sends user data to a server.

Type

Block Element

| Attribute | Description                    |
| --------- | ------------------------------ |
| `action`  | URL where form data is sent    |
| `method`  | HTTP method (`GET` or `POST`)  |
| `enctype` | Encoding type for file uploads |


```
<form action="/submit" method="POST">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
```
Use Cases
    Login forms
    Registration forms
    Contact forms
    Search forms

## <input>
Description

Creates different types of input fields.

Type

Void Element

| Attribute     | Description           |
| ------------- | --------------------- |
| `type`        | Input type            |
| `name`        | Input name            |
| `placeholder` | Hint text             |
| `required`    | Makes field mandatory |


```
<input 
  type="email" 
  name="email"
  placeholder="Enter email"
  required
>
```

Common Input Types
```
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="checkbox">
<input type="radio">
<input type="file">
<input type="date">
```

Use Cases
    Text entry
    Password fields
    Upload files
    Select dates
    Numbers

## <textarea>
Description

Used for multi-line text input.

Type

Block Element

| Attribute     | Description       |
| ------------- | ----------------- |
| `rows`        | Number of rows    |
| `cols`        | Number of columns |
| `placeholder` | Hint text         |

```
<textarea rows="5" cols="30">
</textarea>
```
Use Cases
    Comments
    Messages
    Feedback forms

## <button>
Description

Creates clickable buttons.

Type

Inline Element

| Attribute  | Description    |
| ---------- | -------------- |
| `type`     | Button type    |
| `disabled` | Disable button |

```
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click</button>
```

Use Cases
    Submit forms
    Reset forms
    Open modals
    Trigger JavaScript

## <select>
Description

Creates a dropdown list.

Type

Inline Element

| Attribute  | Description              |
| ---------- | ------------------------ |
| `name`     | Field name               |
| `multiple` | Allow multiple selection |

```
<select name="country">
  <option>India</option>
  <option>USA</option>
</select>
```

Use Cases
    Country selection
    Category selection
    Language selection

## <option>
Description

Defines an option inside <select>.

Type

Inline Element

| Attribute  | Description             |
| ---------- | ----------------------- |
| `value`    | Actual value            |
| `selected` | Default selected option |

```
<option value="in">India</option>
```

## <optgroup>
Description

Groups related options inside a dropdown.

Type

Inline Element

| Attribute | Description |
| --------- | ----------- |
| `label`   | Group title |

```
<select>
  <optgroup label="Asia">
    <option>India</option>
    <option>Japan</option>
  </optgroup>
</select>
```
Use Cases
    Group countries
    Group categories

## <label>
Description

Adds a label for form controls.

Type

Inline Element

| Attribute | Description             |
| --------- | ----------------------- |
| `for`     | Connects label to input |

```
<label for="email">Email</label>
<input type="email" id="email">
```
Benefits
    Better accessibility
    Easier clicking
    Screen reader support

## <fieldset>
Description

Groups related form controls.

Type

Block Element

| Attribute  | Description        |
| ---------- | ------------------ |
| `disabled` | Disable all fields |

```
<fieldset>
  <legend>Personal Info</legend>

  <input type="text">
</fieldset>
```

Use Cases
    Group address fields
    Group payment fields

## <legend>
Description

Adds a title to <fieldset>.

Type

Block Element

```
<legend>User Details</legend>
```

## <datalist>
Description

Provides predefined suggestions for an input.

Type

Block Element

```
<input list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
```
Use Cases
    Search suggestions
    Autocomplete inputs

## <output>
Description

Displays calculation or result output.

Type

Inline Element

| Attribute | Description    |
| --------- | -------------- |
| `for`     | Related inputs |

```
<form oninput="result.value=a.valueAsNumber+b.valueAsNumber">
  <input type="number" id="a">
  <input type="number" id="b">

  <output name="result"></output>
</form>
```
Use Cases
    Calculators
    Live results

## <meter>
Description

Displays a scalar measurement within a range.

Type

Inline Element

| Attribute | Description   |
| --------- | ------------- |
| `min`     | Minimum value |
| `max`     | Maximum value |
| `value`   | Current value |

```
<meter min="0" max="100" value="75"></meter>
```
Use Cases
    Disk usage
    Battery level
    Skill rating

## <progress>
Description

Shows task progress.

Type

Inline Element

| Attribute | Description      |
| --------- | ---------------- |
| `max`     | Total value      |
| `value`   | Current progress |

```
<progress value="60" max="100"></progress>
```
Use Cases
    File uploads
    Loading indicators
    Download progress