__NUXT_JSONP__("/article/source-code-fast-memoizeVSnano-memoize", (function(a,b){return {data:[{slug:b,articleDetails:{content:"\u003Cp\u003E至今天(2018年9月7日)，这2个工具的实现源码思想是极其相似的，基本上，只要阅读了其中一个源码，也就了解了另外一个的实现。\u003C\u002Fp\u003E\n\u003Cp\u003Efast-memoize导图:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fstonehank\u002Fsourcecode-analysis\u002Fmaster\u002Fsource-code.fast-memoizeVSnano-memoize\u002Ffast-memoize.png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"chu-shi\"\u003E初识\u003C\u002Fh2\u003E\n\u003Cp\u003E大概说说它们的实现思路：\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E定义缓存结构，其中\u003Ccode\u003Efast\u003C\u002Fcode\u003E使用了\u003Ccode\u003E无prototype的对象\u003C\u002Fcode\u003E，\u003Ccode\u003Enano\u003C\u002Fcode\u003E使用了\u003Ccode\u003E普通对象\u003C\u002Fcode\u003E。\u003C\u002Fli\u003E\n\u003Cli\u003E定义序列化方法：当检测到是单参数时，都是选择JSON.stringify，而多个参数，两者有不同（后面再说）。\u003C\u002Fli\u003E\n\u003Cli\u003E定义策略：也就是缓存的具体方法，其实很简单，就是对当前缓存结构查找，找到就返回，找不到就重新运行，\n 两者都使用了\u003Ccode\u003Ebind\u003C\u002Fcode\u003E方法注入参数，可以省去运行时再去查找参数。\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E接着分析两者的异同：\u003C\u002Fp\u003E\n\u003Cp\u003E相同处：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E都使用了\u003Ccode\u003EJSON.stringify\u003C\u002Fcode\u003E作为序列化方法，因为它是原生的。\u003C\u002Fli\u003E\n\u003Cli\u003E都对返回的缓存函数进行了参数注入（这是一个极大提升性能的方法）。\u003C\u002Fli\u003E\n\u003Cli\u003E对单参数还是多参数的判断都是使用\u003Ccode\u003Efunc.length\u003C\u002Fcode\u003E(形参的数量判断)，因为\u003Ccode\u003Efunc.length\u003C\u002Fcode\u003E比\u003Ccode\u003Earguments.length\u003C\u002Fcode\u003E这种动态判断性能会好很多。\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E不同点：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003Efast\u003C\u002Fcode\u003E使用了\u003Ccode\u003E无prototype的对象\u003C\u002Fcode\u003E，\u003Ccode\u003Enano\u003C\u002Fcode\u003E使用了\u003Ccode\u003E普通对象\u003C\u002Fcode\u003E(这一点性能上相差不多)。\u003C\u002Fli\u003E\n\u003Cli\u003E当遇到多个参数时，\u003Ccode\u003Efast\u003C\u002Fcode\u003E还是继续对\u003Ccode\u003Earguments\u003C\u002Fcode\u003E进行序列化，而\u003Ccode\u003Enano\u003C\u002Fcode\u003E则复杂一点，它通过用数组将每一次多个参数保存起来，\n后续通过遍历每个参数进行全等对比\u003Ccode\u003E===\u003C\u002Fcode\u003E，判断是否从缓存调取结果。\u003C\u002Fli\u003E\n\u003Cli\u003E同样是多个参数，\u003Ccode\u003Enano\u003C\u002Fcode\u003E增加了一个参数\u003Ccode\u003Emax\u003C\u002Fcode\u003E，可以让用户自定义需要进行对比参数的长度。\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"shen-ru\"\u003E深入\u003C\u002Fh2\u003E\n\u003Cp\u003E接着看下第二点不同点的源码：\n主要看\u003Ccode\u003Enano-memoize\u003C\u002Fcode\u003E：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Efunction\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Emultiple\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Ef,k,v,eq,change,max=\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E,...args\u003C\u002Fspan\u003E) \u003C\u002Fspan\u003E{\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 用来储存i(当前对比的参数索引)和缓存值\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E rslt = {};\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F k是一个专门存放多个参数的数组 格式类似\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F [[...args],[...args],[...args]...]\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-keyword\"\u003Elet\u003C\u002Fspan\u003E i=\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E;i&lt;k.length;i++) { \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F an array of arrays of args\u003C\u002Fspan\u003E\n        \u003Cspan class=\"hljs-keyword\"\u003Elet\u003C\u002Fspan\u003E key = k[i];\n        \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 判断是否需要使用max\u003C\u002Fspan\u003E\n        \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E(max) { key = key.slice(\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E,max); }\n        \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 当前长度相等或者有max值，开始进行对比\u003C\u002Fspan\u003E\n        \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E(key.length===args.length || (max &amp;&amp; key.length&lt;args.length)) {\n          \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 获取长度\u003C\u002Fspan\u003E\n          \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E max = key.length - \u003Cspan class=\"hljs-number\"\u003E1\u003C\u002Fspan\u003E;\n          \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-keyword\"\u003Elet\u003C\u002Fspan\u003E j=\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E;j&lt;=max;j++) {\n            \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 如果发现不等，直接跳出\u003C\u002Fspan\u003E\n            \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E(!eq(key[j],args[j])) { \u003Cspan class=\"hljs-keyword\"\u003Ebreak\u003C\u002Fspan\u003E; } \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F go to next key if args don't match\u003C\u002Fspan\u003E\n            \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 当到了最后一项都没跳出 说明参数相同\u003C\u002Fspan\u003E\n            \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E(j===max) { \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F the args matched\u003C\u002Fspan\u003E\n              \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 记录当前索引\u003C\u002Fspan\u003E\n              rslt.i = i;\n              \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 调用当前参数的缓存\u003C\u002Fspan\u003E\n              rslt.v = v[i]; \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F get the cached value\u003C\u002Fspan\u003E\n            }\n          }\n        }\n      }\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 如果有i 说明是调用缓存，如果没有i，则添加缓存\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E i = rslt.i&gt;=\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E ? rslt.i : v.length;\n      \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E(change) { change(i); }\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 如果缓存不存在就执行func，存在直接返回缓存\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Etypeof\u003C\u002Fspan\u003E rslt.v === \u003Cspan class=\"hljs-string\"\u003E\"undefined\"\u003C\u002Fspan\u003E ? v[i] = f.call(\u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E,...(k[i] = args)) : rslt.v;\n    }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E可以看出，这是通过2次遍历，对\u003Ccode\u003E [[...args],[...args],[...args]...]\u003C\u002Fcode\u003E这样一种结构比较，外层遍历判断length，\nlength相等才会进入内层遍历，内层遍历就是逐个判断了。\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 注入参数，提升性能\u003C\u002Fspan\u003E\nf = multiple.bind(\n        \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E,\n        fn,\n        k,\n        v,\n        \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 逐个判断方式默认为 ===\u003C\u002Fspan\u003E\n        equals || \u003Cspan class=\"hljs-function\"\u003E(\u003Cspan class=\"hljs-params\"\u003E(a,b\u003C\u002Fspan\u003E) =&gt;\u003C\u002Fspan\u003E a===b), \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F default to just a regular strict comparison\u003C\u002Fspan\u003E\n        (maxAge ? change.bind(\u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E,v): \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E), \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F turn change logging on and bind to arg cache v\u003C\u002Fspan\u003E\n        maxArgs\n      );\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E上面一段则是参数注入方式和默认的对比方式。\u003C\u002Fp\u003E\n\u003Ch2 id=\"zong-jie\"\u003E总结\u003C\u002Fh2\u003E\n\u003Cp\u003E一个表格总结两者最大不同，假设：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E忽略===的执行时间\u003C\u002Fli\u003E\n\u003Cli\u003E使用的参数分为 引用相同 和 引用不同(但是深比较都为true)\n  例如：\u003Ccode\u003E{x:1}\u003C\u002Fcode\u003E和\u003Ccode\u003E{x:1}\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003E\u003Cem\u003E耗时操作\u003C\u002Fem\u003E\u003C\u002Fth\u003E\n\u003Cth\u003E\u003Cem\u003E多个参数(引用相同)\u003C\u002Fem\u003E\u003C\u002Fth\u003E\n\u003Cth\u003E\u003C\u002Fth\u003E\n\u003Cth\u003E\u003Cem\u003E多个参数(引用不同)\u003C\u002Fem\u003E\u003C\u002Fth\u003E\n\u003Cth\u003E\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\u003Ctr\u003E\n\u003Ctd\u003E状态\u003C\u002Ftd\u003E\n\u003Ctd\u003E首次运行\u003C\u002Ftd\u003E\n\u003Ctd\u003E后续运行\u003C\u002Ftd\u003E\n\u003Ctd\u003E首次运行\u003C\u002Ftd\u003E\n\u003Ctd\u003E后续运行\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003Efast\u003C\u002Ftd\u003E\n\u003Ctd\u003E序列化+运行函数\u003C\u002Ftd\u003E\n\u003Ctd\u003E序列化比较\u003C\u002Ftd\u003E\n\u003Ctd\u003E序列化+运行函数\u003C\u002Ftd\u003E\n\u003Ctd\u003E序列化比较\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003Enano\u003C\u002Ftd\u003E\n\u003Ctd\u003E运行函数\u003C\u002Ftd\u003E\n\u003Ctd\u003E0(===比较)\u003C\u002Ftd\u003E\n\u003Ctd\u003E运行函数\u003C\u002Ftd\u003E\n\u003Ctd\u003E运行函数(===比较失败)\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n",toc:[{anchor:"chu-shi",level:a,text:"初识"},{anchor:"shen-ru",level:a,text:"深入"},{anchor:"zong-jie",level:a,text:"总结"}],relatedTags:["源码","缓存","性能"],created_at:"2018-09-09",timeArr:[2018,8,9,23,10,16,0],title:"源码阅读-fast-memoizeVSnano-memoize",uuid:"192cb2d796eb6fa7798923cf1e642b9be3a00af6",summary:"\u003Cp\u003E至今天(2018年9月7日)，这2个工具的实现源码思想是极其相似的，基本上，只要阅读了其中一个源码，也就了解了另外一个的实现。\u003C\u002Fp\u003E\n\u003Cp\u003Efast-memoize导图:\u003C\u002Fp\u003E\n\u003Cp\u003E![](https:\u002F\u002Fraw.githubusercontent.com\u002Fstonehank\u002Fsourcecode-analysis\u002Fmaster\u002Fsou...\u003C\u002Fp\u003E",slug:b,sha:"7253519654d49748be385ec948aa3d448a6d4a7c"}}],fetch:{},mutations:void 0}}(2,"source-code-fast-memoizeVSnano-memoize")));