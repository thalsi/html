# 📊 HTML Table Elements

HTML tables are used to display tabular data using rows and columns.

---

# 📦 Table Structure

| Element | Type | Description |
|----------|------|-------------|
| `<table>` | Block | Main table container |
| `<caption>` | Block | Table title |
| `<thead>` | Block | Table header section |
| `<tbody>` | Block | Table body section |
| `<tfoot>` | Block | Table footer section |
| `<tr>` | Block | Table row |
| `<td>` | Block | Standard table cell |
| `<th>` | Block | Header table cell |
| `<col>` | Void | Column definition |
| `<colgroup>` | Block | Group of columns |

---

## 📦 `<table>`

✅ Description

The `<table>` element is the main container used to create tables.

---

 ✅ Syntax

```html
<table>
    ...
</table>
```
✅ Example

```
<table border="1">

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>

</table>
```
🎯 Use Cases
    Student data
    Product pricing
    Timetable
    Employee records

## 📦 <caption>
✅ Description

The <caption> element defines the title of a table.

```
<table border="1">

    <caption>Student Details</caption>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>

</table>
```
## 📦 <thead>
✅ Description

The <thead> element groups the table header content.

```
<table border="1">

    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>

</table>
```

## 📦 <tbody>
✅ Description

The <tbody> element groups the main table data.

```
<table border="1">

    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
        </tr>

        <tr>
            <td>Ali</td>
            <td>30</td>
        </tr>
    </tbody>

</table>
```

## 📦 <tfoot>
✅ Description

The <tfoot> element defines the footer section of a table.

Usually used for totals and summaries.

```
<table border="1">

    <tfoot>
        <tr>
            <td>Total</td>
            <td>2 Students</td>
        </tr>
    </tfoot>

</table>
```

## 📦 <tr>
✅ Description

The <tr> element creates a table row.

```
<table border="1">

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>

</table>
```

## 📦 <td>
✅ Description

The <td> element defines a normal table cell.

| Attribute | Description   |
| --------- | ------------- |
| `colspan` | Merge columns |
| `rowspan` | Merge rows    |

```
<table border="1">

    <tr>
        <td>Name</td>
        <td>John</td>
    </tr>

</table>
```

🔹 colspan
✅ Description

The colspan attribute merges multiple columns.

```
<table border="1">

    <tr>
        <td colspan="2">Merged Column</td>
    </tr>

</table>
```

🔹 rowspan
✅ Description

The rowspan attribute merges multiple rows.

```
<table border="1">

    <tr>
        <td rowspan="2">John</td>
        <td>Math</td>
    </tr>

    <tr>
        <td>Science</td>
    </tr>

</table>
```

## 📦 <th>
✅ Description

The <th> element defines a header cell.

| Attribute | Description     |
| --------- | --------------- |
| `colspan` | Merge columns   |
| `rowspan` | Merge rows      |
| `scope`   | Header relation |

```
<table border="1">

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

</table>
```

🔹 scope
✅ Description

The scope attribute improves accessibility.

| Value | Meaning       |
| ----- | ------------- |
| `col` | Column header |
| `row` | Row header    |

```
<table border="1">

    <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
    </tr>

</table>
```

📦 <col>
✅ Description

The <col> element defines column properties.

Used inside <colgroup>.

| Attribute | Description       |
| --------- | ----------------- |
| `span`    | Number of columns |

```
<table border="1">

    <colgroup>
        <col style="background-color: lightblue;">
    </colgroup>

    <tr>
        <td>Name</td>
        <td>Age</td>
    </tr>

</table>
```

📦 <colgroup>
✅ Description

The <colgroup> element groups columns together.

| Attribute | Description               |
| --------- | ------------------------- |
| `span`    | Number of grouped columns |

```
<table border="1">

    <colgroup span="2" style="background-color: lightgray;">
    </colgroup>

    <tr>
        <td>Name</td>
        <td>Age</td>
    </tr>

</table>
```

📊 Complete Table Example

```
<table border="1">

    <caption>Student Marks</caption>

    <colgroup>
        <col style="background-color: lightyellow;">
        <col style="background-color: lightblue;">
    </colgroup>

    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Marks</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>John</td>
            <td>90</td>
        </tr>

        <tr>
            <td>Ali</td>
            <td>85</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Total Students</td>
            <td>2</td>
        </tr>
    </tfoot>

</table>
```