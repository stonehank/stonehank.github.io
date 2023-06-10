(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{594:function(e){e.exports=JSON.parse('{"content":"<p>最近在合并一些项目，有些用<code>Vue</code>，有的用<code>React</code>，需要将它们整合成一个项目，就用了自己的多页面项目框架，几点感受和需要改进的想法记录下。</p>\\n<p>一些感受：</p>\\n<ul>\\n<li>总的来说合并还是比较顺利的，一些依赖组件比较旧，因此另外一些依赖组件必须降级才能兼容使用；</li>\\n<li>由于目前不同的框架还是占用不同页面，需要另外一个独立的导航栏；</li>\\n<li>另外，如果页面名称和路由名称也是不能重复，否则会造成冲突</li>\\n</ul>\\n<p>需要改进：</p>\\n<ul>\\n<li>页面名称和路由名称冲突问题，考虑：(检测机制？新的规则(<code>spa</code>目录下不编译其他页面)？)</li>\\n<li>框架合并不能做到同页面的合并，尝试：(多个前端框架)，考虑：（框架之前通信问题），参考：（微前端）</li>\\n<li>页面固定逻辑文件太多，考虑复用</li>\\n</ul>\\n<p>总的来说，小问题遇到很多，但也容易解决，大问题往往都是结构性的问题，必须主动去发现，多方面考虑。</p>\\n","toc":[],"relatedTags":null,"created_at":"2021-06-06","timeArr":[2021,5,6,0,0,0,0],"title":"关于多页面架构的一些改进记录","uuid":"eb0d4100c186d638be56c73f46e9a3c7b79ef557","summary":"<p>最近在合并一些项目，有些用<code>Vue</code>，有的用<code>React</code>，需要将它们整合成一个项目，就用了自己的多页面项目框架，几点感受和需要改进的想法记录下。</p>\\n<p>一些感受：</p>\\n<ul>\\n<li>总的来说合并还是比较顺利的，一些依赖组件比较旧，因此另外一些依赖组件必须降级才能兼容使用；</li>\\n<li>由于目前不同的框架还是占用不同页面，需要另外一个独立的导...</li>\\n</ul>","slug":"guan-yu-duo-ye-mian-jia-gou-de-yi-xie-gai-jin-ji-lu","sha":"ab7b2795a1c62781543e7cd495aa91abce71e480"}')}}]);