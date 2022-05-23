<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <a-result
    status="403"
    title="403"
    sub-title="Sorry, you are not authorized to access this page."
  >
    <template #extra>
      <a-button type="primary" @click="goBack">Back Home</a-button>
    </template>
  </a-result>
</template>
