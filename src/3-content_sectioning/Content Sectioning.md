## 📑 Content Sectioning

| ✅ | Element      | Type  | Description                   | Key Attributes |
|----|--------------|--------|--------------------------------|----------------|
| [x] | `<header>`  | Block  | Introductory content           | None           |
| [x] | `<footer>`  | Block  | Footer content                 | None           |
| [x] | `<nav>`     | Block  | Navigation links               | None           |
| [x] | `<main>`    | Block  | Main content of page           | None           |
| [x] | `<article>` | Block  | Self-contained composition     | None           |
| [x] | `<section>` | Block  | Thematic grouping of content   | None           |
| [x] | `<aside>`   | Block  | Sidebar/supplementary content  | None           |
| [x] | `<h1>`      | Block  | Level 1 heading                | None           |
| [x] | `<h2>`      | Block  | Level 2 heading                | None           |
| [x] | `<h3>`      | Block  | Level 3 heading                | None           |
| [x] | `<h4>`      | Block  | Level 4 heading                | None           |
| [x] | `<h5>`      | Block  | Level 5 heading                | None           |
| [x] | `<h6>`      | Block  | Level 6 heading                | None           |
| [x] | `<address>` | Block  | Contact information            | None           |
| [x] | `<hgroup>`  | Block  | Groups heading/subheading      | None           |


## 📑 Content Sectioning Elements (HTML5)

Content sectioning elements are used to organize the structure of a webpage semantically.
They improve:

✅ Accessibility
✅ SEO
✅ Readability
✅ Maintainability
✅ Screen Reader Navigation

## 🧱 Sectioning Elements Overview

| Element     | Purpose                            |
| ----------- | ---------------------------------- |
| `<header>`  | Intro/header area                  |
| `<footer>`  | Footer area                        |
| `<nav>`     | Navigation links                   |
| `<main>`    | Main unique page content           |
| `<article>` | Independent/self-contained content |
| `<section>` | Thematic grouping                  |
| `<aside>`   | Sidebar/related content            |
| `<h1>–<h6>` | Headings hierarchy                 |
| `<address>` | Contact information                |
| `<hgroup>`  | Groups heading + subheading        |


### <header>
✅ Description

Represents introductory content for a page or section.

Usually contains:

Logo
Title
Navigation
Search
Intro text

✅ Example
```
<header>
  <h1>Health Tips</h1>

  <nav>
    <a href="#">Home</a>
    <a href="#">Articles</a>
  </nav>
</header>
```

✅ Use Cases
Website top area
Article header
Card header
Section intro
⚠️ Notes
Multiple <header> elements allowed
Cannot be inside <footer>

### <footer>
✅ Description

Represents footer information for a page or section.

Usually contains:

Copyright
Author info
Links
Contact info
Social media

✅ Example
```
<footer>
  <p>© 2026 Health Tips</p>
</footer>
```

✅ Use Cases
Website footer
Article footer
Section footer

### <nav>
✅ Description

Defines navigation links.

Used for:

Main menu
Sidebar menu
Breadcrumbs
Pagination

✅ Example
```
<nav>
  <a href="/">Home</a>
  <a href="/fitness">Fitness</a>
  <a href="/contact">Contact</a>
</nav>
```
✅ Accessibility Benefit

Screen readers can quickly identify navigation areas.

### <main>
✅ Description

Represents the primary unique content of the document.

Only ONE <main> should exist per page.

```
<main>
  <h1>Fitness Tips</h1>
  <p>Daily workout improves health.</p>
</main>
```
⚠️ Rules
Only one <main>
Cannot be inside:
<header>
<footer>
<article>
<aside>
<nav>

### <article>
✅ Description

Represents self-contained independent content.

The content should make sense independently.

✅ Examples
Blog post
News article
Forum post
Product card
Comment

✅ Example
```
<article>
  <h2>Benefits of Walking</h2>
  <p>Walking improves heart health.</p>
</article>
```

<section>
✅ Description

Represents a thematic grouping of content.

Usually contains a heading.

✅ Example
```
<section>
  <h2>Nutrition Tips</h2>
  <p>Eat healthy foods daily.</p>
</section>
```
| `<section>`        | `<article>`         |
| ------------------ | ------------------- |
| Part of page       | Independent content |
| Thematic grouping  | Self-contained      |
| Depends on context | Can stand alone     |

