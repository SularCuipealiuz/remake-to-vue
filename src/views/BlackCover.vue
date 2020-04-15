<template>
  <div id="blackCover"></div>
</template>

<script>
export default {
  name: "BlackCover"
};
</script>

<style lang="scss" scoped>
#blackCover {
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: auto;

  width: 100vw;
  height: 100vh;
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
