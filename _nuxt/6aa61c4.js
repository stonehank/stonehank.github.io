(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{1879:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">words</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> longestWord = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">words</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash={}\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> word <span class=\\"hljs-keyword\\">of</span> words){\\n    hash[word]=<span class=\\"hljs-literal\\">true</span>\\n  }\\n  words.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(a.length&gt;b.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(a.length&lt;b.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(a&lt;b)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n      <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    }\\n  })\\n  <span class=\\"hljs-comment\\">// let res=\'\'</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> word <span class=\\"hljs-keyword\\">of</span> words){\\n    <span class=\\"hljs-keyword\\">let</span> temp=<span class=\\"hljs-string\\">\'\'</span>\\n    <span class=\\"hljs-comment\\">// if(word.length&lt;res.length)continue</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;word.length;i++){\\n      temp+=word[i]\\n      <span class=\\"hljs-keyword\\">if</span>(hash[temp]==<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">break</span>\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(temp===word){\\n      <span class=\\"hljs-comment\\">// if(temp.length&gt;res.length){</span>\\n      <span class=\\"hljs-comment\\">//   res=temp</span>\\n      <span class=\\"hljs-comment\\">// }else if(temp.length===res.length){</span>\\n      <span class=\\"hljs-comment\\">//   if(temp&lt;res)res=temp</span>\\n      <span class=\\"hljs-comment\\">// }</span>\\n      <span class=\\"hljs-keyword\\">return</span> word\\n    }\\n  }\\n  <span class=\\"hljs-comment\\">// return res</span>\\n};\\n</code></pre>\\n"],"querySlug":"longest-word-in-dictionary","created_at":"2019-04-06","timeArr":[2019,3,6,15,58,3,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>对<code>words</code>排序，按照<code>从长到短</code>，相同长度的按字典序。</p>\\n<p>对<code>words</code>构建<code>hash</code>。</p>\\n<p>遍历<code>words</code>，第一个满足条件的即是答案。</p>\\n","content":"<p>给出一个字符串数组<code>words</code>组成的一本英语词典。从中找出最长的一个单词，该单词是由<code>words</code>词典中其他单词逐步添加一个字母组成。若其中有多个可行的答案，则返回答案中字典序最小的单词。</p>\\n\\n<p>若无答案，则返回空字符串。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>\\nwords = [&quot;w&quot;,&quot;wo&quot;,&quot;wor&quot;,&quot;worl&quot;, &quot;world&quot;]\\n<strong>输出：</strong>&quot;world&quot;\\n<strong>解释：</strong> \\n单词&quot;world&quot;可由&quot;w&quot;, &quot;wo&quot;, &quot;wor&quot;, 和 &quot;worl&quot;添加一个字母组成。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>\\nwords = [&quot;a&quot;, &quot;banana&quot;, &quot;app&quot;, &quot;appl&quot;, &quot;ap&quot;, &quot;apply&quot;, &quot;apple&quot;]\\n<strong>输出：</strong>&quot;apple&quot;\\n<strong>解释：</strong>\\n&quot;apply&quot;和&quot;apple&quot;都能由词典中的单词组成。但是&quot;apple&quot;的字典序小于&quot;apply&quot;。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>所有输入的字符串都只包含小写字母。</li>\\n\\t<li><code>words</code>数组长度范围为<code>[1,1000]</code>。</li>\\n\\t<li><code>words[i]</code>的长度范围为<code>[1,30]</code>。</li>\\n</ul>\\n","title":"720. 词典中最长的单词","relatedTags":["字典树","数组","哈希表","字符串","排序"],"difficult":"Easy","lang":["javascript"],"uniqueID":"720","slug":"720-Longest-Word-in-Dictionary"}')}}]);