(window.webpackJsonp=window.webpackJsonp||[]).push([[804],{1602:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">isSubsequence</span><span class=\\"hljs-params\\">(self, s, t)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type s: str\\n        :type t: str\\n        :rtype: bool\\n        \\"\\"\\"</span>\\n        start = <span class=\\"hljs-number\\">0</span>\\n        <span class=\\"hljs-keyword\\">for</span> c <span class=\\"hljs-keyword\\">in</span> s:\\n          idx = t.find(c, start)\\n          <span class=\\"hljs-keyword\\">if</span> idx == <span class=\\"hljs-number\\">-1</span>:\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">False</span>\\n          start = idx+<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">True</span>\\n</code></pre>\\n"],"querySlug":"is-subsequence","created_at":"2019-02-25","timeArr":[2019,1,25,21,11,20,0],"hasThinking":false,"content":"<p>给定字符串 <strong>s</strong> 和 <strong>t</strong> ，判断 <strong>s</strong> 是否为 <strong>t</strong> 的子序列。</p>\\n\\n<p>字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，<code>\\"ace\\"</code>是<code>\\"abcde\\"</code>的一个子序列，而<code>\\"aec\\"</code>不是）。</p>\\n\\n<p><strong>进阶：</strong></p>\\n\\n<p>如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？</p>\\n\\n<p><strong>致谢：</strong></p>\\n\\n<p>特别感谢<strong> </strong><a href=\\"https://leetcode.com/pbrother/\\">@pbrother </a>添加此问题并且创建所有测试用例。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\"abc\\", t = \\"ahbgdc\\"\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\"axc\\", t = \\"ahbgdc\\"\\n<strong>输出：</strong>false\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 <= s.length <= 100</code></li>\\n\\t<li><code>0 <= t.length <= 10^4</code></li>\\n\\t<li>两个字符串都只由小写字符组成。</li>\\n</ul>\\n","title":"392. 判断子序列","relatedTags":["双指针","字符串","动态规划"],"difficult":"Easy","lang":["python"],"uniqueID":"392","slug":"392-Is-Subsequence"}')}}]);