(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{1403:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">k</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> mostCompetitive = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums, k</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> stack =[]\\n    stack[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">let</span> len = nums.length;\\n    <span class=\\"hljs-keyword\\">for</span> (<span class=\\"hljs-keyword\\">let</span> i = <span class=\\"hljs-number\\">0</span>; i &lt; len; i++) {\\n        <span class=\\"hljs-comment\\">//当前元素比队尾元素小，将队尾元素出栈</span>\\n        <span class=\\"hljs-comment\\">//此处需要另外判断数组剩余长度够不够填满栈，不然最后答案长度可能会小于k</span>\\n        <span class=\\"hljs-keyword\\">while</span> (nums[i] &lt; stack[stack.length<span class=\\"hljs-number\\">-1</span>] &amp;&amp; k - stack.length + <span class=\\"hljs-number\\">1</span> &lt; len - i) {\\n            stack.pop();\\n        }\\n        <span class=\\"hljs-keyword\\">if</span> (stack.length &lt; k + <span class=\\"hljs-number\\">1</span>) {\\n            stack.push(nums[i]);\\n        }\\n    }\\n\\n    <span class=\\"hljs-comment\\">// let ret = []</span>\\n\\n    <span class=\\"hljs-keyword\\">return</span> stack.slice(<span class=\\"hljs-number\\">1</span>)\\n    <span class=\\"hljs-comment\\">// while (k &gt; 0) {</span>\\n    <span class=\\"hljs-comment\\">//     ret[--k] = stack.pop();</span>\\n    <span class=\\"hljs-comment\\">// }</span>\\n\\n    <span class=\\"hljs-comment\\">// return ret;</span>\\n};\\n\\n\\n\\n</code></pre>\\n"],"querySlug":"find-the-most-competitive-subsequence","created_at":"2020-12-06","timeArr":[2020,11,6,13,13,44,0],"hasThinking":false,"content":"<p>给你一个整数数组 <code>nums</code> 和一个正整数 <code>k</code> ，返回长度为 <code>k</code> 且最具 <strong>竞争力</strong> 的<em> </em><code>nums</code> 子序列。</p>\\n\\n<p>数组的子序列是从数组中删除一些元素（可能不删除元素）得到的序列。</p>\\n\\n<p>在子序列 <code>a</code> 和子序列 <code>b</code> 第一个不相同的位置上，如果 <code>a</code> 中的数字小于 <code>b</code> 中对应的数字，那么我们称子序列 <code>a</code> 比子序列 <code>b</code>（相同长度下）更具 <strong>竞争力</strong> 。 例如，<code>[1,3,4]</code> 比 <code>[1,3,5]</code> 更具竞争力，在第一个不相同的位置，也就是最后一个位置上， <code>4</code> 小于 <code>5</code> 。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [3,5,2,6], k = 2\\n<strong>输出：</strong>[2,6]\\n<strong>解释：</strong>在所有可能的子序列集合 {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]} 中，[2,6] 最具竞争力。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [2,4,3,3,5,4,9,6], k = 4\\n<strong>输出：</strong>[2,3,3,4]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 10<sup>5</sup></code></li>\\n\\t<li><code>0 <= nums[i] <= 10<sup>9</sup></code></li>\\n\\t<li><code>1 <= k <= nums.length</code></li>\\n</ul>\\n","title":"1673. 找出最具竞争力的子序列","relatedTags":["栈","贪心","数组","单调栈"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1673","slug":"1673-Find-the-Most-Competitive-Subsequence"}')}}]);