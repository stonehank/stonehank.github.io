(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{639:function(n){n.exports=JSON.parse('{"content":"<p><code>single-spa</code>一个页面路由管理工具，当一个页面存在多个框架<code>React</code>, <code>Vue</code>, <code>Angular</code>等等时，单个框架路由已经不能适用，需要一个纯粹的<code>js</code>路由进行管理。</p>\\n<h4 id=\\"xiang-mu-jie-gou\\">项目结构</h4>\\n<pre><code><pre class=\\"hljs\\"><code>├── index.js\\n├── react-blog\\n|  ├── ...other files（内部路由）\\n|  └── index.js\\n└── vue-diy-resume\\n   ├── ...other files（内部路由）\\n   └── index.js</code></pre></code></pre><p>其中</p>\\n<ul>\\n<li><code>index.js</code>是<code>single-spa</code>的启动页面，也是<code>webpack</code>的<code>entry</code>路径。</li>\\n<li><code>react-blog/index.js</code>是<code>React</code>项目的启动页</li>\\n<li><code>vue-diy-resume/index.js</code>是<code>Vue</code>项目的启动页</li>\\n</ul>\\n<p>需要对原项目的启动页做出一些修改，也是比较容易的</p>\\n<blockquote>\\n<p>single-spa根据顶级路由查找应用，而每个应用会处理自身的子路由</p>\\n</blockquote>\\n<p>对于每一个子应用，需要暴露出3个<code>Promise</code>，分别是<code>bootstrap</code>, <code>mount</code>, <code>unmount</code>， 另外还有一个<code>unload</code> (移除) 是可选的</p>\\n<ul>\\n<li><code>bootstrap</code>: <code>single-spa</code>的子应用启动功能</li>\\n<li><code>mount</code>：当前子应用挂载后执行(类似于component的生命周期)</li>\\n<li><code>unmount</code>：当前子应用卸载后执行</li>\\n</ul>\\n<p>对应每个前端框架已经有现成的插件可以使用，因此我们不需要太多需要做的，只需要将应用传递即可</p>\\n<h4 id=\\"react\\">React</h4>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">// react-blog/index.js(使用 single-spa-react)</span>\\n\\n<span class=\\"hljs-keyword\\">import</span> React <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'react\'</span>\\n<span class=\\"hljs-keyword\\">import</span> ReactDOM <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'react-dom\'</span>\\n<span class=\\"hljs-keyword\\">import</span> App <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'./App\'</span>\\n<span class=\\"hljs-keyword\\">import</span> singleSpaReact <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'single-spa-react\'</span>\\n\\n\\n<span class=\\"hljs-keyword\\">const</span> reactLifecycles = singleSpaReact({\\n  React,\\n  ReactDOM,\\n  <span class=\\"hljs-attr\\">rootComponent</span>: App,\\n  domElementGetter,\\n})\\n\\n<span class=\\"hljs-keyword\\">export</span> <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bootstrap</span>(<span class=\\"hljs-params\\">props</span>) </span>{\\n  <span class=\\"hljs-keyword\\">return</span> reactLifecycles.bootstrap(props)\\n}\\n<span class=\\"hljs-keyword\\">export</span> <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">mount</span>(<span class=\\"hljs-params\\">props</span>) </span>{\\n  <span class=\\"hljs-keyword\\">return</span> reactLifecycles.mount(props)\\n}\\n\\n<span class=\\"hljs-keyword\\">export</span> <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">unmount</span>(<span class=\\"hljs-params\\">props</span>) </span>{\\n  <span class=\\"hljs-keyword\\">return</span> reactLifecycles.unmount(props)\\n}\\n\\n<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">domElementGetter</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-comment\\">// Make sure there is a div for us to render into</span>\\n  <span class=\\"hljs-keyword\\">let</span> el = <span class=\\"hljs-built_in\\">document</span>.getElementById(<span class=\\"hljs-string\\">\'react-root\'</span>)\\n  <span class=\\"hljs-keyword\\">if</span> (!el) {\\n    el = <span class=\\"hljs-built_in\\">document</span>.createElement(<span class=\\"hljs-string\\">\'div\'</span>)\\n    el.id = <span class=\\"hljs-string\\">\'react-root\'</span>\\n    <span class=\\"hljs-built_in\\">document</span>.body.appendChild(el)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> el\\n}\\n</code></pre></code></pre>\\n<h4 id=\\"vue\\">Vue</h4>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">// vue-diy-resume/index.js</span>\\n\\n<span class=\\"hljs-keyword\\">import</span> vuetify <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'./vuetify\'</span>\\n<span class=\\"hljs-keyword\\">import</span> Vue <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'vue\'</span>\\n<span class=\\"hljs-keyword\\">import</span> Main <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'./Main\'</span>\\n<span class=\\"hljs-keyword\\">import</span> routes <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'./router\'</span>\\n<span class=\\"hljs-keyword\\">import</span> singleSpaVue <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'single-spa-vue\'</span>\\n\\n\\nVue.use(...)\\nVue.use(...)\\n\\n<span class=\\"hljs-keyword\\">const</span> vueLifecycles = singleSpaVue({\\n    Vue,\\n    <span class=\\"hljs-attr\\">appOptions</span>: {\\n        <span class=\\"hljs-attr\\">vuetify</span>:vuetify,\\n        router,\\n        <span class=\\"hljs-attr\\">el</span>: <span class=\\"hljs-string\\">\'#vue-root\'</span>,\\n        <span class=\\"hljs-attr\\">render</span>: <span class=\\"hljs-function\\"><span class=\\"hljs-params\\">h</span> =&gt;</span> h(Main)\\n    }\\n})\\n\\n<span class=\\"hljs-keyword\\">export</span> <span class=\\"hljs-keyword\\">const</span> bootstrap = [\\n    vueLifecycles.bootstrap,\\n]\\n\\n<span class=\\"hljs-keyword\\">export</span> <span class=\\"hljs-keyword\\">const</span> mount = [\\n    vueLifecycles.mount,\\n]\\n\\n<span class=\\"hljs-keyword\\">export</span> <span class=\\"hljs-keyword\\">const</span> unmount = [\\n    vueLifecycles.unmount,\\n]\\n</code></pre></code></pre>\\n<p>子应用的启动页写好了，就是主页面汇总，定义路由，定义当前路由的激活函数(判断当前路径<code>window.location</code>是否可以进入子应用)</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">// index.js</span>\\n\\n<span class=\\"hljs-keyword\\">import</span> * <span class=\\"hljs-keyword\\">as</span> singleSpa <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">\'single-spa\'</span>\\n\\nsingleSpa.registerApplication(<span class=\\"hljs-string\\">\'blog\'</span>, () =&gt; <span class=\\"hljs-keyword\\">import</span> (<span class=\\"hljs-string\\">\'./react-blog/index\'</span>), blogPathPrefix(<span class=\\"hljs-string\\">\'/\'</span>))\\nsingleSpa.registerApplication(<span class=\\"hljs-string\\">\'diy-resume\'</span>, ()=&gt;<span class=\\"hljs-keyword\\">import</span> (<span class=\\"hljs-string\\">\'./vue-diy-resume/index\'</span>), projectPathPrefix(<span class=\\"hljs-string\\">\'/diy-resume\'</span>))\\n\\nsingleSpa.start()\\n\\n<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">blogPathPrefix</span>(<span class=\\"hljs-params\\">prefix</span>) </span>{\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">location</span>) </span>{\\n        <span class=\\"hljs-keyword\\">if</span>(location.pathname.startsWith(<span class=\\"hljs-string\\">\'/diy-resume\'</span>))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n        <span class=\\"hljs-keyword\\">return</span> location.pathname.startsWith(<span class=\\"hljs-string\\">`<span class=\\"hljs-subst\\">${prefix}</span>`</span>)\\n    }\\n}\\n<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">projectPathPrefix</span>(<span class=\\"hljs-params\\">prefix</span>) </span>{\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">location</span>) </span>{\\n        <span class=\\"hljs-keyword\\">return</span> location.pathname.startsWith(<span class=\\"hljs-string\\">`<span class=\\"hljs-subst\\">${prefix}</span>`</span>)\\n    }\\n}\\n</code></pre></code></pre>\\n<p>现在应用已经识别<code>single-spa</code>路由系统，如何在应用内部跳转到另一个应用？</p>\\n<p><code>single-spa</code>提供一个全局函数<code>window.singleSpaNavigate</code>，接收参数为路由路径</p>\\n","toc":[{"anchor":"xiang-mu-jie-gou","level":4,"text":"项目结构"},{"anchor":"react","level":4,"text":"React"},{"anchor":"vue","level":4,"text":"Vue"}],"relatedTags":null,"created_at":"2021-06-07","timeArr":[2021,5,7,0,0,0,0],"title":"single-spa-微前端的路由管理系统","uuid":"386fc98fbb6d77826458755f0e09b60919b215bc","summary":"<p><code>single-spa</code>一个页面路由管理工具，当一个页面存在多个框架<code>React</code>, <code>Vue</code>, <code>Angular</code>等等时，单个框架路由已经不能适用，需要一个纯粹的<code>js</code>路由进行管理。</p>\\n<h4>项目结构：</h4>\\n<pre class=\\"hljs\\"><code>├── index.js\\n├── react-blog\\n|  ├── ...other files...</code></pre>","slug":"single-spa-wei-qian-duan-de-lu-you-guan-li-xi-tong","sha":"68aa212db545b2cf71c29d34fbbce9f30fe3e228"}')}}]);