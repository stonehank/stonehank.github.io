(window.webpackJsonp=window.webpackJsonp||[]).push([[55,35,43],{2206:function(t,e,n){"use strict";n.r(e);var o=n(914),r=n(899),c=n(913),l=(n(52),n(46),{name:"Projects",data:function(){return{projectList:[{title:"Vue BBS",img:n(984),description:"Serverless评论插件，后端数据保存使用Leancloud和Firebase，支持编辑评论功能",path:"https://github.com/stonehank/vue-bbs",preview_path:"https://stonehank.github.io/vue-bbs/"},{title:"Diy Resume",img:n(985),description:'<ul>\n                            <li class="mb-0">纯前端在线创建简历，免费下载或者导出</li>\n                            <li class="mb-0">在<b>桌面端</b>可以通过拖拽，定义标签属性等创建或者修改模板</li>\n                            </ul>\n                        ',path:"https://github.com/stonehank/diy-resume-live",preview_path:"https://stonehank.github.io/diy-resume-live/"},{title:"Html To Markdown",img:n(986),description:"一个用于转换HTML为Markdown的工具， 无任何依赖，支持nodeJS",path:"https://github.com/stonehank/html-to-md",preview_path:"https://stonehank.github.io/html-to-md/"},{title:"Image Compress Plugin",img:n(987),description:"一个用于在Webpack打包时进行图片压缩的插件",path:"https://github.com/stonehank/image-compress-plugin",preview_path:null}]}},mounted:function(){var t=this;setTimeout((function(){t.detectHash()}),500)},methods:{detectHash:function(){var t=this.$route.hash,e=document.getElementById(t.slice(1));if(e)try{window.scrollTo({top:e.offsetTop})}catch(t){(document.documentElement||document.body).scrollTop=e.offsetTop}}}}),m=n(28),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e(r.a,[e(c.a,t._l(t.projectList,(function(t,n){return e(o.a,{key:n,attrs:{cols:"12",sm:"6",lg:"4"}},[e("ProjectCard",{attrs:{"project-info":t}})],1)})),1),t._v(" "),e(c.a,{attrs:{id:"project-comments"}},[e("h3",{staticClass:"mb-4 mt-12"},[t._v("评论区")]),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e("client-only",[e("CommentPanel",{attrs:{"uniq-str":"project-page"}})],1)],1)],1)],1)}),[],!1,null,"4cdaa0f9",null);e.default=component.exports;installComponents(component,{ProjectCard:n(956).default,CommentPanel:n(894).default})},894:function(t,e,n){"use strict";n.r(e);var o={props:{uniqStr:{type:String,default:decodeURI(window.location.origin+window.location.pathname)}}},r=n(28),component=Object(r.a)(o,(function(){return(0,this._self._c)("vue-bbs",{attrs:{"uniq-str":this.uniqStr}})}),[],!1,null,"7616c24f",null);e.default=component.exports},956:function(t,e,n){"use strict";n.r(e);var o=n(256),r=n(238),c=n(97),l=n(720),m=(n(11),n(70),{props:{projectInfo:{type:Object,default:function(){return{title:String,img:{type:String,default:"https://picsum.photos/500"},description:String}}}}}),h=n(28),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mx-auto h-100 d-flex flex-column"},[e("img",{staticStyle:{height:"200px",cursor:"zoom-in"},attrs:{src:t.projectInfo.img,preview:Math.floor(1e9*Math.random()+7)}}),t._v(" "),e("div",{staticClass:"flex-grow-1"},[e(c.d,{staticClass:"pt-2 pb-1 text-lg"},[t._v("\n            "+t._s(t.projectInfo.title)+"\n        ")]),t._v(" "),e(c.c,{staticClass:"text-secondary text-md",domProps:{innerHTML:t._s(t.projectInfo.description)}})],1),t._v(" "),e(c.a,[e(o.a,{staticStyle:{"text-transform":"none"},attrs:{href:t.projectInfo.path,text:"",color:"primary"}},[t._v("\n            Explore on github\n        ")]),t._v(" "),e(l.a),t._v(" "),t.projectInfo.preview_path?e(o.a,{attrs:{href:t.projectInfo.preview_path,text:"",color:"success"}},[t._v("\n            Demo\n        ")]):t._e()],1)],1)}),[],!1,null,"6cf9983a",null);e.default=component.exports},984:function(t,e,n){t.exports=n.p+"img/react-valine.46908da.png"},985:function(t,e,n){t.exports=n.p+"img/diy-resume.e8bff4d.png"},986:function(t,e,n){t.exports=n.p+"img/html-to-md.5916c08.png"},987:function(t,e,n){t.exports=n.p+"img/image-compress-plugin.02d1b7d.png"}}]);