<template>
  <div id="app">
    <router-view :key="key"/>
  </div>
</template>

<script>
import {
  computed
} from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  setup () {
    const route = useRoute()
    const key = computed(() => route.path)
    return {
      key
    }
  }
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }
</style>
