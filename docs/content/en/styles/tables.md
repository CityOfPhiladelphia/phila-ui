---
title: Tables
menuTitle: Tables
category: "Styles Guide"
position: 18
badge: ""
---

Tables are automatically styled within the _.content_ class.

## Table classes

### `table.table`

Adds the table styles outside of the _.content_ class.

```html
<table class="table">
  <thead>
    <tr>
      <th>Col Header 1</th>
      <th>Col Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1 Col 1</td>
      <td>Row 1 Col 2</td>
    </tr>
  </tbody>
</table>
```

### `th.sortable`

Adds sorting icons to table header

```html
<table class="table">
  <thead>
    <tr>
      <th class="sortable">Col Header 1</th>
      <th>Col Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1 Col 1</td>
      <td>Row 1 Col 2</td>
    </tr>
  </tbody>
</table>
```

### `th.sorting` + `.sorting-asc` or `.sorting-desc`

Indicates that the column is being sorted, and whether it's sorted ascending or descending.

```html
<table class="table">
  <thead>
    <tr>
      <th class="sortable sorting sorting-asc">Col Header 1</th>
      <th class="sortable">Col Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1 Col 1</td>
      <td>Row 1 Col 2</td>
    </tr>
  </tbody>
</table>
```

## Live examples

### A table with basic markup

<example name="Table1" height="500"></example>

### A table with sorting markup

<example name="Table2" height="500"></example>
