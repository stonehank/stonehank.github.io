(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1691:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findMaxConsecutiveOnes = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> maxLen=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> curLen=nums[<span class=\\"hljs-number\\">0</span>]===<span class=\\"hljs-number\\">1</span>?<span class=\\"hljs-number\\">1</span>:<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;nums.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(nums[i]===<span class=\\"hljs-number\\">1</span>){\\n      curLen++\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      maxLen=<span class=\\"hljs-built_in\\">Math</span>.max(maxLen,curLen)\\n      curLen=<span class=\\"hljs-number\\">0</span>\\n    }\\n  }\\n  maxLen=<span class=\\"hljs-built_in\\">Math</span>.max(maxLen,curLen)\\n  <span class=\\"hljs-keyword\\">return</span> maxLen\\n};\\n</code></pre>\\n"],"querySlug":"max-consecutive-ones","created_at":"2019-03-13","timeArr":[2019,2,13,20,53,1,0],"hasThinking":false,"content":"<p>给定一个二进制数组， 计算其中最大连续 1 的个数。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>[1,1,0,1,1,1]\\n<strong>输出：</strong>3\\n<strong>解释：</strong>开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>输入的数组只包含 <code>0</code> 和 <code>1</code> 。</li>\\n\\t<li>输入数组的长度是正整数，且不超过 10,000。</li>\\n</ul>\\n","title":"485. 最大连续 1 的个数","relatedTags":["数组"],"difficult":"Easy","lang":["javascript"],"uniqueID":"485","slug":"485-Max-Consecutive-Ones"}')}}]);