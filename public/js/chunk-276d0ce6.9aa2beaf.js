(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-276d0ce6"],{"5fd0":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"play_mode"},[e("van-nav-bar",{staticStyle:{"background-color":"rgba(0,0,0,0)"},attrs:{title:"播放模式",border:!1,"left-arrow":""},on:{"click-left":function(i){return t.$router.back()}}}),e("div",{staticClass:"content"},t._l(t.modeList,(function(i,a){return e("div",{key:a,staticClass:"item",on:{click:function(i){return t.handleSelect(a)}}},[e("div",{staticClass:"title"},[e("div",{staticClass:"dot",class:a===t.active?"active":""}),e("span",[t._v(t._s(i.title))])]),e("div",{staticClass:"bom"},[e("p",[t._v(t._s(i.content))]),e("p",{staticClass:"info"},[t._v(t._s(i.tips))])])])})),0)],1)},n=[],s={data:function(){return{active:1,modeList:[{id:1,title:"默认模式",content:"(第二遍字幕自动打开,开关可调节)",tips:""},{id:2,title:"神人模式",content:"(第二遍字保持关闭,开关可调节)",tips:""},{id:3,title:"懒人模式",content:'(视频将自动以"无字幕-有字幕-无字幕",循环播放,开关不可调节)',tips:"省时省力,是个不错的选择哟"}]}},methods:{handleSelect:function(t){localStorage.setItem("play_mode",JSON.stringify(this.modeList[t])),this.active=t}}},c=s,o=(e("b961"),e("2877")),l=Object(o["a"])(c,a,n,!1,null,"7a976f4b",null);i["default"]=l.exports},a4aa:function(t,i,e){},b961:function(t,i,e){"use strict";var a=e("a4aa"),n=e.n(a);n.a}}]);
//# sourceMappingURL=chunk-276d0ce6.9aa2beaf.js.map