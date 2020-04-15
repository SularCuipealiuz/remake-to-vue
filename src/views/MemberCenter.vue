<template>
  <section id="memberCenter" class="flex center">
    <div class="flex panel profile">
      <div class="profile"></div>
      <div class="ctrl-panel"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MemberCenter"
};
</script>

<style lang="scss" scoped>
#memberCenter {
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
  /*padding: 15px 0;*/
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}

.panel {
  background-color: #f4f4f4;
  width: 1140px;
  height: 90%;
  box-shadow: 5px 5px 5px #eaeaea, -4px -5px 5px #eaeaea;
}
</style>
