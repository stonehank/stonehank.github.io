(window.webpackJsonp=window.webpackJsonp||[]).push([[1264],{2062:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">x</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isPalindrome = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">x</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(x&lt;<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">let</span> n=x\\n  <span class=\\"hljs-keyword\\">let</span> rev=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">while</span>(n&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> t=n%<span class=\\"hljs-number\\">10</span>\\n    rev=rev*<span class=\\"hljs-number\\">10</span>+t\\n    n=~~(n/<span class=\\"hljs-number\\">10</span>)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> rev===x\\n};\\n</code></pre>\\n"],"querySlug":"palindrome-number","created_at":"2019-03-29","timeArr":[2019,2,29,10,18,59,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>使用字符串就是判断回文字符串，很简单。</p>\\n<p>而不是用字符串就是<code>NO.7</code>，反转一个数字，然后比较它们是否相等；</p>\\n<p>注意：如果遇到负数直接返回<code>false</code>。</p>\\n","content":"<p>给你一个整数 <code>x</code> ，如果 <code>x</code> 是一个回文整数，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>\\n\\n<p>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，<code>121</code> 是回文，而 <code>123</code> 不是。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>x = 121\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>x = -121\\n<strong>输出：</strong>false\\n<strong>解释：</strong>从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>x = 10\\n<strong>输出：</strong>false\\n<strong>解释：</strong>从右向左读, 为 01 。因此它不是一个回文数。\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>x = -101\\n<strong>输出：</strong>false\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code></li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>进阶：</strong>你能不将整数转为字符串来解决这个问题吗？</p>\\n","title":"9. 回文数","relatedTags":["数学"],"difficult":"Easy","lang":["javascript"],"uniqueID":"9","slug":"9-Palindrome-Number"}')}}]);