<aside>
✅ Description

Represents supplementary/secondary content.

Usually:

Sidebar
Ads
Related links
Author bio

✅ Example
```
<aside>
  <h3>Related Articles</h3>

  <ul>
    <li><a href="#">Weight Loss</a></li>
    <li><a href="#">Healthy Diet</a></li>
  </ul>
</aside>
```

### <h1> → <h6>
✅ Description

Heading hierarchy elements.
| Element | Importance     |
| ------- | -------------- |
| `<h1>`  | Main title     |
| `<h2>`  | Section title  |
| `<h3>`  | Subsection     |
| `<h4>`  | Nested section |
| `<h5>`  | Lower level    |
| `<h6>`  | Lowest level   |

✅ Example
```
<h1>Health Website</h1>

<h2>Fitness</h2>

<h3>Cardio Exercises</h3>
```

✅ SEO Importance

Search engines use headings to understand page structure.

⚠️ Best Practices

✅ Use hierarchy properly
```
<h1>Main</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```
❌ Avoid skipping levels
```
<h1>Main</h1>
<h4>Wrong</h4>
```

### <address>
✅ Description

Represents contact information.

Can include:

Email
Phone
Address
Author info

✅ Example
```
<address>
  Contact us:
  info@example.com
</address>
```

⚠️ Notes

Not for random addresses.

Used specifically for:

Author contact
Organization contact

### <hgroup>
✅ Description

Groups a heading and subheading together.

✅ Example
```
<hgroup>
  <h1>Fitness Guide</h1>
  <p>Complete health improvement tips</p>
</hgroup>
```

⚠️ Notes
Rarely used
Limited browser support history
Modern developers often use:
<header>
headings
<p>

instead.

🧩 Semantic HTML Structure

```
<body>
 ├── <header>
 ├── <nav>
 ├── <main>
 │     ├── <section>
 │     │      └── <article>
 │     └── <aside>
 └── <footer>
```

✅ Best Practices

| ✅ Do                                   | ❌ Avoid                    |
| -------------------------------------- | -------------------------- |
| Use semantic elements                  | Use too many `<div>`       |
| Proper heading order                   | Skip heading levels        |
| One `<main>`                           | Multiple `<main>`          |
| Use `<article>` for standalone content | Use `<section>` everywhere |
| Use `<nav>` for major navigation       | Wrap all links in `<nav>`  |


# `<header>`

## ✅ Proper Use Cases
- Website top area
- Logo section
- Main navigation area
- Hero intro section
- Article heading
- Section heading
- Search bar area
- User profile top area
- Dashboard topbar

---

## ❌ Don’t Use
- Generic layout wrapper
- Footer content
- Sidebar container
- Entire page container
- Styling-only wrapper

---

## ✅ We Can Use Inside
- `<body>`
- `<main>`
- `<article>`
- `<section>`
- `<aside>`

Example:

```html
<article>
  <header>
    <h2>Fitness Tips</h2>
  </header>
</article>
```

---

## ❌ Don’t Use Inside
- `<footer>`

---

## 🔁 Multiple Use
✅ Yes

You can use multiple `<header>` elements.

Example:
- One website header
- One article header
- One section header

---

# `<footer>`

## ✅ Proper Use Cases
- Copyright area
- Legal links
- Contact info
- Social media links
- Author information
- Article ending
- Newsletter links
- Sitemap links

---

## ❌ Don’t Use
- Main content area
- Hero section
- Main navigation wrapper
- Generic layout container

---

## ✅ We Can Use Inside
- `<body>`
- `<article>`
- `<section>`
- `<main>`

Example:

```html
<article>
  <footer>
    Written by Admin
  </footer>
</article>
```

---

## ❌ Don’t Use Inside
- `<header>`

---

## 🔁 Multiple Use
✅ Yes

You can use:
- Website footer
- Article footer
- Section footer

---

# `<nav>`

## ✅ Proper Use Cases
- Main menu
- Sidebar navigation
- Mobile menu
- Breadcrumbs
- Pagination
- Category navigation
- Table of contents
- Footer navigation

---

## ❌ Don’t Use
- Every group of links
- Buttons container
- Social icons only
- Random anchor tags

---

## ✅ We Can Use Inside
- `<header>`
- `<footer>`
- `<aside>`
- `<section>`
- `<main>`

Example:

