<template>
  <div id="realMan">
    <div class="realman-wrap">
      <div class="top-box">
        <h2 class="realman_title">官方信誉担保</h2>
        <h4 class="h4-title" lang="realman_slogan">
          多平台战略合作伙伴强强联手/全面支持多端畅玩
        </h4>
        <div>
          <img src="../assets/images/realman_banner_pc_02.jpg" alt="" />
        </div>
      </div>
      <div class="banner-group">
        <div>
          <a href="#"
            ><img
              src="../assets/images/realman_photo_pc_AG.jpg"
              width="555"
              height="282"
              alt=""
          /></a>
        </div>
        <div>
          <a href="#"
            ><img
              src="../assets/images/realman_photo_pc_BBIN.jpg"
              width="555"
              height="282"
              alt=""
          /></a>
        </div>
        <div>
          <a href="#"
            ><img
              src="../assets/images/realman_photo_pc_BG.jpg"
              width="555"
              height="282"
              alt=""
          /></a>
        </div>
        <div>
          <a href="#"
            ><img
              src="../assets/images/realman_photo_pc_Sunbet.jpg"
              width="555"
              height="282"
              alt=""
          /></a>
        </div>
        <div>
          <a href="#"
            ><img
              src="../assets/images/realman_photo_pc_AB.jpg"
              width="555"
              height="282"
              alt=""
          /></a>
        </div>
        <div>
          <a href="#"
            ><img
              src="../assets/images/realman_photo_pc_lebo.jpg"
              width="555"
              height="282"
              alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealMan"
};
</script>

<style scoped>
#realMan {
  height: 100%;
  width: 100%;
}
div.realman-wrap {
  background: url("../assets/images/game_bg.png") repeat, #181f30;
  width: 100vw;
}

div.top-box {
  padding-top: 10px;
  text-align: center;
  color: #fff;
  margin-bottom: 15px;
}

.h4-title {
  line-height: 14px;
}

div.banner-group {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 15px;
  width: 100%;
}

div.banner-group div {
  flex: 0 0 562px;
  padding-bottom: 15px;
}

div.banner-group div img {
  width: 100%;
  height: auto;
  vertical-align: top;
}

@media (max-width: 1200px) {
  div.top-box {
    display: none;
  }

  div.banner-group {
    justify-content: center;
  }

  div.banner-group div {
    flex: 0 1 50%;
  }
}

@media (max-width: 768px) {
  div.banner-group div {
    flex: 0 1 555px;
  }

  div.banner-group div {
    padding-bottom: 0;
  }
}

@media (max-width: 555px) {
  div.banner-group div {
    flex: 0 1 100%;
  }
}
</style>
