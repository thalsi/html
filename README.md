# 📑 HTML Full Course – Index

## 🟢 Part 1: Beginner Level – Fundamentals

1. Introduction to HTML  
2. HTML Document Structure  
3. Text Elements (`<h1>` to `<h6>`, `<p>`, `<br>`, `<hr>`)  
4. Text Formatting Tags (`<b>`, `<i>`, `<u>`, `<strong>`, `<em>`)  
5. HTML Lists (Ordered & Unordered)  
6. Anchor Tags (`<a>` for links, emails, phone)  
7. Image Embedding (`<img>`)

---

## 🟡 Part 2: Intermediate Level – Structure & Forms

8. Tables (`<table>`, `<tr>`, `<td>`, `<th>`, etc.)  
9. HTML Forms – Inputs, Labels, Selects, Textareas  
10. Semantic HTML (structure tags: `<header>`, `<section>`, `<footer>`, etc.)  
11. HTML Entities (e.g., `&copy;`, `&nbsp;`, `&lt;`, `&gt;`)  
12. Embedding Media (Audio, Video, Iframe)

---

## 🔵 Part 3: Advanced Level – Mastery Essentials

13. Advanced Forms (Validation, file input, hidden fields, autofocus)  
14. Responsive HTML (viewport meta, layout basics)  
15. Accessibility (A11y, alt text, labels, ARIA roles)  
16. SEO Best Practices (semantic tags, metadata, OG tags)  
17. HTML APIs Overview (Canvas, LocalStorage, Geolocation)

---

## 🟣 Part 4: Project Building – Real-World Practice

18. Resume Page Project  
19. Portfolio Website Project  
20. Contact Form with Validation  
21. Blog Page Structure  
22. Landing Page Project

---

## 🔘 Part 5: Integration & Publishing

23. Linking CSS and JavaScript to HTML  
24. Project Folder Structure & Best Practices  
25. Free Hosting – GitHub Pages / Netlify

---


# HTML

### 1.What is html?
- Hyper Text Markup Language.
- HTML is standard markup language for creating Web pages.
- HTML consists of a series of elements.
- HTML elements tell the browser how to display the content.

- markup language list (html, json, docBook etc..)
### 2.HTML Structure Explained

~~~
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <p>My first paragraph.</p>
    </body>
</html>
~~~

- `<!DOCTYPE html>` document type declaration.this document is an HTML5 document and helps browsers to display web pages correctly. not case sensitive
- `<html></html>` this element is root element of an HTML page.
- `<head></head>` this element contains meta data/meta information about the HTML page. 
    + meta data( data that provides information about other data / data that describes other data / information about data)
1. `<meta>`Element
    + The `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.
    + Define the character set used `<meta charset="UTF-8">`
    + Define keywords for search engines `<meta name="keywords" content="HTML, CSS, JavaScript">`
    + Define a description of your web page `<meta name="description" content="Free Web tutorials">`
    + Define the author of a page `<meta name="author" content="John Doe">`
    + Refresh document every 30 seconds `<meta http-equiv="refresh" content="30">`
    + Setting the viewport to make your website look good on all devices `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    + 
