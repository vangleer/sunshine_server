(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8118492a"],{"5bcd":function(t,e,s){},d494:function(t,e,s){"use strict";var i=s("5bcd"),a=s.n(i);a.a},fe57:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit"},[s("van-nav-bar",{attrs:{title:t.title,border:!1,"left-arrow":""},on:{"click-left":function(e){return t.$router.back()}},scopedSlots:t._u([{key:"right",fn:function(){return[s("van-button",{attrs:{size:"mini",color:"#ef6852",disabled:t.isDisabled},on:{click:t.handleSubmit}},[t._v("完成")])]},proxy:!0}])}),s("div",{staticClass:"content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("span",{staticClass:"num"},[t._v(t._s(this.message.length)+" / "+t._s(t.total))])])],1)},a=[],n={data:function(){return{title:"编辑",message:"小通",type:"",total:50}},computed:{isDisabled:function(){return 0===this.message.length}},activated:function(){this.title=this.$route.query.title,this.message=this.$route.query.info,this.type=this.$route.query.type},methods:{handleSubmit:function(){if(this.message.length>=this.total)return this.$toast("字数超出了限制!");this.$store.commit("changeType",{type:this.type,message:this.message}),this.$toast("修改成功"),this.$router.back()}}},o=n,r=(s("d494"),s("2877")),u=Object(r["a"])(o,i,a,!1,null,"831a6c0c",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-8118492a.f4ac601d.js.map