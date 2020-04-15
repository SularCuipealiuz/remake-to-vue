<template>
  <section id="popModal">
    <div v-show="showNews"></div>
    <div v-show="showBankCard"></div>
  </section>
</template>

<script>
export default {
  name: "PopModal",
  data() {
    return {
      showNews: false,
      showBankCard: false
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
