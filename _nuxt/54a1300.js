(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1230:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">arr</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> checkIfExist = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">arr</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash={}\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> n=arr[i]\\n    <span class=\\"hljs-keyword\\">if</span>(hash[n/<span class=\\"hljs-number\\">2</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n    <span class=\\"hljs-keyword\\">if</span>(hash[n*<span class=\\"hljs-number\\">2</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n    hash[n]=<span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n};\\n</code></pre>\\n"],"querySlug":"check-if-n-and-its-double-exist","created_at":"2020-02-09","timeArr":[2020,1,9,10,31,29,0],"hasThinking":false,"content":"<p>给你一个整数数组&nbsp;<code>arr</code>，请你检查是否存在两个整数&nbsp;<code>N</code> 和 <code>M</code>，满足&nbsp;<code>N</code>&nbsp;是&nbsp;<code>M</code>&nbsp;的两倍（即，<code>N = 2 * M</code>）。</p>\\n\\n<p>更正式地，检查是否存在两个下标&nbsp;<code>i</code> 和 <code>j</code> 满足：</p>\\n\\n<ul>\\n\\t<li><code>i != j</code></li>\\n\\t<li><code>0 &lt;= i, j &lt; arr.length</code></li>\\n\\t<li><code>arr[i] == 2 * arr[j]</code></li>\\n</ul>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [10,2,5,3]\\n<strong>输出：</strong>true\\n<strong>解释：</strong>N<code> = 10</code> 是 M<code> = 5 的两倍</code>，即 <code>10 = 2 * 5 。</code>\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [7,1,14,11]\\n<strong>输出：</strong>true\\n<strong>解释：</strong>N<code> = 14</code> 是 M<code> = 7 的两倍</code>，即 <code>14 = 2 * 7 </code>。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [3,1,7,11]\\n<strong>输出：</strong>false\\n<strong>解释：</strong>在该情况下不存在 N 和 M 满足 N = 2 * M 。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>2 &lt;= arr.length &lt;= 500</code></li>\\n\\t<li><code>-10^3 &lt;= arr[i] &lt;= 10^3</code></li>\\n</ul>\\n","title":"1346. 检查整数及其两倍数是否存在","relatedTags":["数组","哈希表","双指针","二分查找","排序"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1346","slug":"1346-Check-If-N-and-Its-Double-Exist"}')}}]);