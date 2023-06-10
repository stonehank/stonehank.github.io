(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1188:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">mat</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minFlips = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">mat</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash={}\\n  <span class=\\"hljs-keyword\\">let</span> step=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">if</span>(success(mat))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> str=<span class=\\"hljs-built_in\\">JSON</span>.stringify(mat)\\n  <span class=\\"hljs-keyword\\">let</span> arr=[str]\\n  hash[str]=<span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    step++\\n    <span class=\\"hljs-comment\\">// console.log(arr)</span>\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> str=arr.shift()\\n      <span class=\\"hljs-keyword\\">let</span> curMat=<span class=\\"hljs-built_in\\">JSON</span>.parse(str)\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;curMat.length;i++){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;curMat[i].length;j++){\\n          <span class=\\"hljs-keyword\\">let</span> nxtMat=<span class=\\"hljs-built_in\\">JSON</span>.parse(str)\\n          press(nxtMat,i,j)\\n          <span class=\\"hljs-keyword\\">if</span>(success(nxtMat))<span class=\\"hljs-keyword\\">return</span> step\\n          <span class=\\"hljs-keyword\\">let</span> nxtStr=<span class=\\"hljs-built_in\\">JSON</span>.stringify(nxtMat)\\n          <span class=\\"hljs-keyword\\">if</span>(hash[nxtStr])<span class=\\"hljs-keyword\\">continue</span>\\n          hash[nxtStr]=<span class=\\"hljs-literal\\">true</span>\\n          arr.push(nxtStr)\\n        }\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">success</span>(<span class=\\"hljs-params\\">mat</span>)</span>{\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;mat.length;i++){\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;mat[i].length;j++){\\n        <span class=\\"hljs-keyword\\">if</span>(mat[i][j]!==<span class=\\"hljs-number\\">0</span>){\\n          <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n        }\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">press</span>(<span class=\\"hljs-params\\">mat,i,j</span>)</span>{\\n    toggle(mat,i,j)\\n    <span class=\\"hljs-keyword\\">if</span>(i&gt;<span class=\\"hljs-number\\">0</span>)toggle(mat,i<span class=\\"hljs-number\\">-1</span>,j)\\n    <span class=\\"hljs-keyword\\">if</span>(j&gt;<span class=\\"hljs-number\\">0</span>)toggle(mat,i,j<span class=\\"hljs-number\\">-1</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(i&lt;mat.length<span class=\\"hljs-number\\">-1</span>)toggle(mat,i+<span class=\\"hljs-number\\">1</span>,j)\\n    <span class=\\"hljs-keyword\\">if</span>(j&lt;mat[i].length<span class=\\"hljs-number\\">-1</span>)toggle(mat,i,j+<span class=\\"hljs-number\\">1</span>)\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">toggle</span>(<span class=\\"hljs-params\\">mat,i,j</span>)</span>{\\n    mat[i][j]=mat[i][j]===<span class=\\"hljs-number\\">0</span> ? <span class=\\"hljs-number\\">1</span> : <span class=\\"hljs-number\\">0</span>\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix","created_at":"2019-12-08","timeArr":[2019,11,8,11,24,24,0],"hasThinking":false,"content":"<p>给你一个&nbsp;<code>m x n</code>&nbsp;的二进制矩阵&nbsp;<code>mat</code>。</p>\\n\\n<p>每一步，你可以选择一个单元格并将它反转（反转表示 0 变 1 ，1 变 0 ）。如果存在和它相邻的单元格，那么这些相邻的单元格也会被反转。（注：相邻的两个单元格共享同一条边。）</p>\\n\\n<p>请你返回将矩阵&nbsp;<code>mat</code> 转化为全零矩阵的<em>最少反转次数</em>，如果无法转化为全零矩阵，请返回&nbsp;<strong>-1</strong>&nbsp;。</p>\\n\\n<p>二进制矩阵的每一个格子要么是 0 要么是 1 。</p>\\n\\n<p>全零矩阵是所有格子都为 0 的矩阵。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例&nbsp;1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/12/13/matrix.png\\" style=\\"height: 86px; width: 409px;\\"></p>\\n\\n<pre><strong>输入：</strong>mat = [[0,0],[0,1]]\\n<strong>输出：</strong>3\\n<strong>解释：</strong>一个可能的解是反转 (1, 0)，然后 (0, 1) ，最后是 (1, 1) 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>mat = [[0]]\\n<strong>输出：</strong>0\\n<strong>解释：</strong>给出的矩阵是全零矩阵，所以你不需要改变它。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>mat = [[1,1,1],[1,0,1],[0,0,0]]\\n<strong>输出：</strong>6\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>mat = [[1,0,0],[1,0,0]]\\n<strong>输出：</strong>-1\\n<strong>解释：</strong>该矩阵无法转变成全零矩阵\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>m ==&nbsp;mat.length</code></li>\\n\\t<li><code>n ==&nbsp;mat[0].length</code></li>\\n\\t<li><code>1 &lt;= m&nbsp;&lt;= 3</code></li>\\n\\t<li><code>1 &lt;= n&nbsp;&lt;= 3</code></li>\\n\\t<li><code>mat[i][j]</code>&nbsp;是 0 或 1 。</li>\\n</ul>\\n","title":"1284. 转化为全零矩阵的最少反转次数","relatedTags":["位运算","广度优先搜索","数组","矩阵"],"difficult":"Hard","lang":["javascript"],"uniqueID":"1284","slug":"1284-Minimum-Number-of-Flips-to-Convert-Binary-Matrix-to-Zero-Matrix"}')}}]);