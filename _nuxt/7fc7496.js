(window.webpackJsonp=window.webpackJsonp||[]).push([[1273],{2071:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> sumSubarrayMins = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> stack=[<span class=\\"hljs-number\\">-1</span>]\\n  <span class=\\"hljs-keyword\\">let</span> preSum=[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">let</span> MOD=<span class=\\"hljs-number\\">1e9</span>+<span class=\\"hljs-number\\">7</span>\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;A.length;i++){\\n    <span class=\\"hljs-keyword\\">while</span>(stack.length&gt;<span class=\\"hljs-number\\">1</span> &amp;&amp; A[stack[stack.length<span class=\\"hljs-number\\">-1</span>]]&gt;A[i]){\\n      stack.pop()\\n      preSum.pop()\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> n=stack.length\\n    preSum.push((preSum[n<span class=\\"hljs-number\\">-1</span>]+A[i]*(i-stack[n<span class=\\"hljs-number\\">-1</span>])) % MOD)\\n    stack.push(i)\\n    res=(res + preSum[n]) % MOD\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"sum-of-subarray-minimums","created_at":"2019-03-16","timeArr":[2019,2,16,18,9,54,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>思路一：</p>\\n<p>当一个值作为子数组中最小的值，有2个参考的点</p>\\n<ol>\\n<li>它后面有多大的范围能以它作为子数组的最小值。</li>\\n<li>它前面有多大的范围能以它作为子数组的最小值。</li>\\n</ol>\\n<p>例如：<code>3,2,1,4,5</code>，这里<code>1</code>的左侧范围是3，右侧范围也是3，</p>\\n<p>意思就是左侧<code>3</code>,<code>2</code>,<code>1</code>都有部分子数组以它为最小值，而它作为最小值的范围就是右侧<code>1</code>,<code>4</code>,<code>5</code>。</p>\\n<p>因此<code>1</code>能提供的和为 <code>3*3=9</code>。</p>\\n<p>通过<code>单调递增</code>方法，计算出数组中每一个数的第一个左边比它小的值的距离（代表了有多少子数组是以它为最小），\\n和右边第一个比它小的距离（代表了它作为子数组中最小值能覆盖的范围）。</p>\\n<p>思路二：</p>\\n<p>对于遍历的每一个值，我们需要知道：</p>\\n<ol>\\n<li>它前面有多大范围以它作为子数组的最小值。</li>\\n<li>它能作为最小值的索引，这个索引之前(已经算过的)的最小值的总和。</li>\\n</ol>\\n<p>例如 <code>[1,4,2,3,5]</code>，这里<code>2</code>，前面的2个范围直到<code>索引1</code>都能以它作为最小值，还要加上<code>索引0</code>作为最小值的总和。</p>\\n<p>因此，我们只需要计算1次<code>单调递增</code>方法，但需要一个数组<code>preSum</code>去维护之前每一个值能贡献的和。</p>\\n<p>思路二代码：</p>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> sumSubarrayMins = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> stack=[<span class=\\"hljs-number\\">-1</span>]\\n  <span class=\\"hljs-keyword\\">let</span> preSum=[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">let</span> MOD=<span class=\\"hljs-number\\">1e9</span>+<span class=\\"hljs-number\\">7</span>\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-comment\\">// 每次加上当前值能贡献的作为最小值的和</span>\\n  <span class=\\"hljs-comment\\">// 在加上当前值之前的总和</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;A.length;i++){\\n    <span class=\\"hljs-keyword\\">while</span>(stack.length&gt;<span class=\\"hljs-number\\">1</span> &amp;&amp; A[stack[stack.length<span class=\\"hljs-number\\">-1</span>]]&gt;A[i]){\\n      stack.pop()\\n      preSum.pop()\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> n=stack.length\\n    preSum.push((preSum[n<span class=\\"hljs-number\\">-1</span>]+A[i]*(i-stack[n<span class=\\"hljs-number\\">-1</span>])) % MOD)\\n    stack.push(i)\\n    res=(res + preSum[n]) % MOD\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n","content":"<p>给定一个整数数组 <code>arr</code>，找到 <code>min(b)</code> 的总和，其中 <code>b</code> 的范围为 <code>arr</code> 的每个（连续）子数组。</p>\\n\\n<p>由于答案可能很大，因此<strong> 返回答案模 <code>10^9 + 7</code></strong> 。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>arr = [3,1,2,4]\\n<strong>输出：</strong>17\\n<strong>解释：\\n</strong>子数组为<strong> </strong>[3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 \\n最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>arr = [11,81,94,43,3]\\n<strong>输出：</strong>444\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= arr.length <= 3 * 10<sup>4</sup></code></li>\\n\\t<li><code>1 <= arr[i] <= 3 * 10<sup>4</sup></code></li>\\n</ul>\\n\\n<p> </p>\\n","title":"907. 子数组的最小值之和","relatedTags":["栈","数组","动态规划","单调栈"],"difficult":"Middle","lang":["javascript"],"uniqueID":"907","slug":"907-Sum-of-Subarray-Minimums"}')}}]);