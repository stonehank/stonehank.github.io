(window.webpackJsonp=window.webpackJsonp||[]).push([[1121],{1919:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">S</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> reorganizeString = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">S</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> pq=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsEnd</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n      <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(arr[mid][<span class=\\"hljs-number\\">0</span>]&lt;n)lo=mid+<span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">else</span> hi=mid\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> hi\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">insert</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">0</span> || pq[pq.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]&lt;=n[<span class=\\"hljs-number\\">0</span>])pq.push(n)\\n    <span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(pq,n[<span class=\\"hljs-number\\">0</span>])\\n      pq.splice(idx,<span class=\\"hljs-number\\">0</span>,n)\\n    }\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">delMax</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> pq.pop()\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">getMax</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">return</span> pq[pq.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> hash={}\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;S.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(hash[S[i]]==<span class=\\"hljs-literal\\">null</span>)hash[S[i]]=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span> hash[S[i]]++\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">in</span> hash){\\n    insert([hash[k],k])\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> str=<span class=\\"hljs-string\\">\'\'</span>\\n  <span class=\\"hljs-keyword\\">while</span>(pq.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">let</span> [m,s]=delMax()\\n      <span class=\\"hljs-keyword\\">if</span>(m&gt;<span class=\\"hljs-number\\">1</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\'\'</span>\\n      <span class=\\"hljs-keyword\\">return</span> str+s\\n    }\\n    <span class=\\"hljs-comment\\">// console.log(pq)</span>\\n    <span class=\\"hljs-keyword\\">let</span> [m1,s1]=delMax(),\\n        [m2,s2]=delMax()\\n    <span class=\\"hljs-keyword\\">let</span> n=getMax()\\n    <span class=\\"hljs-keyword\\">while</span>(m1&gt;=n &amp;&amp; m2&gt;=n){\\n      m1--\\n      m2--\\n      str+=s1+s2\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(m1&gt;<span class=\\"hljs-number\\">0</span>)insert([m1,s1])\\n    <span class=\\"hljs-keyword\\">if</span>(m2&gt;<span class=\\"hljs-number\\">0</span>)insert([m2,s2])\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> str\\n};\\n</code></pre>\\n"],"querySlug":"reorganize-string","created_at":"2019-03-26","timeArr":[2019,2,26,23,36,39,0],"hasThinking":false,"content":"<p>给定一个字符串<code>S</code>，检查是否能重新排布其中的字母，使得两相邻的字符不同。</p>\\n\\n<p>若可行，输出任意可行的结果。若不可行，返回空字符串。</p>\\n\\n<p><strong>示例&nbsp;1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> S = &quot;aab&quot;\\n<strong>输出:</strong> &quot;aba&quot;\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> S = &quot;aaab&quot;\\n<strong>输出:</strong> &quot;&quot;\\n</pre>\\n\\n<p><strong>注意:</strong></p>\\n\\n<ul>\\n\\t<li><code>S</code> 只包含小写字母并且长度在<code>[1, 500]</code>区间内。</li>\\n</ul>\\n","title":"767. 重构字符串","relatedTags":["贪心","哈希表","字符串","计数","排序","堆（优先队列）"],"difficult":"Middle","lang":["javascript"],"uniqueID":"767","slug":"767-Reorganize-String"}')}}]);