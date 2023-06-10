(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{1639:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Initialize your data structure here.\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> AllOne = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.map=<span class=\\"hljs-keyword\\">new</span> <span class=\\"hljs-built_in\\">Map</span>()\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Inserts a new key &lt;Key&gt; with value 1. Or increments an existing key by 1. \\n * @param {string} key\\n * @return {void}\\n */</span>\\nAllOne.prototype.inc = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">key</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> curCount\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.map.has(key)){\\n    curCount=<span class=\\"hljs-keyword\\">this</span>.map.get(key)+<span class=\\"hljs-number\\">1</span>\\n  }<span class=\\"hljs-keyword\\">else</span>{\\n    curCount=<span class=\\"hljs-number\\">1</span>\\n  }\\n  <span class=\\"hljs-keyword\\">this</span>.map.set(key,curCount)\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Decrements an existing key by 1. If Key\'s value is 1, remove it from the data structure. \\n * @param {string} key\\n * @return {void}\\n */</span>\\nAllOne.prototype.dec = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">key</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.map.has(key)){\\n    <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.map.get(key)&gt;<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">this</span>.map.set(key,<span class=\\"hljs-keyword\\">this</span>.map.get(key)<span class=\\"hljs-number\\">-1</span>)\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">this</span>.map.delete(key)\\n  }<span class=\\"hljs-keyword\\">else</span>{\\n    <span class=\\"hljs-keyword\\">return</span>\\n  }\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Returns one of the keys with maximal value.\\n * @return {string}\\n */</span>\\nAllOne.prototype.getMaxKey = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> max=-<span class=\\"hljs-literal\\">Infinity</span>,maxStr=<span class=\\"hljs-string\\">\'\'</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">of</span> <span class=\\"hljs-keyword\\">this</span>.map){\\n    <span class=\\"hljs-keyword\\">if</span>(k[<span class=\\"hljs-number\\">1</span>]&gt;max){\\n      max=k[<span class=\\"hljs-number\\">1</span>]\\n      maxStr=k[<span class=\\"hljs-number\\">0</span>]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> maxStr\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Returns one of the keys with Minimal value.\\n * @return {string}\\n */</span>\\nAllOne.prototype.getMinKey = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> min=<span class=\\"hljs-literal\\">Infinity</span>,minStr=<span class=\\"hljs-string\\">\'\'</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">of</span> <span class=\\"hljs-keyword\\">this</span>.map){\\n    <span class=\\"hljs-keyword\\">if</span>(k[<span class=\\"hljs-number\\">1</span>]&lt;min){\\n      min=k[<span class=\\"hljs-number\\">1</span>]\\n      minStr=k[<span class=\\"hljs-number\\">0</span>]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> minStr\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * Your AllOne object will be instantiated and called as such:\\n * var obj = Object.create(AllOne).createNew()\\n * obj.inc(key)\\n * obj.dec(key)\\n * var param_3 = obj.getMaxKey()\\n * var param_4 = obj.getMinKey()\\n */</span>\\n</code></pre>\\n"],"querySlug":"all-oone-data-structure","created_at":"2019-04-19","timeArr":[2019,3,19,13,44,29,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这里如果不要求<code>O(1)</code>，那就很简单，用一个<code>map</code>，保存每个<code>key</code>的次数，当次数为<code>0</code>，删除。</p>\\n<p><code>getMax</code>，线性查找最大的；<code>getMin</code>线性查找最小的。</p>\\n<p>时间复杂度是<code>O(map.size)</code>。</p>\\n<p>如果要求<code>O(1)</code>，需要维护一个数据结构，并且保证它的头部是出现次数最小的集合，尾部是出现次数最多的集合。</p>\\n<p>当<code>getMax</code>的时候只需要返回最后一组的任意值，当<code>getMin</code>时，返回最前一组的任意值。</p>\\n<p>如果需要保持这种结构，那么需要用到<code>查找</code>集合、<code>增加</code>集合以及<code>删除</code>集合，同时还有集合内部的<code>查找，增加，删除</code>key。</p>\\n<p>集合内部使用<code>map</code>可以处理，那么这个集合需要用<code>双向链表</code>构成，并且额外一个<code>hash</code>跟踪每个<code>key</code>对应的集合(双向链表<code>node</code>)引用。</p>\\n<p>这个数据结构如下：</p>\\n<pre class=\\"hljs\\"><code>key2Node: { \'a\':DoubleLink,\'b\':DoubleLink,... }\\nDoubleLink&lt;Head&gt; &lt;===&gt; DoubleLink&lt;count:1,val:Map&gt; &lt;===&gt; ... &lt;===&gt; DoubleLink&lt;count:5,val:Map&gt; &lt;===&gt; DoubleLink&lt;Tail&gt;\\n</code></pre>\\n<p>此处的<code>DoubleLink</code>的<code>Head</code>和<code>Tail</code>是虚拟的一个头部和尾部，定义<code>双向链表</code>的<code>删除</code>和<code>增加</code>方法是不需要额外处理边界问题。</p>\\n","content":"<p>请你实现一个数据结构支持以下操作：</p>\\n\\n<ol>\\n\\t<li><code>Inc(key)</code> - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。</li>\\n\\t<li><code>Dec(key)</code> - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否则使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。</li>\\n\\t<li><code>GetMaxKey()</code> - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串<code>&quot;&quot;</code> 。</li>\\n\\t<li><code>GetMinKey()</code> - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串<code>&quot;&quot;</code>。</li>\\n</ol>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>挑战：</strong></p>\\n\\n<p>你能够以 O(1) 的时间复杂度实现所有操作吗？</p>\\n","title":"432. 全 O(1) 的数据结构","relatedTags":["设计","哈希表","链表","双向链表"],"difficult":"Hard","lang":["javascript"],"uniqueID":"432","slug":"432-All-O`one-Data-Structure"}')}}]);