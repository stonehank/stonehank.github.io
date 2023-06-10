(window.webpackJsonp=window.webpackJsonp||[]).push([[735],{1533:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> NumArray = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">CreateSegTree</span>(<span class=\\"hljs-params\\">sum,start,end</span>)</span>{\\n    <span class=\\"hljs-keyword\\">this</span>.sum=sum\\n    <span class=\\"hljs-keyword\\">this</span>.left=<span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">this</span>.right=<span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">this</span>.start=start\\n    <span class=\\"hljs-keyword\\">this</span>.end=end\\n  }\\n\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">create</span>(<span class=\\"hljs-params\\">start,end</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(start===end)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">new</span> CreateSegTree(nums[start],start,end)\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((start+end)/<span class=\\"hljs-number\\">2</span>)\\n    <span class=\\"hljs-keyword\\">let</span> left=create(start,mid),\\n      right=create(mid+<span class=\\"hljs-number\\">1</span>,end)\\n    <span class=\\"hljs-keyword\\">let</span> root=<span class=\\"hljs-keyword\\">new</span> CreateSegTree(left.sum+right.sum,start,end)\\n    root.left=left\\n    root.right=right\\n    <span class=\\"hljs-keyword\\">return</span> root\\n  }\\n\\n  <span class=\\"hljs-keyword\\">let</span> s=<span class=\\"hljs-number\\">0</span>,e=nums.length<span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">if</span>(e&lt;<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span>\\n  <span class=\\"hljs-keyword\\">this</span>.root=create(s,e)\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {number} i \\n * @param {number} val\\n * @return {void}\\n */</span>\\nNumArray.prototype.update = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">i, val</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">_update</span>(<span class=\\"hljs-params\\">root,index,value</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(root.start===root.end &amp;&amp; root.start===index){\\n      <span class=\\"hljs-keyword\\">return</span> root.sum=value\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((root.start+root.end)/<span class=\\"hljs-number\\">2</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(index&lt;=mid)_update(root.left,index,value)\\n    <span class=\\"hljs-keyword\\">else</span> _update(root.right,index,value)\\n    root.sum=root.left.sum+root.right.sum\\n  }\\n  _update(<span class=\\"hljs-keyword\\">this</span>.root,i,val)\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {number} i \\n * @param {number} j\\n * @return {number}\\n */</span>\\nNumArray.prototype.sumRange = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">i, j</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">_query</span>(<span class=\\"hljs-params\\">root,start,end</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(root.start===start &amp;&amp; root.end===end){\\n      <span class=\\"hljs-keyword\\">return</span> root.sum\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((root.start+root.end)/<span class=\\"hljs-number\\">2</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(end&lt;=mid)<span class=\\"hljs-keyword\\">return</span> _query(root.left,start,end)\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span> (start&gt;=mid+<span class=\\"hljs-number\\">1</span>) <span class=\\"hljs-keyword\\">return</span> _query(root.right,start,end)\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">return</span> _query(root.left,start,mid)+_query(root.right,mid+<span class=\\"hljs-number\\">1</span>,end)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> _query(<span class=\\"hljs-keyword\\">this</span>.root,i,j)\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * Your NumArray object will be instantiated and called as such:\\n * var obj = Object.create(NumArray).createNew(nums)\\n * obj.update(i,val)\\n * var param_2 = obj.sumRange(i,j)\\n */</span>\\n</code></pre>\\n"],"querySlug":"range-sum-query-mutable","created_at":"2019-04-26","timeArr":[2019,3,26,17,6,59,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>query</code>时间复杂度<code>O(n)</code>+<code>update</code>时间复杂度<code>O(1)</code> 和 <code>update</code>时间复杂度<code>O(n)</code>+<code>query</code>时间复杂度<code>O(1)</code>都可以通过。</p>\\n<p>但更好的还是建立线段树，<code>query</code>时间复杂度<code>O(logN)</code>+<code>update</code>时间复杂度<code>O(logN)</code>。</p>\\n","content":"<p>给你一个数组 <code>nums</code> ，请你完成两类查询，其中一类查询要求更新数组下标对应的值，另一类查询要求返回数组中某个范围内元素的总和。</p>\\n\\n<p>实现 <code>NumArray</code> 类：</p>\\n\\n<div class=\\"original__bRMd\\">\\n<div>\\n<ul>\\n\\t<li><code>NumArray(int[] nums)</code> 用整数数组 <code>nums</code> 初始化对象</li>\\n\\t<li><code>void update(int index, int val)</code> 将 <code>nums[index]</code> 的值更新为 <code>val</code></li>\\n\\t<li><code>int sumRange(int left, int right)</code> 返回子数组 <code>nums[left, right]</code> 的总和（即，<code>nums[left] + nums[left + 1], ..., nums[right]</code>）</li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre>\\n<strong>输入</strong>：\\n[\\"NumArray\\", \\"sumRange\\", \\"update\\", \\"sumRange\\"]\\n[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]\\n<strong>输出</strong>：\\n[null, 9, null, 8]\\n\\n<strong>解释</strong>：\\nNumArray numArray = new NumArray([1, 3, 5]);\\nnumArray.sumRange(0, 2); // 返回 9 ，sum([1,3,5]) = 9\\nnumArray.update(1, 2);   // nums = [1,2,5]\\nnumArray.sumRange(0, 2); // 返回 8 ，sum([1,2,5]) = 8\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 3 * 10<sup>4</sup></code></li>\\n\\t<li><code>-100 <= nums[i] <= 100</code></li>\\n\\t<li><code>0 <= index < nums.length</code></li>\\n\\t<li><code>-100 <= val <= 100</code></li>\\n\\t<li><code>0 <= left <= right < nums.length</code></li>\\n\\t<li>最多调用 <code>3 * 10<sup>4</sup></code> 次 <code>update</code> 和 <code>sumRange</code> 方法</li>\\n</ul>\\n</div>\\n</div>\\n","title":"307. 区域和检索 - 数组可修改","relatedTags":["设计","树状数组","线段树","数组"],"difficult":"Middle","lang":["javascript"],"uniqueID":"307","slug":"307-Range-Sum-Query-Mutable"}')}}]);