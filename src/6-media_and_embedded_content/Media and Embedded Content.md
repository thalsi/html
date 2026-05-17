## 🖼️ Media & Embedded Content

| ✅ | Element        | Type   | Description                              | Key Attributes                                      |
|----|----------------|--------|------------------------------------------|-----------------------------------------------------|
| [x] | `<img>`        | Void   | Image                                    | `src`, `alt`, `width`, `height`, `loading`          |
| [x] | `<picture>`    | Block  | Responsive image container               | None                                                |
| [x] | `<source>`     | Void   | Source for media                         | `src`, `type`                                       |
| [x] | `<map>`        | Block  | Client-side image map                    | `name`                                              |
| [x] | `<area>`       | Void   | Clickable area inside image map          | `shape`, `coords`, `href`, `alt`                    |
| [x] | `<audio>`      | Block  | Audio player                             | `src`, `controls`, `loop`, `muted`                  |
| [x] | `<video>`      | Block  | Video player                             | `src`, `controls`, `poster`                         |
| [x] | `<track>`      | Void   | Subtitles/captions                       | `kind`, `src`, `srclang`                            |
| [x] | `<embed>`      | Void   | External embedded content                | `src`, `type`                                       |
| [x] | `<object>`     | Block  | Embedded external resource               | `data`, `type`                                      |
| [x] | `<param>`      | Void   | Parameters for `<object>`                | `name`, `value`                                     |
| [x] | `<iframe>`     | Block  | Embedded page/frame                      | `src`, `width`, `height`, `sandbox`, `referrerpolicy` |
| [x] | `<figure>`     | Block  | Self-contained media/content container   | None                                                |
| [x] | `<figcaption>` | Block  | Caption for `<figure>`                   | None                                                |
| [x] | `<canvas>`     | Block  | Drawing surface for graphics             | `width`, `height`                                   |
| [x] | `<svg>`        | Inline | Scalable Vector Graphics container       | SVG-specific                                        |
| [x] | `<math>`       | Inline | MathML for mathematical notation         | MathML-specific                                     |


# 🖼️ HTML Media & Embedded Content Elements

These elements are used for:

Images
Audio
Video
Graphics
External content
Interactive media
Mathematical notation

## <img> — Image
Description

Displays images.

Void element.

| Attribute | Value Example    | Description      |
| --------- | ---------------- | ---------------- |
| `src`     | `"photo.jpg"`    | Image path       |
| `alt`     | `"Nature Image"` | Alternative text |
| `width`   | `"300"`          | Width            |
| `height`  | `"200"`          | Height           |
| `loading` | `"lazy"`         | Lazy loading     |


```
<img 
  src="nature.jpg"
  alt="Beautiful Nature"
  width="300"
  height="200"
  loading="lazy"
/>
```
Use Cases
Product images
Gallery
Blog images
Logos

## <picture> — Responsive Image Container
Description

Provides multiple image sources for responsive design.
```
<picture>
  <source media="(max-width:600px)" srcset="mobile.jpg">
  <source media="(min-width:601px)" srcset="desktop.jpg">
  
  <img src="default.jpg" alt="Responsive Image">
</picture>
```
Use Cases
    Responsive websites
    Different device images
    Modern image formats

## <source> — Media Source
Description

Defines alternative media sources.

Used inside:

<picture>
<audio>
<video>   

| Attribute | Value Example |
| --------- | ------------- |
| `src`     | `"movie.mp4"` |
| `type`    | `"video/mp4"` |

```
<video controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```
Use Cases
    Multiple video formats
    Multiple audio formats

## <map> — Image Map
Description

Creates clickable regions on images.
| Attribute | Value Example |
| --------- | ------------- |
| `name`    | `"planetmap"` |

```
<img src="planets.jpg" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="34,44,270,350" href="sun.html" alt="Sun">
</map>
```
Use Cases
    Interactive diagrams
    Maps
    Infographics

## <area> — Clickable Area
Description

Defines clickable regions inside <map>.

Void element.

| Attribute | Value Example     |
| --------- | ----------------- |
| `shape`   | `"rect"`          |
| `coords`  | `"34,44,270,350"` |
| `href`    | `"sun.html"`      |
| `alt`     | `"Sun"`           |


