<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

abbr[title],
acronym[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c172d;
  overflow-x: hidden;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1c172d;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import MainPage from "@/views/MainPage";
export default {
  components: { MainPage }
};
</script>
