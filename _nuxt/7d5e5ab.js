(window.webpackJsonp=window.webpackJsonp||[]).push([[1279],{2077:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> sortArray = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  partition(<span class=\\"hljs-number\\">0</span>,nums.length<span class=\\"hljs-number\\">-1</span>)\\n  <span class=\\"hljs-keyword\\">return</span> nums\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">partition</span>(<span class=\\"hljs-params\\">i,j</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(i&gt;=j)<span class=\\"hljs-keyword\\">return</span>\\n    <span class=\\"hljs-keyword\\">let</span> p=nums[j],l=i,r=j<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(l&lt;=r){\\n      <span class=\\"hljs-keyword\\">while</span>(l&lt;=r &amp;&amp; nums[l]&lt;p)l++\\n      <span class=\\"hljs-keyword\\">while</span>(l&lt;=r &amp;&amp; nums[r]&gt;p)r--\\n      <span class=\\"hljs-keyword\\">if</span>(l&gt;r)<span class=\\"hljs-keyword\\">break</span>\\n      swap(nums,l++,r--)\\n    }\\n    swap(nums,l,j)\\n    partition(i,l<span class=\\"hljs-number\\">-1</span>)\\n    partition(l+<span class=\\"hljs-number\\">1</span>,j)\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">swap</span>(<span class=\\"hljs-params\\">arr,i,j</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> t=arr[i]\\n    arr[i]=arr[j]\\n    arr[j]=t\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"sort-an-array","created_at":"2019-04-24","timeArr":[2019,3,24,20,33,33,0],"hasThinking":false,"content":"<p>给你一个整数数组&nbsp;<code>nums</code>，请你将该数组升序排列。</p>\\n\\n<p>&nbsp;</p>\\n\\n<ol>\\n</ol>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [5,2,3,1]\\n<strong>输出：</strong>[1,2,3,5]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [5,1,1,2,0,0]\\n<strong>输出：</strong>[0,0,1,1,2,5]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>1 &lt;= nums.length &lt;= 50000</code></li>\\n\\t<li><code>-50000 &lt;= nums[i] &lt;= 50000</code></li>\\n</ol>\\n","title":"912. 排序数组","relatedTags":["数组","分治","桶排序","计数排序","基数排序","排序","堆（优先队列）","归并排序"],"difficult":"Middle","lang":["javascript"],"uniqueID":"912","slug":"912-Sort-an-Array"}')}}]);