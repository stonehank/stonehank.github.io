(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1512:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\"># The isBadVersion API is already defined for you.</span>\\n<span class=\\"hljs-comment\\"># @param version, an integer</span>\\n<span class=\\"hljs-comment\\"># @return a bool</span>\\n<span class=\\"hljs-comment\\"># def isBadVersion(version):</span>\\n\\n<span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">firstBadVersion</span><span class=\\"hljs-params\\">(self, n)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type n: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        lo=<span class=\\"hljs-number\\">1</span>\\n        hi=n\\n        <span class=\\"hljs-keyword\\">while</span> lo&lt;hi:\\n          mid=(lo+hi)//<span class=\\"hljs-number\\">2</span>\\n          isBad=isBadVersion(mid)\\n          <span class=\\"hljs-keyword\\">if</span> isBad:\\n            hi=mid\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            lo=mid+<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">return</span> lo\\n</code></pre>\\n"],"querySlug":"first-bad-version","created_at":"2019-02-25","timeArr":[2019,1,25,10,29,31,0],"hasThinking":false,"content":"<p>你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。</p>\\n\\n<p>假设你有 <code>n</code> 个版本 <code>[1, 2, ..., n]</code>，你想找出导致之后所有版本出错的第一个错误的版本。</p>\\n\\n<p>你可以通过调用 <code>bool isBadVersion(version)</code> 接口来判断版本号 <code>version</code> 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。</p>\\n \\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 5, bad = 4\\n<strong>输出：</strong>4\\n<strong>解释：</strong>\\n<code>调用 isBadVersion(3) -> false \\n调用 isBadVersion(5) -> true \\n调用 isBadVersion(4) -> true</code>\\n<code>所以，4 是第一个错误的版本。</code>\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 1, bad = 1\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= bad <= n <= 2<sup>31</sup> - 1</code></li>\\n</ul>\\n","title":"278. 第一个错误的版本","relatedTags":["二分查找","交互"],"difficult":"Easy","lang":["python"],"uniqueID":"278","slug":"278-First-Bad-Version"}')}}]);