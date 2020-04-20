<template>
  <section id="popModal">
    <div v-show="showNews"></div>
    <div v-show="showBankCard"></div>
    <div v-show="showRegistered"></div>
  </section>
</template>

<script>
export default {
  name: "PopModal",
  data() {
    return {
      showNews: false,
      showBankCard: false,
      showRegistered: true
    };
  }
};
</script>

<style lang="scss" scoped>
#popModal {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;

  width: 100vw;
  height: 100vh;
}
.light-box-content {
}
</style>
