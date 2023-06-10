(window.webpackJsonp=window.webpackJsonp||[]).push([[909],{1707:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">k</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">W</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">Profits</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">Capital</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findMaximizedCapital = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">k, W, Profits, Capital</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> pq=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsFront</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n      <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.ceil((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(arr[mid][<span class=\\"hljs-number\\">0</span>]&gt;n)hi=mid<span class=\\"hljs-number\\">-1</span>\\n      <span class=\\"hljs-keyword\\">else</span> lo=mid\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> lo\\n  }  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsEnd</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n      <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(arr[mid][<span class=\\"hljs-number\\">1</span>]&lt;n)lo=mid+<span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">else</span> hi=mid\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> hi\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">insert</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">0</span> || pq[pq.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]&lt;n[<span class=\\"hljs-number\\">1</span>]){\\n      pq.push(n)\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(pq,n[<span class=\\"hljs-number\\">1</span>])\\n      pq.splice(idx,<span class=\\"hljs-number\\">0</span>,n)\\n    }\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">delMax</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> [<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>]\\n    <span class=\\"hljs-keyword\\">return</span> pq.pop()\\n  }\\n  \\n  <span class=\\"hljs-keyword\\">let</span> capPro=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;Profits.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> c=Capital[i],p=Profits[i]\\n    capPro[i]=[c,p]\\n  }\\n  capPro.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a[<span class=\\"hljs-number\\">0</span>]-b[<span class=\\"hljs-number\\">0</span>])\\n  <span class=\\"hljs-comment\\">// 如果项目最低资金要求比W还高，直接返回0</span>\\n  <span class=\\"hljs-keyword\\">if</span>(capPro[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]&gt;W)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n\\n  <span class=\\"hljs-keyword\\">let</span> curId=<span class=\\"hljs-number\\">0</span>,nextId=<span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-keyword\\">while</span>(k--&gt;=<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> [needW,profit]=delMax()\\n    W+=profit\\n    <span class=\\"hljs-comment\\">// 如果capPro内部所有项目都添加完毕，直接跳过</span>\\n    <span class=\\"hljs-keyword\\">if</span>(curId===capPro.length)<span class=\\"hljs-keyword\\">continue</span>\\n    <span class=\\"hljs-comment\\">// 找到当前范围需要添加的范围[curId,nextId]</span>\\n    nextId=bsFront(capPro,W)\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=curId;i&lt;=nextId;i++)insert(capPro[i])\\n    curId=nextId+<span class=\\"hljs-number\\">1</span>\\n    nextId=<span class=\\"hljs-literal\\">null</span>\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> W\\n};\\n</code></pre>\\n"],"querySlug":"ipo","created_at":"2019-04-13","timeArr":[2019,3,13,21,15,39,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>Priority Queue</code>，首先将<code>Capital</code>和<code>Profits</code>构建成一个数组<code>capPro</code>，数组每个元素为<code>[Capital[i],Profits[i]]</code>，然后按照索引<code>0</code>升序排序，\\n之所以排序，因为后续我们可以用二分法快速找到当前<code>W</code>所能完成的所有项目。</p>\\n<p>遍历<code>k--</code>，对当前<code>W</code>找到能完成的项目范围，将项目的收益添加进<code>pq</code>，由于<code>W</code>一定是越来越大，因此每次只需要添加这一次<code>W</code>和上一次<code>W</code>的差距所对应的范围的收益。</p>\\n<p>然后每次遍历<code>k--</code>，找出当前<code>pq</code>内部的最大值即可。</p>\\n","content":"<p>假设 力扣（LeetCode）即将开始其 IPO。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 <strong>k</strong> 个不同的项目。帮助 力扣 设计完成最多 <strong>k</strong> 个不同项目后得到最大总资本的方式。</p>\\n\\n<p>给定若干个项目。对于每个项目 <strong>i</strong>，它都有一个纯利润 <strong>P<sub>i</sub></strong>，并且需要最小的资本 <strong>C<sub>i</sub></strong> 来启动相应的项目。最初，你有 <strong>W</strong> 资本。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。</p>\\n\\n<p>总而言之，从给定项目中选择最多 <strong>k</strong> 个不同项目的列表，以最大化最终资本，并输出最终可获得的最多资本。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].\\n<strong>输出：</strong>4\\n<strong>解释：\\n</strong>由于你的初始资本为 0，你仅可以从 0 号项目开始。\\n在完成后，你将获得 1 的利润，你的总资本将变为 1。\\n此时你可以选择开始 1 号或 2 号项目。\\n由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。\\n因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>假设所有输入数字都是非负整数。</li>\\n\\t<li>表示利润和资本的数组的长度不超过 50000。</li>\\n\\t<li>答案保证在 32 位有符号整数范围内。</li>\\n</ul>\\n","title":"502. IPO","relatedTags":["贪心","数组","排序","堆（优先队列）"],"difficult":"Hard","lang":["javascript"],"uniqueID":"502","slug":"502-IPO"}')}}]);