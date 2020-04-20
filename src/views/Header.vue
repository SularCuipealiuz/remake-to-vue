<template>
  <div class="headerGroup">
    <div class="topframe">
      <div class="logBox">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="nav-panel">
        <div class="loginBox">
          <input
            name="username"
            type="text"
            placeholder="会员账号"
            autofocus
            autocomplete="off"
          />
          <input
            name="password"
            type="password"
            placeholder="密码"
            autofocus
            autocomplete="off"
          />
          <button type="submit" class="btn btn_Secondary">登录</button>
          <button
            type="button"
            class="btn btn_Secondary_border"
            onclick="getView('member_registration.html');"
          >
            立即开户
          </button>
          <button
            type="button"
            class="btn btn_Secondary_border"
            onclick="member.guestLogin(function(){lightBox.close();message('success','试玩登录成功！');});"
          >
            免费试玩
          </button>
        </div>
        <div class="navBar">
          <ul class="navBar-nav">
            <li><a href="main.html">首页</a></li>
            <li><a href="sportgame.html" lang="sport_event">体育赛事</a></li>
            <li><a href="realman.html" lang="live_ent">真人娱乐</a></li>
            <li>
              <a href="electronic.html" lang="electronic_game">电子游戏</a>
            </li>
            <li><a href="cardgame.html" lang="boardgame">棋牌游戏</a></li>
            <li>
              <a
                href="game-credit.html"
                onclick="localStorage.setItem('recent_lottery', $(this).data('id'));"
                lang="hk_mark_six"
                >香港六合彩</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onclick="setRecentLottery();"
                lang="lottery_game"
                >彩票游戏</a
              >
            </li>
            <li><a href="promotions.html" lang="promotions">优惠讯息</a></li>
            <li>
              <a
                href="javascript:void(0)"
                lang="online_customer"
                onclick="openLink('https://temp-chat.mstatik.com/widget/standalone.html?eid=150491');"
                >在线客服</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="scss" scoped>
.headerGroup {
  display: flex;
}
.topframe {
  flex: auto;
  background: #1c172d;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.navBar {
  /*line-height: 44px;*/
  font-size: 13px;
  text-align: center;
  /*background: url(http://hh917.tt289.com:8080/resources/images/navBg23.jpg) repeat-x;*/
  background: url(../assets/images/navBg23.jpg) repeat-x;
  position: relative;
  padding: 0;
  height: 52px;
}
div.navBar:before {
  content: "";
  width: 14px;
  /*background: url(http://hh917.tt289.com:8080/resources/images/navBgLeft.png) no-repeat;*/
  background: url(../assets/images/navBgLeft.png) no-repeat;
  position: absolute;
  left: -12px;
  height: 52px;
}
div.navBar:after {
  content: "";
  width: 25px;
  /*background: url(http://hh917.tt289.com:8080/resources/images/navBgRight.png) no-repeat;*/
  background: url(../assets/images/navBgRight.png) no-repeat;
  position: absolute;
  right: -24px;
  height: 52px;
  top: 0;
}
ul.navBar-nav > li {
  float: left;
  list-style: none;
  padding: 0.5rem;
  width: 66px;
  height: 52px;
}
ul.navBar-nav > li:not(:first-of-type) {
  /*background: url(http://hh917.tt289.com:8080/resources/images/topNav_li.jpg) left top no-repeat;*/
  background: url(../assets/images/topNav_li.jpg) left top no-repeat;
}
ul.navBar-nav {
  margin-left: -40px;
  margin-top: 11px;
  color: #fff;
}
ul.navBar-nav li a {
  color: #fff;
  text-decoration: none;
  display: block;
}
ul.navBar-nav li a:hover {
  color: #ffb956;
}
div.loginBox {
  height: 40px;
  align-self: flex-end;
}
div.loginBox input[type="text"],
div.loginBox input[type="password"] {
  width: 150px;
  min-width: 100px;
  display: inline-block;
  border: 1px solid #999;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0.25rem;
  font-size: 0.875em;
  padding: 8px 8px;
}
div.loginBox input[type="text"],
div.loginBox input[type="password"],
div.loginBox button {
  margin-right: 5px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: button;
  appearance: button;
  cursor: pointer;
  padding: 2px 8px;
  border: 1px solid transparent;
}
.btn_Secondary {
  color: #fff;
  background: #fdcf07;
  background: linear-gradient(135deg, #fdcf07 0, #fa980e 100%);
}
.btn_Secondary:hover {
  background: #fa980e;
  background: linear-gradient(45deg, #fa980e 0, #fdcf07 100%);
}
.btn_Secondary_border {
  color: #fff;
  border: 1px solid #fa980e;
  background: 0 0;
}
.btn_Secondary_border:hover {
  background: #fa980e;
  background: linear-gradient(45deg, #fa980e 0, #fdcf07 100%);
}

.logBox {
  flex: 0 0 150px;
  margin-right: 20px;
  height: 100px;
  img {
    height: 100%;
  }
}

.nav-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
