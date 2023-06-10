(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1210:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">a</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">b</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">c</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minFlips = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">a, b, c</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> strC=c.toString(<span class=\\"hljs-number\\">2</span>)\\n  <span class=\\"hljs-keyword\\">let</span> strA=a.toString(<span class=\\"hljs-number\\">2</span>)\\n  <span class=\\"hljs-keyword\\">let</span> strB=b.toString(<span class=\\"hljs-number\\">2</span>)\\n  <span class=\\"hljs-keyword\\">let</span> len=<span class=\\"hljs-built_in\\">Math</span>.max(strC.length,strA.length,strB.length)\\n  strA=leadZero(strA,len)\\n  strB=leadZero(strB,len)\\n  strC=leadZero(strC,len)\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n    <span class=\\"hljs-keyword\\">let</span> nC=+strC[i]\\n    <span class=\\"hljs-keyword\\">let</span> nA=+strA[i]\\n    <span class=\\"hljs-keyword\\">let</span> nB=+strB[i]\\n    <span class=\\"hljs-keyword\\">if</span>(nC===<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(nA+nB&gt;=<span class=\\"hljs-number\\">1</span>){\\n        <span class=\\"hljs-keyword\\">continue</span>\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        res+=<span class=\\"hljs-number\\">1</span>\\n      }\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      res+=nA+nB\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">leadZero</span>(<span class=\\"hljs-params\\">str,len</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> gap=len-str.length\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\'0\'</span>.repeat(gap)+str\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"minimum-flips-to-make-a-or-b-equal-to-c","created_at":"2020-01-12","timeArr":[2020,0,12,10,44,44,0],"hasThinking":false,"content":"<p>给你三个正整数&nbsp;<code>a</code>、<code>b</code> 和 <code>c</code>。</p>\\n\\n<p>你可以对 <code>a</code> 和 <code>b</code>&nbsp;的二进制表示进行位翻转操作，返回能够使按位或运算&nbsp; &nbsp;<code>a</code> OR <code>b</code> == <code>c</code>&nbsp;&nbsp;成立的最小翻转次数。</p>\\n\\n<p>「位翻转操作」是指将一个数的二进制表示任何单个位上的 1 变成 0 或者 0 变成 1 。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/11/sample_3_1676.png\\" style=\\"height: 87px; width: 260px;\\"></p>\\n\\n<pre><strong>输入：</strong>a = 2, b = 6, c = 5\\n<strong>输出：</strong>3\\n<strong>解释：</strong>翻转后 a = 1 , b = 4 , c = 5 使得 <code>a</code> OR <code>b</code> == <code>c</code></pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>a = 4, b = 2, c = 7\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>a = 1, b = 2, c = 3\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= a &lt;= 10^9</code></li>\\n\\t<li><code>1 &lt;= b&nbsp;&lt;= 10^9</code></li>\\n\\t<li><code>1 &lt;= c&nbsp;&lt;= 10^9</code></li>\\n</ul>\\n","title":"1318. 或运算的最小翻转次数","relatedTags":["位运算"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1318","slug":"1318-Minimum-Flips-to-Make-a-OR-b-Equal-to-c"}')}}]);