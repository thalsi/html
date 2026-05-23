# <form>

| ✅ | Attribute        | Description                                                               | Example                         |
|----| ---------------- | ------------------------------------------------------------------------- | ------------------------------- |
| [x]| `action`         | URL where the form data will be submitted                                 | `action="/submit-form"`         |
| [x]| `method`         | HTTP method to submit the form (`get`,'dialog' or `post`)                          | `method="post"`                 |
| [x]| `enctype`        | Encoding type for form data (used with `post` method)                     | `enctype="multipart/form-data"` |
| [x]| `name`           | Name of the form (useful in JavaScript)                                   | `name="loginForm"`              |
| [x]| `target`         | Specifies where to open the result (`_self`, `_blank`, `_parent`, `_top`) | `target="_blank"`               |
| [x]| `autocomplete`   | Turns autocomplete on/off for form fields                                 | `autocomplete="on"`             |
| [x]| `novalidate`     | Disables native browser validation for the form                           | `novalidate`                    |
| [x]| `rel`            | Specifies relationship (useful with `target="_blank"`)                    | `rel="noopener noreferrer"`     |
| [x]| `accept-charset` | Character encodings the server can handle                                 | `accept-charset="UTF-8"`        |

## <form> Attributes — Full Explanation with Examples

The <form> element is used to collect user input and send it to a server.

```
<form>
  <!-- form elements -->
</form>
```

### 1. action
What is action?

action specifies where the form data should be sent after the user submits the form.

```
<form action="URL">
```

```
<form action="/submit-form">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>
```

### 2. method
What is method?

method defines how the form data is sent.

| Method   | Purpose                    |
| -------- | -------------------------- |
| `get`    | Sends data in URL          |
| `post`   | Sends data in request body |
| `dialog` | Used with `<dialog>`       |

A. get
Example

```
<form method="get">
  <input type="text" name="search" />
  <button type="submit">Search</button>
</form>
```

Features of get

✅ Data visible in URL
✅ Can bookmark URL
✅ Good for search forms
❌ Not secure for passwords


B. post
Example

```
<form method="post">
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>
```
Features of post

✅ Data hidden from URL
✅ More secure
✅ Used for login/signup/file upload
✅ Large data supported

C. dialog

Used inside <dialog> element.

```
<dialog open>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>
```
Clicking button closes dialog.

3. enctype
What is enctype?

enctype specifies how form data should be encoded before sending.

Mostly used with:

```
method="post"
```

| Value                               | Purpose          |
| ----------------------------------- | ---------------- |
| `application/x-www-form-urlencoded` | Default encoding |
| `multipart/form-data`               | File upload      |
| `text/plain`                        | Plain text       |

A. Default Encoding
```
<form method="post">

application/x-www-form-urlencoded


```

B. multipart/form-data

Required for file upload.

Example

```
<form method="post" enctype="multipart/form-data">
  <input type="file" />
  <button>Upload</button>
</form>
```
Without this, files will not upload properly.

C. text/plain

Sends plain text.

Example
```
<form enctype="text/plain">
```

```
name=John
age=20
```

### 4. name
What is name?

Gives a name to the form.

Useful in JavaScript.

```
<form name="loginForm">
  <input type="text" name="username" />
</form>

<script>
  console.log(document.loginForm);
</script>
```

### 5. target
What is target?

Specifies where to open the response page.

| Value     | Meaning      |
| --------- | ------------ |
| `_self`   | Same tab     |
| `_blank`  | New tab      |
| `_parent` | Parent frame |
| `_top`    | Full window  |

```
<form target="_top">
```
### 6. autocomplete
What is autocomplete?

Controls browser autofill suggestions.

| Value | Meaning             |
| ----- | ------------------- |
| `on`  | Enable suggestions  |
| `off` | Disable suggestions |

Browser remembers previous values.

```
<input type="email" />
```
Browser may suggest saved emails.

Useful for:

OTP fields
Sensitive data


### 7. novalidate
What is novalidate?

Disables browser's built-in validation.

```
<form>
  <input type="email" required />
  <button>Submit</button>
</form>
```

Browser checks:

✅ Required field
✅ Correct email format

With novalidate
```
<form novalidate>
  <input type="email" required />
  <button>Submit</button>
</form>
```
Now browser skips validation.

Why Use It?

Useful when validation is handled using:

JavaScript
Angular
React
Vue

### 8. rel
What is rel?

Defines relationship between current page and target page.

Mostly used with:
```
target="_blank"
```

| Value        | Purpose                          |
| ------------ | -------------------------------- |
| `noopener`   | Prevents access to original page |
| `noreferrer` | Hides referrer info              |
| `external`   | External resource                |

<form
  action="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Visit</button>
</form>

Why noopener?

Without it:

New page can control original page using:

```
window.opener
```
Security risk.


### 9. accept-charset
What is accept-charset?

Defines character encoding for submitted data.

```
<form accept-charset="UTF-8">
```

| Encoding     | Purpose              |
| ------------ | -------------------- |
| `UTF-8`      | Universal encoding   |
| `ISO-8859-1` | Older Latin encoding |


#### Full Complete Example

````
<form
  action="/submit-form"
  method="post"
  enctype="multipart/form-data"
  name="registerForm"
  target="_blank"
  autocomplete="on"
  novalidate
  rel="noopener noreferrer"
  accept-charset="UTF-8"
>
  <input type="text" name="username" placeholder="Username" />

  <input type="email" name="email" placeholder="Email" />

  <input type="file" name="photo" />

  <button type="submit">
    Submit
  </button>
</form>
````