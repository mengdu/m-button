
## Button

A beautiful button component for vue.

[中文文档](README-zh.md)

[Live Demo](https://mengdu.github.io/m-button/example/)

## Use


```ls
npm install vue-m-button
```

```js
import MButton from 'vue-m-button'
// for v1.0.0
// import 'vue-m-button/dist/css/default.css'

Vue.use(MButton)
```

It will register `m-button-group`，`m-button` component.

```html
<m-button>defaut</m-button>
```

**button grounp：**

```html
<m-button-group>
  <m-button type="info">Home</m-button>
  <m-button type="info">Hot</m-button>
  <m-button type="info">Special</m-button>
</m-button-group>
```

### Button Attributes


| Attribute      | Description    | Type      | Accepted Values   | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | size   | string | `max`, `large`, `samll`, `mini` |    —     |
| type     | type   | string    |   `info`，`primary`，`warning`，`danger`，`success` |     —    |
| plain     | plain btton   | boolean    | — | false   |
| round     | round button   | boolean    | — | false   |
| disabled  | disabled | boolean   | —   | false  |
| active  | active state  | boolean   | —   | false |
| effect  | effect state    | boolean   | —   | true |
| router  | vue-router route object  | path  | —   | —  |

