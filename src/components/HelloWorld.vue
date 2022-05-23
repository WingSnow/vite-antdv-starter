<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Dependencies:
    <a href="#" target="_blank">Vite</a>
    +
    <a href="#" target="_blank">Vue 3</a>
    +
    <a href="#" target="_blank">Typescript</a>
    +
    <a href="#" target="_blank">Ant Design Vue</a>
    +
    <a href="#" target="_blank">Vue Router</a>
    +
    <a href="#" target="_blank">Vuex</a>
    +
    <a href="#" target="_blank">ESlint</a>
    +
    <a href="#" target="_blank">Premitter</a>
  </p>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <a-button type="primary" @click="count++">count is: {{ count }}</a-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>

  <p>
    <span>
      <a-avatar src="https://cn.vitejs.dev/logo.svg" shape="square"></a-avatar>
      <a href="https://cn.vitejs.dev/" target="_blank">Vite Docs</a>
    </span>
    |
    <span>
      <a-avatar
        src="https://v3.cn.vuejs.org/logo.png"
        shape="square"
      ></a-avatar>
      <a href="https://v3.cn.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </span>
    |
    <span>
      <a-avatar
        src="https://next.antdv.com/assets/logo.1ef800a8.svg"
        shape="square"
      ></a-avatar>
      <a href="https://next.antdv.com/docs/vue/introduce-cn" target="_blank">
        Ant Design Vue
      </a>
    </span>
  </p>
  <p>
    <a href="https://next.router.vuejs.org/zh/" target="_blank">Vue Router</a>
    |
    <a href="https://next.vuex.vuejs.org/zh/" target="_blank">Vuex</a>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
