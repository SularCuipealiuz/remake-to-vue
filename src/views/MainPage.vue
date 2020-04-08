<template>
  <div id="MainPage">
    <header-section></header-section>
    <content-section></content-section>
    <footer-section></footer-section>
  </div>
</template>

<script>
// @ is an alias to /src

import ContentSection from "@/views/Content";
import FooterSection from "@/views/Footer";
import HeaderSection from "@/views/Header";
export default {
  name: "MainPage",
  components: {
    HeaderSection,
    FooterSection,
    ContentSection
  }
};
</script>

<style lang="scss" scoped>
#MainPage {
  width: 100vw;
  height: 100vh;
  background-color: #2c3e50;
}
</style>
