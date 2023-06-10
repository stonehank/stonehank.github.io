(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{561:function(e){e.exports=JSON.parse('{"content":"<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">var</span> observer=<span class=\\"hljs-keyword\\">new</span> MutationObserver(<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">records</span>)</span>{\\n  <span class=\\"hljs-comment\\">// 获取变化的DOM的一些属性 </span>\\n  records.API1\\n})</code></pre></code></pre>\\n<p>API1：</p>\\n<pre><code><pre class=\\"hljs\\"><code>API1={\\ntype：观察的变动类型（attribute、characterData或者childList）。\\ntarget：发生变动的DOM节点。\\naddedNodes：新增的DOM节点。\\nremovedNodes：删除的DOM节点。\\npreviousSibling：前一个同级节点，如果没有则返回null。\\nnextSibling：下一个同级节点，如果没有则返回null。\\nattributeName：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。\\noldValue：变动前的值。这个属性只对attribute和characterData变动有效，如果发生childList变动，则返回null。\\n}</code></pre></code></pre><p> 启动监听：</p>\\n<p><code>observer.observe(element,options)</code></p>\\n<pre><code><pre class=\\"hljs\\"><code>options={\\nchildList：子节点的变动（指新增，删除或者更改）,\\nattributes：属性的变动,\\ncharacterData：节点内容或节点文本的变动,\\nsubtree：布尔值，表示是否将该观察器应用于该节点的所有后代节点,\\nattributeOldValue：布尔值，表示观察attributes变动时，是否需要记录变动前的属性值,\\ncharacterDataOldValue：布尔值，表示观察characterData变动时，是否需要记录变动前的值,\\nattributeFilter：数组，表示需要观察的特定属性（比如[\'class\',\'src\']）\\n}</code></pre></code></pre><p>参考：<a href=\\"http://javascript.ruanyifeng.com/dom/mutationobserver.html#toc1\\">http://javascript.ruanyifeng.com/dom/mutationobserver.html#toc1</a></p>\\n","toc":[],"relatedTags":null,"created_at":"2018-08-29","timeArr":[2018,7,29,0,0,0,0],"title":"MutationObserver对象","uuid":"e3b94840e980e8848b479296e62a83d39630ab76","summary":"<pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">var</span> observer=<span class=\\"hljs-keyword\\">new</span> MutationObserver(<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">records</span>)</span>{\\n  <span class=\\"hljs-comment\\">// 获取变化的DOM的一些属性 </span>\\n  records.API1\\n})\\n</code></pre>\\n<p>API1：</p>\\n<pre class=\\"hljs\\"><code>API1={\\ntype：观察的变动类型（attribute、characterData或者chil...</code></pre>","slug":"MutationObserver-dui-xiang","sha":"8540f01502cc34ee1bdc412b3483427e52a8e911"}')}}]);