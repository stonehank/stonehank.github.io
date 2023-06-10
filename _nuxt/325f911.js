(window.webpackJsonp=window.webpackJsonp||[]).push([[1108],{1906:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{void}</span> </span>Do not return anything, modify nums in-place instead.\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> sortColors = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=nums.length<span class=\\"hljs-number\\">-1</span>,c=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> p=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">while</span>(c&lt;=hi){\\n    <span class=\\"hljs-keyword\\">if</span>(nums[c]&lt;p)swap(nums,lo++,c++)\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(nums[c]&gt;p)swap(nums,c,hi--)\\n    <span class=\\"hljs-keyword\\">else</span> c++\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">swap</span>(<span class=\\"hljs-params\\">a,i,j</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> t=a[i]\\n    a[i]=a[j]\\n    a[j]=t\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"sort-colors","created_at":"2019-03-12","timeArr":[2019,2,12,16,49,34,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>直接来看一趟扫描法，要使用一趟扫描法，每个数字遍历的同时，就要将它放到正确的位置。</p>\\n<p>可以将数组划分为3块，用3个指针表示他们的边界，<code>lo</code>表示0，<code>hi</code>表示2，<code>c</code>表示扫描的指针。</p>\\n<p>例如：<code>001122</code>，这里<code>lo</code>为2,表示<code>索引0~1</code>一定都是0，<code>hi</code>为3，表示<code>索引4~5</code>一定为2.</p>\\n<p>因此每当<code>nums[c]</code>对应的一个数字，便和那个数字对应的指针进行交换，并且指针需要前进一步。</p>\\n<p>(代码见最后)</p>\\n<p>这种方法稍加改变，同样也可以处理大量不同的重复值的排序，例如<code>[1,1,2,2,3,3,4,4,4,4]</code>这种，比起一般的排序方法效率高出不少。</p>\\n<p>quick3way排序：</p>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">quick3way</span>(<span class=\\"hljs-params\\">arr</span>)</span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">sort</span>(<span class=\\"hljs-params\\">arr,lo,hi</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(arr.length&gt;<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(hi&lt;=lo)<span class=\\"hljs-keyword\\">return</span>\\n      <span class=\\"hljs-keyword\\">let</span> start=lo,cur=lo,end=hi;\\n      <span class=\\"hljs-keyword\\">let</span> pivot=arr[lo]\\n      <span class=\\"hljs-keyword\\">while</span>(cur&lt;=end){\\n        <span class=\\"hljs-keyword\\">if</span>(arr[cur]&lt;pivot)swap(arr,cur++,start++)\\n        <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(arr[cur]&gt;pivot)swap(arr,cur,end--)\\n        <span class=\\"hljs-keyword\\">else</span> cur++\\n      }\\n      sort(arr,lo,start<span class=\\"hljs-number\\">-1</span>)\\n      sort(arr,cur,hi)\\n    }\\n  }\\n  sort(arr,<span class=\\"hljs-number\\">0</span>,arr.length<span class=\\"hljs-number\\">-1</span>)\\n}\\n\\n<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">swap</span>(<span class=\\"hljs-params\\">a, i, j</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> t = a[i];\\n  a[i] = a[j];\\n  a[j] = t;\\n};\\n</code></pre>\\n","content":"<p>给定一个包含红色、白色和蓝色，一共 <code>n</code><em> </em>个元素的数组，<strong><a href=\\"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95\\" target=\\"_blank\\">原地</a></strong>对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。</p>\\n\\n<p>此题中，我们使用整数 <code>0</code>、 <code>1</code> 和 <code>2</code> 分别表示红色、白色和蓝色。</p>\\n\\n<ul>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [2,0,2,1,1,0]\\n<strong>输出：</strong>[0,0,1,1,2,2]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [2,0,1]\\n<strong>输出：</strong>[0,1,2]\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [0]\\n<strong>输出：</strong>[0]\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [1]\\n<strong>输出：</strong>[1]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>n == nums.length</code></li>\\n\\t<li><code>1 <= n <= 300</code></li>\\n\\t<li><code>nums[i]</code> 为 <code>0</code>、<code>1</code> 或 <code>2</code></li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>进阶：</strong></p>\\n\\n<ul>\\n\\t<li>你可以不使用代码库中的排序函数来解决这道题吗？</li>\\n\\t<li>你能想出一个仅使用常数空间的一趟扫描算法吗？</li>\\n</ul>\\n","title":"75. 颜色分类","relatedTags":["数组","双指针","排序"],"difficult":"Middle","lang":["javascript"],"uniqueID":"75","slug":"75-Sort-Colors"}')}}]);