```html
<header>
  <nav>
    <a href="#">Home</a>
  </nav>
</header>
```

---

## ❌ Don’t Use Inside
- Inline elements like:
  - `<span>`
  - `<strong>`

---

## 🔁 Multiple Use
✅ Yes

You can have:
- Main nav
- Footer nav
- Sidebar nav
- Pagination nav

---

# `<main>`

## ✅ Proper Use Cases
- Main page content
- Dashboard content
- Product details
- Blog content
- Application content
- Main article area

---

## ❌ Don’t Use
- Sidebar
- Footer area
- Header area
- Repeated content
- Advertisement section

---

## ✅ We Can Use Inside
- `<body>`

Example:

```html
<body>
  <main>
    <h1>Health Tips</h1>
  </main>
</body>
```

---

## ❌ Don’t Use Inside
- `<header>`
- `<footer>`
- `<nav>`
- `<article>`
- `<aside>`
- `<section>`

---

## 🔁 Multiple Use
❌ No

Only ONE `<main>` per page.

---

# `<article>`

## ✅ Proper Use Cases
- Blog posts
- News articles
- Product cards
- User comments
- Forum posts
- Reviews
- Social media posts
- Independent widgets

---

## ❌ Don’t Use
- Entire page layout
- Generic grouping
- Styling wrapper
- Sidebar layout

---

## ✅ We Can Use Inside
- `<body>`
- `<main>`
- `<section>`
- `<aside>`

Example:

```html
<section>
  <article>
    <h2>Workout Tips</h2>
  </article>
</section>
```

---

## ❌ Don’t Use Inside
- Inline elements like:
  - `<span>`
  - `<b>`

---

## 🔁 Multiple Use
✅ Yes

Example:
- Blog listing
- News cards
- Multiple comments

---

# `<section>`

## ✅ Proper Use Cases
- FAQ section
- Services section
- Features section
- Testimonials section
- Grouped topics
- Chapter sections
- Category blocks

---

## ❌ Don’t Use
- Styling wrapper only
- Replacing every `<div>`
- Generic layout container

---

## ✅ We Can Use Inside
- `<body>`
- `<main>`
- `<article>`
- `<aside>`

Example:

```html
<main>
  <section>
    <h2>Nutrition</h2>
  </section>
</main>
```

---

## ❌ Don’t Use Inside
- Inline elements

---

## 🔁 Multiple Use
✅ Yes

Used many times on a page.

---

# `<aside>`

## ✅ Proper Use Cases
- Sidebar
- Related posts
- Advertisements
- Author bio
- Widgets
- Tips box
- Sponsored content
- Recent posts

---

## ❌ Don’t Use
- Main article content
- Primary page content
- Main product details

---

## ✅ We Can Use Inside
- `<body>`
- `<main>`
- `<article>`
- `<section>`

Example:

```html
<main>
  <aside>
    Related Articles
  </aside>
</main>
```

---

## ❌ Don’t Use Inside
- Inline elements

---

## 🔁 Multiple Use
✅ Yes

Multiple sidebars/widgets allowed.

---

# `<address>`

## ✅ Proper Use Cases
- Company contact info
- Author contact
- Email address
- Phone number
- Office details
- Support information

---

## ❌ Don’t Use
- Random postal address
- Google map section
- General location text

---

## ✅ We Can Use Inside
- `<footer>`
- `<article>`
- `<section>`

Example:

```html
<footer>
  <address>
    info@example.com
  </address>
</footer>
```

---

## ❌ Don’t Use Inside
- `<h1>` to `<h6>`

---

## 🔁 Multiple Use
✅ Yes

---

# `<hgroup>`

## ✅ Proper Use Cases
- Title + subtitle
- Heading + tagline
- Article title + description
- Hero title + subtitle

---

## ❌ Don’t Use
- Generic layout wrapper
- Styling container
- Full content section

---

## ✅ We Can Use Inside
- `<header>`
- `<section>`
- `<article>`

Example:

```html
<hgroup>
  <h1>Health Tips</h1>
  <p>Daily wellness guide</p>
</hgroup>
```

---

## ❌ Don’t Use Inside
- Inline elements

---

## 🔁 Multiple Use
✅ Yes


