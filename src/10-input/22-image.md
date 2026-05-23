# <input type="image">

<input type="image"> creates:

An image submit button

When user clicks the image:

Form submits

It works like:

```
<input type="submit">
```
But uses an image instead of text.

## Common Attributes for image

| Attribute        | Description                 |
| ---------------- | --------------------------- |
| `type="image"`   | Creates image submit button |
| `name`           | Button name                 |
| `id`             | Unique identifier           |
| `class`          | CSS styling                 |
| `value`          | Button value                |
| `form`           | Connects to form            |
| `src`            | Image path                  |
| `alt`            | Alternative text            |
| `width`          | Image width                 |
| `height`         | Image height                |
| `formaction`     | Submit URL                  |
| `formenctype`    | Encoding type               |
| `formmethod`     | GET or POST                 |
| `formtarget`     | Response target             |
| `formnovalidate` | Skip validation             |
| `title`          | Extra help message          |

Important Notes

| Point             | Explanation                          |
| ----------------- | ------------------------------------ |
| Works Like Submit | Submits form                         |
| Uses Image        | Instead of text button               |
| `src` Required    | Image path needed                    |
| `alt` Important   | Accessibility                        |
| Mostly Old Usage  | Modern apps use `<button>` + `<img>` |


Why <button> is Better Today

<button> supports:

Icons
HTML
SVG
Multiple elements
Better CSS control

Example:

```
<button type="submit">

  <img src="cart.png">

  Buy Now

</button>
```