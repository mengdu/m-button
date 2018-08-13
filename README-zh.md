
## Button

Vue 的 Button 按钮组件。

[English](README.md)

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

会全局注册 `m-button-group`，`m-button` 组件。

```html
<m-button>defaut</m-button>
```

**按钮组：**

```html
<m-button-group>
  <m-button type="info">首页</m-button>
  <m-button type="info">热门</m-button>
  <m-button type="info">专栏</m-button>
</m-button-group>
```

### Button Attributes


| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string | `max`, `large`, `默认`, `samll`, `mini` |    —     |
| type     | 类型   | string    |   `info`，`primary`，`warning`，`danger`，`success` |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| active  | 焦点状态    | boolean   | —   | false   |
| effect  | 焦点涟漪效果    | boolean   | —   | true   |
| router  | vue-router 路由对象    | path  | —   | —  |

