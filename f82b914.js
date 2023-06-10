(window.webpackJsonp=window.webpackJsonp||[]).push([[1394],{2192:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">var</span> AnimalShelf = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.dogQueue=[]\\n  <span class=\\"hljs-keyword\\">this</span>.catQueue=[]\\n  <span class=\\"hljs-keyword\\">this</span>.id=<span class=\\"hljs-number\\">0</span>\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {number[]} animal\\n * @return {void}\\n */</span>\\nAnimalShelf.prototype.enqueue = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">animal</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> aId=animal[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">if</span>(animal[<span class=\\"hljs-number\\">1</span>]===<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">this</span>.catQueue.push([<span class=\\"hljs-keyword\\">this</span>.id,aId])\\n  }<span class=\\"hljs-keyword\\">else</span>{\\n    <span class=\\"hljs-keyword\\">this</span>.dogQueue.push([<span class=\\"hljs-keyword\\">this</span>.id,aId])\\n  }\\n  <span class=\\"hljs-keyword\\">this</span>.id++\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * @return {number[]}\\n */</span>\\nAnimalShelf.prototype.dequeueAny = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-comment\\">// console.log(this.dogQueue,this.catQueue)</span>\\n  <span class=\\"hljs-keyword\\">let</span> catLen=<span class=\\"hljs-keyword\\">this</span>.catQueue.length\\n  <span class=\\"hljs-keyword\\">let</span> dogLen=<span class=\\"hljs-keyword\\">this</span>.dogQueue.length\\n  <span class=\\"hljs-keyword\\">if</span>(catLen===<span class=\\"hljs-number\\">0</span> &amp;&amp; dogLen===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> [<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">-1</span>]\\n  <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(catLen===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.dequeueDog()\\n  <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(dogLen===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.dequeueCat()\\n  <span class=\\"hljs-keyword\\">let</span> [catFirstId,catLast]=<span class=\\"hljs-keyword\\">this</span>.catQueue[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">let</span> [dogFirstId,dotLast]=<span class=\\"hljs-keyword\\">this</span>.dogQueue[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">if</span>(catFirstId&lt;dogFirstId){\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.dequeueCat()\\n  }<span class=\\"hljs-keyword\\">else</span>{\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-keyword\\">this</span>.dequeueDog()\\n  }\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * @return {number[]}\\n */</span>\\nAnimalShelf.prototype.dequeueDog = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.dogQueue.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> [<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">-1</span>]\\n  <span class=\\"hljs-keyword\\">let</span> first=<span class=\\"hljs-keyword\\">this</span>.dogQueue.shift()\\n  <span class=\\"hljs-keyword\\">return</span> [first[<span class=\\"hljs-number\\">1</span>],<span class=\\"hljs-number\\">1</span>]\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * @return {number[]}\\n */</span>\\nAnimalShelf.prototype.dequeueCat = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.catQueue.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> [<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">-1</span>]\\n  <span class=\\"hljs-keyword\\">let</span> first=<span class=\\"hljs-keyword\\">this</span>.catQueue.shift()\\n  <span class=\\"hljs-keyword\\">return</span> [first[<span class=\\"hljs-number\\">1</span>],<span class=\\"hljs-number\\">0</span>]\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Your AnimalShelf object will be instantiated and called as such:\\n * var obj = new AnimalShelf()\\n * obj.enqueue(animal)\\n * var param_2 = obj.dequeueAny()\\n * var param_3 = obj.dequeueDog()\\n * var param_4 = obj.dequeueCat()\\n */</span>\\n</code></pre>\\n"],"querySlug":"animal-shelter-lcci","created_at":"2020-05-26","timeArr":[2020,4,26,18,7,33,0],"hasThinking":false,"content":"<p>动物收容所。有家动物收容所只收容狗与猫，且严格遵守&ldquo;先进先出&rdquo;的原则。在收养该收容所的动物时，收养人只能收养所有动物中&ldquo;最老&rdquo;（由其进入收容所的时间长短而定）的动物，或者可以挑选猫或狗（同时必须收养此类动物中&ldquo;最老&rdquo;的）。换言之，收养人不能自由挑选想收养的对象。请创建适用于这个系统的数据结构，实现各种操作方法，比如<code>enqueue</code>、<code>dequeueAny</code>、<code>dequeueDog</code>和<code>dequeueCat</code>。允许使用Java内置的LinkedList数据结构。</p>\\n\\n<p><code>enqueue</code>方法有一个<code>animal</code>参数，<code>animal[0]</code>代表动物编号，<code>animal[1]</code>代表动物种类，其中 0 代表猫，1 代表狗。</p>\\n\\n<p><code>dequeue*</code>方法返回一个列表<code>[动物编号, 动物种类]</code>，若没有可以收养的动物，则返回<code>[-1,-1]</code>。</p>\\n\\n<p><strong>示例1:</strong></p>\\n\\n<pre><strong> 输入</strong>：\\n[&quot;AnimalShelf&quot;, &quot;enqueue&quot;, &quot;enqueue&quot;, &quot;dequeueCat&quot;, &quot;dequeueDog&quot;, &quot;dequeueAny&quot;]\\n[[], [[0, 0]], [[1, 0]], [], [], []]\\n<strong> 输出</strong>：\\n[null,null,null,[0,0],[-1,-1],[1,0]]\\n</pre>\\n\\n<p><strong>示例2:</strong></p>\\n\\n<pre><strong> 输入</strong>：\\n[&quot;AnimalShelf&quot;, &quot;enqueue&quot;, &quot;enqueue&quot;, &quot;enqueue&quot;, &quot;dequeueDog&quot;, &quot;dequeueCat&quot;, &quot;dequeueAny&quot;]\\n[[], [[0, 0]], [[1, 0]], [[2, 1]], [], [], []]\\n<strong> 输出</strong>：\\n[null,null,null,null,[2,1],[0,0],[1,0]]\\n</pre>\\n\\n<p><strong>说明:</strong></p>\\n\\n<ol>\\n\\t<li>收纳所的最大容量为20000</li>\\n</ol>\\n","title":"面试题 03.06. 动物收容所","relatedTags":["设计","队列"],"difficult":"Easy","lang":["javascript"],"uniqueID":"面试题 03.06","slug":"mian-shi-ti-03.06-Animal-Shelter-LCCI"}')}}]);