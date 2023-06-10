(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{1093:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">seq</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxDepthAfterSplit = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">seq</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> initTag=<span class=\\"hljs-string\\">\'B\'</span>\\n  <span class=\\"hljs-keyword\\">let</span> value={\\n    <span class=\\"hljs-attr\\">A</span>:<span class=\\"hljs-number\\">0</span>,\\n    <span class=\\"hljs-attr\\">B</span>:<span class=\\"hljs-number\\">1</span>\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> resolve(seq,initTag)\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">resolve</span>(<span class=\\"hljs-params\\">string,lastTag</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> curTag=lastTag===<span class=\\"hljs-string\\">\'A\'</span> ? <span class=\\"hljs-string\\">\'B\'</span> : <span class=\\"hljs-string\\">\'A\'</span>\\n    <span class=\\"hljs-keyword\\">let</span> res=[]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;string.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(string[i]===<span class=\\"hljs-string\\">\\"(\\"</span>){\\n        <span class=\\"hljs-keyword\\">let</span> id=i+<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">let</span> nxtStr=<span class=\\"hljs-string\\">\'\'</span>\\n        <span class=\\"hljs-keyword\\">let</span> count=<span class=\\"hljs-number\\">1</span>\\n        res[i]=value[curTag]\\n        <span class=\\"hljs-keyword\\">while</span>(<span class=\\"hljs-literal\\">true</span>){\\n          <span class=\\"hljs-keyword\\">if</span>(string[id]===<span class=\\"hljs-string\\">\'(\'</span>)count++\\n          <span class=\\"hljs-keyword\\">else</span> count--\\n          <span class=\\"hljs-keyword\\">if</span>(count===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">break</span>\\n          nxtStr+=string[id]\\n          id++\\n        }\\n        <span class=\\"hljs-keyword\\">let</span> nxtRes=resolve(nxtStr,curTag)\\n        res=res.concat(nxtRes)\\n        i=id\\n        res[i]=value[curTag]\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"maximum-nesting-depth-of-two-valid-parentheses-strings","created_at":"2019-07-07","timeArr":[2019,6,7,11,9,6,0],"hasThinking":false,"content":"<p><strong>有效括号字符串 </strong>定义：对于每个左括号，都能找到与之对应的右括号，反之亦然。详情参见题末「<strong>有效括号字符串</strong>」部分。</p>\\n\\n<p><strong>嵌套深度</strong> <code>depth</code> 定义：即有效括号字符串嵌套的层数，<code>depth(A)</code> 表示有效括号字符串 <code>A</code> 的嵌套深度。详情参见题末「<strong>嵌套深度</strong>」部分。</p>\\n\\n<p>有效括号字符串类型与对应的嵌套深度计算方法如下图所示：</p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/04/01/1111.png\\" style=\\"height: 152px; width: 600px;\\"></p>\\n\\n<p>&nbsp;</p>\\n\\n<p>给你一个「有效括号字符串」 <code>seq</code>，请你将其分成两个不相交的有效括号字符串，<code>A</code> 和&nbsp;<code>B</code>，并使这两个字符串的深度最小。</p>\\n\\n<ul>\\n\\t<li>不相交：每个 <code>seq[i]</code> 只能分给 <code>A</code> 和 <code>B</code> 二者中的一个，不能既属于 <code>A</code> 也属于 <code>B</code> 。</li>\\n\\t<li><code>A</code> 或 <code>B</code> 中的元素在原字符串中可以不连续。</li>\\n\\t<li><code>A.length + B.length = seq.length</code></li>\\n\\t<li>深度最小：<code>max(depth(A), depth(B))</code>&nbsp;的可能取值最小。&nbsp;</li>\\n</ul>\\n\\n<p>划分方案用一个长度为 <code>seq.length</code> 的答案数组 <code>answer</code> 表示，编码规则如下：</p>\\n\\n<ul>\\n\\t<li><code>answer[i] = 0</code>，<code>seq[i]</code> 分给 <code>A</code> 。</li>\\n\\t<li><code>answer[i] = 1</code>，<code>seq[i]</code> 分给 <code>B</code> 。</li>\\n</ul>\\n\\n<p>如果存在多个满足要求的答案，只需返回其中任意 <strong>一个 </strong>即可。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>seq = &quot;(()())&quot;\\n<strong>输出：</strong>[0,1,1,1,1,0]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>seq = &quot;()(())()&quot;\\n<strong>输出：</strong>[0,0,0,1,1,0,1,1]\\n<strong>解释：</strong>本示例答案不唯一。\\n按此输出 A = &quot;()()&quot;, B = &quot;()()&quot;, max(depth(A), depth(B)) = 1，它们的深度最小。\\n像 [1,1,1,0,0,1,1,1]，也是正确结果，其中 A = &quot;()()()&quot;, B = &quot;()&quot;, max(depth(A), depth(B)) = 1 。 \\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;&nbsp;seq.size &lt;= 10000</code></li>\\n</ul>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>有效括号字符串：</strong></p>\\n\\n<pre>仅由&nbsp;<code>&quot;(&quot;</code> 和&nbsp;<code>&quot;)&quot;</code>&nbsp;构成的字符串，对于每个左括号，都能找到与之对应的右括号，反之亦然。\\n下述几种情况同样属于有效括号字符串：\\n\\n  1. 空字符串\\n  2. 连接，可以记作&nbsp;<code>AB</code>（<code>A</code> 与 <code>B</code> 连接），其中&nbsp;<code>A</code>&nbsp;和&nbsp;<code>B</code>&nbsp;都是有效括号字符串\\n  3. 嵌套，可以记作&nbsp;<code>(A)</code>，其中&nbsp;<code>A</code>&nbsp;是有效括号字符串\\n</pre>\\n\\n<p><strong>嵌套深度：</strong></p>\\n\\n<pre>类似地，我们可以定义任意有效括号字符串 <code>s</code> 的 <strong>嵌套深度</strong>&nbsp;<code>depth(S)</code>：\\n\\n  1.<code> s</code> 为空时，<code>depth(&quot;&quot;) = 0</code>\\n<code>  2. s</code> 为 <code>A</code> 与 <code>B</code> 连接时，<code>depth(A + B) = max(depth(A), depth(B))</code>，其中&nbsp;<code>A</code> 和&nbsp;<code>B</code>&nbsp;都是有效括号字符串\\n<code>  3. s</code> 为嵌套情况，<code>depth(&quot;(&quot; + A + &quot;)&quot;) = 1 + depth(A)</code>，其中 <code>A</code> 是有效括号字符串\\n\\n例如：<code>&quot;&quot;</code>，<code>&quot;()()&quot;</code>，和&nbsp;<code>&quot;()(()())&quot;</code>&nbsp;都是有效括号字符串，嵌套深度分别为 0，1，2，而&nbsp;<code>&quot;)(&quot;</code> 和&nbsp;<code>&quot;(()&quot;</code>&nbsp;都不是有效括号字符串。\\n</pre>\\n","title":"1111. 有效括号的嵌套深度","relatedTags":["栈","字符串"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1111","slug":"1111-Maximum-Nesting-Depth-of-Two-Valid-Parentheses-Strings"}')}}]);