### Article Detail Page – Semantic Structure
```
<body>

  <!-- TOP HEADER -->
  <header>
    <nav>
      <!-- Breadcrumb Navigation -->
      <a href="/">Home</a> / <a href="/articles">Articles</a> / Fitness
    </nav>
  </header>

  <!-- MAIN CONTENT AREA -->
  <main>

    <!-- ARTICLE START -->
    <article>

      <!-- ARTICLE HEADER -->
      <header>

        <!-- Featured Image -->
        <img src="featured.jpg" alt="Featured Image">

        <!-- Title -->
        <h1>How to Stay Fit Daily</h1>

        <!-- Author Info -->
        <address>
          By John Doe
        </address>

        <!-- Publish Info -->
        <p>Published on: Jan 12, 2026</p>
        <p>Reading time: 6 min</p>

        <!-- Category & Tags -->
        <p>
          Category: Fitness |
          Tags: Health, Workout, Lifestyle
        </p>

        <!-- Social Share -->
        <nav>
          Share: Facebook | Twitter | WhatsApp
        </nav>

      </header>

      <!-- TABLE OF CONTENTS -->
      <nav>
        <h2>Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Benefits</li>
          <li>Workout Plan</li>
        </ul>
      </nav>

      <!-- MAIN ARTICLE CONTENT -->
      <section>

        <h2>Introduction</h2>
        <p>Fitness is important for health...</p>

        <!-- Images / Videos -->
        <figure>
          <img src="workout.jpg" alt="Workout">
        </figure>

        <h2>Benefits</h2>
        <p>Improves heart health...</p>

      </section>

      <!-- FAQ SECTION -->
      <section>
        <h2>FAQ</h2>

        <h3>How often should I exercise?</h3>
        <p>Daily or 4-5 times a week.</p>

      </section>

      <!-- RELATED ARTICLES -->
      <aside>
        <h2>Related Articles</h2>
        <article>Article 1</article>
        <article>Article 2</article>
      </aside>

      <!-- COMMENTS -->
      <section>
        <h2>Comments</h2>
        <p>User comments go here...</p>
      </section>

      <!-- NEWSLETTER -->
      <section>
        <h2>Subscribe to Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter email">
        </form>
      </section>

      <!-- ARTICLE FOOTER -->
      <footer>
        <p>Thanks for reading</p>
      </footer>

    </article>
    <!-- ARTICLE END -->

  </main>

  <!-- PAGE FOOTER -->
  <footer>
    <address>
      Contact: support@example.com
    </address>
  </footer>

</body>
```

#### Category Listing Page – Semantic Structure

```
<body>

  <!-- PAGE HEADER -->
  <header>

    <!-- Hero Banner -->
    <section>
      <h1>Fitness Articles</h1>
      <p>Explore health and workout tips</p>
    </section>

    <!-- Search & Filters -->
    <nav>
      <input type="search" placeholder="Search articles">

      <div>
        <button>Latest</button>
        <button>Trending</button>
        <button>Popular</button>
      </div>
    </nav>

  </header>

  <!-- MAIN CONTENT -->
  <main>

    <!-- FEATURED CONTENT -->
    <section>
      <h2>Featured Content</h2>
      <article>Featured Article 1</article>
      <article>Featured Article 2</article>
    </section>

    <!-- LATEST ARTICLES -->
    <section>
      <h2>Latest Articles</h2>
      <article>Article 1</article>
      <article>Article 2</article>
    </section>

    <!-- TRENDING ARTICLES -->
    <section>
      <h2>Trending Articles</h2>
      <article>Trending 1</article>
      <article>Trending 2</article>
    </section>

    <!-- VIDEOS SECTION -->
    <section>
      <h2>Videos</h2>
      <article>Video 1</article>
      <article>Video 2</article>
    </section>

    <!-- RELATED CATEGORIES -->
    <aside>
      <h2>Related Categories</h2>
      <nav>
        <a href="#">Nutrition</a>
        <a href="#">Yoga</a>
        <a href="#">Gym</a>
      </nav>
    </aside>

    <!-- NEWSLETTER -->
    <section>
      <h2>Subscribe</h2>
      <form>
        <input type="email" placeholder="Enter email">
      </form>
    </section>

    <!-- PAGINATION / LOAD MORE -->
    <nav>
      <button>Previous</button>
      <button>1</button>
      <button>2</button>
      <button>Next</button>
    </nav>

  </main>

  <!-- PAGE FOOTER -->
  <footer>
    <p>© 2026 Fitness Blog</p>
  </footer>

</body>
```