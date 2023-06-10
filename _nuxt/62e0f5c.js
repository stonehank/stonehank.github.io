(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{1438:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">matrix</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> largestSubmatrix = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">matrix</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> m=matrix.length, n=matrix[<span class=\\"hljs-number\\">0</span>].length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;m;i++){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;n;j++){\\n            <span class=\\"hljs-keyword\\">if</span>(matrix[i][j]===<span class=\\"hljs-number\\">1</span>){\\n                matrix[i][j]=matrix[i<span class=\\"hljs-number\\">-1</span>][j]+<span class=\\"hljs-number\\">1</span>\\n            }\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;m;i++){\\n        matrix[i].sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>b-a)\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;n;j++){\\n            res=<span class=\\"hljs-built_in\\">Math</span>.max(res,(j+<span class=\\"hljs-number\\">1</span>) * matrix[i][j])\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n\\n</code></pre>\\n"],"querySlug":"largest-submatrix-with-rearrangements","created_at":"2021-02-26","timeArr":[2021,1,26,9,53,17,0],"hasThinking":false,"content":"<p>给你一个二进制矩阵 <code>matrix</code> ，它的大小为 <code>m x n</code> ，你可以将 <code>matrix</code> 中的 <strong>列</strong> 按任意顺序重新排列。</p>\\n\\n<p>请你返回最优方案下将 <code>matrix</code> 重新排列后，全是 <code>1</code> 的子矩阵面积。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/17/screenshot-2020-12-30-at-40536-pm.png\\" style=\\"width: 300px; height: 144px;\\" /></strong></p>\\n\\n<pre>\\n<b>输入：</b>matrix = [[0,0,1],[1,1,1],[1,0,1]]\\n<b>输出：</b>4\\n<b>解释：</b>你可以按照上图方式重新排列矩阵的每一列。\\n最大的全 1 子矩阵是上图中加粗的部分，面积为 4 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/17/screenshot-2020-12-30-at-40852-pm.png\\" style=\\"width: 500px; height: 62px;\\" /></p>\\n\\n<pre>\\n<b>输入：</b>matrix = [[1,0,1,0,1]]\\n<b>输出：</b>3\\n<b>解释：</b>你可以按照上图方式重新排列矩阵的每一列。\\n最大的全 1 子矩阵是上图中加粗的部分，面积为 3 。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<b>输入：</b>matrix = [[1,1,0],[1,0,1]]\\n<b>输出：</b>2\\n<b>解释：</b>由于你只能整列整列重新排布，所以没有比面积为 2 更大的全 1 子矩形。</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<b>输入：</b>matrix = [[0,0],[0,0]]\\n<b>输出：</b>0\\n<b>解释：</b>由于矩阵中没有 1 ，没有任何全 1 的子矩阵，所以面积为 0 。</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>m == matrix.length</code></li>\\n\\t<li><code>n == matrix[i].length</code></li>\\n\\t<li><code>1 <= m * n <= 10<sup>5</sup></code></li>\\n\\t<li><code>matrix[i][j]</code> 要么是 <code>0</code> ，要么是 <code>1</code> 。</li>\\n</ul>\\n","title":"1727. 重新排列后的最大子矩阵","relatedTags":["贪心","数组","矩阵","排序"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1727","slug":"1727-Largest-Submatrix-With-Rearrangements"}')}}]);