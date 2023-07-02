<template>
  <div id="app">
    <TeamsContainer  name="RichyRich" level="5"/>
  </div>
</template>

<script>
import TeamsContainer from './components/TeamsContainer.vue'

export default {
  name: 'App',
  components: {
    TeamsContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #F5F7F9;
}
</style>
