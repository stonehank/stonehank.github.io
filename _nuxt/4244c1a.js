(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{1543:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> longestValidParentheses = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> stack=[<span class=\\"hljs-number\\">-1</span>]\\n  <span class=\\"hljs-keyword\\">let</span> maxLen=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;s.length;i++){\\n    \\n    <span class=\\"hljs-keyword\\">if</span>(s[i]===<span class=\\"hljs-string\\">\\"(\\"</span>){\\n      stack.push(i)\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(stack.length&lt;=<span class=\\"hljs-number\\">1</span>){\\n        stack[<span class=\\"hljs-number\\">0</span>]=i\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        stack.pop()\\n        maxLen=<span class=\\"hljs-built_in\\">Math</span>.max(maxLen,i-stack[stack.length<span class=\\"hljs-number\\">-1</span>])\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> maxLen\\n};\\n</code></pre>\\n","<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">longestValidParentheses</span><span class=\\"hljs-params\\">(self, s)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type s: str\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-comment\\"># maxLen=0</span>\\n        <span class=\\"hljs-comment\\"># stack=[-1]</span>\\n        <span class=\\"hljs-comment\\"># for i in range(len(s)):</span>\\n        <span class=\\"hljs-comment\\">#   n=s[i]</span>\\n        <span class=\\"hljs-comment\\">#   if n==\\"(\\":</span>\\n        <span class=\\"hljs-comment\\">#     stack.append(i)</span>\\n        <span class=\\"hljs-comment\\">#   else:</span>\\n        <span class=\\"hljs-comment\\">#     if len(stack)&lt;=1:</span>\\n        <span class=\\"hljs-comment\\">#       stack[0]=i</span>\\n        <span class=\\"hljs-comment\\">#     else:</span>\\n        <span class=\\"hljs-comment\\">#       stack.pop()</span>\\n        <span class=\\"hljs-comment\\">#       maxLen=max(maxLen,i-stack[-1])</span>\\n        <span class=\\"hljs-comment\\"># return maxLen</span>\\n        dp = [<span class=\\"hljs-number\\">0</span> <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">0</span>,len(s))]\\n        left = <span class=\\"hljs-number\\">0</span>\\n        ans = <span class=\\"hljs-number\\">0</span>\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">0</span>, len(s)):\\n            <span class=\\"hljs-keyword\\">if</span> s[i] == <span class=\\"hljs-string\\">\\"(\\"</span>:\\n                left += <span class=\\"hljs-number\\">1</span>\\n            <span class=\\"hljs-keyword\\">elif</span> left&gt;<span class=\\"hljs-number\\">0</span>:\\n                left -= <span class=\\"hljs-number\\">1</span>\\n                dp[i] = dp[i<span class=\\"hljs-number\\">-1</span>] + <span class=\\"hljs-number\\">2</span>\\n                j = i - dp[i]\\n                <span class=\\"hljs-keyword\\">if</span> j &gt;= <span class=\\"hljs-number\\">0</span>:\\n                    dp[i] += dp[j]\\n                ans = max(ans, dp[i])\\n        <span class=\\"hljs-keyword\\">return</span> ans\\n      \\n        \\n</code></pre>\\n"],"querySlug":"longest-valid-parentheses","hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>一般来说，遇到括号问题，首先会想到用<code>stack</code>，这道题也同样，用<code>stack</code>保存每一个括号的索引值，每次<code>pop</code>的时候，\\n记录最大值。</p>\\n<p>另外这道题也可以用<code>DP</code>，<code>DP</code>的思路是当存在<code>()</code>，需要<code>+2</code>，当存在<code>(()())</code>，需要<code>+2</code>后再加上第一个<code>(</code>上的值。</p>\\n","content":"<p>给你一个只包含 <code>\'(\'</code> 和 <code>\')\'</code> 的字符串，找出最长有效（格式正确且连续）括号子串的长度。</p>\\n\\n<p> </p>\\n\\n<div class=\\"original__bRMd\\">\\n<div>\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\"(()\\"\\n<strong>输出：</strong>2\\n<strong>解释：</strong>最长有效括号子串是 \\"()\\"\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\")()())\\"\\n<strong>输出：</strong>4\\n<strong>解释：</strong>最长有效括号子串是 \\"()()\\"\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\"\\"\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 <= s.length <= 3 * 10<sup>4</sup></code></li>\\n\\t<li><code>s[i]</code> 为 <code>\'(\'</code> 或 <code>\')\'</code></li>\\n</ul>\\n</div>\\n</div>\\n","title":"32. 最长有效括号","relatedTags":["栈","字符串","动态规划"],"difficult":"Hard","lang":["javascript","python"],"uniqueID":"32","slug":"32-Longest-Valid-Parentheses"}')}}]);