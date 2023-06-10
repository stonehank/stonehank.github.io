(window.webpackJsonp=window.webpackJsonp||[]).push([[1393],{2191:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">var</span> SortedStack = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.stack1=[]\\n  <span class=\\"hljs-keyword\\">this</span>.stack2=[]\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {number} val\\n * @return {void}\\n */</span>\\nSortedStack.prototype.push = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">val</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.stack1.length===<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">this</span>.stack1.push(val)\\n    <span class=\\"hljs-keyword\\">return</span>\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> insert=<span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">while</span>(<span class=\\"hljs-keyword\\">this</span>.stack1.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> curMin=<span class=\\"hljs-keyword\\">this</span>.stack1.pop()\\n    <span class=\\"hljs-keyword\\">if</span>(!insert &amp;&amp; curMin&gt;val){\\n      insert=<span class=\\"hljs-literal\\">true</span>\\n      <span class=\\"hljs-keyword\\">this</span>.stack2.push(val)\\n    }\\n    <span class=\\"hljs-keyword\\">this</span>.stack2.push(curMin)\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(!insert){\\n    <span class=\\"hljs-keyword\\">this</span>.stack2.push(val)\\n  }\\n  <span class=\\"hljs-keyword\\">while</span>(<span class=\\"hljs-keyword\\">this</span>.stack2.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">this</span>.stack1.push(<span class=\\"hljs-keyword\\">this</span>.stack2.pop())\\n  }\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * @return {void}\\n */</span>\\nSortedStack.prototype.pop = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.stack1.pop()\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * @return {number}\\n */</span>\\nSortedStack.prototype.peek = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-comment\\">// console.log(this.stack1)</span>\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.stack1.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.stack1[<span class=\\"hljs-keyword\\">this</span>.stack1.length<span class=\\"hljs-number\\">-1</span>]\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * @return {boolean}\\n */</span>\\nSortedStack.prototype.isEmpty = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.stack1.length===<span class=\\"hljs-number\\">0</span>\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Your SortedStack object will be instantiated and called as such:\\n * var obj = new SortedStack()\\n * obj.push(val)\\n * obj.pop()\\n * var param_3 = obj.peek()\\n * var param_4 = obj.isEmpty()\\n */</span>\\n</code></pre>\\n"],"querySlug":"sort-of-stacks-lcci","created_at":"2020-05-26","timeArr":[2020,4,26,22,40,36,0],"hasThinking":false,"content":"<p>栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：<code>push</code>、<code>pop</code>、<code>peek</code> 和 <code>isEmpty</code>。当栈为空时，<code>peek</code>&nbsp;返回 -1。</p>\\n\\n<p><strong>示例1:</strong></p>\\n\\n<pre><strong> 输入</strong>：\\n[&quot;SortedStack&quot;, &quot;push&quot;, &quot;push&quot;, &quot;peek&quot;, &quot;pop&quot;, &quot;peek&quot;]\\n[[], [1], [2], [], [], []]\\n<strong> 输出</strong>：\\n[null,null,null,1,null,2]\\n</pre>\\n\\n<p><strong>示例2:</strong></p>\\n\\n<pre><strong> 输入</strong>： \\n[&quot;SortedStack&quot;, &quot;pop&quot;, &quot;pop&quot;, &quot;push&quot;, &quot;pop&quot;, &quot;isEmpty&quot;]\\n[[], [], [], [1], [], []]\\n<strong> 输出</strong>：\\n[null,null,null,null,null,true]\\n</pre>\\n\\n<p><strong>说明:</strong></p>\\n\\n<ol>\\n\\t<li>栈中的元素数目在[0, 5000]范围内。</li>\\n</ol>\\n","title":"面试题 03.05. 栈排序","relatedTags":["栈","设计","单调栈"],"difficult":"Middle","lang":["javascript"],"uniqueID":"面试题 03.05","slug":"mian-shi-ti-03.05-Sort-of-Stacks-LCCI"}')}}]);