(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{1021:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">findDuplicate</span><span class=\\"hljs-params\\">(self, nums)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type nums: List[int]\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        lo=<span class=\\"hljs-number\\">1</span>\\n        hi=len(nums)<span class=\\"hljs-number\\">-1</span>\\n        <span class=\\"hljs-keyword\\">while</span> lo&lt;hi:\\n          mid=(lo+hi)//<span class=\\"hljs-number\\">2</span>\\n          lessThen=<span class=\\"hljs-number\\">0</span>\\n          <span class=\\"hljs-keyword\\">for</span> n <span class=\\"hljs-keyword\\">in</span> nums:\\n            <span class=\\"hljs-keyword\\">if</span> n&lt;=mid:lessThen+=<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">if</span> lessThen&gt;mid:\\n            hi=mid\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            lo=mid+<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">return</span> lo\\n</code></pre>\\n"],"titleSlug":"find-the-duplicate-number","hasThinking":false,"content":"<p>\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b\xa0<code>n + 1</code> \u4e2a\u6574\u6570\u7684\u6570\u7ec4\xa0<code>nums</code> \uff0c\u5176\u6570\u5b57\u90fd\u5728 <code>1</code> \u5230 <code>n</code><em>\xa0</em>\u4e4b\u95f4\uff08\u5305\u62ec <code>1</code> \u548c <code>n</code>\uff09\uff0c\u53ef\u77e5\u81f3\u5c11\u5b58\u5728\u4e00\u4e2a\u91cd\u590d\u7684\u6574\u6570\u3002</p>\\n\\n<p>\u5047\u8bbe <code>nums</code> \u53ea\u6709 <strong>\u4e00\u4e2a\u91cd\u590d\u7684\u6574\u6570</strong> \uff0c\u627e\u51fa <strong>\u8fd9\u4e2a\u91cd\u590d\u7684\u6570</strong> \u3002</p>\\n\\n<p>\u4f60\u8bbe\u8ba1\u7684\u89e3\u51b3\u65b9\u6848\u5fc5\u987b\u4e0d\u4fee\u6539\u6570\u7ec4 <code>nums</code> \u4e14\u53ea\u7528\u5e38\u91cf\u7ea7 <code>O(1)</code> \u7684\u989d\u5916\u7a7a\u95f4\u3002</p>\\n\\n<p>\xa0</p>\\n\\n<p><strong>\u793a\u4f8b 1\uff1a</strong></p>\\n\\n<pre>\\n<strong>\u8f93\u5165\uff1a</strong>nums = [1,3,4,2,2]\\n<strong>\u8f93\u51fa\uff1a</strong>2\\n</pre>\\n\\n<p><strong>\u793a\u4f8b 2\uff1a</strong></p>\\n\\n<pre>\\n<strong>\u8f93\u5165\uff1a</strong>nums = [3,1,3,4,2]\\n<strong>\u8f93\u51fa\uff1a</strong>3\\n</pre>\\n\\n<p><strong>\u793a\u4f8b 3\uff1a</strong></p>\\n\\n<pre>\\n<strong>\u8f93\u5165\uff1a</strong>nums = [1,1]\\n<strong>\u8f93\u51fa\uff1a</strong>1\\n</pre>\\n\\n<p><strong>\u793a\u4f8b 4\uff1a</strong></p>\\n\\n<pre>\\n<strong>\u8f93\u5165\uff1a</strong>nums = [1,1,2]\\n<strong>\u8f93\u51fa\uff1a</strong>1\\n</pre>\\n\\n<p>\xa0</p>\\n\\n<p><strong>\u63d0\u793a\uff1a</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= n <= 10<sup>5</sup></code></li>\\n\\t<li><code>nums.length == n + 1</code></li>\\n\\t<li><code>1 <= nums[i] <= n</code></li>\\n\\t<li><code>nums</code> \u4e2d <strong>\u53ea\u6709\u4e00\u4e2a\u6574\u6570</strong> \u51fa\u73b0 <strong>\u4e24\u6b21\u6216\u591a\u6b21</strong> \uff0c\u5176\u4f59\u6574\u6570\u5747\u53ea\u51fa\u73b0 <strong>\u4e00\u6b21</strong></li>\\n</ul>\\n\\n<p>\xa0</p>\\n\\n<p><b>\u8fdb\u9636\uff1a</b></p>\\n\\n<ul>\\n\\t<li>\u5982\u4f55\u8bc1\u660e <code>nums</code> \u4e2d\u81f3\u5c11\u5b58\u5728\u4e00\u4e2a\u91cd\u590d\u7684\u6570\u5b57?</li>\\n\\t<li>\u4f60\u53ef\u4ee5\u8bbe\u8ba1\u4e00\u4e2a\u7ebf\u6027\u7ea7\u65f6\u95f4\u590d\u6742\u5ea6 <code>O(n)</code> \u7684\u89e3\u51b3\u65b9\u6848\u5417\uff1f</li>\\n</ul>\\n","title":"287. \u5bfb\u627e\u91cd\u590d\u6570","relatedTags":["\u6570\u7ec4","\u53cc\u6307\u9488","\u4e8c\u5206\u67e5\u627e"],"difficult":"Middle","lang":["python"],"uniqueID":"287"}')}}]);