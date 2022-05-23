import * as Icons from '@ant-design/icons-vue'
import type { App } from 'vue'

// 全局引入ant-design-icons
const filterIcons = [
  'default',
  'createFromIconfontCN',
  'getTwoToneColor',
  'setTwoToneColor',
]

export default (app: App) => {
  Object.keys(Icons)
    .filter((k) => !filterIcons.includes(k))
    .forEach((k) => {
      app.component(k, (Icons as Record<string, any>)[k])
    })
}
