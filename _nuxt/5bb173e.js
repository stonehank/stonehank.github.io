(window.webpackJsonp=window.webpackJsonp||[]).push([[1103],{1901:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">words</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> WordFilter = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">words</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> preTire={}\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;words.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> pt=preTire\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;words[i].length;j++){\\n      <span class=\\"hljs-keyword\\">let</span> l=words[i][j]\\n      <span class=\\"hljs-keyword\\">if</span>(pt[l]==<span class=\\"hljs-literal\\">null</span>)pt[l]={}\\n      <span class=\\"hljs-keyword\\">if</span>(j===words[i].length<span class=\\"hljs-number\\">-1</span>){\\n        pt[l]._weight=i\\n        pt[l]._word=words[i]\\n      }\\n      pt=pt[l]\\n    } \\n  }\\n  <span class=\\"hljs-keyword\\">this</span>.preTire=preTire\\n  <span class=\\"hljs-keyword\\">this</span>.dfs=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">tire,suffix</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> maxId=<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">if</span>(tire._weight!=<span class=\\"hljs-literal\\">null</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(tire._word.endsWith(suffix)){\\n        maxId=<span class=\\"hljs-built_in\\">Math</span>.max(maxId,tire._weight)\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">in</span> tire){\\n      <span class=\\"hljs-keyword\\">if</span>(k===<span class=\\"hljs-string\\">\\"_weight\\"</span> || k===<span class=\\"hljs-string\\">\\"_word\\"</span>)<span class=\\"hljs-keyword\\">continue</span>\\n      maxId=<span class=\\"hljs-built_in\\">Math</span>.max(maxId,<span class=\\"hljs-keyword\\">this</span>.dfs(tire[k],suffix))\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> maxId\\n  }\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * @param {string} prefix \\n * @param {string} suffix\\n * @return {number}\\n */</span>\\nWordFilter.prototype.f = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">prefix, suffix</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> preArr=[],sufArr=[]\\n  <span class=\\"hljs-keyword\\">let</span> pt=<span class=\\"hljs-keyword\\">this</span>.preTire,maxId=<span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">if</span>(prefix===<span class=\\"hljs-string\\">\'\'</span>){\\n    maxId=<span class=\\"hljs-built_in\\">Math</span>.max(maxId,<span class=\\"hljs-keyword\\">this</span>.dfs(pt,suffix))\\n  }<span class=\\"hljs-keyword\\">else</span>{\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;prefix.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> l=prefix[i]\\n      <span class=\\"hljs-keyword\\">if</span>(pt[l]==<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n      pt=pt[l]\\n      <span class=\\"hljs-keyword\\">if</span>(i===prefix.length<span class=\\"hljs-number\\">-1</span>){\\n        maxId=<span class=\\"hljs-built_in\\">Math</span>.max(maxId,<span class=\\"hljs-keyword\\">this</span>.dfs(pt,suffix))\\n      }\\n    }    \\n  }\\n  <span class=\\"hljs-keyword\\">return</span> maxId\\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * Your WordFilter object will be instantiated and called as such:\\n * var obj = new WordFilter(words)\\n * var param_1 = obj.f(prefix,suffix)\\n */</span>\\n</code></pre>\\n"],"querySlug":"prefix-and-suffix-search","created_at":"2019-04-24","timeArr":[2019,3,24,17,30,48,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>顺序构建<code>tire</code>，每次<code>f</code>的时候，检查前缀，如果前缀有效，对剩下的每个单词使用<code>endsWith</code>检查后缀，并且记录有效后缀的最大<code>id</code>。</p>\\n","content":"<p>设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。</p>\\n\\n<p>实现 <code>WordFilter</code> 类：</p>\\n\\n<ul>\\n\\t<li><code>WordFilter(string[] words)</code> 使用词典中的单词 <code>words</code> 初始化对象。</li>\\n\\t<li><code>f(string prefix, string suffix)</code> 返回词典中具有前缀 <code>prefix</code> 和后缀<code>suffix</code> 的单词的下标。如果存在不止一个满足要求的下标，返回其中 <strong>最大的下标</strong> 。如果不存在这样的单词，返回 <code>-1</code> 。</li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>示例</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>\\n[\\"WordFilter\\", \\"f\\"]\\n[[[\\"apple\\"]], [\\"a\\", \\"e\\"]]\\n<strong>输出：</strong>\\n[null, 0]\\n\\n<strong>解释：</strong>\\nWordFilter wordFilter = new WordFilter([\\"apple\\"]);\\nwordFilter.f(\\"a\\", \\"e\\"); // 返回 0 ，因为下标为 0 的单词的 prefix = \\"a\\" 且 suffix = \'e\\" 。\\n</pre>\\n \\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= words.length <= 15000</code></li>\\n\\t<li><code>1 <= words[i].length <= 10</code></li>\\n\\t<li><code>1 <= prefix.length, suffix.length <= 10</code></li>\\n\\t<li><code>words[i]</code>、<code>prefix</code> 和 <code>suffix</code> 仅由小写英文字母组成</li>\\n\\t<li>最多对函数 <code>f</code> 进行 <code>15000</code> 次调用</li>\\n</ul>\\n","title":"745. 前缀和后缀搜索","relatedTags":["设计","字典树","字符串"],"difficult":"Hard","lang":["javascript"],"uniqueID":"745","slug":"745-Prefix-and-Suffix-Search"}')}}]);