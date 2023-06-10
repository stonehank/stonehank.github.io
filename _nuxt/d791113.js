(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{1494:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> productExceptSelf = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">let</span> l=<span class=\\"hljs-number\\">1</span>,r=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;nums.length;i++){\\n    res[i]=l\\n    l*=nums[i]\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=nums.length<span class=\\"hljs-number\\">-1</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n    res[i]*=r\\n    r*=nums[i]\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"product-of-array-except-self","created_at":"2019-03-13","timeArr":[2019,2,13,12,1,44,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<ol>\\n<li>\\n<p>题目要求不能使用除法，最直接的想法是对每一项，除了它本身，其他重新乘一遍，但时间复杂度达不到要求。</p>\\n</li>\\n<li>\\n<p>仔细观察一下，除了本身的乘积，其实就是<code>左侧乘积</code>和<code>右侧乘积</code>的乘积。</p>\\n</li>\\n<li>\\n<p>我们只需要分别求出左侧乘积和右侧乘积即可。</p>\\n</li>\\n</ol>\\n<p>例如：</p>\\n<p><code>index[3]</code>，它的左侧乘积是<code>product[0,1,2]</code>，右侧乘积是<code>produce[4,5...]</code></p>\\n<p><code>index[4]</code>，它的左侧乘积是<code>product[0,1,2,3]</code>，右侧乘积是<code>product[5...]</code></p>\\n<p>通过上例比较清楚的看到，<code>leftProduct[i]=leftProduct[i-1]*nums[i]</code>，</p>\\n<p>右侧同理，逆序遍历即与左侧一模一样。</p>\\n","content":"<p>给你一个长度为&nbsp;<em>n</em>&nbsp;的整数数组&nbsp;<code>nums</code>，其中&nbsp;<em>n</em> &gt; 1，返回输出数组&nbsp;<code>output</code>&nbsp;，其中 <code>output[i]</code>&nbsp;等于&nbsp;<code>nums</code>&nbsp;中除&nbsp;<code>nums[i]</code>&nbsp;之外其余各元素的乘积。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例:</strong></p>\\n\\n<pre><strong>输入:</strong> <code>[1,2,3,4]</code>\\n<strong>输出:</strong> <code>[24,12,8,6]</code></pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong>题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。</p>\\n\\n<p><strong>说明: </strong>请<strong>不要使用除法，</strong>且在&nbsp;O(<em>n</em>) 时间复杂度内完成此题。</p>\\n\\n<p><strong>进阶：</strong><br>\\n你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组<strong>不被视为</strong>额外空间。）</p>\\n","title":"238. 除自身以外数组的乘积","relatedTags":["数组","前缀和"],"difficult":"Middle","lang":["javascript"],"uniqueID":"238","slug":"238-Product-of-Array-Except-Self"}')}}]);