```
<area 
  shape="circle"
  coords="100,100,50"
  href="moon.html"
  alt="Moon"
/>
```
Use Cases
Interactive image navigation

## <audio> — Audio Player
Description

Embeds audio content.

| Attribute  | Value Example |
| ---------- | ------------- |
| `src`      | `"song.mp3"`  |
| `controls` | `controls`    |
| `loop`     | `loop`        |
| `muted`    | `muted`       |

```
<audio controls loop>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```
Use Cases
    Music players
    Podcasts
    Sound effects

## <video> — Video Player
Description

Embeds video content.

| Attribute  | Value Example     |
| ---------- | ----------------- |
| `src`      | `"movie.mp4"`     |
| `controls` | `controls`        |
| `poster`   | `"thumbnail.jpg"` |

```
<video controls width="400" poster="thumb.jpg">
  <source src="movie.mp4" type="video/mp4">
</video>
```
Use Cases
    Tutorials
    Movies
    Product demos

## <track> — Subtitle Track
Description

Adds subtitles/captions to media.

Void element.

| Attribute | Value Example     |
| --------- | ----------------- |
| `kind`    | `"subtitles"`     |
| `src`     | `"subtitles.vtt"` |
| `srclang` | `"en"`            |

```
<track 
  kind="subtitles"
  src="subtitles.vtt"
  srclang="en"
  label="English"
/>
```
Use Cases
Accessibility
Multi-language captions


## <embed> — External Embedded Content
Description

Embeds external content/plugins.

Void element.

| Attribute | Value Example       |
| --------- | ------------------- |
| `src`     | `"file.pdf"`        |
| `type`    | `"application/pdf"` |

```
<embed 
  src="document.pdf"
  type="application/pdf"
  width="500"
  height="400"
/>
```

## <object> — Embedded Object
Description

Embeds external resources.
| Attribute | Value Example       |
| --------- | ------------------- |
| `data`    | `"movie.swf"`       |
| `type`    | `"application/pdf"` |

```
<object 
  data="document.pdf"
  type="application/pdf"
  width="500"
  height="400">
</object>
```
Use Cases
PDFs
Multimedia content

## <param> — Object Parameter
Description

Passes parameters to <object>.

Void element.

| Attribute | Value Example |
| --------- | ------------- |
| `name`    | `"autoplay"`  |
| `value`   | `"true"`      |

```
<param name="autoplay" value="true">
```
Use Cases
Object configurations

## <iframe> — Embedded Frame
Description

Embeds another webpage.

| Attribute        | Value Example           |
| ---------------- | ----------------------- |
| `src`            | `"https://example.com"` |
| `width`          | `"600"`                 |
| `height`         | `"400"`                 |
| `sandbox`        | `"allow-scripts"`       |
| `referrerpolicy` | `"no-referrer"`         |

```
<iframe
  src="https://example.com"
  width="600"
  height="400"
  sandbox="allow-scripts"
>
</iframe>
```
Use Cases
YouTube videos
Google Maps
External applications

## <figure> — Self-contained Content
Description

Groups media with caption.

```
<figure>
  <img src="cat.jpg" alt="Cat">
  <figcaption>Cute Cat</figcaption>
</figure>
```
Use Cases
    Image with caption
    Charts
    Diagrams

## <figcaption> — Figure Caption
Description

Caption for <figure>.

```
<figcaption>Nature Photography</figcaption>
```

Use Cases
    Image descriptions
    Media captions

## <canvas> — Drawing Surface
Description

Used for drawing graphics with JavaScript.

| Attribute | Value Example |
| --------- | ------------- |
| `width`   | `"500"`       |
| `height`  | `"300"`       |

```
<canvas width="500" height="300"></canvas>
```
Use Cases
Games
Charts
Drawing apps
Animations

## <svg> — Scalable Vector Graphics
Description

Creates vector graphics.

Inline element.
Use Cases
Icons
Logos
Charts
Vector illustrations

## <math> — Mathematical Notation
Description

Displays MathML equations.
```
<math>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

Use Cases
    Scientific websites
    Educational apps
    Math formulas