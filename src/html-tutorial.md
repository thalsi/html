## 1. Introduction to HTML

- What is HTML?
- History of HTML (HTML1–HTML5)
- How HTML Works (Browser Rendering)
- Basic Tools (Text Editors & Browsers)
- HTML vs. CSS vs. JavaScript
- Inspecting HTML with DevTools
- Quirks Mode vs. Standards Mode
    1. Standards Mode: 
        - <!DOCTYPE html>
        - The div's total width = 300 + 20 + 5 + 20 + 5 = 350px
    2. Quirks Mode:
        - Legacy support (for old/non-standard code)
        - Doctype Not Required
        - The div's total width = just 300px (padding and border shrink content area)

---

## 2. Basic HTML Structure
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
    </body>
</html>
```
1. `<!DOCTYPE html>`
    - This is the document type declaration. 
    - It tells the browser that this is an HTML5 document.
    - Helps the browser use the correct rendering mode (called standards mode).
    - Without this, the browser might switch to Quirks Mode, which can cause layout and styling problems.

2. `<html lang="en">` 
    - Root Element
    - `lang="en"` means the content is in English, which helps screen readers and search engines.
        - Search engines (SEO)
        - Screen readers (accessibility)

3. `<head>` 
    - This is the head Section (Metadata)
    - It contains metadata (information about the page, not shown to the user directly).
    - Encoding
    - Page title
    - Links to CSS or fonts
    - Meta data

4. <meta>
    - Meta tags provide essential metadata about an HTML document that isn't visible to users but is crucial for browsers, search engines, and other web services.
    1. Core Meta Tags
        1. Character Encoding 
            - <meta charset="UTF-8">
            - Sets the character encoding to UTF-8
            - which supports almost all characters and languages.
            - Helps prevent issues with displaying special characters like ç, ñ, €, ✓, etc.
            
        2. Viewport
            - <meta name="viewport" content="width=device-width, initial-scale=1.0">
            - Makes your website responsive (works well on mobile and desktop).
            - `width=device-width` sets the page width to match the screen size.
            - `initial-scale=1.0` sets the initial zoom level to normal.
            - Without this, your site might appear zoomed out or broken on phones.

        3. Compatibility
            - <meta http-equiv="X-UA-Compatible" content="IE=edge">
            - Forces Internet Explorer to use its latest rendering engine
            - Less important now with IE's decline

    2. SEO Meta Tags
        1. Description
            - Appears in search engine results (typically under the title)
            - Optimal length: 150-160 characters
            - Should be unique per page

        2. Keywords (largely obsolete)
            - <meta name="keywords" content="keyword1, keyword2, keyword3">
            - Modern search engines ignore this due to past spam abuse
            - Still sometimes used by internal site search
        
        3. Robots
            - <meta name="robots" content="index,follow">
            - Controls search engine crawling/indexing:
                - index/noindex: Allow/prevent page indexing
                - follow/nofollow: Allow/prevent link following
                - noarchive: Prevent cached copies
                - nosnippet: Prevent search result snippets

    3. Social Media Meta Tags
        1. Open Graph (Facebook, LinkedIn, etc.)
            ```
            <meta property="og:title" content="Page Title">
            <meta property="og:description" content="Description">
            <meta property="og:image" content="image_url">
            <meta property="og:url" content="page_url">
            <meta property="og:type" content="website/article/etc.">
            ```
        2. Twitter Cards
            ```
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Page Title">
            <meta name="twitter:description" content="Description">
            <meta name="twitter:image" content="image_url">
            ```
    4. Advanced Meta Tags
        1. Refresh/Redirect
            - <meta http-equiv="refresh" content="5;url=https://example.com">
            - Refreshes page or redirects after specified seconds
            - Considered poor practice (better to use HTTP headers or JavaScript)

        2. Content Security Policy
            - <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
            - Helps prevent XSS attacks by defining allowed content sources
            
        3. Theme Color
            - <meta name="theme-color" content="#4285f4">
            - Sets browser UI color on mobile devices
            - Can be made dynamic with media queries:
                ```
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black">
                ```
    
5. <title>Document</title>
    - Sets the title of the webpage (shown in the browser tab or window title).
    - Appears in:
        - Browser tab
        - Bookmarks
        - Search engine result titles

6. <body></body>
    - This is the body section — everything visible on your web page (text, images, buttons) goes here.

7. Comments (`<!-- Comment -->`)
8. HTML Syntax Rules



---


