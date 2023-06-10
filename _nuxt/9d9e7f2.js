(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1483:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> summaryRanges = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">if</span>(nums.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> []\\n  <span class=\\"hljs-keyword\\">let</span> str=nums[<span class=\\"hljs-number\\">0</span>]+<span class=\\"hljs-string\\">\'\'</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;nums.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(nums[i]-nums[i<span class=\\"hljs-number\\">-1</span>]===<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">let</span> slic=str.indexOf(<span class=\\"hljs-string\\">\'-&gt;\'</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(slic===<span class=\\"hljs-number\\">-1</span>)slic=str.length\\n      str=str.slice(<span class=\\"hljs-number\\">0</span>,slic)+<span class=\\"hljs-string\\">\'-&gt;\'</span>+nums[i]\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      res.push(str)\\n      str=nums[i]+<span class=\\"hljs-string\\">\'\'</span>\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(str)res.push(str)\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"summary-ranges","created_at":"2019-03-13","timeArr":[2019,2,13,10,55,47,0],"hasThinking":false,"content":"<p>给定一个无重复元素的有序整数数组 <code>nums</code> 。</p>\\n\\n<p>返回 <strong>恰好覆盖数组中所有数字</strong> 的 <strong>最小有序</strong> 区间范围列表。也就是说，<code>nums</code> 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 <code>nums</code> 的数字 <code>x</code> 。</p>\\n\\n<p>列表中的每个区间范围 <code>[a,b]</code> 应该按如下格式输出：</p>\\n\\n<ul>\\n\\t<li><code>\\"a->b\\"</code> ，如果 <code>a != b</code></li>\\n\\t<li><code>\\"a\\"</code> ，如果 <code>a == b</code></li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [0,1,2,4,5,7]\\n<strong>输出：</strong>[\\"0->2\\",\\"4->5\\",\\"7\\"]\\n<strong>解释：</strong>区间范围是：\\n[0,2] --\x3e \\"0->2\\"\\n[4,5] --\x3e \\"4->5\\"\\n[7,7] --\x3e \\"7\\"\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [0,2,3,4,6,8,9]\\n<strong>输出：</strong>[\\"0\\",\\"2->4\\",\\"6\\",\\"8->9\\"]\\n<strong>解释：</strong>区间范围是：\\n[0,0] --\x3e \\"0\\"\\n[2,4] --\x3e \\"2->4\\"\\n[6,6] --\x3e \\"6\\"\\n[8,9] --\x3e \\"8->9\\"\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = []\\n<strong>输出：</strong>[]\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [-1]\\n<strong>输出：</strong>[\\"-1\\"]\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [0]\\n<strong>输出：</strong>[\\"0\\"]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 <= nums.length <= 20</code></li>\\n\\t<li><code>-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code></li>\\n\\t<li><code>nums</code> 中的所有值都 <strong>互不相同</strong></li>\\n\\t<li><code>nums</code> 按升序排列</li>\\n</ul>\\n","title":"228. 汇总区间","relatedTags":["数组"],"difficult":"Easy","lang":["javascript"],"uniqueID":"228","slug":"228-Summary-Ranges"}')}}]);