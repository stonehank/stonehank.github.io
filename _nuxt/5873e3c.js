(window.webpackJsonp=window.webpackJsonp||[]).push([[1348],{2146:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> oddEvenJumps = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> N=A.length\\n  <span class=\\"hljs-keyword\\">let</span> list=[[A[N<span class=\\"hljs-number\\">-1</span>],N<span class=\\"hljs-number\\">-1</span>]]\\n  <span class=\\"hljs-keyword\\">let</span> odd=<span class=\\"hljs-built_in\\">Array</span>(N).fill(<span class=\\"hljs-literal\\">false</span>),\\n      even=<span class=\\"hljs-built_in\\">Array</span>(N).fill(<span class=\\"hljs-literal\\">false</span>)\\n  odd[N<span class=\\"hljs-number\\">-1</span>]=<span class=\\"hljs-literal\\">true</span>\\n  even[N<span class=\\"hljs-number\\">-1</span>]=<span class=\\"hljs-literal\\">true</span>\\n  \\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=N<span class=\\"hljs-number\\">-2</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n    <span class=\\"hljs-keyword\\">let</span> nxtOdd=minMax(A[i]),\\n        nxtEven=maxMin(A[i])\\n    <span class=\\"hljs-keyword\\">if</span>(nxtOdd!=<span class=\\"hljs-literal\\">null</span>)even[i]=odd[nxtOdd]\\n    <span class=\\"hljs-keyword\\">if</span>(nxtEven!=<span class=\\"hljs-literal\\">null</span>)odd[i]=even[nxtEven]\\n    insert(A[i],i)\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> ans=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> b <span class=\\"hljs-keyword\\">of</span> odd)<span class=\\"hljs-keyword\\">if</span>(b)ans++\\n  <span class=\\"hljs-keyword\\">return</span> ans\\n  \\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">insert</span>(<span class=\\"hljs-params\\">val,id</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(list[list.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]&lt;val){\\n      list.push([val,id])\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(list,val)\\n      <span class=\\"hljs-comment\\">// if(list[idx][0]===val){</span>\\n      <span class=\\"hljs-comment\\">//   for(let i=idx;i&lt;list.length;i++){</span>\\n      <span class=\\"hljs-comment\\">//     if(list[i][1]&gt;id){</span>\\n      <span class=\\"hljs-comment\\">//       idx=i</span>\\n      <span class=\\"hljs-comment\\">//       break</span>\\n      <span class=\\"hljs-comment\\">//     }</span>\\n      <span class=\\"hljs-comment\\">//   }</span>\\n      <span class=\\"hljs-comment\\">// }</span>\\n      list.splice(idx,<span class=\\"hljs-number\\">0</span>,[val,id])\\n    }\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">minMax</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(n&lt;list[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">if</span>(n&gt;list[list.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>])<span class=\\"hljs-keyword\\">return</span> list[list.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]\\n    <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(list,n)\\n    <span class=\\"hljs-keyword\\">if</span>(list[idx][<span class=\\"hljs-number\\">0</span>]!==n){\\n      idx=bsEnd(list,list[--idx][<span class=\\"hljs-number\\">0</span>])\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> list[idx][<span class=\\"hljs-number\\">1</span>]\\n  }\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">maxMin</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(n&gt;list[list.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(list,n)\\n    <span class=\\"hljs-keyword\\">return</span> list[idx][<span class=\\"hljs-number\\">1</span>]\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsEnd</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n      <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(arr[mid][<span class=\\"hljs-number\\">0</span>]&lt;n)lo=mid+<span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">else</span> hi=mid\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> hi\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"odd-even-jump","created_at":"2019-03-11","timeArr":[2019,2,11,10,4,15,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这道题暴力解是<code>O(N^2)</code>，从每一个点，模拟是否能跳到终点。</p>\\n<p>但如果逆序遍历，则会发现当前点<code>i</code>需要找的值就在已经遍历的集合内部，因此可以使用<code>TreeMap</code>，通过查找当前点的<code>ceil</code>和<code>floor</code>，\\n时间复杂度是<code>O(NlgN)</code>。</p>\\n","content":"<p>给定一个整数数组 <code>A</code>，你可以从某一起始索引出发，跳跃一定次数。在你跳跃的过程中，第 1、3、5... 次跳跃称为奇数跳跃，而第 2、4、6... 次跳跃称为偶数跳跃。</p>\\n\\n<p>你可以按以下方式从索引 <code>i</code>&nbsp;向后跳转到索引 <code>j</code>（其中 <code>i &lt; j</code>）：</p>\\n\\n<ul>\\n\\t<li>在进行奇数跳跃时（如，第&nbsp;1，3，5... 次跳跃），你将会跳到索引 <code>j</code>，使得 <code>A[i] &lt;=&nbsp;A[j]</code>，<code>A[j]</code> 是可能的最小值。如果存在多个这样的索引 <code>j</code>，你只能跳到满足要求的<strong>最小</strong>索引 <code>j</code> 上。</li>\\n\\t<li>在进行偶数跳跃时（如，第&nbsp;2，4，6... 次跳跃），你将会跳到索引&nbsp;<code>j</code>，使得 <code>A[i] &gt;= A[j]</code>，<code>A[j]</code> 是可能的最大值。如果存在多个这样的索引 <code>j</code>，你只能跳到满足要求的<strong>最小</strong>索引 <code>j</code>&nbsp;上。</li>\\n\\t<li>（对于某些索引 <code>i</code>，可能无法进行合乎要求的跳跃。）</li>\\n</ul>\\n\\n<p>如果从某一索引开始跳跃一定次数（可能是 0 次或多次），就可以到达数组的末尾（索引 <code>A.length - 1</code>），那么该索引就会被认为是好的起始索引。</p>\\n\\n<p>返回好的起始索引的数量。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>[10,13,12,14,15]\\n<strong>输出：</strong>2\\n<strong>解释： </strong>\\n从起始索引 i = 0 出发，我们可以跳到 i = 2，（因为 A[2] 是 A[1]，A[2]，A[3]，A[4] 中大于或等于 A[0] 的最小值），然后我们就无法继续跳下去了。\\n从起始索引 i = 1 和 i = 2 出发，我们可以跳到 i = 3，然后我们就无法继续跳下去了。\\n从起始索引 i = 3 出发，我们可以跳到 i = 4，到达数组末尾。\\n从起始索引 i = 4 出发，我们已经到达数组末尾。\\n总之，我们可以从 2 个不同的起始索引（i = 3, i = 4）出发，通过一定数量的跳跃到达数组末尾。\\n</pre>\\n\\n<p><strong>示例&nbsp;2：</strong></p>\\n\\n<pre><strong>输入：</strong>[2,3,1,1,4]\\n<strong>输出：</strong>3\\n<strong>解释：</strong>\\n从起始索引 i=0 出发，我们依次可以跳到 i = 1，i = 2，i = 3：\\n\\n在我们的第一次跳跃（奇数）中，我们先跳到 i = 1，因为 A[1] 是（A[1]，A[2]，A[3]，A[4]）中大于或等于 A[0] 的最小值。\\n\\n在我们的第二次跳跃（偶数）中，我们从 i = 1 跳到 i = 2，因为 A[2] 是（A[2]，A[3]，A[4]）中小于或等于 A[1] 的最大值。A[3] 也是最大的值，但 2 是一个较小的索引，所以我们只能跳到 i = 2，而不能跳到 i = 3。\\n\\n在我们的第三次跳跃（奇数）中，我们从 i = 2 跳到 i = 3，因为 A[3] 是（A[3]，A[4]）中大于或等于 A[2] 的最小值。\\n\\n我们不能从 i = 3 跳到 i = 4，所以起始索引 i = 0 不是好的起始索引。\\n\\n类似地，我们可以推断：\\n从起始索引 i = 1 出发， 我们跳到 i = 4，这样我们就到达数组末尾。\\n从起始索引 i = 2 出发， 我们跳到 i = 3，然后我们就不能再跳了。\\n从起始索引 i = 3 出发， 我们跳到 i = 4，这样我们就到达数组末尾。\\n从起始索引 i = 4 出发，我们已经到达数组末尾。\\n总之，我们可以从 3 个不同的起始索引（i = 1, i = 3, i = 4）出发，通过一定数量的跳跃到达数组末尾。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>[5,1,3,4,2]\\n<strong>输出：</strong>3\\n<strong>解释： </strong>\\n我们可以从起始索引 1，2，4 出发到达数组末尾。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>1 &lt;= A.length &lt;= 20000</code></li>\\n\\t<li><code>0 &lt;= A[i] &lt; 100000</code></li>\\n</ol>\\n","title":"975. 奇偶跳","relatedTags":["栈","数组","动态规划","有序集合","单调栈"],"difficult":"Hard","lang":["javascript"],"uniqueID":"975","slug":"975-Odd-Even-Jump"}')}}]);