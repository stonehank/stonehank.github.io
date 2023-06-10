__NUXT_JSONP__("/article/source-code-stat", (function(a){return {data:[{slug:a,articleDetails:{content:"\u003Cp\u003E一个js性能监控器，使用canvas绘制，简洁美观，思想也不复杂\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003E通过\u003Ccode\u003Eperformance.now\u003C\u002Fcode\u003E获取当前开始时间，每次调用时，计算时间差，每隔1秒计算每一帧平均消耗的毫秒数，从而计算1000毫秒的帧数。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E根据传入的当前fps和给定的最高fps绘制canvas，分为整体层，字体层，柱状条层。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E因为不使用clearRect清除画布，每次新创建的柱状条不会被清除，从而展示出监测器的效果。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003Estat：\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fstonehank\u002Fsourcecode-analysis\u002Fmaster\u002Fsource-code.stat\u002FStat.png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n",toc:[],relatedTags:["源码","canvas","性能"],created_at:"2018-08-28",timeArr:[2018,7,28,14,34,42,0],title:"源码阅读-stat",uuid:"52494eaeba83ec352ddf9911253c8da79c8e67fd",summary:"\u003Cp\u003E一个js性能监控器，使用canvas绘制，简洁美观，思想也不复杂\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E\n\u003Cp\u003E通过\u003Ccode\u003Eperformance.now\u003C\u002Fcode\u003E获取当前开始时间，每次调用时，计算时间差，每隔1秒计算每一帧平均消耗的毫秒数，从而计算1000毫秒的帧数。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E根据传入的当前fps和给定的最高fps绘制canvas，分为整体层，字体层，柱状条层。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E3...\u003C\u002Fp\u003E",slug:a,sha:"63fbb1b85f485cc67805eb912f3d38c366d33e41"}}],fetch:{},mutations:void 0}}("source-code-stat")));