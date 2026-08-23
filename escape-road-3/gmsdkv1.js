let url_request = "https://games.yoplay.io/sdk/gmadsv1";
window.GMSOFT_OPTIONS = config;
_0x170291(url_request);
async function _0x170291(_0x4298b0) {
  let _0x4263ee = "games.ofree.io";
  let _0xc5106c = window.GMSOFT_OPTIONS?.gameId || "";
  let _0x2f90ae = "no";
  try {
    let _0x25a67c = Math.floor(Date.now() / 30000);
    let _0x7d8da9 = "d=" + _0x4263ee + "&gid=" + _0xc5106c + "&hn=" + "games.ofree.io" + "&pn=" + window.location.pathname + "&ts=" + _0x25a67c + "&ie=" + _0x2f90ae;
    let _0xbb8a7 = btoa(_0x7d8da9);
    let _0x1fa9cd = _0x4298b0 + "?params=" + _0xbb8a7;
    console.log("verify_license_url");
    console.log(_0x1fa9cd);
    let _0x3f74db = httpGet(_0x1fa9cd);
    let _0x553545 = JSON.parse(_0x3f74db);
    let _0x5dc78c = _0x553545.regisinfo || {};
    if (_0x5dc78c.signed) {
      window.GMSOFT_SIGNED = _0x5dc78c.signed;
    }
    if (_0x5dc78c.allow_play !== "yes") {
      let _0x4cfdb5 = "<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim 1s infinite;border-style:solid;border-color:#fff transparent transparent transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim div:nth-child(3){animation-delay:-.1s}@keyframes gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer] div video{width:100%!important;height:100%!important}[data-gamePlayerplayer] div lima-video{width:100%!important;height:100%!important}.gamePlayerContent video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px 30px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle .75s linear infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0) #fff rgba(201,62,201,0) #fff;border-image:initial;border-radius:100%;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;transform-origin:center!important}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:\"open sans\";font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu li{border-bottom:1px solid rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px 0;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu li a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu li a:hover{text-decoration:underline}.gamePlayerContextMenu li:last-child{border-bottom:none}.gamePlayerContextMenu li span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq iframe:first-of-type{display:block!important;background:0 0!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerFlashSplash embed{transform:scale(100)}.loadingButton span{opacity:0;transition:.2s}@keyframes bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports (padding:min(12px,13vw)){:root{--min5050:min(50px, 5vw);--min202:min(20px, 2vw);--min405:40px;--min203:min(20px, 3vh);--min405:min(40px, 5vw);--min255:min(25px, 5vw);--min143:min(14px, 3vw);--min22040:min(220px, 40vw);--min15015:min(150px, 15vw);--min505:min(50px, 5vw);--min364:min(36px, 4vh);--min202:min(20px, 2vw)}}.gamePlayerSplash *{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity .4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash .gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash .gamePlayerBg .gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash .gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0 0 0 0 #fff,10px 20px 21px rgba(0,0,0,.4);position:relative;transition:box-shadow .2s}.gamePlayerSplash .gamePlayerSplashContent:hover{box-shadow:-2px -2px 10px 1px #fff,10px 20px 21px rgba(0,0,0,.4)}.gamePlayerSplashContent .gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr 1fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent .gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span{display:grid;grid-template-columns:auto auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203) var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0 0 20px rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span{background-color:#91000a}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span:before{display:block;content:\" \";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span:before{animation:gamePlayerKnock .3s infinite}@keyframes gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollWb span{display:inline-block;border:2px solid #1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px 20px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0 0 20px rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px -2px 10px 1px #fff,0 5px 40px rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:\"\"!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg .gamePlayerBgImage{background-image:url(" + _0x5dc78c.image + ")!important}.gamePlayerThumb>div{background-image:url(" + _0x5dc78c.image + ")}@media only screen and (max-width:480px){.gamePlayerThumb{display:none}}</style> <div class=\"gamePlayerContent gamePlayerContentSafeSize\"id=theGameBox><div id=gamePlayermw1jclueedb9wbbpdztq data-gameplayerplayer=true><div class=\"gamePlayerSplash gamePlayerSplashPreroll\"><div class=gamePlayerBg><div class=gamePlayerBgImage></div></div><div class=gamePlayerSplashContent><div class=gamePlayerCenterContent><div><div class=gamePlayerPrerollInfo><div class=gamePlayerButtons><div class=gamePlayerPrerollCTA onclick=\"window.open('" + _0x5dc78c.redirect_url + "', '_blank')\" id=btn_playgame><span>Play game</span></div></div><div class=gamePlayerTitle>" + _0x5dc78c.name + "</div><div class=gamePlayerPrerollDescription>" + _0x5dc78c.description + "</div></div></div><div><div class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>";
      let _0x2d0f3b = Number(_0x5dc78c.unlock_timer) || 0;
      let _0xff1151 = Math.max(_0x2d0f3b * 1000, 15000);
      setTimeout(function () {
        document.body.innerHTML = _0x4cfdb5;
      }, _0xff1151);
    }
    try {
      const _0x44d798 = "gmsdksigndomain";
      localStorage.setItem("gmsdksigndomain", window.GMSOFT_SIGNED);
    } catch (_0x487a49) {
      console.error("An error occurred while accessing localStorage:", _0x487a49);
    }
    let _0x12bbff = _0x553545.gameinfo || {};
    let _0x4792c1 = _0x12bbff.promotion || {};
    window.GMSOFT_GAME_INFO = {
      sdktype: window.GMSOFT_SDKTYPE,
      more_games_url: _0x12bbff.moregames_url || "",
      promotion: _0x4792c1
    };
    console.log("GMSOFT_GAME_INFO");
    console.log(window.GMSOFT_GAME_INFO);
    if (window.GMSOFT_SDKTYPE && window.GMSOFT_SDKTYPE != "gm") {
      document.dispatchEvent(new CustomEvent("gmsoftSdkReady"));
      return;
    }
    let _0x500ee1 = _0x553545.adsinfo || {};
    window.GMSOFT_ADS_INFO = {
      enable: _0x500ee1.enable,
      sdk_type: _0x500ee1.sdk_type || "gm",
      time_show_inter: Number(_0x500ee1.time_show_inter || 60),
      time_show_reward: Number(_0x500ee1.time_show_reward || 60),
      pubid: _0x500ee1.pubid,
      reward: _0x500ee1.reward,
      gd_game_key: "",
      wgLibrary: _0x500ee1.wgLibrary,
      wgConf: _0x500ee1.wgConf
    };
    console.log("GMSOFT_ADS_INFO");
    console.log(window.GMSOFT_ADS_INFO);
    if (_0x500ee1.enable === "yes" && _0x5dc78c.allow_play === "yes") {
      let _0x670938 = _0x500ee1.sdk_type;
      if (_0x670938 === "h5") {
        let _0x11c493 = _0x500ee1.ads_debug === "yes";
        ads_h5(_0xc5106c, _0x500ee1.pubid, _0x11c493);
      } else if (_0x670938 === "wg") {
        ads_wgplayer(_0x500ee1.wgLibrary, _0x500ee1.wgConf);
      }
    }
  } catch (_0x1c420b) {
    console.error("Error during game info or ads setup:", _0x1c420b);
  }
  document.dispatchEvent(new CustomEvent("gmsoftSdkReady"));
}
function ads_h5(_0x54f4cd, _0x316364, _0x38cddb) {
  var _0x28708a = document.createElement("script");
  _0x28708a.setAttribute("crossorigin", "anonymous");
  if (_0x38cddb == true) {
    _0x28708a.setAttribute("data-adbreak-test", "on");
  }
  _0x28708a.setAttribute("data-ad-frequency-hint", "30s");
  if (typeof _0x54f4cd !== "undefined" && _0x54f4cd != "") {
    _0x28708a.setAttribute("data-ad-channel", _0x54f4cd);
  }
  _0x28708a.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + _0x316364;
  document.head.appendChild(_0x28708a);
  this._showRewardAdFn = null;
  window.adsbygoogle = window.adsbygoogle || [];
  var _0x1ea6d4 = {};
  _0x1ea6d4.adBreak = window.adConfig = function (_0x4ed610) {
    adsbygoogle.push(_0x4ed610);
  };
  _0x1ea6d4.ready = false;
  function _0x50433e() {
    _0x1ea6d4.ready = true;
  }
  adConfig({
    preloadAdBreaks: "on",
    onReady: _0x50433e
  });
  var _0x333067 = false;
  _0x1ea6d4.onBeforeAd = function () {
    _0x333067 = true;
  };
  _0x1ea6d4.onAfterAd = function () {
    _0x333067 = false;
  };
  window.afg = _0x1ea6d4;
}
function ads_wgplayer(_0x31936e, _0x276100) {
  try {
    var _0xdb0478 = document.createElement("script");
    _0xdb0478.addEventListener("load", function (_0xda5ecc) {
      var _0x5bff8a = document.createElement("script");
      _0x5bff8a.addEventListener("load", function (_0x3d65f4) {
        console.log("WGSDK: Development resources loaded.");
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x5bff8a);
      _0x5bff8a.src = _0x31936e;
    }.bind(this));
    document.getElementsByTagName("head")[0].appendChild(_0xdb0478);
    _0xdb0478.src = _0x276100;
    this._showRewardAdFn = null;
  } catch (_0x53ba8e) {
    console.log(_0x53ba8e);
  }
}
function is_diff_host() {
  return false;
}
function httpGet(_0xbcda27) {
  var _0x58a71e = new XMLHttpRequest();
  let _0x306c88 = "";
  _0x58a71e.open("GET", _0xbcda27, false);
  _0x58a71e.send(_0x306c88);
  return _0x58a71e.responseText;
}