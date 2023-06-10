(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{559:function(e){e.exports=JSON.parse('{"content":"<p>一个只包含正数的数组，找三个长度为k的不重叠的子数组，使得所有子数组的数字之和最大。</p>\\n<p>例如：</p>\\n<pre><code><pre class=\\"hljs\\"><code>Input: [1,2,1,2,6,7,5,1], 2\\nOutput: [0, 3, 5]\\nExplanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].\\nWe could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.</code></pre></code></pre><p>思路：</p>\\n<ol>\\n<li><p>因为是分割成3段，设定为left,mid,right。</p>\\n</li>\\n<li><p>定义一个数组<code>sums</code>，它记录从0到<code>nums.length-k</code>上每一个对应<code>k</code>个子数组的和。</p>\\n<p> 例如：nums:<code>[1,2,3,4]</code>,k:<code>2</code>，那么sums就是<code>[1+2,2+3,3+4]</code></p>\\n</li>\\n<li><p>计算<code>left</code>，使<code>left</code>从左到右记录当前最大<code>index</code>。</p>\\n<p> 计算<code>right</code>，使<code>right</code>从右到左记录当前最大<code>index</code>。</p>\\n<p> 这么做是因为当<code>left</code>和<code>right</code>记录好了后，就可以直接控制mid的<code>index</code>，来计算当前和。</p>\\n<p> 如果<code>mid</code>的起始<code>index</code>是<code>n</code>，那么当前左端范围内的最大值就是<code>left[n-k]</code>，\\n 当前右端范围内的最大值就是<code>right[n+k]</code>。</p>\\n<p> 如下图，假设这是一个<code>left</code>，<code>k</code>为2，当前left范围是0~8，那么这个范围内最大值一定是8这个位置。</p>\\n<p> 注意：这里的值并不是实际值，而是对应<code>sums</code>的<code>index</code>所对应的值。</p>\\n<pre><code><pre class=\\"hljs\\"><code> k=2\\n       |_|_|_|_|_|_|_|_|\\n  值： 1 2 2 3 4 4 4 5 5\\n  idx：0 1 2 3 4 5 6 7 8</code></pre></code></pre><p> 如果范围缩小，0~3，那么最大值一定是3这个位置</p>\\n<pre><code><pre class=\\"hljs\\"><code> k=2\\n       |_|_|_|\\n  值： 1 2 2 3\\n  idx：0 1 2 3</code></pre></code></pre><p> 因此<code>left</code>需要从左往右进行获取最大值。</p>\\n<p> 假设这是一个<code>right</code>，<code>k</code>为2，当前right范围是4~7，那么这个范围内最大值一定是4这个位置</p>\\n<pre><code><pre class=\\"hljs\\"><code> k=2\\n       |_|_|_|\\n  值： 4 4 5 6\\n  idx：4 5 6 7</code></pre></code></pre><p> 因此<code>right</code>需要从右往左进行获取最大值。</p>\\n</li>\\n<li><p>算出<code>left</code>和<code>right</code>后就简单了，我们只需要将符合<code>mid</code>的范围<code>[k,nums.length-k)</code>遍历一遍，\\n 每次遍历都算出当前三个段的和，求出最大和便可。</p>\\n</li>\\n</ol>\\n<p>代码：</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">maxSumOfThreeSubarrays</span>(<span class=\\"hljs-params\\">nums,k</span>)</span>{\\n  <span class=\\"hljs-keyword\\">let</span> len=nums.length-k+<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">let</span> left=[],right=[],maxIndex=<span class=\\"hljs-number\\">0</span>,sums=[],sum=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;nums.length;i++){\\n    sum+=nums[i]\\n    <span class=\\"hljs-keyword\\">if</span>(i&gt;k<span class=\\"hljs-number\\">-1</span>)sum-=nums[i-k]\\n    <span class=\\"hljs-keyword\\">if</span>(i&gt;=k<span class=\\"hljs-number\\">-1</span>)sums[i-k+<span class=\\"hljs-number\\">1</span>]=sum  \\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(sums[i]&gt;sums[maxIndex])maxIndex=i\\n    left[i]=maxIndex\\n  }\\n  maxIndex=len<span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=len<span class=\\"hljs-number\\">-1</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n   <span class=\\"hljs-keyword\\">if</span>(sums[i]&gt;sums[maxIndex])maxIndex=i\\n    right[i]=maxIndex\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> res=[<span class=\\"hljs-number\\">0</span>,k,<span class=\\"hljs-number\\">2</span>*k]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=k;i&lt;len;i++){\\n    <span class=\\"hljs-keyword\\">let</span> l=left[i-k],m=i,r=right[i+k]\\n    <span class=\\"hljs-keyword\\">if</span>(sums[l]+sums[m]+sums[r]&gt;sums[res[<span class=\\"hljs-number\\">0</span>]]+sums[res[<span class=\\"hljs-number\\">1</span>]]+sums[res[<span class=\\"hljs-number\\">2</span>]]){\\n      res[<span class=\\"hljs-number\\">0</span>]=l\\n      res[<span class=\\"hljs-number\\">1</span>]=m\\n      res[<span class=\\"hljs-number\\">2</span>]=r\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n}</code></pre></code></pre>\\n","toc":[],"relatedTags":null,"created_at":"2018-10-26","timeArr":[2018,9,26,0,0,0,0],"title":"LeetCode最大3个不重叠子数组之和","uuid":"761230c6c621098f0a8a2e62ab620dffa59a3460","summary":"<p>一个只包含正数的数组，找三个长度为k的不重叠的子数组，使得所有子数组的数字之和最大。</p>\\n<p>例如：</p>\\n<pre class=\\"hljs\\"><code>Input: [1,2,1,2,6,7,5,1], 2\\nOutput: [0, 3, 5]\\nExplanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to th...</code></pre>","slug":"LeetCode-zui-da-3-ge-bu-chong-die-zi-shu-zu-zhi-he","sha":"abbf38ac11dcc38431445248ada55b000c3406ec"}')}}]);