- `<title></title>` 
    + title of the HTML page(show on bowser's title bar).
    + The content of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.
- `<body></body>` element defines the document's body. it will be displayed in a browser

### 3. Element
- `<tagName> contant here..</tagName>`
- start tag ,some content and end tag 
- every elements have Start-tag and End-tag but some elements have no end-tag(like `<hr>, <br>`). those elements are called empty elements
- All the HTML elements/tags are case-insensitive.
- Element dispaly type inline and block .
 
### 4. Attributes
- All elements can have Attributes.
- Attributes provide additional information about elements
- Attributes are always specified in the start tag.
- Attributes usually come in name/value pairs like: name="value".
- HTML attributes are generally classified as required attributes, optional attributes, standard attributes, and event attributes [HTML Attributes](https://en.wikipedia.org/wiki/HTML_attribute)

> "You should practice 'event attributes' "

### 5. Tags

#### 1. Heading `<h1></h1>`
- headings are defined with the `<h1>` to `<h6>` tags.
- Browsers automatically add some white space (a margin) before and after a heading
- Search engines use the headings to index the structure and content of your web pages.

```
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### 2. Paragraphs `<p></p>`
- `<p>This is a paragraph.</p>`
- A paragraph always starts on a new line.
- browsers automatically add some white space (a margin) before and after a paragraph.
- you cannot change the display by adding extra spaces or extra lines in your HTML code
- The browser will automatically remove any extra spaces and lines when the page is displayed
```
<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>
```
#### 3. Horizontal Rules `<hr>`

- `<hr>` displayed as a horizontal rule.
- `<hr>` tag is a empty tag. 

#### 4. Line Breack `<br>`

- `<br>` is a line breack tag.
- if you want a new line without starting a new paragraph.
- `<br>` is a empty tag. 

#### 5.preformatted `<pre></pre>`

- `<pre>` element defines preformatted text. 
- displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

- The Poem Problem:-poem will display on a single line.
```
<p>
 this is item paragraph.

 this is item 2 paragraph.
 
 this is item 2 paragraph.
</p>
```

- poem will not display on a single line. so use `<pre>`
```
<pre>
 this is item paragraph.

 this is item 2 paragraph.
 
 this is item 2 paragraph.
</pre>
```
#### 6. Style

- `style` is an attribute.
- Used to add styles to an attribute.

```
<tagName style="property:value;">
<p style="color:blue;">this is style</p>
```

#### 7. Formatting Elements
-  display special types of text.
- `<b></b>`  Bold text
- `<i></i>`  Italic text
- `<em></em>`  Emphasized text
- `<del></del>`  Deleted text
- `<ins></ins>`  Inserted text
- `<sub></sub>`  Subscript text
- `<sup></sup>`  Superscript text
- `<small></small>`  Smaller text
- `<strong></strong>`  Important text
- `<Marked></Marked>`  Italic text


#### 8. Quotation 
- `<blockquote>` 
    + for Quotations
    + section that is quoted from another source
- `<q>`
    + short quotation.
    + Browsers normally insert quotation marks around the quotation.
- `<abbr>`
    + defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".
    + Marking abbreviations can give useful information to browsers, translation systems and search-engines.
    + Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.
- `<address>`
    + tag defines the contact information for the author.
    + The contact information can be an email address, URL, physical address, phone number, social media handle, etc.
    + element usually renders in italic.
- `<cite>`
    + tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).
    + element usually renders in italic.
- `<bdo>`
    + BDO stands for Bi-Directional Override.
    + tag is used to override the current text direction.

#### 9. Comments

- comments are not displayed in the browser but  help document
- more than one line.
`<!-- Write your comments here -->`
- Hide Inline Content
`<p>This <!-- great text --> is a paragraph.</p>`


#### 10. Color
- colors are specified with predefined color name, RGB, RGBA, HSL, HSLA, HEX
1. Color Name
    + All modern browsers support the 140 color names
    + [Color name](https://www.w3schools.com/colors/colors_names.asp)
    + To display red: red

2. RGB 
    + RGB - RED,Green,Bule 
    + formula:- rgb(red, green, bule).
    + Each parameter pass 0 to 255.
    + To display black: like this rgb(0,0,0)
    + To display white: like this rgb(255,255,255) 
    + To display red: like this rgb(255,0,0) 

3. RGBA 
    + Formula:- rgba(red, green, blue, alpha)
    + RGB color values with an Alpha(opacity) channel
    + alpha parameter is a number 0.0 (fully transparent) to 1.0 (not transparent at all).
    +  To display red: rgba(255, 99, 71, 0.8)

4. HEX
    + hexadecimal color is specified with: #rrggbb
    + 00 and ff (same as decimal 0-255).
    + hexadecimal mean(0 to 9 - a to f) total 16 decimal number
    + highest value (ff) and lowest value (00)
    + To display red: #ff0000

5. HSL
    + HSL stands for hue, saturation, and lightness.
    + Formula:- hsl(hue, saturation, lightness).
    + Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
    + Saturation is a 0% (shade of gray) to 100% (full color). 
    + Lightness is 0% (black) to 100% (white).
    + To display red: hsl(0, 100%, 50%)

6. HSLA 
    + HSL color values, with an Alpha(opacity) channel
    + Formula:- hsla(hue, saturation, lightness, alpha)
    + alpha parameter is a number 0.0 (fully transparent) to 1.0 (not transparent at all).
    + To display red:hsla(0, 100%, 50%, 0.5)

#### 11. Styles - CSS
- CSS stands for Cascading Style Sheets.
- It can control the layout of multiple web pages all at once.
- Quicker Development Time
- CSS can be added to HTML documents in 3 ways
    1. Inline - by using the style attribute inside HTML elements.
    2. Internal - by using a `<style>` element in the `<head>` section.
    3. External - by using a `<link>` element to link to an external CSS file.
#### 12. Images
- `<img>` tag is used to embed an image in a web page.   
- Images are not technically inserted into a web page; images are linked to web pages.
- The `<img>` tag creates a holding space for the referenced image.
- The `<img>` tag is empty, it contains attributes only.
- The `<img>` tag has two required attributes:
    1. src - Specifies the path to the image.
    2. alt - Specifies an alternate text for the image


```
<img src="url" alt="alternatetext">
```
- Images in Another Folder
    `<img src="/image/monkey.jpg" alt="Monkey" style="width:100px;height:150px;">`

- Images on Another Server/Website
    `<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">`
    
- Image as a Link
    ```
    <a href="https://translate.google.com/">
        <img src="/image/monkey.jpg" alt="Monkey" style="width:42px;height:42px;">
    </a>
    ```
##### 1. Image map.   
- `<map>` tag defines an image map. An image map is an image with clickable areas.The areas are defined with one or more `<area>` tags. `usemap` attribute of the `<img>` element to point to an image map
- A clickable area is defined using an `<area>` element
- Shape
    + rect 
    + circle 
    + poly 
    + default 
```
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```
##### 2. Background Image.
-  background image on an HTML element, use the HTML style attribute and the CSS background-image property.
```
<p style="background-image: url('abc.jpg');">
```  

##### 3. picture 
- `<picture>` element allows you to display different pictures for different devices or screen sizes.
- `<picture>` element gives web developers more flexibility in specifying image resources.
-  The `<img>` element is used by browsers that do not support the `<picture>` element, or if none of the `<source>` tags match.
```
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>
```
#### 13. Favicon 
- A favicon is a small image, so it should be a simple image with high contrast.
- A common name for a favicon image is "favicon.ico"

#### 14. Table
- Table cells inside rows and columns.
- `<table></table>` crate table.
- `<tr></tr>` mean by table row.
- `<th></th>` mean by table heading.
- `<td></td>` mean by table colum/cell
##### 1.Borders
1. border -  add a border, use the CSS border property on table, th, and td elements
2. border-collapse - avoid having double borders.set the CSS "border-collapse" property to "collapse".
3. Style Table Borders
4. Round Table Borders - "border-radius" property, the borders get rounded corners.
5. Dotted Table Borders - "border-style" property, you can set the appearance of the border
    - dotted     
    - dashed     
    - solid     
    - double     
    - groove     
    - ridge     
    - inset     
    - outset     
    - none     
    - hidden
6. Border Color - "border-color" property, you can set the color of the border.
```
<table>
    <tr>
        <th>Hading</th>
    </tr>
    <tr>
        <td>cell</td>
    </tr>
</table>
```
##### 2.Sizes
1. Use the "style" attribute with the "width" or "height" properties to specify the size of a table, row or column.
2. Using a percentage as the size unit for a width means how wide will this element be compared to its parent element, which in this case is the `<body>` element.

##### 2.Headers
1. Align Table Headers -  use the CSS "text-align" property.
2. Header for Multiple Columns - use the "colspan" attribute on the `<th>` element.
3. Table Caption - add a caption that serves as a heading for the entire table.use the `<caption>` tag.The `<caption>` tag should be inserted immediately after the `<table>` tag.

##### 3. Padding & Spacing
- tables can adjust the padding inside the cells, and also the space between the cells.
1. Cell Padding
    + Cell padding is the space between the cell edges and the cell content.
    + By default the padding is set to 0.
    + add padding on table cells, use the "CSS padding" property
        - padding-top
        - padding-bottom
        - padding-left
        - padding-right 
2. Cell Spacing
    + Cell spacing is the space between each cell.
    + By default the space is set to 2 pixels.
    + To change the space between table cells, use the "CSS border-spacing" property on the table element
    
##### 4. Colspan & Rowspan
- tables can have cells that span over multiple rows and/or columns.
1. Colspan
    + Cell span over multiple columns, use the "colspan" attribute.
2. Rowspan
    + Cell span over multiple rows, use the "rowspan" attribute.

##### 5. Table Styling
- Use CSS to make your tables look better. use the ":nth-child(even/odd)"
1. Zebra Stripes
2. Vertical Zebra Stripes
3. Vertical and Horizontal Zebra Stripes
4. Horizontal Dividers
5. Hoverable Table - Use the :hover selector on tr to highlight table rows on mouse over.

##### 6. Table Colgroup
- `<colgroup>` element is used to style specific columns of a table.
-  The `<colgroup>` tag must be a child of a `<table>` element and should be placed before any other table elements, like `<thead>, <tr>, <td>` etc.
- Each group is specified with a `<col>` element.
    + "span" attribute specifies how many columns that get the style.
    + "style" attribute specifies the style to give the columns.
- Legal CSS Properties - There is only a very limited selection of CSS properties 
    1. width property
    2. visibility property
    3. background properties
    4. border properties
##### 1. Multiple Col Elements
```
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
    <col span="3" style="background-color: pink">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
  </tr>
  ...
```
##### 2. Empty Colgroups
```
<table>
  <colgroup>
    <col span="3">
    <col span="2" style="background-color: pink">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
...
```
##### 2. Hide Columns
- hide columns with the visibility: collapse property
```
<table>
  <colgroup>
    <col span="2">
    <col span="3" style="visibility: collapse">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
...
```

#### 15. Lists
- Group a set of related items in lists.
- Type of list
    1. Odered list
        + `<ol>` tag defines an ordered list. An ordered list can be numerical or alphabetical.
        + An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.
        + The type attribute of the `<ol>` tag, defines the type:- type="1", type="A", type="a", type="I", type="i".

    2. Unodered list
        + `<ul>` tag defines an unordered (bulleted) list.
        + An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.
        + The CSS "list-style-type" property is used to define the style of the list item marker.  defines the type:-disc, circle, square, none.

    3. Description list
        + A description list is a list of terms, with a description of each term.
        + The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term.

#### 16. Block and Inline Elements
- There are two display values: block and inline.

1. Block-level Elements
    + A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
    + A block-level element always takes up the full width available
    + eg:- `<p></p>`, `<div></div>`, etc..

2. Inline Elements
    + An inline element does not start on a new line.
    + An inline element only takes up as much width as necessary.
    + eg:- `<span>`,`<hr>`, etc.. 

#### 17. class Attribute
- The "class" attribute can be used on any HTML element.
- Multiple classes use in one element.
- Different Elements Can Share Same Class
- Use of The class Attribute in JavaScript

#### 18. id Attribute
- The "id" attribute specifies a unique id for an HTML element.
- The "id" attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific "id".
- The id name is case sensitive!.
- A "class" name can be used by multiple HTML elements, while an "id" name must only be used by one HTML element within the page.
- Using The id Attribute in JavaScript
    + JavaScript can access an element with a specific id with the "getElementById()" method
- HTML Bookmarks with ID and Links
    + bookmarks are used to allow readers to jump to specific parts of a webpage.
    ```
    <p><a href="#C4">Jump to Chapter 4</a></p>
    <h2 id="C4">Chapter 4</h2>
    ```
#### 19. script tag
- `<script>` tag is used to define a client-side script (JavaScript).
- The `<script>` element either contains script statements, or it points to an external script file through the src attribute.

#### 20. File Paths
- A file path describes the location of a file in a web site's folder structure.
1. Absolute File Paths
    + An absolute file path is the full URL to a file.
    + `<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">`
2. Relative File Paths
    + A relative file path points to a file relative to the current page.
    + `<img src="/images/picture.jpg" alt="Mountain">`


#### 20. iframes
- iframe is used to display a web page within a web page.
- `<iframe>` tag specifies an inline frame(iframe element loads another HTML page within the document).
- It is a good practice to always include a "title attribute" for the `<iframe>`. This is used by screen readers to read out what the content of the iframe.

##### 1. Target for a Link
- An iframe can be used as the target frame for a link.
- The "target attribute" of the link must refer to the "name attribute" of the iframe.
```
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```
#### 21. Layout Elements
- several semantic elements that define the different parts of a web page
    1. `<header>` - Defines a header for a document or a section.
    2. `<nav>` - Defines a set of navigation links
    3. `<section>` - Defines a section in a document
    4. `<article>` - Defines an independent, self-contained content
    5. `<aside>` - Defines content aside from the content (like a sidebar)
    6. `<footer>` - Defines a footer for a document or a section
    7. `<details>` - Defines additional details that the user can open and close on demand
    8. `<summary>` - Defines a heading for the `<details>` element.

#### 22. Layout Techniques
1. CSS framework
2. CSS float property
3. CSS flexbox
4. CSS grid
 
#### 23. Responsive Web Design
- Responsive web design is about creating web pages that look good on all devices
- A responsive web design will automatically adjust for different screen sizes and viewports
- Setting The Viewport
    + `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

1. Responsive Images
- Responsive images are images that scale nicely to fit any browser size.
- "CSS width property" is set to 100%, the image will be responsive and scale up and down.
    + `<img src="img_girl.jpg" style="width:100%;">`
- Notice that in the example above, the image can be scaled up to be larger than its original size. A better solution, in many cases, will be to use the "max-width" property instead.    
    + `<img src="img_girl.jpg" style="max-width:100%;height:auto;">`
    
##### 1. Show Different Images Depending on Browser Width
- `<picture>` element allows you to define different images for different browser window sizes.
```
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>
```
##### 2. Responsive Text Size
- The text size can be set with a "vw" unit, which means the "viewport width".
- Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.
`<h1 style="font-size:10vw">Hello World</h1>`

##### 3. Media Queries
- In addition to resize text and images, it is also common to use media queries in responsive web pages.
- media queries you can define completely different styles for different browser sizes.
```
<style>
.left, .right {
  float: left;
  width: 20%; /* The width is 20%, by default */
}

.main {
  float: left;
  width: 60%; /* The width is 60%, by default */
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
```


#### 24. Computer Code Elements
- HTML contains several elements for defining user input and computer code.
##### 1. `<kbd>` For Keyboard Input 
 -  `<kbd>` element is used to define keyboard input.
 - The content inside is displayed in the browser's default monospace font.
 ```
 <p>Save the document by pressing <kbd>Ctrl + S</kbd></p>
 ```
##### 2. `<samp>` For Program Output 
- `<samp>` element is used to define sample output from a computer program.
- The content inside is displayed in the browser's default monospace font.
```
<p>Message from my computer:</p>
<p><samp>File not found.<br>Press F1 to continue</samp></p>
```
##### 3. `<code>` For Computer Code 
- `<code>` element  is used to define a piece of computer code.
- `<code>` element does not preserve extra whitespace and line-breaks.
```
<code>
x = 5;
y = 6;
z = x + y;
</code>
```
##### 4. `<var>` For Variables 
- `<var>` element  is used to define a variable in programming or in a mathematical expression.
- The content inside is typically displayed in italic.

```
<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>
```

####  25. Semantic Elements

- semantic element clearly describes its meaning to both the browser and the developer.
- non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.
- Many web sites contain HTML code like: `<div id="nav"> <div class="header"> <div id="footer">` to indicate navigation, header, and footer.
```
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```
---

# 📌 HTML Full Course – Table of Contents

## 1️⃣ Introduction to HTML
- What is HTML?
- History of HTML (HTML4, XHTML, HTML5)
- How HTML Works
- Basic Tools Needed (Text Editors, Browsers)
- HTML vs. CSS vs. JavaScript
- Inspecting HTML with DevTools

## 2️⃣ Basic HTML Structure
- `<!DOCTYPE html>` Declaration
- `<html>` Root Element
- `<head>` Section (Metadata)
- `<body>` Section (Visible Content)
- Comments (`<!-- Comment -->`)

## 3️⃣ HTML Elements & Tags
- Opening & Closing Tags
- Self-Closing Tags (`<img>`, `<br>`, `<hr>`)
- Block vs. Inline Elements
- HTML Attributes (`id`, `class`, `style`, `data-*`)
- HTML Section Commenting (e.g. `<!-- Header Section -->`)

## 4️⃣ Text Formatting & Typography
- Headings (`<h1>` to `<h6>`)
- Paragraphs (`<p>`)
- Bold (`<b>`, `<strong>`)
- Italic (`<i>`, `<em>`)
- Underline (`<u>`), Strikethrough (`<s>`, `<del>`)
- Superscript (`<sup>`), Subscript (`<sub>`)
- Preformatted Text (`<pre>`), Code (`<code>`)
- Quotations (`<blockquote>`, `<q>`, `<cite>`)
- Horizontal Rule (`<hr>`), Line Break (`<br>`)

## 5️⃣ Links & Anchors
- `<a>` Tag (Hyperlinks)
- Absolute vs. Relative URLs
- Linking to Sections (`#id`)
- Email (`mailto:`), Phone (`tel:`), Download Links
- Link Targets (`_blank`, `_self`, `_parent`, `_top`)

## 6️⃣ Images & Graphics
- `<img>` Tag (`src`, `alt`, `width`, `height`)
- Image Formats (JPEG, PNG, SVG, WebP)
- Responsive Images (`srcset`, `sizes`)
- Lazy Loading (`loading="lazy"`)
- Figure & Figcaption (`<figure>`, `<figcaption>`)

## 7️⃣ Lists
- Ordered Lists (`<ol>`, `<li>`)
- Unordered Lists (`<ul>`, `<li>`)
- Definition Lists (`<dl>`, `<dt>`, `<dd>`)
- Nested Lists

## 8️⃣ Tables
- `<table>`, `<tr>`, `<td>`, `<th>`
- Table Headers (`<thead>`, `<tbody>`, `<tfoot>`)
- Merging Cells (`colspan`, `rowspan`)
- Table Captions (`<caption>`)
- Styling Tables (Basic CSS)

## 9️⃣ Forms & Input Elements
- `<form>` Tag (`action`, `method`, `enctype`)
- Input Types (`text`, `password`, `email`, `number`, `date`, `file`, etc.)
- Textarea (`<textarea>`)
- Dropdowns (`<select>`, `<option>`, `<optgroup>`)
- Checkboxes (`<input type="checkbox">`)
- Radio Buttons (`<input type="radio">`)
- Buttons (`<button>`, `<input type="submit">`)
- Form Validation (`required`, `pattern`, `min`, `max`)
- Fieldset & Legend (`<fieldset>`, `<legend>`)

## 🔟 Semantic HTML (HTML5)
- Why Semantic HTML?
- `<header>`, `<footer>`, `<nav>`
- `<main>`, `<article>`, `<section>`
- `<aside>`, `<figure>`, `<figcaption>`
- `<time>`, `<mark>`, `<progress>`

## 1️⃣1️⃣ Multimedia (Audio & Video)
- `<audio>` Tag (`controls`, `autoplay`, `loop`)
- `<video>` Tag (`controls`, `autoplay`, `muted`)
- Embedding YouTube/Vimeo (`<iframe>`)
- `<track>` for Subtitles

## 1️⃣2️⃣ HTML5 APIs
- Geolocation API
- Local Storage & Session Storage
- Web Workers
- Drag & Drop API
- Canvas API (`<canvas>`)
- SVG in HTML

## 1️⃣3️⃣ Meta Tags & SEO Basics
- `<meta charset="UTF-8">`
- Viewport Meta Tag (`<meta name="viewport">`)
- Title & Description (`<title>`, `<meta name="description">`)
- Open Graph (OG) Tags for Social Media
- Favicons (`<link rel="icon">`)

## 1️⃣4️⃣ Accessibility (A11y) in HTML
- ARIA Roles (`role="navigation"`, `role="button"`)
- Alt Text for Images
- Semantic HTML for Screen Readers
- Keyboard Navigation (`tabindex`)

## 1️⃣5️⃣ Advanced HTML Concepts
- HTML Entities (`&copy;`, `&nbsp;`, `&lt;`, etc.)
- Microdata & Structured Data (Schema.org)
- Web Components (Custom Elements, Shadow DOM)
- Responsive Images with `<picture>`
- Embedding Maps (Google Maps, OpenStreetMap)

## 1️⃣6️⃣ HTML Best Practices
- Clean & Readable Code
- Proper Indentation
- Validating HTML (W3C Validator)
- VSCode Extensions (Live Server, Prettier)
- Performance Optimization
- Security Considerations (XSS Prevention)

## 1️⃣7️⃣ Final Project: Build a Complete Website
- Personal Portfolio Website
- Blog Layout
- E-Commerce Product Page
- Hosting on GitHub Pages / Netlify
