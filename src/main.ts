import { createApp } from 'vue'
import { PageContainer } from '@ant-design-vue/pro-layout'
import { Tooltip } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icons from './icons'

const app = createApp(App)
app.use(router).use(store).use(icons).use(PageContainer)

// 使用unplugin-vue-components按需自动引入组件时，缩起侧边菜单后会鼠标悬浮在菜单图标上会使用Tooltip显示菜单名称
// 但是Tooltip组件没有被正确地引入（待确定是prolayout的问题还是menu本身的问题
// 通过手动引入Tooltip可以解决以上问题
app.use(Tooltip)

app.mount('#app')
