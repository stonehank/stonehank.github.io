(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1139:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">text</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxNumberOfBalloons = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">text</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> count=<span class=\\"hljs-built_in\\">Array</span>(<span class=\\"hljs-number\\">26</span>).fill(<span class=\\"hljs-number\\">0</span>)\\n  <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-literal\\">Infinity</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> s <span class=\\"hljs-keyword\\">of</span> text){\\n    <span class=\\"hljs-keyword\\">let</span> code=s.charCodeAt(<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-number\\">-97</span>\\n    count[code]++\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> word1=[<span class=\\"hljs-string\\">\'b\'</span>,<span class=\\"hljs-string\\">\'a\'</span>,<span class=\\"hljs-string\\">\'n\'</span>],word2=[<span class=\\"hljs-string\\">\'l\'</span>,<span class=\\"hljs-string\\">\'o\'</span>]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;count.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> s=<span class=\\"hljs-built_in\\">String</span>.fromCharCode(i+<span class=\\"hljs-number\\">97</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(word1.includes(s)){\\n       max=<span class=\\"hljs-built_in\\">Math</span>.min(max,count[i])\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(word2.includes(s)){\\n      max=<span class=\\"hljs-built_in\\">Math</span>.min(max,<span class=\\"hljs-built_in\\">Math</span>.floor(count[i]/<span class=\\"hljs-number\\">2</span>))\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> max\\n};\\n</code></pre>\\n"],"querySlug":"maximum-number-of-balloons","created_at":"2019-09-15","timeArr":[2019,8,15,10,36,12,0],"hasThinking":false,"content":"<p>给你一个字符串&nbsp;<code>text</code>，你需要使用 <code>text</code> 中的字母来拼凑尽可能多的单词&nbsp;<strong>&quot;balloon&quot;（气球）</strong>。</p>\\n\\n<p>字符串&nbsp;<code>text</code> 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词&nbsp;<strong>&quot;balloon&quot;</strong>。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/09/14/1536_ex1_upd.jpeg\\" style=\\"height: 35px; width: 154px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>text = &quot;nlaebolko&quot;\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/09/14/1536_ex2_upd.jpeg\\" style=\\"height: 35px; width: 233px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>text = &quot;loonbalxballpoon&quot;\\n<strong>输出：</strong>2\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>text = &quot;leetcode&quot;\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= text.length &lt;= 10^4</code></li>\\n\\t<li><code>text</code>&nbsp;全部由小写英文字母组成</li>\\n</ul>\\n","title":"1189. “气球” 的最大数量","relatedTags":["哈希表","字符串","计数"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1189","slug":"1189-Maximum-Number-of-Balloons"}')}}]);