(window.webpackJsonp=window.webpackJsonp||[]).push([[1180],{1978:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> numFactoredBinaryTrees = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> counts=<span class=\\"hljs-built_in\\">Array</span>(A.length).fill(<span class=\\"hljs-number\\">-1</span>) \\n  A.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>b-a)\\n  <span class=\\"hljs-keyword\\">let</span> mod=<span class=\\"hljs-number\\">1e9</span>+<span class=\\"hljs-number\\">7</span>\\n  <span class=\\"hljs-keyword\\">let</span> hash=<span class=\\"hljs-keyword\\">new</span> <span class=\\"hljs-built_in\\">Map</span>()\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;A.length;i++){\\n    hash.set(A[i],i)\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;A.length;i++){\\n    res=(res+calc(i,i+<span class=\\"hljs-number\\">1</span>))%mod\\n  }\\n\\n  <span class=\\"hljs-keyword\\">return</span> res\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">calc</span>(<span class=\\"hljs-params\\">id,start</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(counts[id]!==<span class=\\"hljs-number\\">-1</span>)<span class=\\"hljs-keyword\\">return</span> counts[id]\\n    <span class=\\"hljs-comment\\">// console.log(start)</span>\\n    <span class=\\"hljs-keyword\\">let</span> num=A[id]\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=start;i&lt;A.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> c=num/A[i]\\n      <span class=\\"hljs-keyword\\">if</span>(hash.has(c)){\\n        res=(res+calc(hash.get(c),i+<span class=\\"hljs-number\\">1</span>)*calc(i,i+<span class=\\"hljs-number\\">1</span>))%mod\\n      }\\n    }\\n    counts[id]=res\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n  \\n};\\n</code></pre>\\n"],"querySlug":"binary-trees-with-factors","created_at":"2019-04-25","timeArr":[2019,3,25,19,25,24,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>DP</code>或者<code>递归+hash</code>。</p>\\n<p><code>dp[i]</code>表示当前索引上存在的二叉树的总和。</p>\\n<p>先升序排序，排序后对于索引为<code>i</code>上的值，能成为它的子节点的只可能是索引<code>&lt;i</code>的值，遍历如果存在3个数，<code>a=b*c</code>，那么<code>dp[ai]+=dp[bi]*dp[ci]</code>。</p>\\n","content":"<p>给出一个含有不重复整数元素的数组 <code>arr</code> ，每个整数 <code>arr[i]</code> 均大于 1。</p>\\n\\n<p>用这些整数来构建二叉树，每个整数可以使用任意次数。其中：每个非叶结点的值应等于它的两个子结点的值的乘积。</p>\\n\\n<p>满足条件的二叉树一共有多少个？答案可能很大，返回<strong> 对 </strong><code>10<sup>9</sup> + 7</code> <strong>取余</strong> 的结果。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> <code>arr = [2, 4]</code>\\n<strong>输出:</strong> 3\\n<strong>解释:</strong> 可以得到这些二叉树: <code>[2], [4], [4, 2, 2]</code></pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> <code>arr = [2, 4, 5, 10]</code>\\n<strong>输出:</strong> <code>7</code>\\n<strong>解释:</strong> 可以得到这些二叉树: <code>[2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2]</code>.</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= arr.length &lt;= 1000</code></li>\\n\\t<li><code>2 &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>\\n\\t<li><code>arr</code> 中的所有值 <strong>互不相同</strong></li>\\n</ul>\\n","title":"823. 带因子的二叉树","relatedTags":["数组","哈希表","动态规划"],"difficult":"Middle","lang":["javascript"],"uniqueID":"823","slug":"823-Binary-Trees-With-Factors"}')}}]);