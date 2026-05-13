
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

# 📑 HTML Document Structure — Deep Explanation with Examples

## 1️⃣ <!DOCTYPE> — Document Type Declaration
✅ What is it?

Tells the browser:

“This document uses HTML5.”

Without it, browsers may enter quirks mode (old rendering mode).

✅ Syntax
```
<!DOCTYPE html>
```
✅ Important Points
Must be the first line
Not an HTML tag
No closing tag
HTML5 uses simple declaration

## 2️⃣ <html> — Root Element
✅ What is it?

The main root container of the entire HTML page.

Everything must be inside <html>.

✅ Syntax
```
<html>
</html>
```

✅ Important Attributes
| Attribute  | Description                       |
| ---------- | --------------------------------- |
| `lang`     | Language of page                  |
| `manifest` | Offline cache manifest (obsolete) |

✅ lang Attribute

Helps:

Screen readers
Search engines
Translators

```
<html lang="en">
```

## 3️⃣ <head> — Metadata Container
✅ What is it?

Contains:

Page settings
SEO data
CSS
JS links
Fonts
Metadata

Not visible directly on webpage.

✅ Common Elements Inside <head>
```
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>My Shop</title>

  <link rel="stylesheet" href="style.css">

  <script src="app.js" defer></script>
</head>
```

## 4️⃣ <title> — Browser Tab Title
✅ What is it?

Sets:

Browser tab text
Search engine title
Bookmark title

✅ Syntax
```
<title>My Website</title>
```

✅ SEO Importance

Very important for:

Google ranking
Search results

## 5️⃣ <base> — Base URL
✅ What is it?

Sets a base URL for all relative URLs.

✅ Syntax
```
<base href="https://example.com/">
```

✅ Example Without <base>
```
<a href="about.html">About</a>
```
Browser looks:
```
current-folder/about.html
```

✅ Example With <base>
```
<head>
  <base href="https://mysite.com/">
</head>

<body>
  <a href="about.html">About</a>
</body>
```

Browser opens:
```
https://mysite.com/about.html
```

✅ target Attribute
```
<base target="_blank">
```
All links open in new tab.

6️⃣ <meta> — Metadata
✅ What is it?

Provides information about webpage.

Not visible on page.

✅ Common Meta Tags

🔹 Charset

Defines character encoding.
```
<meta charset="UTF-8">
```
Supports:

English
Malayalam
Arabic
Emoji


🔹 Viewport

Responsive design for mobile.
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

🔹 Description

SEO description.
```
<meta name="description" content="Best men's dress shop">
```
Google may show this in search results.

🔹 Keywords
```
<meta name="keywords" content="shirt, pant, men fashion">
```

🔹 Author
```
<meta name="author" content="Thasleeh">
```
✅ Example
```
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="description"
    content="Best shopping website"
  >
</head>
```

## 7️⃣ <link> — External Resource Link
✅ What is it?

Connects external files.

Mostly used for:

CSS
Fonts
Icons

✅ Syntax
```
<link rel="stylesheet" href="style.css">
```
| Attribute | Description  |
| --------- | ------------ |
| `rel`     | Relationship |
| `href`    | File URL     |
| `type`    | File type    |

✅ CSS Example
```
<link rel="stylesheet" href="style.css">
```

✅ Favicon Example
```
<link rel="icon" href="logo.png">
```
Browser tab icon.

## 8️⃣ <style> — Internal CSS
✅ What is it?

Adds CSS directly inside HTML.

✅ Syntax
```
<style>
  h1 {
    color: red;
  }
</style>
```
✅ Example
```
<head>
  <style>
    body {
      background: lightblue;
    }

    h1 {
      color: darkblue;
    }
  </style>
</head>
```

## 9️⃣ <script> — JavaScript
✅ What is it?

Adds JavaScript to webpage.

```
<script>
  alert("Hello");
</script>
```

✅ External Script
```
<script src="app.js"></script>
```

| Attribute | Description            |
| --------- | ---------------------- |
| `src`     | JS file                |
| `async`   | Load asynchronously    |
| `defer`   | Run after HTML parsing |
| `type`    | Script type            |

✅ async

Downloads independently.

Execution order not guaranteed.
```
✅ async

Downloads independently.

Execution order not guaranteed.
```
<script src="app.js" async></script>
```
✅ defer

Best for most cases.

Runs after HTML loaded.
```
<script src="app.js" defer></script>
```

## 🔟 <noscript> — No JavaScript Fallback
✅ What is it?

Shows content if JavaScript disabled.
```
<noscript>
  Please enable JavaScript.
</noscript>
```

## 1️⃣1️⃣ <body> — Visible Page Content
✅ What is it?

Contains all visible webpage content.