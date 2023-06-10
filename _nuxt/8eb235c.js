(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{1339:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">indices</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> restoreString = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s, indices</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> aux=[]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;indices.length;i++){\\n        aux[i]=[s[i],indices[i]]\\n    }\\n    aux.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a[<span class=\\"hljs-number\\">1</span>]-b[<span class=\\"hljs-number\\">1</span>])\\n    \\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-string\\">\'\'</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [str,id] <span class=\\"hljs-keyword\\">of</span> aux){\\n        res+=str\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"shuffle-string","created_at":"2020-07-26","timeArr":[2020,6,26,10,35,10,0],"hasThinking":false,"content":"<p>给你一个字符串 <code>s</code> 和一个 <strong>长度相同</strong> 的整数数组 <code>indices</code> 。</p>\\n\\n<p>请你重新排列字符串 <code>s</code> ，其中第 <code>i</code> 个字符需要移动到 <code>indices[i]</code> 指示的位置。</p>\\n\\n<p>返回重新排列后的字符串。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/26/q1.jpg\\" style=\\"height: 243px; width: 321px;\\"></p>\\n\\n<pre><strong>输入：</strong>s = &quot;codeleet&quot;, <code>indices</code> = [4,5,6,7,0,2,1,3]\\n<strong>输出：</strong>&quot;leetcode&quot;\\n<strong>解释：</strong>如图所示，&quot;codeleet&quot; 重新排列后变为 &quot;leetcode&quot; 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;abc&quot;, <code>indices</code> = [0,1,2]\\n<strong>输出：</strong>&quot;abc&quot;\\n<strong>解释：</strong>重新排列后，每个字符都还留在原来的位置上。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;aiohn&quot;, <code>indices</code> = [3,1,4,2,0]\\n<strong>输出：</strong>&quot;nihao&quot;\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;aaiougrt&quot;, <code>indices</code> = [4,0,2,6,7,3,1,5]\\n<strong>输出：</strong>&quot;arigatou&quot;\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;art&quot;, <code>indices</code> = [1,0,2]\\n<strong>输出：</strong>&quot;rat&quot;\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>s.length == indices.length == n</code></li>\\n\\t<li><code>1 &lt;= n &lt;= 100</code></li>\\n\\t<li><code>s</code> 仅包含小写英文字母。</li>\\n\\t<li><code>0 &lt;= indices[i] &lt;&nbsp;n</code></li>\\n\\t<li><code>indices</code> 的所有的值都是唯一的（也就是说，<code>indices</code> 是整数 <code>0</code> 到 <code>n - 1</code> 形成的一组排列）。</li>\\n</ul>\\n","title":"1528. 重新排列字符串","relatedTags":["数组","字符串"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1528","slug":"1528-Shuffle-String"}')}}]);