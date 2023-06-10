(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{565:function(n){n.exports=JSON.parse('{"content":"<h4 id=\\"hooks\\">Hooks</h4>\\n<p><code>useState, useEffect, useContext</code></p>\\n<hr>\\n<ul>\\n<li>useState:</li>\\n</ul>\\n<ol>\\n<li><p>可以在非class使用state</p>\\n</li>\\n<li><p>返回一个数组</p>\\n<p> arr[0]是具体的state</p>\\n<p> arr[1]是改变state的方法</p>\\n<p> <code>const [count, setCount] = useState(initialCount);</code></p>\\n</li>\\n<li><p>不像this.setState，useState不能合并state，例如</p>\\n<p> <code>state={x:1,y:2}  set({x:3}) ===&gt; state={x:3}</code></p>\\n<p> <code>state={x:1,y:2} this.setState({x:3})===&gt;state={x:3,y:2}</code></p>\\n</li>\\n<li><p>初始化只会执行一次，因此一些昂贵的操作应该放到初始化执行，例如：</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code> <span class=\\"hljs-keyword\\">const</span> [state, setState] = useState(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span> =&gt;</span> {\\n   <span class=\\"hljs-keyword\\">const</span> initialState = someExpensiveComputation(props);\\n   <span class=\\"hljs-keyword\\">return</span> initialState;\\n });</code></pre></code></pre>\\n</li>\\n</ol>\\n<hr>\\n<ul>\\n<li>useEffect:</li>\\n</ul>\\n<p>函数式组件主体都是挂载在render，使用副作用操作会有一些意外bug发生。</p>\\n<p>但可以在useEffect内部执行，这个钩子在render之后才执行。</p>\\n<ol>\\n<li><p>useEffect的返回值会在unmount之前执行</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code> useEffect(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span> =&gt;</span> {\\n   <span class=\\"hljs-keyword\\">const</span> subscription = props.source.subscribe();\\n   <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span> =&gt;</span> {\\n     <span class=\\"hljs-comment\\">// Clean up the subscription</span>\\n     subscription.unsubscribe();\\n   };\\n });</code></pre></code></pre>\\n</li>\\n<li><p>useEffect第二个参数(array)，规定的数据发生变化才会执行</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code> useEffect(\\n   <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span> =&gt;</span> {\\n     <span class=\\"hljs-keyword\\">const</span> subscription = props.source.subscribe();\\n     <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span> =&gt;</span> {\\n       subscription.unsubscribe();\\n     };\\n   },\\n   [props.source],\\n );</code></pre></code></pre>\\n</li>\\n</ol>\\n<hr>\\n<ul>\\n<li>useContext:</li>\\n</ul>\\n<p>和<code>static contextType</code>很像</p>\\n<p><code>const context = useContext(Context);</code></p>\\n<p>一行代码代替了</p>\\n<pre><code><pre class=\\"hljs\\"><code>&lt;Context.Provider&gt;\\n&lt;Context.Consumer&gt;</code></pre></code></pre>","toc":[{"anchor":"hooks","level":4,"text":"Hooks"}],"relatedTags":null,"created_at":"2018-10-29","timeArr":[2018,9,29,0,0,0,0],"title":"React v16.7 Hooks(1)","uuid":"f38c0d6abc75ce713d9bcd733aa66d5097d25e56","summary":"<h4>Hooks</h4>\\n<p><code>useState, useEffect, useContext</code></p>","slug":"React-v16.7-Hooks(1)","sha":"fc32341fa1074291a622a829343b7b8a33955b7c"}')}}]);