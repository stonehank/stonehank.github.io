(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1539:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> countSmaller = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> pq=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsEnd</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n      <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(arr[mid]&lt;n)lo=mid+<span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">else</span> hi=mid\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> hi\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">insert</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">0</span> || pq[pq.length<span class=\\"hljs-number\\">-1</span>]&lt;n){\\n      pq.push(n)\\n      <span class=\\"hljs-keyword\\">return</span> pq.length<span class=\\"hljs-number\\">-1</span>\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(pq,n)\\n      pq.splice(idx,<span class=\\"hljs-number\\">0</span>,n)\\n      <span class=\\"hljs-keyword\\">return</span> idx\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=nums.length<span class=\\"hljs-number\\">-1</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n    <span class=\\"hljs-keyword\\">let</span> count=insert(nums[i])\\n    res[i]=count\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"count-of-smaller-numbers-after-self","created_at":"2019-04-24","timeArr":[2019,3,24,2,7,10,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>只需要后序遍历，遍历的同时维护有序数组<code>pq</code>，并将<code>nums[i]</code>插入；</p>\\n<p>每次插入前使用<code>二分法</code>检查当前<code>nums[i]</code>处于的位置，也就是比多少个数字更大。</p>\\n","content":"<p>给定一个整数数组 <em>nums</em>，按要求返回一个新数组&nbsp;<em>counts</em>。数组 <em>counts</em> 有该性质： <code>counts[i]</code> 的值是&nbsp; <code>nums[i]</code> 右侧小于&nbsp;<code>nums[i]</code> 的元素的数量。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [5,2,6,1]\\n<strong>输出：</strong><code>[2,1,1,0] \\n<strong>解释：</strong></code>\\n5 的右侧有 <strong>2 </strong>个更小的元素 (2 和 1)\\n2 的右侧仅有 <strong>1 </strong>个更小的元素 (1)\\n6 的右侧有 <strong>1 </strong>个更小的元素 (1)\\n1 的右侧有 <strong>0 </strong>个更小的元素\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 &lt;= nums.length &lt;= 10^5</code></li>\\n\\t<li><code>-10^4&nbsp;&lt;= nums[i] &lt;= 10^4</code></li>\\n</ul>\\n","title":"315. 计算右侧小于当前元素的个数","relatedTags":["树状数组","线段树","数组","二分查找","分治","有序集合","归并排序"],"difficult":"Hard","lang":["javascript"],"uniqueID":"315","slug":"315-Count-of-Smaller-Numbers-After-Self"}')}}]);