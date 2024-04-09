//close protection
function _0x3e7e(){var _0x3a659b=['4756192jZGMqS','onbeforeun','9wUGEOj','2178972UkRTYq','848897zfXqYm','1164620zChOty','returnValu','13687yzHluF','677832DBDFQK','314264FbAtzo','load'];_0x3e7e=function(){return _0x3a659b;};return _0x3e7e();}function _0x558b(_0x5e84aa,_0x25bb0c){var _0x5d087f=_0x3e7e();return _0x558b=function(_0x4aa732,_0x420e97){_0x4aa732=_0x4aa732-(0x1db*0x5+-0x2185+0x19eb);var _0x4f1922=_0x5d087f[_0x4aa732];return _0x4f1922;},_0x558b(_0x5e84aa,_0x25bb0c);}(function(_0x4a68cf,_0x2a4695){var _0x3ef20e=_0x558b,_0x1b2bfd=_0x4a68cf();while(!![]){try{var _0x2575d=-parseInt(_0x3ef20e(0x1b0))/(-0xcbe+-0x12*0x229+-0x1*-0x33a1)+parseInt(_0x3ef20e(0x1b2))/(0x36c*0x3+0x1339+-0x1d7b)*(parseInt(_0x3ef20e(0x1b6))/(0x1*-0x247f+-0xbf5*-0x1+-0x188d*-0x1))+parseInt(_0x3ef20e(0x1b7))/(-0x152b*0x1+-0x119*-0x1f+-0x4*0x336)+-parseInt(_0x3ef20e(0x1ae))/(0x26ef+-0x54*0x19+-0x1eb6)+parseInt(_0x3ef20e(0x1b1))/(0x1d29*-0x1+0x1388*-0x2+-0x1*-0x443f)+parseInt(_0x3ef20e(0x1ad))/(-0x1*-0x221b+-0xad5+-0x21d*0xb)+-parseInt(_0x3ef20e(0x1b4))/(-0xbb8+0x7*-0x76+0x12*0xd5);if(_0x2575d===_0x2a4695)break;else _0x1b2bfd['push'](_0x1b2bfd['shift']());}catch(_0x4cfbd2){_0x1b2bfd['push'](_0x1b2bfd['shift']());}}}(_0x3e7e,0x8ba*0xf8+-0x20c6d+-0xa49*0x4),setInterval(()=>{var _0x229ccc=_0x558b;window[_0x229ccc(0x1b5)+_0x229ccc(0x1b3)]=_0x2355be=>{var _0x4bab41=_0x229ccc,_0x464637='e';_0x2355be&&(_0x2355be[_0x4bab41(0x1af)+'e']=_0x464637);;return _0x464637;};}));

//cloak
document.title.innerHTML = "Google"

//console
(async()=>{
    let consoleLoaded = false
    window.addEventListener("keydown",(e)=>{
        if(consoleLoaded==true){
            alert("Dev Tools already have been opened!")
            return
        }
        if(e.ctrlKey&&e.shiftKey&&e.key == "i"){

            (function() {
                var x = document.createElement("script");
                x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";
                x.onload = alert("Loaded Developer Console!");
                document.head.appendChild(x);
            })()
            consoleLoaded=true

        }
    })
})


//dark mode
!function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.storageKey="theme-preference",this.theme={value:this.getColorPreference()},this.reflectPreference(),this.events()}var r,n;return r=t,(n=[{key:"events",value:function(){var e=this;window.onload=function(){e.reflectPreference(),document.querySelectorAll(".js-dark-mode-trigger").forEach((function(t){t.addEventListener("click",(function(t){return e.onClick(t)}))}))},window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){var r=t.matches;e.theme.value=r?"dark":"light",e.setPreference()}))}},{key:"getColorPreference",value:function(){return localStorage.getItem(this.storageKey)?localStorage.getItem(this.storageKey):"dark"}},{key:"setPreference",value:function(){localStorage.setItem(this.storageKey,this.theme.value),this.reflectPreference()}},{key:"reflectPreference",value:function(){var e=this;document.firstElementChild.className="",document.firstElementChild.classList.add(this.theme.value),document.querySelectorAll(".js-dark-mode-trigger").forEach((function(t){null==t||t.setAttribute("aria-label",e.theme.value)}))}},{key:"onClick",value:function(e){e.preventDefault(),this.theme.value="light"===this.theme.value?"dark":"light",this.setPreference()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}())}();
