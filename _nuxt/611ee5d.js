(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{1756:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">k</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> subarraySum = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums, k</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash=<span class=\\"hljs-built_in\\">Object</span>.create(<span class=\\"hljs-literal\\">null</span>)\\n  hash[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">let</span> sum=<span class=\\"hljs-number\\">0</span>,res=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;nums.length;i++){\\n    sum+=nums[i]\\n    <span class=\\"hljs-keyword\\">if</span>(hash[sum-k]!=<span class=\\"hljs-literal\\">null</span>)res+=hash[sum-k]\\n    <span class=\\"hljs-keyword\\">if</span>(!hash[sum])hash[sum]=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span> hash[sum]++\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"subarray-sum-equals-k","created_at":"2019-03-14","timeArr":[2019,2,14,10,16,25,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>在<code>nums</code>数组中，<code>SUM(0,i)</code>表示从索引<code>0</code>到索引<code>i</code>之间的和。</p>\\n<ol>\\n<li>如果<code>SUM(0,i)-k==0</code>，那么说明<code>[0,i]</code>这个子数组符合要求。</li>\\n<li>如果<code>SUM(0,i)-k==SUM(0,j)</code>，那么说明<code>[j,i]</code>这个子数组符合要求。</li>\\n</ol>\\n<p>根据以上两点，只需要定义个<code>hash</code>，用来保存之前的<code>SUM</code>出现的<strong>次数</strong>，遍历时再检查<code>SUM(0,i)-k</code>是否存在于<code>hash</code>中。</p>\\n","content":"<p>给定一个整数数组和一个整数&nbsp;<strong>k，</strong>你需要找到该数组中和为&nbsp;<strong>k&nbsp;</strong>的连续的子数组的个数。</p>\\n\\n<p><strong>示例 1 :</strong></p>\\n\\n<pre>\\n<strong>输入:</strong>nums = [1,1,1], k = 2\\n<strong>输出:</strong> 2 , [1,1] 与 [1,1] 为两种不同的情况。\\n</pre>\\n\\n<p><strong>说明 :</strong></p>\\n\\n<ol>\\n\\t<li>数组的长度为 [1, 20,000]。</li>\\n\\t<li>数组中元素的范围是 [-1000, 1000] ，且整数&nbsp;<strong>k&nbsp;</strong>的范围是&nbsp;[-1e7, 1e7]。</li>\\n</ol>\\n","title":"560. 和为K的子数组","relatedTags":["数组","哈希表","前缀和"],"difficult":"Middle","lang":["javascript"],"uniqueID":"560","slug":"560-Subarray-Sum-Equals-K"}')}}]);