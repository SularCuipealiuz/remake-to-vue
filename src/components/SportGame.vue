<template>
<div style="height: 100%">
    <div class="sportgame-wrap">
	<div class="sp-nav-box">
		<div>IM体育</div>
		<div>三昇体育</div>
		<div>UG体育</div>
	</div>
	<div class="sp-pic-box">
		<div class="sp-pic">
			<img src="../assets/images/sport_banner_pc_IM.jpg" width="387" height="920" alt=""/>
			<div class="betting">立即投注</div>
		</div>
		<div class="sp-pic">
			<img src="../assets/images/sport_banner_pc_TRE.jpg" width="387" height="920" alt=""/>
			<div class="betting">立即投注</div>
		</div>
		<div class="sp-pic">
			<img src="../assets/images/sport_banner_pc_UG.jpg" width="387" height="920" alt=""/>
			<div class="betting">立即投注</div>
		</div>
	</div>
    <div class="sp-pic-box-moibile">
		<div>
			<img src="../assets/images/sport_banner_mobile_IM.jpg" width="450" height="200" alt=""/>
			<div class="pic-logo"><img src="../assets/images/sport_logo_mobile_IM.png" width="111" height="112" alt=""/></div>
		<div class="pic-btn">進入遊戲</div>
		</div>
		<div>
			<img src="../assets/images/sport_banner_mobile_TRE.jpg" width="450" height="200" alt=""/>
			<div class="pic-logo"><img src="../assets/images/sport_logo_mobile_TRE.png" width="339" height="65" alt=""/></div>
			<div class="pic-btn">進入遊戲</div>
		</div>
		<div>
			<img src="../assets/images/sport_banner_mobile_UG.jpg" width="450" height="200" alt=""/>
			<div class="pic-logo"><img src="../assets/images/sport_logo_mobile_UG.png" width="229" height="83" alt=""/></div>
			<div class="pic-btn">進入遊戲</div>
	    </div>
	</div>
</div>
</div>
</template>

<script>
export default {
  name: "SportGame"
};
</script>

<style scoped>
div.sportgame-wrap {
	padding: 30px;
}

div.sp-nav-box {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row nowrap;
}

div.sp-nav-box > div {
	border: 1px solid #bcb0e6;
	flex: 0 0 158px;
	line-height: 36px;
	text-align: center;
	color: #FFF;
	font-size: 14px;
	border-radius: 0 5px 0 0;
	cursor: pointer;
}

div.sp-nav-box > div:hover {
	background: linear-gradient(to bottom,#4f466d 0,#3e3560 100%);
}

div.sp-pic-box {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	padding-top: 15px;
	width: 100%;
}

div.sp-pic-box > div {
	flex: 0 0 378px;
	height: auto;
	cursor: pointer;
	position: relative;
}

div.sp-pic-box > div > img {
	transition: .5s;
	width: 100%;
	height: auto;
}

.sp-pic + .sp-pic {
	margin-left: 20px;
}

div.sp-pic-box > div:hover > img {
	filter: contrast(120%) brightness(50%);
	transition: .5s;
}

div.sp-pic-box > div:hover .betting {
	display: flex;
}

div.betting:hover {
	background-color: rgba(0,0,0,.5);
	border: 2px solid #0eb7da;
	color: #0eb7da;
}

div.sp-pic-box > div .betting {
	display: none;
}

div.betting {
	border: 2px solid #fff;
	display:flex;
	border-radius: 100%;
	/*line-height: 48px;*/
	/*padding: 0 10px;*/
	text-align: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 120px;
	height: 120px;
	color: #fff;
	font-weight: bold;
	align-items: center;
	font-size: 24px;
	transition: .5s
}

div.sp-pic-box-moibile {
	flex-flow: column;
	justify-content: center;
	display: none;
}

div.sp-pic-box-moibile > div {
	flex: 0 0 100%;
	height: auto;
	position: relative;
	background: #ccc;
	margin-bottom: 10px;
	justify-content: center;
	cursor: pointer;
}

div.sp-pic-box-moibile > div > img {
	width: 100%;
	height: auto;
	vertical-align: top;
	transition: 0.5s
}

div.sp-pic-box-moibile > div:hover > img {
	filter: brightness(45%);
}

div.sp-pic-box-moibile > div > div.pic-logo {
	position: absolute;
	top: 18px;
	left: 50%;
	transform: translate(-50%, 0 );
	cursor: pointer;
}

div.sp-pic-box-moibile > div > div.pic-btn {
	border: 1px solid #fff;
	background-color: rgba(0,0,0,0.3);
	color: #fff;
	line-height: 32px;
	padding: 0 30px;
	position: absolute;
	bottom: 14px;
	transform: translate(-50%,0);
	left: 50%;
	cursor: pointer;
	border-radius: 5px;
}

@media (max-width: 1200px) {

div.sp-nav-box {
	display:none;
}

div.sp-pic-box > div {
	flex: 0 1 31.3%;
}

.sp-pic + .sp-pic {
	margin-left: 3%;
}

}

@media (max-width: 768px) {
div.sp-pic-box {
	display: none;
}

div.sp-pic-box-moibile {
	display: flex;
}
}
</style>