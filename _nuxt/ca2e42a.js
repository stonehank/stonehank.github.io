(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1095:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">FooBar</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">__init__</span><span class=\\"hljs-params\\">(self, n)</span>:</span>\\n        self.n = n\\n        self.go= <span class=\\"hljs-literal\\">False</span>\\n\\n\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">foo</span><span class=\\"hljs-params\\">(self, printFoo)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type printFoo: method\\n        :rtype: void\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> xrange(self.n):\\n            <span class=\\"hljs-keyword\\">while</span> self.go:<span class=\\"hljs-keyword\\">continue</span>\\n          \\n            <span class=\\"hljs-comment\\"># printFoo() outputs \\"foo\\". Do not change or remove this line.</span>\\n            printFoo()\\n            self.go=<span class=\\"hljs-literal\\">True</span>\\n\\n\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">bar</span><span class=\\"hljs-params\\">(self, printBar)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type printBar: method\\n        :rtype: void\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> xrange(self.n):\\n            <span class=\\"hljs-keyword\\">while</span> <span class=\\"hljs-keyword\\">not</span> self.go:<span class=\\"hljs-keyword\\">continue</span>\\n            <span class=\\"hljs-comment\\"># printBar() outputs \\"bar\\". Do not change or remove this line.</span>\\n            printBar()\\n            self.go=<span class=\\"hljs-literal\\">False</span>\\n</code></pre>\\n"],"querySlug":"print-foobar-alternately","created_at":"2019-07-14","timeArr":[2019,6,14,0,8,8,0],"hasThinking":false,"content":"<p>我们提供一个类：</p>\\n\\n<pre>\\nclass FooBar {\\n  public void foo() {\\n&nbsp; &nbsp; for (int i = 0; i &lt; n; i++) {\\n&nbsp; &nbsp; &nbsp; print(&quot;foo&quot;);\\n&nbsp;   }\\n  }\\n\\n  public void bar() {\\n&nbsp; &nbsp; for (int i = 0; i &lt; n; i++) {\\n&nbsp; &nbsp; &nbsp; print(&quot;bar&quot;);\\n&nbsp; &nbsp; }\\n  }\\n}\\n</pre>\\n\\n<p>两个不同的线程将会共用一个 <code>FooBar</code>&nbsp;实例。其中一个线程将会调用&nbsp;<code>foo()</code>&nbsp;方法，另一个线程将会调用&nbsp;<code>bar()</code>&nbsp;方法。</p>\\n\\n<p>请设计修改程序，以确保 &quot;foobar&quot; 被输出 n 次。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> n = 1\\n<strong>输出:</strong> &quot;foobar&quot;\\n<strong>解释:</strong> 这里有两个线程被异步启动。其中一个调用 foo() 方法, 另一个调用 bar() 方法，&quot;foobar&quot; 将被输出一次。\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> n = 2\\n<strong>输出:</strong> &quot;foobarfoobar&quot;\\n<strong>解释:</strong> &quot;foobar&quot; 将被输出两次。\\n</pre>\\n","title":"1115. 交替打印FooBar","relatedTags":["多线程"],"difficult":"Middle","lang":["python"],"uniqueID":"1115","slug":"1115-Print-FooBar-Alternately"}')}}]);