(window.webpackJsonp=window.webpackJsonp||[]).push([[25,32,36],{729:function(t,e,r){"use strict";for(var n=r(250),o=Object(n.d)(),c=[[2,"#9c9c9c"],[5,"#96cb7a"],[10,"#7ea748"],[15,"#4474bf"],[30,"#bf3ac9"],[50,"#c98b27"],[1/0,"#b3124b"]],l={},i=0;i<o.length;i++){var h=o[i].count,label=o[i].label;l[label]="";for(var v=0;v<c.length;v++)if(h<c[v][0]){l[label]=c[v][1];break}}e.a=l},730:function(t,e,r){"use strict";r.r(e);var n=r(895),o=r(729),c={name:"ArticleTags",props:{tags:Array,clickEvent:{type:Function,default:function(){}}},computed:{labelColor:function(){return o.a}}},l=r(28),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",t._l(t.tags,(function(r,o){return e(n.a,{key:o,staticClass:"mr-1 mb-1",attrs:{label:"",small:"",color:t.labelColor[r],"text-color":"white",to:"/label/"+r},on:{click:t.clickEvent}},[t._v("\n        "+t._s(r)+"\n    ")])})),1)}),[],!1,null,"138a0466",null);e.default=component.exports},748:function(t,e,r){var content=r(749);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("6d001f1d",content,!0,{sourceMap:!1})},749:function(t,e,r){var n=r(8)((function(i){return i[1]}));n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),n.locals={},t.exports=n},887:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return f}));var n=r(19),o=(r(45),r(64),r(32),r(72),r(31),r(726)),c=r.n(o);r(77);function l(t){return null!=(data=t)&&("string"!=typeof data||""!==data.trim())&&'""'!==data&&"''"!==data&&"null"!==data&&("object"!==Object(n.a)(t)||"Invalid Date"!==t.toDateString());var data}function h(t){var mask=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ddd, D MMM, YYYY";if(Array.isArray(t))return t;if(!l(t))return null;try{return c()(t).format(mask)}catch(e){t=d(t)}try{return c()(t).format(mask)}catch(e){return d(t)}}function v(t,e){var r=new Date(d(t)).getTime();return(new Date).getTime()-r>=24*e*3600*1e3}function d(t){if(!t)return null;var e="";return"object"===Object(n.a)(t)?t.toISOString():("string"==typeof t&&t.includes("-")&&(e=t.replace(/-/g,"/")),e)}function f(t,e,r){var n={seconds:"秒前",minutes:"分钟前",hours:"小时前",now:"刚刚",days:"天前",months:"个月前"};r=null==r?n:Object.assign(n,r);var o=(t=new Date(d(t))).getTime(),c=null;c=null!=e?new Date(d(e)):(new Date).getTime();try{var l=c-o,v=Math.floor(l/864e5);if(0===v){var f=l%864e5,j=Math.floor(f/36e5);if(0===j){var m=f%36e5,x=Math.floor(m/6e4);if(0===x){var y=m%6e4,k=Math.round(y/1e3);return"".concat(k," ").concat(r.seconds)}return"".concat(x," ").concat(r.minutes)}return"".concat(j," ").concat(r.hours)}return v<0?r.now:v<30?"".concat(v," ").concat(r.days):v<365?"".concat(Math.floor(v/30)," ").concat(r.months):h(t,"yyyy-mm-dd")}catch(t){console.error("Something wrong with timeago function.",t)}return"Unknown"}},895:function(t,e,r){"use strict";r(14),r(11),r(16),r(10),r(17);var n=r(21),o=r(2),c=(r(4),r(13),r(748),r(6)),l=r(80),h=r(69),v=r(26),d=r(159),f=r(24),j=r(66),m=r(74),x=r(158),y=r(7);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,x.a,m.a,f.a,Object(d.a)("chipGroup"),Object(j.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return _(_(_(_({"v-chip":!0},m.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(m.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(n.a)(e,2),o=r[0],c=r[1];t.$attrs.hasOwnProperty(o)&&Object(y.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=_(_({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})},903:function(t,e,r){var map={"./af":750,"./af.js":750,"./ar":751,"./ar-dz":752,"./ar-dz.js":752,"./ar-kw":753,"./ar-kw.js":753,"./ar-ly":754,"./ar-ly.js":754,"./ar-ma":755,"./ar-ma.js":755,"./ar-sa":756,"./ar-sa.js":756,"./ar-tn":757,"./ar-tn.js":757,"./ar.js":751,"./az":758,"./az.js":758,"./be":759,"./be.js":759,"./bg":760,"./bg.js":760,"./bm":761,"./bm.js":761,"./bn":762,"./bn-bd":763,"./bn-bd.js":763,"./bn.js":762,"./bo":764,"./bo.js":764,"./br":765,"./br.js":765,"./bs":766,"./bs.js":766,"./ca":767,"./ca.js":767,"./cs":768,"./cs.js":768,"./cv":769,"./cv.js":769,"./cy":770,"./cy.js":770,"./da":771,"./da.js":771,"./de":772,"./de-at":773,"./de-at.js":773,"./de-ch":774,"./de-ch.js":774,"./de.js":772,"./dv":775,"./dv.js":775,"./el":776,"./el.js":776,"./en-au":777,"./en-au.js":777,"./en-ca":778,"./en-ca.js":778,"./en-gb":779,"./en-gb.js":779,"./en-ie":780,"./en-ie.js":780,"./en-il":781,"./en-il.js":781,"./en-in":782,"./en-in.js":782,"./en-nz":783,"./en-nz.js":783,"./en-sg":784,"./en-sg.js":784,"./eo":785,"./eo.js":785,"./es":786,"./es-do":787,"./es-do.js":787,"./es-mx":788,"./es-mx.js":788,"./es-us":789,"./es-us.js":789,"./es.js":786,"./et":790,"./et.js":790,"./eu":791,"./eu.js":791,"./fa":792,"./fa.js":792,"./fi":793,"./fi.js":793,"./fil":794,"./fil.js":794,"./fo":795,"./fo.js":795,"./fr":796,"./fr-ca":797,"./fr-ca.js":797,"./fr-ch":798,"./fr-ch.js":798,"./fr.js":796,"./fy":799,"./fy.js":799,"./ga":800,"./ga.js":800,"./gd":801,"./gd.js":801,"./gl":802,"./gl.js":802,"./gom-deva":803,"./gom-deva.js":803,"./gom-latn":804,"./gom-latn.js":804,"./gu":805,"./gu.js":805,"./he":806,"./he.js":806,"./hi":807,"./hi.js":807,"./hr":808,"./hr.js":808,"./hu":809,"./hu.js":809,"./hy-am":810,"./hy-am.js":810,"./id":811,"./id.js":811,"./is":812,"./is.js":812,"./it":813,"./it-ch":814,"./it-ch.js":814,"./it.js":813,"./ja":815,"./ja.js":815,"./jv":816,"./jv.js":816,"./ka":817,"./ka.js":817,"./kk":818,"./kk.js":818,"./km":819,"./km.js":819,"./kn":820,"./kn.js":820,"./ko":821,"./ko.js":821,"./ku":822,"./ku.js":822,"./ky":823,"./ky.js":823,"./lb":824,"./lb.js":824,"./lo":825,"./lo.js":825,"./lt":826,"./lt.js":826,"./lv":827,"./lv.js":827,"./me":828,"./me.js":828,"./mi":829,"./mi.js":829,"./mk":830,"./mk.js":830,"./ml":831,"./ml.js":831,"./mn":832,"./mn.js":832,"./mr":833,"./mr.js":833,"./ms":834,"./ms-my":835,"./ms-my.js":835,"./ms.js":834,"./mt":836,"./mt.js":836,"./my":837,"./my.js":837,"./nb":838,"./nb.js":838,"./ne":839,"./ne.js":839,"./nl":840,"./nl-be":841,"./nl-be.js":841,"./nl.js":840,"./nn":842,"./nn.js":842,"./oc-lnc":843,"./oc-lnc.js":843,"./pa-in":844,"./pa-in.js":844,"./pl":845,"./pl.js":845,"./pt":846,"./pt-br":847,"./pt-br.js":847,"./pt.js":846,"./ro":848,"./ro.js":848,"./ru":849,"./ru.js":849,"./sd":850,"./sd.js":850,"./se":851,"./se.js":851,"./si":852,"./si.js":852,"./sk":853,"./sk.js":853,"./sl":854,"./sl.js":854,"./sq":855,"./sq.js":855,"./sr":856,"./sr-cyrl":857,"./sr-cyrl.js":857,"./sr.js":856,"./ss":858,"./ss.js":858,"./sv":859,"./sv.js":859,"./sw":860,"./sw.js":860,"./ta":861,"./ta.js":861,"./te":862,"./te.js":862,"./tet":863,"./tet.js":863,"./tg":864,"./tg.js":864,"./th":865,"./th.js":865,"./tk":866,"./tk.js":866,"./tl-ph":867,"./tl-ph.js":867,"./tlh":868,"./tlh.js":868,"./tr":869,"./tr.js":869,"./tzl":870,"./tzl.js":870,"./tzm":871,"./tzm-latn":872,"./tzm-latn.js":872,"./tzm.js":871,"./ug-cn":873,"./ug-cn.js":873,"./uk":874,"./uk.js":874,"./ur":875,"./ur.js":875,"./uz":876,"./uz-latn":877,"./uz-latn.js":877,"./uz.js":876,"./vi":878,"./vi.js":878,"./x-pseudo":879,"./x-pseudo.js":879,"./yo":880,"./yo.js":880,"./zh-cn":881,"./zh-cn.js":881,"./zh-hk":882,"./zh-hk.js":882,"./zh-mo":883,"./zh-mo.js":883,"./zh-tw":884,"./zh-tw.js":884};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=903},909:function(t,e,r){"use strict";r.r(e);r(45);var n=r(887),o={name:"DateRender",props:{date:String,type:{default:"auto",validator:function(t){return["ago","date","auto"].includes(t)}},autoDaysGap:{default:30}},computed:{dateFormat:function(){return n.a},timeAgo:function(){return n.c},autoRender:function(){return Object(n.b)(this.date,this.autoDaysGap)?Object(n.a)(this.date,"YYYY-MM-DD"):Object(n.c)(this.date)}}},c=r(28),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return"auto"===t.type?e("span",[t._v(t._s(t.autoRender))]):"date"===t.type?e("span",[t._v(t._s(t.dateFormat(t.date,"YYYY-MM-DD")))]):"ago"===t.type?e("span",[t._v(t._s(t.timeAgo(t.date)))]):t._e()}),[],!1,null,"70154a56",null);e.default=component.exports},955:function(t,e,r){"use strict";r.r(e);var n=r(238),o=r(97),c={name:"ArticleCard",props:{articleHeader:{type:Object,default:function(){return{title:String,img:{type:String,default:"https://picsum.photos/500"},description:String,date:String,tags:Array}}}}},l=r(28),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(n.a,t._b({staticClass:"mx-auto h-100 d-flex flex-column"},"v-card",t.$attrs,!1),[e(o.d,{staticClass:"pt-2 pb-1 text-break"},[e("router-link",{attrs:{to:"/article/"+t.articleHeader.slug}},[e("h3",{staticClass:"text-lg"},[t._v(t._s(t.articleHeader.title))])])],1),t._v(" "),e(o.c,{staticClass:"d-flex flex-column justify-space-start flex-grow-1"},[e("div",[e("ArticleTags",{attrs:{tags:t.articleHeader.relatedTags}}),t._v(" "),e("div",{staticClass:"text-sm d-flex justify-space-start"},[e("DateRender",{attrs:{date:t.articleHeader.created_at}})],1)],1),t._v(" "),e("div",{staticClass:"text-secondary text-xs summary-body",domProps:{innerHTML:t._s(t.articleHeader.summary)}})])],1)}),[],!1,null,"18daea74",null);e.default=component.exports;installComponents(component,{ArticleTags:r(730).default,DateRender:r(909).default})}}]);