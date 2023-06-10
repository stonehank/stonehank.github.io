(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{2e3:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * // This is the master\'s API interface.\\n * // You should not implement it, or speculate about its implementation\\n * function Master() {\\n *\\n *     <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">wordlist</span></span>\\n *     <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{Master}</span> <span class=\\"hljs-variable\\">master</span></span>\\n *     <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{integer}</span></span>\\n *     this.guess = function(word) {\\n *         ...\\n *     };\\n * };\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">wordlist</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{Master}</span> <span class=\\"hljs-variable\\">master</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{void}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findSecretWord = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">wordlist, master</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> aux=wordlist.slice()\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;<span class=\\"hljs-number\\">10</span>;i++){\\n    <span class=\\"hljs-keyword\\">let</span> cur=aux[<span class=\\"hljs-number\\">0</span>]\\n    <span class=\\"hljs-keyword\\">let</span> curResult=master.guess(cur)\\n    <span class=\\"hljs-keyword\\">let</span> len=aux.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">1</span>;j&lt;len;j++){\\n      <span class=\\"hljs-keyword\\">let</span> check=aux.shift()\\n      <span class=\\"hljs-keyword\\">if</span>(checkSame(cur,check)===curResult){\\n        aux.push(check)\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">checkSame</span>(<span class=\\"hljs-params\\">s1,s2</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> same=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;s1.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(s1[i]===s2[i])same++\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> same\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"guess-the-word","created_at":"2019-04-28","timeArr":[2019,3,28,16,23,40,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>由于答案一定在wordList里面，因此我们可以不断缩小<code>wordList</code>的范围。</p>\\n<p>首先任意选择一个<code>wordList[i]</code>，检查它的正确数为<code>n</code>个，再遍历<code>wordList</code>里面其他的字符串<code>wordList[j]</code>，只有<code>wordList[i]</code>和<code>wordList[j]</code>的差异刚好为<code>n</code>个，才有可能是正确答案，添加到<code>wordList</code>内，作为下一次检测使用。</p>\\n","content":"<p>这个问题是 LeetCode 平台新增的<strong><em>交互式问题 </em></strong>。</p>\\n\\n<p>我们给出了一个由一些独特的单词组成的单词列表，每个单词都是 6 个字母长，并且这个列表中的一个单词将被选作<strong>秘密</strong>。</p>\\n\\n<p>你可以调用 <code>master.guess(word)</code> 来猜单词。你所猜的单词应当是存在于原列表并且由 6 个小写字母组成的类型<code>字符串</code>。</p>\\n\\n<p>此函数将会返回一个<code>整型数字</code>，表示你的猜测与<strong>秘密单词</strong>的准确匹配（值和位置同时匹配）的数目。此外，如果你的猜测不在给定的单词列表中，它将返回 <code>-1</code>。</p>\\n\\n<p>对于每个测试用例，你有 10 次机会来猜出这个单词。当所有调用都结束时，如果您对 <code>master.guess</code> 的调用不超过 10 次，并且至少有一次猜到<strong>秘密</strong>，那么您将通过该测试用例。</p>\\n\\n<p>除了下面示例给出的测试用例外，还会有 5 个额外的测试用例，每个单词列表中将会有 100 个单词。这些测试用例中的每个单词的字母都是从 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code>&nbsp;中随机选取的，并且保证给定单词列表中的每个单词都是唯一的。</p>\\n\\n<pre><strong>示例 1:</strong>\\n<strong>输入:</strong>&nbsp;secret = &quot;acckzz&quot;, wordlist = [&quot;acckzz&quot;,&quot;ccbazz&quot;,&quot;eiowzz&quot;,&quot;abcczz&quot;]\\n\\n<strong>解释:</strong>\\n\\n<code>master.guess(&quot;aaaaaa&quot;)</code> 返回 -1, 因为&nbsp;<code>&quot;aaaaaa&quot;</code>&nbsp;不在 wordlist 中.\\n<code>master.guess(&quot;acckzz&quot;) 返回</code> 6, 因为&nbsp;<code>&quot;acckzz&quot;</code> 就是<strong>秘密</strong>，6个字母完全匹配。\\n<code>master.guess(&quot;ccbazz&quot;)</code> 返回 3, 因为<code>&nbsp;&quot;ccbazz&quot;</code>&nbsp;有 3 个匹配项。\\n<code>master.guess(&quot;eiowzz&quot;)</code> 返回 2, 因为&nbsp;<code>&quot;eiowzz&quot;</code>&nbsp;有 2 个匹配项。\\n<code>master.guess(&quot;abcczz&quot;)</code> 返回 4, 因为&nbsp;<code>&quot;abcczz&quot;</code> 有 4 个匹配项。\\n\\n我们调用了 5 次master.guess，其中一次猜到了<strong>秘密</strong>，所以我们通过了这个测试用例。\\n</pre>\\n\\n<p><strong>提示：</strong>任何试图绕过评判的解决方案都将导致比赛资格被取消。</p>\\n","title":"843. 猜猜这个单词","relatedTags":["数组","数学","字符串","博弈","交互"],"difficult":"Hard","lang":["javascript"],"uniqueID":"843","slug":"843-Guess-the-Word"}')}}]);