(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0faad368"],{"029f":function(t,s,a){"use strict";var e=a("dcad"),n=a.n(e);n.a},b233:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goal"},[a("van-nav-bar",{attrs:{title:"目标与数据",border:!1,fixed:!0,"z-index":"100","left-arrow":""},on:{"click-left":function(s){return t.$router.back()}}}),a("div",{staticClass:"content"},[a("div",{staticClass:"top"},[a("div",{staticClass:"flex_bea"},[a("div",{staticClass:"user_icon flex_align"},[t._m(0),a("div",{staticClass:"user_name tit"},[t._v(t._s(t.goalInfo.name))])]),a("div",{staticClass:"text"},[t._v("学习记录")])]),a("div",{staticClass:"study flex_align"},[a("div",{staticClass:"today"},[a("p",[t._v(" "+t._s(t.goalInfo.day_time)+" "),a("span",{staticClass:"text"},[t._v("/分钟")])]),a("span",[t._v("今日学习")])]),a("div",{staticClass:"today"},[a("p",[t._v(" "+t._s(t.goalInfo.sum_time)+" "),a("span",{staticClass:"text"},[t._v("分钟")])]),a("span",[t._v("总学习时长")])])])]),a("div",{staticClass:"current"},[a("div",{staticClass:"title"},[t._v("当前级别: "+t._s(t.goalInfo.level))]),a("div",{staticClass:"item"},[a("p",[t._v("在本级别获取听力经验值达到"+t._s(2e3*t.goalInfo.hearing_num/100))]),a("van-progress",{attrs:{percentage:t.goalInfo.hearing_num,"text-color":"#222",color:"#fb7e68","stroke-width":"20","track-color":"#fceaea"}})],1),a("div",{staticClass:"item"},[a("p",[t._v("在本级别进行各项口语练习累计"+t._s(2e3*t.goalInfo.spoke_num/100)+"次")]),a("van-progress",{attrs:{percentage:t.goalInfo.spoke_num,"text-color":"#222",color:"#f77323","stroke-width":"20","track-color":"#f7f0dc"}})],1)]),a("div",{staticClass:"inc"},[a("div",{staticClass:"tit"},[t._v("分项进度")]),a("div",{ref:"scrollRef",staticClass:"wrapper"},[a("div",{staticClass:"list"},t._l(t.list,(function(s,e){return a("div",{key:e,staticClass:"item flex_center"},[a("van-circle",{attrs:{"layer-color":"#eee",color:s.color},model:{value:s.num,callback:function(a){t.$set(s,"num",a)},expression:"item.num"}}),a("p",[t._v("打卡300个话题的"+t._s(s.title)+"练习")]),a("div",{staticClass:"btn"},[t._v("去完成")])],1)})),0)])])])],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon_box flex_center"},[a("span",{staticClass:"iconfont icon-user"})])}],i=(a("96cf"),a("1da1")),o=a("1fba"),c={data:function(){return{scroll:null,currentRate:50,goalInfo:{hearing_num:0,spoke_num:0},list:[]}},created:function(){this.getInfo()},mounted:function(){this.scroll=new o["a"](this.$refs.scrollRef,{scrollX:!0,scrollY:!1,click:!0,bounce:!1})},methods:{getInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.fetch("/mock/goalData");case 2:a=s.sent,t.goalInfo=a.data.data,e=[t.goalInfo.topic,t.goalInfo.words,t.goalInfo.phrase],t.list=e,console.log(t.list);case 7:case"end":return s.stop()}}),s)})))()}}},l=c,r=(a("029f"),a("2877")),f=Object(r["a"])(l,e,n,!1,null,"3d47b8a1",null);s["default"]=f.exports},dcad:function(t,s,a){}}]);
//# sourceMappingURL=chunk-0faad368.c996f79e.js.map