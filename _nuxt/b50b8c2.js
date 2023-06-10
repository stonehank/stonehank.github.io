(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1499:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">t</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isAnagram = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s, t</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(s.length!==t.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">let</span> codes=<span class=\\"hljs-built_in\\">Array</span>(<span class=\\"hljs-number\\">26</span>).fill(<span class=\\"hljs-number\\">0</span>)\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;s.length;i++){\\n    codes[s.charCodeAt(i)<span class=\\"hljs-number\\">-97</span>]++\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;t.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> c=t.charCodeAt(i)<span class=\\"hljs-number\\">-97</span>\\n    codes[c]--\\n    <span class=\\"hljs-keyword\\">if</span>(codes[c]&lt;<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n};\\n</code></pre>\\n"],"querySlug":"valid-anagram","created_at":"2019-04-04","timeArr":[2019,3,4,22,35,54,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>对<code>s</code>每一个字母对应的索引<code>+1</code>，对<code>t</code>每一个字母对应的索引<code>-1</code>，如果存在负值，返回<code>false</code>。</p>\\n","content":"<p>给定两个字符串 <code><em>s</em></code> 和 <code><em>t</em></code> ，编写一个函数来判断 <code><em>t</em></code> 是否是 <code><em>s</em></code> 的字母异位词。</p>\\n\\n<p><strong>注意：</strong>若 <code><em>s</em></code> 和 <code><em>t</em></code><em> </em>中每个字符出现的次数都相同，则称 <code><em>s</em></code> 和 <code><em>t</em></code><em> </em>互为字母异位词。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> <em>s</em> = \\"anagram\\", <em>t</em> = \\"nagaram\\"\\n<strong>输出:</strong> true\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> <em>s</em> = \\"rat\\", <em>t</em> = \\"car\\"\\n<strong>输出: </strong>false</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示:</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= s.length, t.length <= 5 * 10<sup>4</sup></code></li>\\n\\t<li><code>s</code> 和 <code>t</code> 仅包含小写字母</li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>进阶: </strong>如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？</p>\\n","title":"242. 有效的字母异位词","relatedTags":["哈希表","字符串","排序"],"difficult":"Easy","lang":["javascript"],"uniqueID":"242","slug":"242-Valid-Anagram"}')}}]);