import MButton from './button'
import MButtonGroup from './button-group'
import './btn.less'

MButton.install = function (Vue) {
  Vue.component(MButton.name, MButton)
  Vue.component(MButtonGroup.name, MButtonGroup)
}

export {
  MButton as default,
  MButton,
  MButtonGroup
}
