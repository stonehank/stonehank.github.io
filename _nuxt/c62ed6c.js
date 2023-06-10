(window.webpackJsonp=window.webpackJsonp||[]).push([[1397],{2195:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">m</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">B</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{void}</span> </span>Do not return anything, modify A in-place instead.\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> merge = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A, m, B, n</span>) </span>{\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=m<span class=\\"hljs-number\\">-1</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n    A[i+n]=A[i]\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> i=n,j=<span class=\\"hljs-number\\">0</span>,k=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">while</span>(i&lt;m+n || j&lt;n ){\\n    <span class=\\"hljs-keyword\\">if</span>(i&gt;=m+n){\\n      A[k++]=B[j++]\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(j&gt;=n){\\n      <span class=\\"hljs-comment\\">// A[k++]=A[i++]</span>\\n      <span class=\\"hljs-keyword\\">return</span>\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">let</span> a=A[i]\\n      <span class=\\"hljs-keyword\\">let</span> b=B[j]\\n      <span class=\\"hljs-keyword\\">if</span>(a&lt;=b){\\n        A[k]=a\\n        i++\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        A[k]=b\\n        j++\\n      }\\n      k++\\n    }\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"sorted-merge-lcci","created_at":"2020-03-04","timeArr":[2020,2,4,0,5,29,0],"hasThinking":false,"content":"<p>给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。</p>\\n\\n<p>初始化&nbsp;A 和 B 的元素数量分别为&nbsp;<em>m</em> 和 <em>n</em>。</p>\\n\\n<p><strong>示例:</strong></p>\\n\\n<pre><strong>输入:</strong>\\nA = [1,2,3,0,0,0], m = 3\\nB = [2,5,6],       n = 3\\n\\n<strong>输出:</strong>&nbsp;[1,2,2,3,5,6]</pre>\\n\\n<p><strong>说明:</strong></p>\\n\\n<ul>\\n\\t<li><code>A.length == n + m</code></li>\\n</ul>\\n","title":"面试题 10.01. 合并排序的数组","relatedTags":["数组","双指针","排序"],"difficult":"Easy","lang":["javascript"],"uniqueID":"面试题 10.01","slug":"mian-shi-ti-10.01-Sorted-Merge-LCCI"}')}}]);