(window.webpackJsonp=window.webpackJsonp||[]).push([[878],{1676:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[][]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> permuteUnique = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> N=nums.length\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  nums.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a-b)\\n  <span class=\\"hljs-keyword\\">let</span> used=<span class=\\"hljs-built_in\\">Array</span>(N).fill(<span class=\\"hljs-literal\\">false</span>)\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">backtrack</span>(<span class=\\"hljs-params\\">arr</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(arr.length===N){\\n      <span class=\\"hljs-keyword\\">return</span> res.push(arr.slice())\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;nums.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(i&gt;<span class=\\"hljs-number\\">0</span> &amp;&amp; nums[i]===nums[i<span class=\\"hljs-number\\">-1</span>] &amp;&amp; !used[i<span class=\\"hljs-number\\">-1</span>])<span class=\\"hljs-keyword\\">continue</span>\\n      <span class=\\"hljs-keyword\\">if</span>(used[i])<span class=\\"hljs-keyword\\">continue</span>\\n      arr.push(nums[i])\\n      used[i]=<span class=\\"hljs-literal\\">true</span>\\n      backtrack(arr)\\n      used[i]=<span class=\\"hljs-literal\\">false</span>\\n      arr.pop()\\n    }\\n  }\\n  backtrack([])\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"permutations-ii","created_at":"2019-04-17","timeArr":[2019,3,17,23,34,5,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>稍微复杂一点的回溯，主要用到了处理重复的方法，先排序，排序是为了能高效的处理重复，而不必使用<code>hash</code>检查是否重复。</p>\\n<p>排序后，例如<code>[1,1,2,2,3]</code>，如果我第一位是<code>1</code>(索引0)，已经做好了排列，那么下一次第一位是<code>1</code>(索引1)就不需要再次计算排列了，\\n因为已经重复了。</p>\\n<p>因此处理重复条件之一：<code>i&gt;0 &amp;&amp; nums[i-1]===nums[i]</code>，但是还不够，如果我现在第一位是<code>2</code>，那么第二位是<code>1</code>(索引1)应该是合理的，\\n但却和这个条件冲突了。</p>\\n<p>因此完整条件应该是<code>if(i&gt;0 &amp;&amp; nums[i-1]===nums[i] &amp;&amp; !used[i-1])continue</code>，为什么上一位没使用就可以跳过呢？</p>\\n<p>在我们第一次计算重复的时候，上一位一定是使用了，而当我们第二次计算重复值时，上一位是未使用的，因此可以正确避免重复的排列。</p>\\n","content":"<p>给定一个可包含重复数字的序列 <code>nums</code> ，<strong>按任意顺序</strong> 返回所有不重复的全排列。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [1,1,2]\\n<strong>输出：</strong>\\n[[1,1,2],\\n [1,2,1],\\n [2,1,1]]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [1,2,3]\\n<strong>输出：</strong>[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 8</code></li>\\n\\t<li><code>-10 <= nums[i] <= 10</code></li>\\n</ul>\\n","title":"47. 全排列 II","relatedTags":["数组","回溯"],"difficult":"Middle","lang":["javascript"],"uniqueID":"47","slug":"47-Permutations-II"}')}}]);