(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-561e1391"],{5591:function(t,e,i){"use strict";var a=i("8642"),s=i.n(a);s.a},8642:function(t,e,i){},a09f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"favorite"},[i("van-nav-bar",{attrs:{title:"我的收藏","left-arrow":"",border:!1},on:{"click-left":function(e){return t.$router.back()}}}),i("div",{staticClass:"tab_box"},[i("van-tabs",{attrs:{animated:"",swipeable:"",border:!1},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"喜欢"}},[i("div",{staticClass:"list"},t._l(t.loveList,(function(t,e){return i("div",{key:e,staticClass:"item"},[i("VideoBox",{attrs:{video:t,isLove:!1}})],1)})),0)]),i("van-tab",{attrs:{title:"我的收藏"}},[i("div",{staticClass:"list2 flex_between"},t._l(t.list2,(function(e,a){return i("div",{key:a,staticClass:"item",style:{backgroundColor:e.color}},[t._v(" "+t._s(e.name))])})),0)])],1)],1)],1)},s=[],n=(i("96cf"),i("1da1")),o=i("8ccb"),r={components:{VideoBox:o["a"]},data:function(){return{list2:[{id:1,title:"视频",color:"#db80a9"},{id:2,title:"词汇",color:"#ff6e37"},{id:3,title:"短语",color:"#ffa22b"},{id:4,title:"话题",color:"#6b4cd8"},{id:5,title:"句型",color:"#5267fe"}],loveList:[]}},created:function(){this.getLoveList(),this.getCollectList()},methods:{getLoveList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.fetch("/mock/loveList");case 2:i=e.sent,t.loveList=i.data.data;case 4:case"end":return e.stop()}}),e)})))()},getCollectList:function(){this.list2=JSON.parse(localStorage.getItem("collect_list"))}}},c=r,l=(i("5591"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,"1b253f93",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-561e1391.18313cc7.js.map