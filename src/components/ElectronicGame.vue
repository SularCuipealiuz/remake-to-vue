<template>
  <div style="height: 100%">
    <div class="electronicGroup">
    	<img alt="" src="../assets/images/electronic_banner_pc_01.jpg" class="electronic_banner_pc">
    </div>
    <div class="showRoom">
	    <div class="electronicframe_pc">
        <div><a href="#"><img src="../assets/images/ag.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/mg.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/pt.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/cg.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/bbin.png" alt=""></a></div>
      </div>
      <!-- <div class="electronicframe_mobile">
        <div><a href="#"><img src="../assets/images/ag-2.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/mg-2.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/pt-2.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/cg-2.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/bbin-2.png" alt=""></a></div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ElectronicGame"
};
</script>

<style scoped>
.electronicGroup {
	width: 100%;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.electronicGroup img {
	width: 100%;
	height: auto;
}

img.electronic_banner_pc {
	max-width: 1920px;
	width: 100%;
	height: auto;
}

div.showRoom {
	width: 100%;
	background: url("../assets/images/game_bg.png") repeat, #181f30;
}

div.electronicframe_pc {
	max-width: 1130px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	margin: 0 auto;	
	flex-wrap: wrap;
}

div.electronicframe_pc > div {
	flex-basis: 50%;
	/*position: relative;*/
}

div.electronicframe_pc > div a img {
	width: 100%;
	height: auto;
	transition-duration: .5s;
}

div.electronicframe_pc > div a:hover img {
	transform: translate(0, -8px);
}

div.electronicframe_mobile {
	display: none;
	width: 100%;
}

div.electronicframe_mobile > div {
	width: 100%;
	/*position: relative;*/
	height: auto;
	
}

div.electronicframe_mobile > div img {
	width: 100%;
	height: auto;
	border: none;
	vertical-align: top;
}


@media (max-width: 768px) {

div.electronicframe_pc {
	display: none;		
}
	
div.electronicframe_mobile {
	display: block;
}
	
div.electronicGroup {
	display: none;
}

}
</style>