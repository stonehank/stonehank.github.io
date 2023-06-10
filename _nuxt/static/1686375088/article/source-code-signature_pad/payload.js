__NUXT_JSONP__("/article/source-code-signature_pad", (function(a,b,c){return {data:[{slug:c,articleDetails:{content:"\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fszimek\u002Fsignature_pad\"\u003Esignature_pad\u003C\u002Fa\u003E一个基于Canvas的平滑手写画板工具\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Chr\u003E\n\u003Ch4 id=\"yi-xie-jie-shao\"\u003E一些介绍\u003C\u002Fh4\u003E\n\u003Cp\u003E实现手写有多种方式。\u003C\u002Fp\u003E\n\u003Cp\u003E一种比较容易做出的是对鼠标移动轨迹画点，再将两点之间以\u003Ccode\u003E直线\u003C\u002Fcode\u003E相连，最后再进行平滑处理，这种方案不需要什么算法支持，但同样，它面对一个性能和美观的抉择，打的点多，密集，性能相对较低，但更加美观，视觉上更平滑；\u003C\u002Fp\u003E\n\u003Cp\u003E此处用的另一种方案，画贝塞尔曲线。\u003C\u002Fp\u003E\n\u003Cp\u003E由于\u003Ccode\u003Ecanvas\u003C\u002Fcode\u003E没有默认的画出贝塞尔曲线方法，因此曲线是通过不断画出\u003Ccode\u003E一个个点\u003C\u002Fcode\u003E形成的，那么问题来了，这些点谁来定？\u003C\u002Fp\u003E\n\u003Cp\u003E这里使用了贝塞尔曲线的一系列算法，包括\u003Ccode\u003E求控制点\u003C\u002Fcode\u003E，\u003Ccode\u003E求长度\u003C\u002Fcode\u003E，\u003Ccode\u003E计算当前点的大小\u003C\u002Fcode\u003E，最后用\u003Ccode\u003Ecanvas\u003C\u002Fcode\u003E画出每一个确定位置的点。\u003C\u002Fp\u003E\n\u003Ch4 id=\"can-shu-ji-pei-zhi-jie-shao\"\u003E参数及配置介绍\u003C\u002Fh4\u003E\n\u003Cp\u003E提供的可配置参数如下\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003Eexport interface IOptions {\n  \u002F\u002F 点的大小(不是线条)\n  dotSize?: number | (() =&gt; number);\n  \u002F\u002F 最粗的线条宽度\n  minWidth?: number;\n  \u002F\u002F 最细的线条宽度\n  maxWidth?: number;\n  \u002F\u002F 最小间隔距离(这个距离用贝塞尔曲线填充)\n  minDistance?: number;\n  \u002F\u002F 背景色\n  backgroundColor?: string;\n  \u002F\u002F 笔颜色\n  penColor?: string;\n  \u002F\u002F 节流的间隔\n  throttle?: number;\n  \u002F\u002F 当前画笔速度的计算率，默认0.7，意思就是 当前速度=当前实际速度*0.7+上一次速度*0.3\n  velocityFilterWeight?: number;\n  \u002F\u002F 初始回调\n  onBegin?: (event: MouseEvent | Touch) =&gt; void;\n  \u002F\u002F 结束回调\n  onEnd?: (event: MouseEvent | Touch) =&gt; void;\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E这里要注意的是并没有\u003Ccode\u003E线条粗细\u003C\u002Fcode\u003E这个选项，因为这里面的粗细不等线条都是通过一个个大小不同的点构造而成；\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ccode\u003Ethrottle\u003C\u002Fcode\u003E这个配置可以参考\u003Ccode\u003Eloadsh\u003C\u002Fcode\u003E或者\u003Ccode\u003Eunderscore\u003C\u002Fcode\u003E的\u003Ccode\u003E_.throttle\u003C\u002Fcode\u003E，功能一致，就是为了提高性能。\u003C\u002Fp\u003E\n\u003Ch4 id=\"zhu-ce-shi-jian\"\u003E注册事件\u003C\u002Fh4\u003E\n\u003Cp\u003E在\u003Ccode\u003Econstructor\u003C\u002Fcode\u003E内部，除了配置传入的参数外，就是注册事件。\u003C\u002Fp\u003E\n\u003Cp\u003E这里优先使用了\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FAPI\u002FPointerEvent\"\u003EPointerEvent\u003C\u002Fa\u003E触点事件，\u003Ccode\u003EPointerEvent\u003C\u002Fcode\u003E可以说是触摸以及点击事件的一个统一，如果设备支持，不需要再分别为\u003Ccode\u003Emouse\u003C\u002Fcode\u003E和\u003Ccode\u003Etouch\u003C\u002Fcode\u003E写两套事件了。\u003C\u002Fp\u003E\n\u003Ch4 id=\"zhuang-tai-shu-ju-chu-cun\"\u003E状态数据储存\u003C\u002Fh4\u003E\n\u003Cp\u003E状态开关：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003Ethis._mouseButtonDown\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E  当执行\u003Ccode\u003Emove\u003C\u002Fcode\u003E事件时，会检查此状态，只有在\u003Ccode\u003Etrue\u003C\u002Fcode\u003E的情况下才会执行。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E数据储存分为2种格式：\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003EpointGroup\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E 这是当前笔画的点的一个集合，内部储存了当前笔画的颜色\u003Ccode\u003Ecolor\u003C\u002Fcode\u003E和所有的点\u003Ccode\u003Epoints&lt;Array&gt;\u003C\u002Fcode\u003E。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003Ethis._data\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E 这是一个储存所有笔画的栈，格式为\u003Ccode\u003E[pointGroup, pointGroup, ..., pointGroup]\u003C\u002Fcode\u003E，当需要执行\u003Ccode\u003Eundo\u003C\u002Fcode\u003E的时候，只需要删除\u003Ccode\u003Ethis._data\u003C\u002Fcode\u003E中的最后一条数据。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch4 id=\"shi-jian-liu-cheng-ji-fang-fa\"\u003E事件流程及方法\u003C\u002Fh4\u003E\n\u003Ch5 id=\"mousedown-shi-jian\"\u003E\u003Ccode\u003EmouseDown\u003C\u002Fcode\u003E事件\u003C\u002Fh5\u003E\n\u003Cp\u003E当鼠标(触点)按下时，改变状态\u003Ccode\u003Ethis._mouseButtonDown = true\u003C\u002Fcode\u003E，调用\u003Ccode\u003EonBegin\u003C\u002Fcode\u003E回调，创建当前笔画的一个新的集合，然后对\u003Cstrong\u003E当前点执行更新\u003C\u002Fstrong\u003E。\u003C\u002Fp\u003E\n\u003Ch5 id=\"mousemove-shi-jian\"\u003E\u003Ccode\u003EmouseMove\u003C\u002Fcode\u003E事件\u003C\u002Fh5\u003E\n\u003Cp\u003E首先检查\u003Ccode\u003Ethis._mouseButtonDown\u003C\u002Fcode\u003E状态，对\u003Cstrong\u003E当前点执行更新\u003C\u002Fstrong\u003E。\u003C\u002Fp\u003E\n\u003Ch5 id=\"mouseup-shi-jian\"\u003E\u003Ccode\u003EmouseUp\u003C\u002Fcode\u003E事件\u003C\u002Fh5\u003E\n\u003Cp\u003E改变状态\u003Ccode\u003Ethis._mouseButtonDown = false;\u003C\u002Fcode\u003E，调用\u003Ccode\u003EonEnd\u003C\u002Fcode\u003E回调，对\u003Cstrong\u003E当前点执行更新\u003C\u002Fstrong\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E可以看到，上面的每一个事件内部都调用对当前点执行更新的方法。\u003C\u002Fp\u003E\n\u003Ch5 id=\"dian-de-geng-xin-fang-fa-_strokeupdate\"\u003E点的更新方法\u003Ccode\u003E_strokeUpdate\u003C\u002Fcode\u003E\u003C\u002Fh5\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003Eprivate _strokeUpdate(event: MouseEvent | Touch): \u003Cspan class=\"hljs-keyword\"\u003Evoid\u003C\u002Fspan\u003E {\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 获取当前触点的位置\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E x = event.clientX;\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E y = event.clientY;\n\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 创建点\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E point = \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E._createPoint(x, y);\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 调出最后一个点集\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E lastPointGroup = \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E._data[\u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E._data.length - \u003Cspan class=\"hljs-number\"\u003E1\u003C\u002Fspan\u003E];\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 获取最后一个点集的点的数组\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E lastPoints = lastPointGroup.points;\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 如果存在上一个点，获取上一个点\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E lastPoint =\n      lastPoints.length &gt; \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E &amp;&amp; lastPoints[lastPoints.length - \u003Cspan class=\"hljs-number\"\u003E1\u003C\u002Fspan\u003E];\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 判断上一个点到当前点是否太近(也就是小于配置的最小间隔距离)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E isLastPointTooClose = lastPoint\n      ? point.distanceTo(lastPoint) &lt;= \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E.minDistance\n      : \u003Cspan class=\"hljs-literal\"\u003Efalse\u003C\u002Fspan\u003E;\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 调出点集的颜色\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E color = lastPointGroup.color;\n\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F Skip this point if it's too close to the previous one\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 存在上一个点但是太近，跳过，其余的执行\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (!lastPoint || !(lastPoint &amp;&amp; isLastPointTooClose)) {\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 向上一次的点数组中添加当前点，并且生成一个新的贝塞尔曲线实例\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 包括4个点 （初始点，2个控制点，结束点）\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 初始宽度，最终宽度\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E curve = \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E._addPoint(point);\n\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 如果不存在lastPoint，即当前点是第一个点\u003C\u002Fspan\u003E\n      \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (!lastPoint) {\n        \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 画一个点\u003C\u002Fspan\u003E\n        \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E._drawDot({ color, point });\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 如果存在lastPoint 并且能形成一个贝塞尔曲线实例(3个点以上)\u003C\u002Fspan\u003E\n      } \u003Cspan class=\"hljs-keyword\"\u003Eelse\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (curve) {\n        \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 画出参数中curve实例中两点之间的曲线\u003C\u002Fspan\u003E\n        \u003Cspan class=\"hljs-keyword\"\u003Ethis\u003C\u002Fspan\u003E._drawCurve({ color, curve });\n      }\n      \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F 添加到当前笔画的点数组\u003C\u002Fspan\u003E\n      lastPoints.push({\n        \u003Cspan class=\"hljs-attr\"\u003Etime\u003C\u002Fspan\u003E: point.time,\n        \u003Cspan class=\"hljs-attr\"\u003Ex\u003C\u002Fspan\u003E: point.x,\n        \u003Cspan class=\"hljs-attr\"\u003Ey\u003C\u002Fspan\u003E: point.y,\n      });\n    }\n  }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E这个方法前面就是一系列判断\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E判断是否是第一个点\u003C\u002Fli\u003E\n\u003Cli\u003E判断是否能加入点的集合(满足点的最小间隔)\u003C\u002Fli\u003E\n\u003Cli\u003E判断是否能画出贝塞尔曲线(满足至少3个点)  对于能画出贝塞尔曲线的点，执行算法，求出\u003Ccode\u003EBesier\u003C\u002Fcode\u003E实例，包括4个点\u003Ccode\u003E初始点\u003C\u002Fcode\u003E，\u003Ccode\u003E结束点\u003C\u002Fcode\u003E，\u003Ccode\u003E控制点1\u003C\u002Fcode\u003E，\u003Ccode\u003E控制点2\u003C\u002Fcode\u003E以及当前曲线中线条的的\u003Ccode\u003E初始宽度\u003C\u002Fcode\u003E和\u003Ccode\u003E结束宽度\u003C\u002Fcode\u003E。  具体如何算的，请参考源码\u003Ccode\u003Esrc\u002Fbezier.ts\u003C\u002Fcode\u003E和\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fsquare-corner-blog\u002Fsmoother-signatures-be64515adb33\"\u003E这篇文章\u003C\u002Fa\u003E。\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E对于能画出贝塞尔曲线的，对已经求出的\u003Ccode\u003EBezier\u003C\u002Fcode\u003E实例，执行\u003Ccode\u003Ethis._drawCurve\u003C\u002Fcode\u003E，否则执行\u003Ccode\u003Ethis._drawDot\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Ch5 id=\"hua-dian-de-fang-fa-this_drawdot\"\u003E画点的方法\u003Ccode\u003Ethis._drawDot\u003C\u002Fcode\u003E\u003C\u002Fh5\u003E\n\u003Cp\u003E获取配置中的\u003Ccode\u003EdotSize\u003C\u002Fcode\u003E，执行\u003Ccode\u003Ecanvas\u003C\u002Fcode\u003E画点。\u003C\u002Fp\u003E\n\u003Ch5 id=\"hua-xian-de-fang-fa-this__drawcurve\"\u003E画线的方法\u003Ccode\u003Ethis.__drawCurve\u003C\u002Fcode\u003E\u003C\u002Fh5\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003E求出当前\u003Ccode\u003EBezier\u003C\u002Fcode\u003E实例\u003Ccode\u003E初始点\u003C\u002Fcode\u003E和\u003Ccode\u003E结束点\u003C\u002Fcode\u003E之间的距离，这个距离不是直线距离，而是贝塞尔曲线距离。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E对这个距离进行扩展，例如，计算得到距离为\u003Ccode\u003E50\u003C\u002Fcode\u003E，那就扩展为\u003Ccode\u003E100\u003C\u002Fcode\u003E个点，即我需要在\u003Ccode\u003E50\u003C\u002Fcode\u003E这个距离内画出\u003Ccode\u003E100\u003C\u002Fcode\u003E个点；\u003C\u002Fp\u003E\n\u003Cp\u003E 这么做可以保证在正常或者稍微快速的书写中，不出现断层。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E接着又是\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fsquare-corner-blog\u002Fsmoother-signatures-be64515adb33\"\u003E算法\u003C\u002Fa\u003E，目的是求出这个距离内的每一个点的大小，这是一个变化值，是的粗细变化更加平滑。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E最后同样是\u003Ccode\u003Ecanvas\u003C\u002Fcode\u003E画点。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E以上就是整个基本流程。\u003C\u002Fp\u003E\n\u003Ch4 id=\"zong-jie\"\u003E总结\u003C\u002Fh4\u003E\n\u003Cp\u003E阅读一遍后，这个库说白就是基础的事件操作+贝塞尔曲线算法，但是，它内部的代码格式非常清晰，\u003Ccode\u003E细粒度+代码复用\u003C\u002Fcode\u003E使得维护起来非常方便。\u003C\u002Fp\u003E\n\u003Cp\u003E同时可以对贝塞尔曲线有一个更深层的了解(算法还是没法手撕囧)，但起码有一个比较完整的思路；\u003C\u002Fp\u003E\n\u003Cp\u003E一些可以借鉴的东西：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"#zhu-ce-shi-jian\"\u003EPointerEvent的优势\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003Ecanvas+贝塞尔曲线\u003C\u002Fli\u003E\n\u003Cli\u003E节流\u003Ccode\u003Ethrottle\u003C\u002Fcode\u003E的写法(参考源码src\u002Fthrottle.ts)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#zhuang-tai-shu-ju-chu-cun\"\u003E数据结构及实现\u003Ccode\u003Eundo\u003C\u002Fcode\u003E的方案\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch4 id=\"si-wei-dao-tu\"\u003E思维导图\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fstonehank\u002Fsourcecode-analysis\u002Fmaster\u002Fsource-code.signature_pad\u002Fsignature_pad.png\" alt=\"signature_pad导图\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E贝塞尔曲线算法资料：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fsquare-corner-blog\u002Fsmoother-signatures-be64515adb33\"\u003Ehttps:\u002F\u002Fmedium.com\u002Fsquare-corner-blog\u002Fsmoother-signatures-be64515adb33\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.lemoda.net\u002Fmaths\u002Fbezier-length\u002Findex.html\"\u003Ehttps:\u002F\u002Fwww.lemoda.net\u002Fmaths\u002Fbezier-length\u002Findex.html\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fblockquote\u003E\n",toc:[{anchor:"yi-xie-jie-shao",level:a,text:"一些介绍"},{anchor:"can-shu-ji-pei-zhi-jie-shao",level:a,text:"参数及配置介绍"},{anchor:"zhu-ce-shi-jian",level:a,text:"注册事件"},{anchor:"zhuang-tai-shu-ju-chu-cun",level:a,text:"状态数据储存"},{anchor:"shi-jian-liu-cheng-ji-fang-fa",level:a,text:"事件流程及方法"},{anchor:"mousedown-shi-jian",level:b,text:"\u003Ccode\u003EmouseDown\u003C\u002Fcode\u003E事件"},{anchor:"mousemove-shi-jian",level:b,text:"\u003Ccode\u003EmouseMove\u003C\u002Fcode\u003E事件"},{anchor:"mouseup-shi-jian",level:b,text:"\u003Ccode\u003EmouseUp\u003C\u002Fcode\u003E事件"},{anchor:"dian-de-geng-xin-fang-fa-_strokeupdate",level:b,text:"点的更新方法\u003Ccode\u003E_strokeUpdate\u003C\u002Fcode\u003E"},{anchor:"hua-dian-de-fang-fa-this_drawdot",level:b,text:"画点的方法\u003Ccode\u003Ethis._drawDot\u003C\u002Fcode\u003E"},{anchor:"hua-xian-de-fang-fa-this__drawcurve",level:b,text:"画线的方法\u003Ccode\u003Ethis.__drawCurve\u003C\u002Fcode\u003E"},{anchor:"zong-jie",level:a,text:"总结"},{anchor:"si-wei-dao-tu",level:a,text:"思维导图"}],relatedTags:["源码","算法","canvas","性能","github"],created_at:"2019-06-18",timeArr:[2019,b,18,17,28,15,0],title:"源码阅读-signature_pad",uuid:"020a984c51cbbd2495a0d29f23c81b45f6751f6d",summary:"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fszimek\u002Fsignature_pad\"\u003Esignature_pad\u003C\u002Fa\u003E一个基于Canvas的平滑手写画板工具\u003C\u002Fp\u003E",slug:c,sha:"b8278693dc6d16379d12a1d0c6876b60ec86f4e7"}}],fetch:{},mutations:void 0}}(4,5,"source-code-signature_pad")));