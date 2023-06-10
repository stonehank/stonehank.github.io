(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{603:function(n){n.exports=JSON.parse('{"content":"<p>indexedDB\\n在客户端进行保存保存： </p>\\n<pre><code><pre class=\\"hljs\\"><code>{id: 1, name: &quot;张三&quot;, age: 24, email: &quot;zhangsan@example.com&quot;}\\n{id: 2, name: &quot;李四&quot;, age: 54, email: &quot;lisi@example.com&quot;}\\n{id: 3, name: &quot;王五&quot;, age: 36, email: &quot;wangwu@example.com&quot;}</code></pre></code></pre><ul>\\n<li>步骤1-创建数据库<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">var</span> request = <span class=\\"hljs-built_in\\">window</span>.indexedDB.open(<span class=\\"hljs-string\\">\\"test\\"</span>, <span class=\\"hljs-number\\">1</span>);\\n<span class=\\"hljs-keyword\\">var</span> db</code></pre></code></pre>\\n</li>\\n</ul>\\n<ul>\\n<li>步骤2-创建数据表，添加初始数据<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code>request = <span class=\\"hljs-built_in\\">window</span>.indexedDB.open(<span class=\\"hljs-string\\">\\"test\\"</span>, <span class=\\"hljs-number\\">1</span>);\\nrequest.onupgradeneeded=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">e</span>)</span>{\\ndb = e.target.result;\\n<span class=\\"hljs-keyword\\">var</span> objectStore;\\n<span class=\\"hljs-keyword\\">if</span> (!db.objectStoreNames.contains(<span class=\\"hljs-string\\">\'person\'</span>)) {\\n  objectStore = db.createObjectStore(<span class=\\"hljs-string\\">\'person\'</span>, { <span class=\\"hljs-attr\\">keyPath</span>: <span class=\\"hljs-string\\">\'id\'</span> });\\n}\\nobjectStore.add({<span class=\\"hljs-attr\\">id</span>: <span class=\\"hljs-number\\">1</span>, <span class=\\"hljs-attr\\">name</span>: <span class=\\"hljs-string\\">\\"张三\\"</span>, <span class=\\"hljs-attr\\">age</span>: <span class=\\"hljs-number\\">24</span>, <span class=\\"hljs-attr\\">email</span>: <span class=\\"hljs-string\\">\\"zhangsan@example.com\\"</span>})\\n}</code></pre></code></pre>\\n</li>\\n</ul>\\n<ul>\\n<li><p>步骤3-增加数据</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code>add()\\n<span class=\\"hljs-comment\\">// db存在</span>\\n<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">add</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n<span class=\\"hljs-keyword\\">var</span> addReq\\n<span class=\\"hljs-keyword\\">var</span> tra=db.transaction([<span class=\\"hljs-string\\">\'person\'</span>],<span class=\\"hljs-string\\">\'readwrite\'</span>)\\n<span class=\\"hljs-keyword\\">var</span> objS=tra.objectStore(<span class=\\"hljs-string\\">\'person\'</span>)\\naddReq=objS.add({<span class=\\"hljs-attr\\">id</span>: <span class=\\"hljs-number\\">2</span>, <span class=\\"hljs-attr\\">name</span>: <span class=\\"hljs-string\\">\\"李四\\"</span>, <span class=\\"hljs-attr\\">age</span>: <span class=\\"hljs-number\\">54</span>, <span class=\\"hljs-attr\\">email</span>: <span class=\\"hljs-string\\">\\"lisi@example.com\\"</span>})\\naddReq=objS.add({<span class=\\"hljs-attr\\">id</span>: <span class=\\"hljs-number\\">3</span>, <span class=\\"hljs-attr\\">name</span>: <span class=\\"hljs-string\\">\\"王五\\"</span>, <span class=\\"hljs-attr\\">age</span>: <span class=\\"hljs-number\\">36</span>, <span class=\\"hljs-attr\\">email</span>: <span class=\\"hljs-string\\">\\"wangwu@example.com\\"</span>})\\naddReq.onsuccess = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> (<span class=\\"hljs-params\\">event</span>) </span>{\\n  <span class=\\"hljs-built_in\\">console</span>.log(<span class=\\"hljs-string\\">\'数据写入成功\'</span>);\\n};\\n\\naddReq.onerror = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> (<span class=\\"hljs-params\\">event</span>) </span>{\\n  <span class=\\"hljs-built_in\\">console</span>.log(<span class=\\"hljs-string\\">\'数据写入失败\'</span>);\\n}\\n}\\n</code></pre></code></pre>\\n</li>\\n</ul>\\n<pre><code><pre class=\\"hljs\\"><code>* 步骤4-查找数据表\\n```js\\nrequest = window.indexedDB.open(&quot;test&quot;, 1);\\nrequest.onsuccess=function(e){\\n  db=e.target.result\\n  var tra=db.transaction([\'person\'])\\n  var objS=tra.objectStore(\'person\')\\n  console.log(objS.getAll().result)\\n}</code></pre></code></pre><p>参考：<a href=\\"https://wangdoc.com/javascript/bom/indexeddb.html\\">https://wangdoc.com/javascript/bom/indexeddb.html</a></p>\\n","toc":[],"relatedTags":null,"created_at":"2018-08-15","timeArr":[2018,7,15,0,0,0,0],"title":"indexedDB简要增删查","uuid":"b8d2829958b70c73fa0733e45fe779eff931cbc5","summary":"<p>indexedDB\\n在客户端进行保存保存：</p>\\n<pre class=\\"hljs\\"><code>{id: 1, name: &quot;张三&quot;, age: 24, email: &quot;zhangsan@example.com&quot;}\\n{id: 2, name: &quot;李四&quot;, age: 54, email: &quot;lisi@example.com&quot;}\\n{id: 3, name: &quot;王五...</code></pre>","slug":"indexedDB-jian-yao-zeng-shan-cha","sha":"b9c382c33ecfc711c7de0a929d346090b6c78122"}')}}]);