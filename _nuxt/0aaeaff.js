(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{656:function(e){e.exports=JSON.parse('{"content":"<p>这是一个个人博客，基于<code>antd</code>搭建，这个项目构建流程如下：</p>\\n<ol>\\n<li>先启动<code>fetch-blog-serve</code>，这是一个能将你的<code>repertory</code>的blog内容拉去到本地，并且写入<code>xxx.json</code>。</li>\\n<li>在写入之前会生成一个列表，包含每一篇blog的标题、日期、标签、摘要、sha值(唯一性判断)。</li>\\n<li>前端通过获取数据，对数据进行处理，分配给各个板块。</li>\\n<li>其中渲染<code>.MD</code>使用了<code>markdown-it</code>和<code>highlight.js</code>(<code>react-markdown</code>使用时出现了一些格式偏差，就没有用了)。</li>\\n<li>UI组件都是使用<code>antd</code>。</li>\\n</ol>\\n<p>构建开始，我使用了<code>webpack-bundle-analyzer</code>来查看各个bundle的大小。</p>\\n<p>因为是<code>create-react-app</code>构建，需要使用<code>react-app-rewire</code>。</p>\\n<p>第一次构建，总大小2.76M</p>\\n<p><img src=\\"/article/img/init.png\\" alt=\\"\\"></p>\\n<p>很显然是不行的，一个个人博客而已...</p>\\n<p>因为我们使用了<code>antd</code>,而当这么写<code>import {Button} from &#39;antd&#39;</code>的时候，会加载所有组件，</p>\\n<p>使用<code>babel-plugin-import</code>作为webpack插件，加入到<code>config-overrides.js</code>中，这里的config指\\nwebpack的config配置。</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code>config = injectBabelPlugin(\\n  [<span class=\\"hljs-string\\">\'import\'</span>, { <span class=\\"hljs-attr\\">libraryName</span>: <span class=\\"hljs-string\\">\'antd\'</span>, <span class=\\"hljs-attr\\">libraryDirectory</span>: <span class=\\"hljs-string\\">\'es\'</span>, <span class=\\"hljs-attr\\">style</span>: <span class=\\"hljs-string\\">\'css\'</span> }],\\n  config,\\n);</code></pre></code></pre>\\n<p>具体见<a href=\\"https://ant.design/docs/react/use-with-create-react-app-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE\\">官网</a></p>\\n<p>第二次构建，效果很好，减少了将近800K，总大小1.92M</p>\\n<p><img src=\\"/article/img/first.png\\" alt=\\"\\"></p>\\n<p>看了看最多的就是<code>highlight.js</code>，这是一个针对代码语言进行高亮，美化的工具。</p>\\n<blockquote>\\n<p>当默认加载 <code>import hljs from &quot;highlight.js&quot;</code>的时候，会加载所有语言的渲染组件。</p>\\n</blockquote>\\n<p>应该使用按需加载(这里只加载js的渲染组件)：</p>\\n<pre><code><pre class=\\"hljs\\"><code>import hljs from \'highlight.js/lib/highlight\';\\nimport javascript from \'highlight.js/lib/languages/javascript\';\\nhljs.registerLanguage(\'javascript\', javascript);</code></pre></code></pre><p>第三次构建，又减了800K，总大小1.12M</p>\\n<p><img src=\\"/article/img/second.png\\" alt=\\"\\"></p>\\n<p>很明显一个大大的<code>dist.js</code>刺激着我的眼睛。</p>\\n<p>往上一看，原来是<code>antd</code>的Icon组件，这是怎么回事？上官网一查</p>\\n<blockquote>\\n<p>⚠3.9.0 之后我们全量引入了所有图标，导致 antd 默认的包体积有一定增加，我们会在不远的未来增加新的 API 来实现图标的按需使用，更多相关讨论可关注：<a href=\\"https://github.com/ant-design/ant-design/issues/12011\\">#12011</a>。</p>\\n</blockquote>\\n<p>看了看讨论的情况，目前最好的临时解决方案就是，通过webpack的<code>resolve.alias</code>，让<code>antd</code>里的所有组件的\\n图标获取转到一个自定义文件中，这个自定义文件将会按需导出。</p>\\n<p>具体看这里:<a href=\\"https://github.com/ant-design/ant-design/issues/12011#issuecomment-420038579\\">https://github.com/ant-design/ant-design/issues/12011#issuecomment-420038579</a></p>\\n<p>搭建好自定义的<code>icons.js</code>后，还是在<code>config-overrides.js</code>中，</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code>config.resolve.alias[<span class=\\"hljs-string\\">\'@ant-design/icons/lib/dist$\'</span>]=path.resolve(__dirname, <span class=\\"hljs-string\\">\'./src/icons.js\'</span>)</code></pre></code></pre>\\n<p>第四次构建，再次减少400K后，总大小为693K，这个结果是可以接受的。</p>\\n<p><img src=\\"/article/img/final.png\\" alt=\\"\\"></p>\\n<p>这就是我的一次项目构建体积压缩全过程。</p>\\n","toc":[],"relatedTags":null,"created_at":"2018-10-14","timeArr":[2018,9,14,0,0,0,0],"title":"一个create-react-app项目构建体积的压缩","uuid":"f410e8013460016ef21db0425ddcc6ef131809a0","summary":"<p>这是一个个人博客，基于<code>antd</code>搭建，这个项目构建流程如下：</p>\\n<ol>\\n<li>先启动<code>fetch-blog-serve</code>，这是一个能将你的<code>repertory</code>的blog内容拉去到本地，并且写入<code>xxx.json</code>。</li>\\n<li>在写入之前会生成一个列表，包含每一篇blog的标题、日期、标签、摘要、sha值(唯一性判断)。</li>\\n<li>前...</li>\\n</ol>","slug":"yi-ge-create-react-app-xiang-mu-gou-jian-ti-ji-de-ya-suo","sha":"e0bc2c78310a534ecec19f96adac09f5c5cb835a"}')}}]);