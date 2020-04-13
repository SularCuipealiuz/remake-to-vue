<template>
  <div id="MainPage" class="flex center">
    <div class="flex column main-panel">
      <header-section style="flex: 20%"></header-section>
      <content-section style="flex: 60%"></content-section>
      <footer-section style="flex:0 0 100px"></footer-section>
    </div>
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
  background-color: #1C172D;
}
.flex {
  display: flex;
}

.center{
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

.main-panel {
  height: 100%;
}
</style>
