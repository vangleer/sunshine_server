(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8637ad2e"],{"922f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user_data"},[n("van-nav-bar",{staticStyle:{"background-color":"rgba(0,0,0,0)"},attrs:{title:"个人资料",border:!1,"left-arrow":"",fixed:!0},on:{"click-left":function(e){return t.$router.back()}}}),n("div",{staticClass:"content"},[n("div",{staticClass:"icon_box flex_center"},[n("van-uploader",{attrs:{"after-read":t.handleReadAfter}},[t.imgUrl?n("div",{staticClass:"user_icon"},[n("img",{attrs:{src:t.imgUrl,alt:""}})]):n("van-button",{staticClass:"flex_center",staticStyle:{height:"100px",width:"100px"},attrs:{round:"",type:"plain"}},[n("span",{staticClass:"iconfont icon-user"}),n("div",{staticClass:"photo"},[n("van-icon",{attrs:{name:"photograph"}})],1)])],1)],1),n("div",{staticClass:"box"},[n("div",{staticClass:"title"},[t._v("我的信息")]),n("div",{staticClass:"list"},[n("van-cell",{attrs:{title:"昵称",value:t.userInfo.nickname,"is-link":""},on:{click:function(e){return t.changeRouter({path:"/editUser",title:"昵称",info:t.userInfo.nickname,type:"nickname"})}}}),n("van-cell",{attrs:{title:"性别",value:t.userInfo.gender,"is-link":""},on:{click:function(e){t.showSex=!0}}}),n("van-cell",{attrs:{title:"身份",value:t.userInfo.identity,"is-link":""},on:{click:function(e){t.showIdentity=!0}}}),n("van-cell",{attrs:{title:"生日",value:t.userInfo.birthday,"is-link":""},on:{click:function(e){t.showBirthday=!0}}}),n("van-cell",{attrs:{title:"地区",value:t.userInfo.city,"is-link":""},on:{click:function(e){t.showCity=!0}}}),n("van-cell",{attrs:{title:"个性签名",value:t.userInfo.signature,"is-link":""},on:{click:function(e){return t.changeRouter({path:"/editUser",title:"个性签名",info:t.userInfo.signature,type:"signature"})}}})],1)])]),n("van-action-sheet",{attrs:{description:"请选择选择性别","cancel-text":"取消",actions:t.sexActions},on:{select:t.sexSelect},model:{value:t.showSex,callback:function(e){t.showSex=e},expression:"showSex"}}),n("van-action-sheet",{attrs:{description:"请选择身份","cancel-text":"取消",actions:t.identityAction},on:{select:t.identitySelect},model:{value:t.showIdentity,callback:function(e){t.showIdentity=e},expression:"showIdentity"}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showBirthday,callback:function(e){t.showBirthday=e},expression:"showBirthday"}},[n("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.handleBirthConfirm,cancel:function(e){t.showBirthday=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showCity,callback:function(e){t.showCity=e},expression:"showCity"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.areaList},on:{confirm:t.onConfirm,cancel:function(e){t.showCity=!1}}})],1)],1)},a=[],r=(n("99af"),n("b0c0"),n("d3b7"),n("25f0"),n("4d90"),n("96cf"),n("1da1")),c=n("5530"),s=[{text:"北京市",children:["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云区","延庆区"]},{text:"天津市",children:["和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","滨海新区","宁河区","静海区","蓟州区"]},{text:"河北省",children:["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"]},{text:"山西省",children:["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]},{text:"内蒙古自治区",children:["呼和浩特市","包头市","乌海市","赤峰市","通辽市","鄂尔多斯市","呼伦贝尔市","巴彦淖尔市","乌兰察布市","兴安盟","锡林郭勒盟","阿拉善盟"]},{text:"辽宁省",children:["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"]},{text:"吉林省",children:["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"]},{text:"黑龙江省",children:["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭地区"]},{text:"上海市",children:["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明区"]},{text:"江苏省",children:["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"]},{text:"浙江省",children:["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"]},{text:"安徽省",children:["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","六安市","亳州市","池州市","宣城市"]},{text:"福建省",children:["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"]},{text:"江西省",children:["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"]},{text:"山东省",children:["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","临沂市","德州市","聊城市","滨州市","菏泽市"]},{text:"河南省",children:["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市","省直辖县"]},{text:"湖北省",children:["武汉市","黄石市","十堰市","宜昌市","襄阳市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","省直辖县"]},{text:"湖南省",children:["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"]},{text:"广东省",children:["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市"]},{text:"广东省",children:["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"]},{text:"广西壮族自治区",children:["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"]},{text:"海南省",children:["海口市","三亚市","三沙市","儋州市"]},{text:"重庆市",children:["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","綦江区","大足区","渝北区","巴南区","黔江区","长寿区","江津区","合川区","永川区","南川区","璧山区","铜梁区","潼南区","荣昌区","开州区","梁平区","武隆区"]},{text:"四川省",children:["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"]},{text:"贵州省",children:["贵阳市","六盘水市","遵义市","安顺市","毕节市","铜仁市","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},{text:"云南省",children:["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"]},{text:"西藏自治区",children:["拉萨市","日喀则市","昌都市","林芝市","山南市","那曲市","阿里地区"]},{text:"陕西省",children:["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"]},{text:"甘肃省",children:["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"]},{text:"青海省",children:["西宁市","海东市","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},{text:"宁夏回族自治区",children:["银川市","石嘴山市","吴忠市","固原市","中卫市"]},{text:"新疆维吾尔自治区",children:["乌鲁木齐市","克拉玛依市","吐鲁番市","哈密市","昌吉回族自治州","博尔塔拉蒙古自治州","巴音郭楞蒙古自治州","阿克苏地区","克孜勒苏柯尔克孜自治州","喀什地区","和田地区","伊犁哈萨克自治州","塔城地区","阿勒泰地区","自治区直辖县级行政区划"]},{text:"台湾省",children:["台北市","高雄市","台南市","台中市","基隆市","新竹市","嘉义市","新北市"]},{text:"香港特别行政区",children:["中西区","湾仔区","东区","南区","九龙城区","油尖旺区","深水埗区","黄大仙区","观塘区","北区","大埔区","沙田区","西贡区","元朗区","屯门区","荃湾区","葵青区","离岛区","澳门半岛","离岛"]},{text:"澳门特别行政区",children:["澳门半岛","离岛"]}],o=n("2f62"),l={created:function(){this.areaList=s,this.currentDate=new Date(this.userInfo.birthday)},computed:Object(c["a"])({},Object(o["b"])(["userInfo"])),data:function(){return{imgUrl:"",areaList:{},sexActions:[{name:"男"},{name:"女"},{name:"不显示"}],identityAction:[{name:"上班族"},{name:"上学"}],minDate:new Date(1970,0,1),maxDate:new Date,currentDate:"",showSex:!1,showIdentity:!1,showBirthday:!1,showCity:!1}},activated:function(){this.imgUrl=this.userInfo.icon},deactivated:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={user_id:t.userInfo.id,nickname:t.userInfo.nickname,gender:t.userInfo.gender,identity:t.userInfo.identity,birthday:t.userInfo.birthday,city:t.userInfo.city,signature:t.userInfo.signature},console.log(n),e.next=4,t.$http.post("/user/editUser",n);case 4:i=e.sent,i.status;case 6:case"end":return e.stop()}}),e)})))()},methods:{handleReadAfter:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),e.imgUrl=t.content,i=new FormData,i.append("user_id",e.userInfo.id),i.append("photo",t.file),n.next=7,e.$http.instance.post("/user/addPhoto",i);case 7:a=n.sent,1===a.data.status&&e.$toast("上传成功");case 9:case"end":return n.stop()}}),n)})))()},changeRouter:function(t){this.$router.push({path:t.path,query:{title:t.title,info:t.info,type:t.type}})},onConfirm:function(t,e){this.userInfo.city=t[0]+t[1],this.showCity=!1},sexSelect:function(t){this.userInfo.gender=t.name,this.showSex=!1},identitySelect:function(t){this.userInfo.identity=t.name,this.showIdentity=!1},handleBirthConfirm:function(t){var e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0"),a="".concat(e,"-").concat(n,"-").concat(i);this.userInfo.birthday=a,console.log(a),this.showBirthday=!1}}},d=l,h=(n("f394"),n("2877")),u=Object(h["a"])(d,i,a,!1,null,"f8da2f0c",null);e["default"]=u.exports},a4df:function(t,e,n){},f394:function(t,e,n){"use strict";var i=n("a4df"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-8637ad2e.2df6a13a.js.map