# <input type="file">

<input type="file"> is used to:

Upload files
Upload images
Upload documents
Upload videos/audio

Used for:

Profile photo
Resume upload
PDF upload
Gallery upload

```
<input type="file">
```

## Common Attributes for file

| Attribute     | Description                    |
| ------------- | ------------------------------ |
| `type="file"` | Creates file upload input      |
| `name`        | Sends file data                |
| `id`          | Unique identifier              |
| `class`       | CSS styling                    |
| `accept`      | Allowed file types             |
| `multiple`    | Allows multiple file selection |
| `required`    | Must upload file               |
| `disabled`    | Disables input                 |
| `form`        | Connects to form               |
| `capture`     | Opens camera/mic on mobile     |
| `title`       | Extra help message             |

```
<input
  type="file"
  accept=".jpg,.png,.pdf"
>

<input
  type="file"
  accept="audio/*"
>

<input
  type="file"
  accept="video/*"
>
```