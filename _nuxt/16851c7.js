(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{1697:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> reversePairs = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  \\n  <span class=\\"hljs-keyword\\">return</span> divid(<span class=\\"hljs-number\\">0</span>,nums.length<span class=\\"hljs-number\\">-1</span>)\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">divid</span>(<span class=\\"hljs-params\\">start,end</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(start&gt;=end)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((start+end)/<span class=\\"hljs-number\\">2</span>)\\n    <span class=\\"hljs-keyword\\">let</span> count=divid(start,mid)+divid(mid+<span class=\\"hljs-number\\">1</span>,end)\\n    <span class=\\"hljs-keyword\\">let</span> j=end\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=mid;i&gt;=start;i--){\\n      <span class=\\"hljs-keyword\\">while</span>(j&gt;=mid+<span class=\\"hljs-number\\">1</span> &amp;&amp; nums[i]&lt;=nums[j]*<span class=\\"hljs-number\\">2</span>){\\n        j--\\n      }\\n      count+=j-mid\\n      <span class=\\"hljs-keyword\\">if</span>(j===mid)<span class=\\"hljs-keyword\\">break</span>\\n    }\\n    merge(start,mid,end)\\n    <span class=\\"hljs-keyword\\">return</span> count\\n  }\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">merge</span>(<span class=\\"hljs-params\\">start,mid,end</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> res=[]\\n    <span class=\\"hljs-keyword\\">let</span> i=start,j=mid+<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(i&lt;mid+<span class=\\"hljs-number\\">1</span> || j&lt;end+<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(i===mid+<span class=\\"hljs-number\\">1</span>){\\n        res.push(nums[j++])\\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(j===end+<span class=\\"hljs-number\\">1</span>){\\n        res.push(nums[i++])\\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(nums[i]&lt;nums[j]){\\n        res.push(nums[i++])\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        res.push(nums[j++])\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=start;i&lt;=end;i++){\\n      nums[i]=res[i-start]\\n    }\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"reverse-pairs","created_at":"2019-04-24","timeArr":[2019,3,24,13,40,27,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>和<code>NO.327</code>思路非常相像。</p>\\n<p>分治思想，将数组<code>nums</code>分割成<code>左</code>，<code>右</code>两端<strong>有序数组</strong>；</p>\\n<p>重点也是在<code>i&lt;j</code>的条件下，左半段和右半段是否排序毫无关系，因为左半段的索引一定小于右半段的索引；</p>\\n<p>而之所以排序，是能更快的提前跳出，省去不必要的计算。</p>\\n<p>在排序后的左，右数组，设置2个指针<code>i,j</code>，分别指向两个数组的<strong>最后一位</strong>(最大的数值)，逆序遍历左半段，在遍历的同时，</p>\\n<ol>\\n<li>\\n<p>找出<code>j</code>表示的符合翻转对要求的第一位，也就是说，<code>j</code>能符合，那么<code>[mid+1,j]</code>都能符合，因为从<code>j</code>到<code>mid+1</code>是越来越小的；</p>\\n</li>\\n<li>\\n<p>每次遍历对当前<code>j</code>的位置，计算当前翻转对的数量<code>count</code>，也就是<code>j-mid</code>；</p>\\n</li>\\n</ol>\\n<p>最后，通过<code>merge</code>，合并并且排序。</p>\\n","content":"<p>给定一个数组&nbsp;<code>nums</code>&nbsp;，如果&nbsp;<code>i &lt; j</code>&nbsp;且&nbsp;<code>nums[i] &gt; 2*nums[j]</code>&nbsp;我们就将&nbsp;<code>(i, j)</code>&nbsp;称作一个<strong><em>重要翻转对</em></strong>。</p>\\n\\n<p>你需要返回给定数组中的重要翻转对的数量。</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n<strong>输入</strong>: [1,3,2,3,1]\\n<strong>输出</strong>: 2\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入</strong>: [2,4,3,5,1]\\n<strong>输出</strong>: 3\\n</pre>\\n\\n<p><strong>注意:</strong></p>\\n\\n<ol>\\n\\t<li>给定数组的长度不会超过<code>50000</code>。</li>\\n\\t<li>输入数组中的所有数字都在32位整数的表示范围内。</li>\\n</ol>\\n","title":"493. 翻转对","relatedTags":["树状数组","线段树","数组","二分查找","分治","有序集合","归并排序"],"difficult":"Hard","lang":["javascript"],"uniqueID":"493","slug":"493-Reverse-Pairs"}')}}]);