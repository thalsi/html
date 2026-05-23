# <input type="submit">

<input type="submit"> creates a:

Submit button

Used to:

Submit form data to server

When clicked:

Form data is sent.

```
<input type="submit">
```

Common Attributes for submit

| Attribute        | Description                 |
| ---------------- | --------------------------- |
| `type="submit"`  | Creates submit button       |
| `name`           | Button name                 |
| `id`             | Unique identifier           |
| `class`          | CSS styling                 |
| `value`          | Button text                 |
| `form`           | Connects button to form     |
| `formaction`     | URL where form submits      |
| `formenctype`    | Form data encoding type     |
| `formmethod`     | HTTP method (`GET`, `POST`) |
| `formtarget`     | Where response opens        |
| `formnovalidate` | Skips validation            |
| `title`          | Extra help message          |

7. formaction

Overrides form action URL.
```
<input
  type="submit"
  formaction="/save-data"
>
```

8. formenctype

Defines encoding type.

Mostly used for:

File uploads

| Value                               | Purpose     |
| ----------------------------------- | ----------- |
| `application/x-www-form-urlencoded` | Default     |
| `multipart/form-data`               | File upload |
| `text/plain`                        | Plain text  |

9. formmethod

Defines HTTP method.
```
<input
  type="submit"
  formmethod="get"
>
```

10. formtarget

Defines where response opens.
```
<input
  type="submit"
  formtarget="_blank"
>
```
| Value     | Meaning      |
| --------- | ------------ |
| `_self`   | Same tab     |
| `_blank`  | New tab      |
| `_parent` | Parent frame |
| `_top`    | Full window  |

11. formnovalidate

Skips form validation.

```
<input
  type="submit"
  formnovalidate
>
```
Even required fields are ignored.