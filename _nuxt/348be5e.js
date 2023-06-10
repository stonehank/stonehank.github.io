(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1367:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">p</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minSubarray = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums, p</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> modHash={}\\n    <span class=\\"hljs-keyword\\">let</span> modArr=[]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n <span class=\\"hljs-keyword\\">of</span> nums){\\n        modArr.push( n % p)\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n <span class=\\"hljs-keyword\\">of</span> modArr){\\n        <span class=\\"hljs-keyword\\">if</span>(modHash[n]==<span class=\\"hljs-literal\\">null</span>)modHash[n]=<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">else</span> modHash[n]++\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> sum=nums.reduce(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a+b)\\n    <span class=\\"hljs-keyword\\">let</span> mod=sum % p\\n    <span class=\\"hljs-keyword\\">if</span>(mod===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">if</span>(modHash[mod]!=<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">let</span> need=mod\\n    <span class=\\"hljs-keyword\\">let</span> sumArr=[modArr[<span class=\\"hljs-number\\">0</span>]]\\n    <span class=\\"hljs-keyword\\">let</span> hash={}\\n    hash[modArr[<span class=\\"hljs-number\\">0</span>]]=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;modArr.length;i++){\\n        sumArr[i]=(sumArr[i<span class=\\"hljs-number\\">-1</span>]+nums[i]) % p\\n        hash[sumArr[i]]=i\\n    }\\n    <span class=\\"hljs-comment\\">// console.log(sum,hash,sumArr.slice(-10))</span>\\n    <span class=\\"hljs-keyword\\">let</span> min=<span class=\\"hljs-literal\\">Infinity</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;sumArr.length;i++){\\n        <span class=\\"hljs-comment\\">// console.log()</span>\\n        <span class=\\"hljs-keyword\\">if</span>(sumArr[i] % p===need){\\n            min=<span class=\\"hljs-built_in\\">Math</span>.min(min,i+<span class=\\"hljs-number\\">1</span>)\\n        }\\n        <span class=\\"hljs-keyword\\">let</span> prev=sumArr[i]\\n        <span class=\\"hljs-keyword\\">while</span>(prev&lt;need){\\n            prev+=p\\n        }\\n        <span class=\\"hljs-keyword\\">let</span> ever=hash[prev-need]\\n        <span class=\\"hljs-keyword\\">if</span>(i&gt;ever &amp;&amp; ever!=<span class=\\"hljs-literal\\">null</span>){\\n            min=<span class=\\"hljs-built_in\\">Math</span>.min(min,i-ever)\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(min===nums.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">return</span> min===<span class=\\"hljs-literal\\">Infinity</span> ? <span class=\\"hljs-number\\">-1</span> : min\\n    \\n};\\n</code></pre>\\n"],"querySlug":"make-sum-divisible-by-p","created_at":"2020-09-20","timeArr":[2020,8,20,13,58,56,0],"hasThinking":false,"content":"<p>给你一个正整数数组&nbsp;<code>nums</code>，请你移除 <strong>最短</strong>&nbsp;子数组（可以为 <strong>空</strong>），使得剩余元素的 <strong>和</strong>&nbsp;能被 <code>p</code>&nbsp;整除。 <strong>不允许</strong>&nbsp;将整个数组都移除。</p>\\n\\n<p>请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 <code>-1</code>&nbsp;。</p>\\n\\n<p><strong>子数组</strong>&nbsp;定义为原数组中连续的一组元素。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [3,1,4,2], p = 6\\n<strong>输出：</strong>1\\n<strong>解释：</strong>nums 中元素和为 10，不能被 p 整除。我们可以移除子数组 [4] ，剩余元素的和为 6 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [6,3,5,2], p = 9\\n<strong>输出：</strong>2\\n<strong>解释：</strong>我们无法移除任何一个元素使得和被 9 整除，最优方案是移除子数组 [5,2] ，剩余元素为 [6,3]，和为 9 。\\n</pre>\\n\\n<p><strong>示例&nbsp;3：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [1,2,3], p = 3\\n<strong>输出：</strong>0\\n<strong>解释：</strong>和恰好为 6 ，已经能被 3 整除了。所以我们不需要移除任何元素。\\n</pre>\\n\\n<p><strong>示例&nbsp; 4：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [1,2,3], p = 7\\n<strong>输出：</strong>-1\\n<strong>解释：</strong>没有任何方案使得移除子数组后剩余元素的和被 7 整除。\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [1000000000,1000000000,1000000000], p = 3\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\\n\\t<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\\n\\t<li><code>1 &lt;= p &lt;= 10<sup>9</sup></code></li>\\n</ul>\\n","title":"1590. 使数组和能被 P 整除","relatedTags":["数组","哈希表","前缀和"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1590","slug":"1590-Make-Sum-Divisible-by-P"}')}}]);