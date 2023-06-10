(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{641:function(n){n.exports=JSON.parse('{"content":"<h2 id=\\"foreignobject\\">foreignObject</h2>\\n<p>svg内部标签<code>&lt;foreignObject&gt;</code>，可以直接在svg内部插入<code>xhtml</code>元素，再通过<code>blob</code>和<code>FileReader</code>可\\n将内部<code>xhtml</code>内容转换成<em>同源</em>url，再通过<code>img.src=url</code>将svg内部的dom元素转化为图片。</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">let</span>  data = <span class=\\"hljs-string\\">`\\n&lt;svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"100\\" height=\\"150\\"&gt;\\n  &lt;foreignObject width=\\"100%\\" height=\\"100%\\"&gt;\\n    &lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\" style=\\"width:100px;\\"&gt;\\n       &lt;span&gt;some text&lt;/span&gt;\\n    &lt;/div&gt;\\n  &lt;/foreignObject&gt;\\n&lt;/svg&gt;`</span>;\\n<span class=\\"hljs-keyword\\">let</span> img = <span class=\\"hljs-keyword\\">new</span> Image();\\n<span class=\\"hljs-keyword\\">let</span> svg = <span class=\\"hljs-keyword\\">new</span> Blob([data], {<span class=\\"hljs-attr\\">type</span>: <span class=\\"hljs-string\\">\'image/svg+xml;charset=utf-8\'</span>});\\n<span class=\\"hljs-keyword\\">let</span> fr=<span class=\\"hljs-keyword\\">new</span> FileReader()\\nfr.readAsDataURL(svg)\\n<span class=\\"hljs-keyword\\">let</span> url\\nfr.onload=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n  url=fr.result\\n  img.src = url\\n  <span class=\\"hljs-built_in\\">document</span>.body.appendChild(img)\\n}</code></pre></code></pre>\\n<h2 id=\\"getimagedata\\">getImageData</h2>\\n<p>获取canvas内部的像素点</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">// 获取整个画布的像素点</span>\\n<span class=\\"hljs-keyword\\">let</span> imgData=ctx.getImageData(<span class=\\"hljs-number\\">0</span>, <span class=\\"hljs-number\\">0</span>, canvas.width, canvas.height)\\n\\n<span class=\\"hljs-keyword\\">for</span> (<span class=\\"hljs-keyword\\">let</span> py = <span class=\\"hljs-number\\">0</span>; py &lt; canvas.height; py += <span class=\\"hljs-number\\">1</span>) {\\n  <span class=\\"hljs-keyword\\">for</span> (<span class=\\"hljs-keyword\\">let</span> px = <span class=\\"hljs-number\\">0</span>; px &lt; canvas.width; px += <span class=\\"hljs-number\\">1</span>) {\\n    <span class=\\"hljs-comment\\">// 检查透明的参数(0-255)，255为完全不透明</span>\\n    <span class=\\"hljs-keyword\\">let</span> i = (px + py * canvas.width) * <span class=\\"hljs-number\\">4</span> - <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">const</span> pixel = imgData.data[i];\\n    <span class=\\"hljs-keyword\\">if</span> (pixel === <span class=\\"hljs-number\\">255</span>) {\\n      <span class=\\"hljs-comment\\">// do something</span>\\n    } \\n  }   \\n}</code></pre></code></pre>\\n","toc":[{"anchor":"foreignobject","level":2,"text":"foreignObject"},{"anchor":"getimagedata","level":2,"text":"getImageData"}],"relatedTags":null,"created_at":"2018-08-13","timeArr":[2018,7,13,0,0,0,0],"title":"svg渲染dom，canvas获取像素","uuid":"2d2fe99476f8b0fcf2a0f7ff6061756eff4803e5","summary":"<h4>foreignObject</h4>\\n<p>svg内部标签<code>&lt;foreignObject&gt;</code>，可以直接在svg内部插入<code>xhtml</code>元素，再通过<code>blob</code>和<code>FileReader</code>可\\n将内部<code>xhtml</code>内容转换成<em>同源</em>url，再通过<code>img.src=url</code>将svg内部的dom元素转化为图片。</p>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">let</span>  d...</code></pre>","slug":"svg-xuan-ran-dom，canvas-huo-qu-xiang-su","sha":"8f6c34d738ca1b40e7dbc5fd7c069695a2fb4443"}')}}]);