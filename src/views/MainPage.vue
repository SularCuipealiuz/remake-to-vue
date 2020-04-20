<template>
  <section id="mainPage" class="flex">
    <div class="flex column layout-1 main-panel">
      <header-section style="height: 100px; min-height: 100px;"></header-section>
      <content-section style=""></content-section>
      <footer-section style="height: 100px"></footer-section>
    </div>
    <black-cover v-show="false" class="flex layout-2"></black-cover>
    <pop-modal v-show="false" class="flex layout-3"></pop-modal>
  </section>
</template>

<script>
// @ is an alias to /src

import ContentSection from "@/views/Content";
import FooterSection from "@/views/Footer";
import HeaderSection from "@/views/Header";
import BlackCover from "@/views/BlackCover";
import PopModal from "@/components/PopModal";
export default {
  name: "MainPage",
  components: {
    PopModal,
    BlackCover,
    HeaderSection,
    FooterSection,
    ContentSection
  }
};
</script>

<style lang="scss" scoped>
#mainPage {
  width: 100vw;
  height: 100%;
  background-color: #1c172d;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

.main-panel {
  width: 80%;
  height: 100%;
  min-height: 100vh;

  > * {
    width: 100%;
  }
}

.layout-1 {
  z-index: 1000;
}
.layout-2 {
  z-index: 2000;
}
.layout-3 {
  z-index: 3000;
}
</style>
