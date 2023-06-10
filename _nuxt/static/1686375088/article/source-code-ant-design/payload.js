__NUXT_JSONP__("/article/source-code-ant-design", (function(a,b,c,d){return {data:[{slug:a,articleDetails:{content:"\u003Ch1 id=\"antd-comments\"\u003Eantd-comments\u003C\u002Fh1\u003E\n\u003Cp\u003E阅读ant-design源码（部分）\u003C\u002Fp\u003E\n\u003Ch3 id=\"shen-me-shi-zheng-ti-？\"\u003E什么是整体？\u003C\u002Fh3\u003E\n\u003Cp\u003E&emsp;在我们阅读项目源码之前，如果你对它的功能一无所知，那简直是最可怕的事情...\n经常不知不觉就深入其中的逻辑，就像进入一团团迷雾，甚至会觉得有很多重复没必要的东西，完全不知道它们的区别。\u003C\u002Fp\u003E\n\u003Cp\u003E&emsp;当然，值的我们阅读的源码，绝大部分每个功能都是有意义的，而极少重复。\u003C\u002Fp\u003E\n\u003Cp\u003E&emsp;因此，不能一开始就深入其中，而往往先需要知道功能，会用功能，再去阅读源码。\u003C\u002Fp\u003E\n\u003Cp\u003E&emsp;ant-design是一个华丽的项目，将最常用组件及其逻辑搭配大量css进行组装，\n我们只需外部调用API，即可轻松搭建美观的界面，同时，ant-design也是可扩展的，底层是react-component，\n更为复杂，功能也更加强大。\u003C\u002Fp\u003E\n\u003Cp\u003E&emsp;此项目的理想目的就是希望能从整体入手，除了源码细节注释外，在每一个页面的开头会有一段注释，对当前页面的整体功能做了个介绍，\n如果需要自行配置，只看介绍就可以知道要去哪里细看进行配置；如果需要深入源码，看完整体介绍，再去细看源码，\n能提升阅读效率。\u003C\u002Fp\u003E\n",toc:[{anchor:b,level:1,text:b},{anchor:"shen-me-shi-zheng-ti-？",level:3,text:"什么是整体？"}],relatedTags:["源码","react","css"],created_at:"2018-08-07",timeArr:[2018,c,c,22,27,d,d],title:"源码阅读-ant-design",uuid:"bd2212eb183cedc05eb9b873778391f62063fada",summary:"\u003Ch4\u003Eantd-comments\u003C\u002Fh4\u003E\n\u003Cp\u003E阅读ant-design源码（部分）\u003C\u002Fp\u003E\n\u003Ch4\u003E什么是整体？\u003C\u002Fh4\u003E\n\u003Cp\u003E 在我们阅读项目源码之前，如果你对它的功能一无所知，那简直是最可怕的事情...\n经常不知不觉就深入其中的逻辑，就像进入一团团迷雾，甚至会觉得有很多重复没必要的东西，完全不知道它们的区别。\u003C\u002Fp\u003E\n\u003Cp\u003E 当然，值的...\u003C\u002Fp\u003E",slug:a,sha:"34b8759cdf2a2234851effc42681c04302784030"}}],fetch:{},mutations:void 0}}("source-code-ant-design","antd-comments",7,0)));