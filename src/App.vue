<template>
  <div id="app">
    <TheHeader/>
    <TheMain/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheHeader from './components/TheMain.vue'
import TheHeader from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
