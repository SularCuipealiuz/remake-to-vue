<template>
  <div id="memberCenter" class="flex center">
    <div class="flex panel profile">
      <div class="profile"></div>
      <div class="ctrl-panel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberCenter"
};
</script>

<style lang="scss" scoped>
#memberCenter {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
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
