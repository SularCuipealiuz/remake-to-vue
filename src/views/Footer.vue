<template>
  <section class="flex center footer column">
    <div class="flex router-panel">
      <router-link to="">关于我们</router-link>
      <router-link to="">联系我们</router-link>
      <router-link to="">金字塔代理</router-link>
      <router-link to="">存款帮助</router-link>
      <router-link to="">取款帮助</router-link>
      <router-link to="">常见问题</router-link>
      <router-link to="">游戏规则</router-link>
      <router-link to="">线路入口</router-link>
    </div>
    <div class="flex center">
      <span class="sub-label">Copyright © 皇冠彩票网 Reserved</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

.footer {
  overflow: hidden;
  position: relative;
  width: 100%;

  .router-panel {
    flex: 0 0 50px;
    width: 80%;
    justify-content: space-evenly;
    align-items: center;

    a {
      flex: 100px;
      font-size: 14px;
      color: white;
      &:not(:first-child) {
        border-left: white;
        border-left-width: 1px;
        border-left-style: solid;
      }
      &:hover {
        color: #ffb956;
      }
    }
  }
  &::after {
    background: linear-gradient(
      to right,
      #1c172d,
      #444444,
      #b6b6b8,
      #b6b6b8,
      #444444,
      #1c172d
    );
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 5px;
    border-radius: 50%;
    top: -8px;
    box-shadow: 0 0 6px 4px #fff;
  }

  .sub-label {
    color: #5c5a64;
    font-size: 12px;
  }
}
</style>
