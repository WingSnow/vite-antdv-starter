<script setup lang="ts">
import { computed, reactive, watchEffect } from 'vue'
import ProLayout, {
  getMenuData,
  clearMenuItem,
  GlobalFooter,
  RouteContextProps,
} from '@ant-design-vue/pro-layout'
import { useRouter } from 'vue-router'

import '@ant-design-vue/pro-layout/dist/style.css'

const { menuData } = getMenuData(clearMenuItem(useRouter().getRoutes()))

const baseState = reactive<Omit<RouteContextProps, 'menuData'>>({
  selectedKeys: [],
  openKeys: [],
  // default
  collapsed: false,
})

const state = reactive({
  menuData,
  title: 'Vite Antdv',
})

const router = reactive(useRouter())

const breadcrumb = computed(() => {
  return useRouter()
    .currentRoute?.value.matched.concat()
    .map((item) => {
      return {
        path: item.path,
        breadcrumbName: (item.meta.title as string) || '',
      }
    })
})

// 解决在侧边栏收缩时点击一级菜单路由不会跳转的问题
const handlerMenuClick = (args: { keyPath: unknown[]; key: string }) => {
  if (baseState.collapsed && args.keyPath.length === 1) {
    router.push(args.key)
  }
}

watchEffect(() => {
  if (router.currentRoute) {
    const matched = router.currentRoute.matched.concat()
    baseState.selectedKeys = matched
      .filter((r) => r.name !== 'index')
      .map((r) => r.path)
    baseState.openKeys = matched
      .filter((r) => r.path !== router.currentRoute.path)
      .map((r) => r.path)
  }
})
</script>

<template>
  <pro-layout
    v-model:collapsed="baseState.collapsed"
    v-model:selectedKeys="baseState.selectedKeys"
    v-model:openKeys="baseState.openKeys"
    v-bind="state"
    :breadcrumb="{ routes: breadcrumb }"
    @menu-click="handlerMenuClick"
  >
    <router-view />

    <template #footerRender>
      <global-footer>
        <template #copyright>
          <a href="#">@WingSnow</a>
        </template>
      </global-footer>
    </template>
  </pro-layout>
</template>
