(window.webpackJsonp=window.webpackJsonp||[]).push([[1203],{2001:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">S</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">T</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> backspaceCompare = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">S, T</span>) </span>{\\n  <span class=\\"hljs-keyword\\">return</span> resolve(S)===resolve(T)\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">resolve</span>(<span class=\\"hljs-params\\">str</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> s=<span class=\\"hljs-string\\">\'\'</span>,count=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=str.length<span class=\\"hljs-number\\">-1</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n      <span class=\\"hljs-keyword\\">if</span>(str[i]===<span class=\\"hljs-string\\">\\"#\\"</span>){\\n        count++\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        <span class=\\"hljs-keyword\\">if</span>(count&gt;<span class=\\"hljs-number\\">0</span>){\\n          count--\\n          <span class=\\"hljs-keyword\\">continue</span>\\n        }\\n        s=str[i]+s\\n      }\\n    }    \\n    <span class=\\"hljs-keyword\\">return</span> s\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"backspace-string-compare","created_at":"2019-04-12","timeArr":[2019,3,12,15,3,51,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>从后往前比遍历，遇到<code>#</code>则<code>delCount++</code>，遇到字母则检查<code>delCount</code>，如果存在，则跳过该字母。</p>\\n","content":"<p>给定 <code>S</code> 和 <code>T</code> 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 <code>#</code> 代表退格字符。</p>\\n\\n<p><strong>注意：</strong>如果对空文本输入退格字符，文本继续为空。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>S = \\"ab#c\\", T = \\"ad#c\\"\\n<strong>输出：</strong>true\\n<strong>解释：</strong>S 和 T 都会变成 “ac”。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>S = \\"ab##\\", T = \\"c#d#\\"\\n<strong>输出：</strong>true\\n<strong>解释：</strong>S 和 T 都会变成 “”。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>S = \\"a##c\\", T = \\"#a#c\\"\\n<strong>输出：</strong>true\\n<strong>解释：</strong>S 和 T 都会变成 “c”。\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>S = \\"a#c\\", T = \\"b\\"\\n<strong>输出：</strong>false\\n<strong>解释：</strong>S 会变成 “c”，但 T 仍然是 “b”。</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= S.length <= 200</code></li>\\n\\t<li><code>1 <= T.length <= 200</code></li>\\n\\t<li><code>S</code> 和 <code>T</code> 只含有小写字母以及字符 <code>\'#\'</code>。</li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>进阶：</strong></p>\\n\\n<ul>\\n\\t<li>你可以用 <code>O(N)</code> 的时间复杂度和 <code>O(1)</code> 的空间复杂度解决该问题吗？</li>\\n</ul>\\n\\n<p> </p>\\n","title":"844. 比较含退格的字符串","relatedTags":["栈","双指针","字符串","模拟"],"difficult":"Easy","lang":["javascript"],"uniqueID":"844","slug":"844-Backspace-String-Compare"}')}}]);