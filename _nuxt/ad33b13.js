(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1730:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">import</span> random\\n<span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">__init__</span><span class=\\"hljs-params\\">(self, w)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type w: List[int]\\n        \\"\\"\\"</span>\\n        self.sums=[w[<span class=\\"hljs-number\\">0</span>]]\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">1</span>,len(w)):\\n          self.sums.append(self.sums[i<span class=\\"hljs-number\\">-1</span>]+w[i])\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">pickIndex</span><span class=\\"hljs-params\\">(self)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        rd=<span class=\\"hljs-number\\">1</span>+int(random.random()*self.sums[<span class=\\"hljs-number\\">-1</span>])\\n        lo,hi=<span class=\\"hljs-number\\">0</span>,len(self.sums)<span class=\\"hljs-number\\">-1</span>\\n        <span class=\\"hljs-keyword\\">while</span> lo&lt;hi:\\n          mid=(lo+hi)//<span class=\\"hljs-number\\">2</span>\\n          <span class=\\"hljs-keyword\\">if</span> self.sums[mid]&lt;rd:\\n            lo=mid+<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            hi=mid\\n        <span class=\\"hljs-keyword\\">return</span> lo\\n\\n\\n<span class=\\"hljs-comment\\"># Your Solution object will be instantiated and called as such:</span>\\n<span class=\\"hljs-comment\\"># obj = Solution(w)</span>\\n<span class=\\"hljs-comment\\"># param_1 = obj.pickIndex()</span>\\n</code></pre>\\n"],"querySlug":"random-pick-with-weight","created_at":"2019-02-27","timeArr":[2019,1,27,11,13,12,0],"hasThinking":false,"content":"<p>给定一个正整数数组&nbsp;<code>w</code> ，其中&nbsp;<code>w[i]</code>&nbsp;代表下标 <code>i</code>&nbsp;的权重（下标从 <code>0</code> 开始），请写一个函数&nbsp;<code>pickIndex</code>&nbsp;，它可以随机地获取下标 <code>i</code>，选取下标 <code>i</code>&nbsp;的概率与&nbsp;<code>w[i]</code>&nbsp;成正比。</p>\\n\\n<ol>\\n</ol>\\n\\n<p>例如，对于 <code>w = [1, 3]</code>，挑选下标 <code>0</code> 的概率为 <code>1 / (1 + 3)&nbsp;= 0.25</code> （即，25%），而选取下标 <code>1</code> 的概率为 <code>3 / (1 + 3)&nbsp;= 0.75</code>（即，75%）。</p>\\n\\n<p>也就是说，选取下标 <code>i</code> 的概率为 <code>w[i] / sum(w)</code> 。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>\\n[&quot;Solution&quot;,&quot;pickIndex&quot;]\\n[[[1]],[]]\\n<strong>输出：</strong>\\n[null,0]\\n<strong>解释：</strong>\\nSolution solution = new Solution([1]);\\nsolution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>\\n[&quot;Solution&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;]\\n[[[1,3]],[],[],[],[],[]]\\n<strong>输出：</strong>\\n[null,1,1,1,1,0]\\n<strong>解释：</strong>\\nSolution solution = new Solution([1, 3]);\\nsolution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。\\nsolution.pickIndex(); // 返回 1\\nsolution.pickIndex(); // 返回 1\\nsolution.pickIndex(); // 返回 1\\nsolution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。\\n\\n由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:\\n[null,1,1,1,1,0]\\n[null,1,1,1,1,1]\\n[null,1,1,1,0,0]\\n[null,1,1,1,0,1]\\n[null,1,0,1,0,0]\\n......\\n诸若此类。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= w.length &lt;= 10000</code></li>\\n\\t<li><code>1 &lt;= w[i] &lt;= 10^5</code></li>\\n\\t<li><code>pickIndex</code>&nbsp;将被调用不超过&nbsp;<code>10000</code>&nbsp;次</li>\\n</ul>\\n","title":"528. 按权重随机选择","relatedTags":["数学","二分查找","前缀和","随机化"],"difficult":"Middle","lang":["python"],"uniqueID":"528","slug":"528-Random-Pick-with-Weight"}')}}]);