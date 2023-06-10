(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{632:function(n){n.exports=JSON.parse('{"content":"<h3 id=\\"yi\\">一</h3>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> pingEpic = <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action$</span> =&gt;</span>\\n  action$.filter(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action</span> =&gt;</span> action.type === <span class=\\"hljs-string\\">\'PING\'</span>)\\n    .mapTo({ <span class=\\"hljs-attr\\">type</span>: <span class=\\"hljs-string\\">\'PONG\'</span> });</code></pre></code></pre>\\n<blockquote>\\n<p>pingEpic 会监听类型为 PING 的 actions，然后投射为新的 action，PONG。这个例子功能上相当于做了这件事情:</p>\\n</blockquote>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code>dispatch({ <span class=\\"hljs-attr\\">type</span>: <span class=\\"hljs-string\\">\'PING\'</span> });\\ndispatch({ <span class=\\"hljs-attr\\">type</span>: <span class=\\"hljs-string\\">\'PONG\'</span> });</code></pre></code></pre>\\n<blockquote>\\n<p>牢记: Epics 运行在正常分发渠道旁, 在 reducers 完全接受到它们之后。当你将一个 action 投射成另一个 action，\\n你不会 阻止原始的 action 到达 reducers; 该 action 已经通过了它!</p>\\n</blockquote>\\n<p>理解：</p>\\n<p>通过查看redux源码：</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code>\\n<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dispatch</span>(<span class=\\"hljs-params\\">action</span>) </span>{\\n    <span class=\\"hljs-comment\\">//...一些判断</span>\\n\\n    <span class=\\"hljs-comment\\">// dispatch实际操作（顺序：先更新state，再执行监听）</span>\\n    <span class=\\"hljs-keyword\\">try</span> {\\n      isDispatching = <span class=\\"hljs-literal\\">true</span>\\n      <span class=\\"hljs-comment\\">// 更新currentState</span>\\n      currentState = currentReducer(currentState, action)\\n    } <span class=\\"hljs-keyword\\">finally</span> {\\n      isDispatching = <span class=\\"hljs-literal\\">false</span>\\n    }\\n    <span class=\\"hljs-comment\\">// 遍历执行每一个监听</span>\\n    <span class=\\"hljs-keyword\\">const</span> listeners = (currentListeners = nextListeners)\\n    <span class=\\"hljs-keyword\\">for</span> (<span class=\\"hljs-keyword\\">let</span> i = <span class=\\"hljs-number\\">0</span>; i &lt; listeners.length; i++) {\\n      <span class=\\"hljs-keyword\\">const</span> listener = listeners[i]\\n      listener()\\n    }\\n\\n    <span class=\\"hljs-keyword\\">return</span> action\\n  }</code></pre></code></pre>\\n<p>可以看出是先更新state，说明一开始的action已经执行了，然后才去执行listener(即这里的Epics)</p>\\n<h3 id=\\"er\\">二</h3>\\n<p>这里到底发生了什么</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> fetchUser = <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">username</span> =&gt;</span> ({ <span class=\\"hljs-attr\\">type</span>: FETCH_USER, <span class=\\"hljs-attr\\">payload</span>: username });\\n<span class=\\"hljs-keyword\\">const</span> fetchUserFulfilled = <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">payload</span> =&gt;</span> ({ <span class=\\"hljs-attr\\">type</span>: FETCH_USER_FULFILLED, payload });\\n\\n\\n<span class=\\"hljs-keyword\\">const</span> fetchUserEpic = <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action$</span> =&gt;</span>\\n  action$.ofType(FETCH_USER)\\n    .mergeMap(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action</span> =&gt;</span>\\n      ajax.getJSON(<span class=\\"hljs-string\\">`https://api.github.com/users/<span class=\\"hljs-subst\\">${action.payload}</span>`</span>)\\n        .map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">response</span> =&gt;</span> fetchUserFulfilled(response))\\n    );</code></pre></code></pre>\\n<p>我们用redux的时候写reducer是<code>action</code>入，<code>state</code>出，编写完成后通过<code>combineReducers</code>合并，再通过<code>createStore</code>添加</p>\\n<p>这是一个reducer:</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> users = <span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">state = {}, action</span>) =&gt;</span> {\\n  <span class=\\"hljs-keyword\\">switch</span> (action.type) {\\n    <span class=\\"hljs-keyword\\">case</span> FETCH_USER_FULFILLED:\\n      <span class=\\"hljs-keyword\\">return</span> {\\n        ...state,\\n        <span class=\\"hljs-comment\\">// `login` is the username</span>\\n        [action.payload.login]: action.payload\\n      };\\n\\n    <span class=\\"hljs-keyword\\">default</span>:\\n      <span class=\\"hljs-keyword\\">return</span> state;\\n  }\\n};</code></pre></code></pre>\\n<p>而这里则是编写epic，<code>action$</code>入，<code>action$</code>出，这两个action$流不能是同一个，编写完成后，通过<code>combineEpics</code>合并，\\n再通过<code>createEpicMiddleware</code>创建，最后通过<code>applyMiddleware</code>加入到<code>createStore</code>中</p>\\n<p>这是一个epic:</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> fetchUserEpic = <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action$</span> =&gt;</span>\\n  action$.ofType(FETCH_USER)\\n    .mergeMap(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action</span> =&gt;</span>\\n      ajax.getJSON(<span class=\\"hljs-string\\">`https://api.github.com/users/<span class=\\"hljs-subst\\">${action.payload}</span>`</span>)\\n        .map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">response</span> =&gt;</span> fetchUserFulfilled(response))\\n    );</code></pre></code></pre>\\n<p>因此，解释上面那一段：</p>\\n<pre><code><pre class=\\"hljs\\"><code>// 定义2个cation\\nconst fetchUser = username =&gt; ({ type: FETCH_USER, payload: username });\\nconst fetchUserFulfilled = payload =&gt; ({ type: FETCH_USER_FULFILLED, payload });\\n\\n// 定义一个epic，入口action$为每一个action组成的流\\nconst fetchUserEpic = action$ =&gt;\\n  // 搜索出type为FETCH_USER的action\\n  action$.ofType(FETCH_USER)\\n    // mergeMap方法，简单来说就是将内部源的输出合并到外部源中，然后一起输出\\n    // 再简单说，就是这个epic的出口就是fetchUserFulfilled(response)这个action组成的流\\n    .mergeMap(action =&gt;\\n      ajax.getJSON(`https://api.github.com/users/${action.payload}`)\\n        .map(response =&gt; fetchUserFulfilled(response))\\n    );</code></pre></code></pre><p>然后通过redux-observable源码中<code>result$.subscribe(store.dispatch)</code>，因为store.dispatch是一个接受action的函数（看一），\\n而result$这里就是action组成的流，因此这个订阅实际结果就是<code>store.dispatch(action$流中的每一个action)</code>，真的很精妙！</p>\\n<p>不知道是否说清楚了，感觉还挺绕的，不过通过文档和源码结合也能慢慢缕清思路。</p>\\n","toc":[{"anchor":"yi","level":3,"text":"一"},{"anchor":"er","level":3,"text":"二"}],"relatedTags":null,"created_at":"2018-06-12","timeArr":[2018,5,12,0,0,0,0],"title":"redux-observable笔记1","uuid":"476aa40826f78ed929e4d188e5272ba3b366c415","summary":"<h4>一</h4>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> pingEpic = <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action$</span> =&gt;</span>\\n  action$.filter(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">action</span> =&gt;</span> action.type === <span class=\\"hljs-string\\">\'PING\'</span>)\\n    .mapTo({ <span class=\\"hljs-attr\\">type</span>: <span class=\\"hljs-string\\">\'PONG\'</span> });\\n</code></pre>\\n<blockquote>\\n<p>pingEpic 会监听类型为 PING 的 actions，然后投...</p>\\n</blockquote>","slug":"redux-observable-bi-ji-1","sha":"2c3ca78c66c568c2182c1a0a3db4f01790f268e3"}')}}]);