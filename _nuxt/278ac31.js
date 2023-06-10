(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{1234:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code>\\n<span class=\\"hljs-keyword\\">var</span> ProductOfNumbers = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.arr=[]\\n  <span class=\\"hljs-keyword\\">this</span>.prd=[]\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {number} num\\n * @return {void}\\n */</span>\\nProductOfNumbers.prototype.add = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">num</span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.arr.push(num)\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;<span class=\\"hljs-keyword\\">this</span>.prd.length;i++){\\n    <span class=\\"hljs-keyword\\">this</span>.prd[i]*=num\\n  }\\n  <span class=\\"hljs-keyword\\">this</span>.prd.push(num)\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {number} k\\n * @return {number}\\n */</span>\\nProductOfNumbers.prototype.getProduct = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">k</span>) </span>{\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.prd[<span class=\\"hljs-keyword\\">this</span>.prd.length-k]\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * Your ProductOfNumbers object will be instantiated and called as such:\\n * var obj = new ProductOfNumbers()\\n * obj.add(num)\\n * var param_2 = obj.getProduct(k)\\n */</span>\\n</code></pre>\\n"],"querySlug":"product-of-the-last-k-numbers","created_at":"2020-02-16","timeArr":[2020,1,16,10,40,19,0],"hasThinking":false,"content":"<p>请你实现一个「数字乘积类」<code>ProductOfNumbers</code>，要求支持下述两种方法：</p>\\n\\n<p>1.<code>&nbsp;add(int num)</code></p>\\n\\n<ul>\\n\\t<li>将数字&nbsp;<code>num</code>&nbsp;添加到当前数字列表的最后面。</li>\\n</ul>\\n\\n<p>2.<code> getProduct(int k)</code></p>\\n\\n<ul>\\n\\t<li>返回当前数字列表中，最后&nbsp;<code>k</code>&nbsp;个数字的乘积。</li>\\n\\t<li>你可以假设当前列表中始终 <strong>至少</strong> 包含 <code>k</code> 个数字。</li>\\n</ul>\\n\\n<p>题目数据保证：任何时候，任一连续数字序列的乘积都在 32-bit 整数范围内，不会溢出。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre><strong>输入：</strong>\\n[&quot;ProductOfNumbers&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;add&quot;,&quot;getProduct&quot;,&quot;getProduct&quot;,&quot;getProduct&quot;,&quot;add&quot;,&quot;getProduct&quot;]\\n[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]\\n\\n<strong>输出：</strong>\\n[null,null,null,null,null,null,20,40,0,null,32]\\n\\n<strong>解释：</strong>\\nProductOfNumbers productOfNumbers = new ProductOfNumbers();\\nproductOfNumbers.add(3);        // [3]\\nproductOfNumbers.add(0);        // [3,0]\\nproductOfNumbers.add(2);        // [3,0,2]\\nproductOfNumbers.add(5);        // [3,0,2,5]\\nproductOfNumbers.add(4);        // [3,0,2,5,4]\\nproductOfNumbers.getProduct(2); // 返回 20 。最后 2 个数字的乘积是 5 * 4 = 20\\nproductOfNumbers.getProduct(3); // 返回 40 。最后 3 个数字的乘积是 2 * 5 * 4 = 40\\nproductOfNumbers.getProduct(4); // 返回  0 。最后 4 个数字的乘积是 0 * 2 * 5 * 4 = 0\\nproductOfNumbers.add(8);        // [3,0,2,5,4,8]\\nproductOfNumbers.getProduct(2); // 返回 32 。最后 2 个数字的乘积是 4 * 8 = 32 \\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>add</code> 和 <code>getProduct</code>&nbsp;两种操作加起来总共不会超过&nbsp;<code>40000</code>&nbsp;次。</li>\\n\\t<li><code>0 &lt;= num&nbsp;&lt;=&nbsp;100</code></li>\\n\\t<li><code>1 &lt;= k &lt;= 40000</code></li>\\n</ul>\\n","title":"1352. 最后 K 个数的乘积","relatedTags":["设计","队列","数组","数学","数据流"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1352","slug":"1352-Product-of-the-Last-K-Numbers"}')}}]);