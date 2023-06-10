(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1170:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">beginWord</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">endWord</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">wordList</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string[][]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findLadders = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">beginWord, endWord, wordList</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash=<span class=\\"hljs-keyword\\">new</span> <span class=\\"hljs-built_in\\">Map</span>()\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;wordList.length;i++){\\n    hash.set(wordList[i],i)\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> mem=<span class=\\"hljs-built_in\\">Array</span>(wordList.length).fill(<span class=\\"hljs-literal\\">false</span>)\\n  <span class=\\"hljs-keyword\\">let</span> temp=<span class=\\"hljs-built_in\\">Array</span>(wordList.length).fill(<span class=\\"hljs-literal\\">false</span>)\\n  <span class=\\"hljs-keyword\\">let</span> arr=[[beginWord,beginWord]]\\n  <span class=\\"hljs-keyword\\">let</span> reach=<span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> [cur,str]=arr.shift()\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;cur.length;j++){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k=<span class=\\"hljs-number\\">0</span>;k&lt;<span class=\\"hljs-number\\">26</span>;k++){\\n          <span class=\\"hljs-keyword\\">let</span> repl=<span class=\\"hljs-built_in\\">String</span>.fromCharCode(k+<span class=\\"hljs-number\\">97</span>)\\n          <span class=\\"hljs-keyword\\">if</span>(repl===cur[j])<span class=\\"hljs-keyword\\">continue</span>\\n          <span class=\\"hljs-keyword\\">let</span> newS=cur.substring(<span class=\\"hljs-number\\">0</span>,j)+repl+cur.substring(j+<span class=\\"hljs-number\\">1</span>)\\n          <span class=\\"hljs-keyword\\">if</span>(hash.has(newS)){\\n            <span class=\\"hljs-keyword\\">let</span> id=hash.get(newS)\\n            <span class=\\"hljs-keyword\\">if</span>(mem[id])<span class=\\"hljs-keyword\\">continue</span>\\n            <span class=\\"hljs-keyword\\">if</span>(newS===endWord)reach=<span class=\\"hljs-literal\\">true</span>\\n            arr.push([newS,str+<span class=\\"hljs-string\\">\'-\'</span>+newS])\\n            temp[id]=<span class=\\"hljs-literal\\">true</span>\\n          }\\n        }\\n      }\\n    }\\n    mem=temp.slice()\\n    <span class=\\"hljs-keyword\\">if</span>(reach)<span class=\\"hljs-keyword\\">break</span>\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> result=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(arr[i][<span class=\\"hljs-number\\">0</span>]===endWord) \\n      result.push(arr[i][<span class=\\"hljs-number\\">1</span>].split(<span class=\\"hljs-string\\">\'-\'</span>))\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> result\\n};\\n</code></pre>\\n"],"querySlug":"word-ladder-ii","created_at":"2019-05-17","timeArr":[2019,4,17,13,49,17,0],"hasThinking":false,"content":"<p>按字典 <code>wordList</code> 完成从单词 <code>beginWord</code> 到单词 <code>endWord</code> 转化，一个表示此过程的 <strong>转换序列</strong> 是形式上像 <code>beginWord -> s<sub>1</sub> -> s<sub>2</sub> -> ... -> s<sub>k</sub></code> 这样的单词序列，并满足：</p>\\n\\n<div class=\\"original__bRMd\\">\\n<div>\\n<ul>\\n\\t<li>每对相邻的单词之间仅有单个字母不同。</li>\\n\\t<li>转换过程中的每个单词 <code>s<sub>i</sub></code>（<code>1 <= i <= k</code>）必须是字典 <code>wordList</code> 中的单词。注意，<code>beginWord</code> 不必是字典 <code>wordList</code> 中的单词。</li>\\n\\t<li><code>s<sub>k</sub> == endWord</code></li>\\n</ul>\\n\\n<p>给你两个单词 <code>beginWord</code> 和 <code>endWord</code> ，以及一个字典 <code>wordList</code> 。请你找出并返回所有从 <code>beginWord</code> 到 <code>endWord</code> 的 <strong>最短转换序列</strong> ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表<em> </em><code>[beginWord, s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub>]</code> 的形式返回。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>beginWord = \\"hit\\", endWord = \\"cog\\", wordList = [\\"hot\\",\\"dot\\",\\"dog\\",\\"lot\\",\\"log\\",\\"cog\\"]\\n<strong>输出：</strong>[[\\"hit\\",\\"hot\\",\\"dot\\",\\"dog\\",\\"cog\\"],[\\"hit\\",\\"hot\\",\\"lot\\",\\"log\\",\\"cog\\"]]\\n<strong>解释：</strong>存在 2 种最短的转换序列：\\n\\"hit\\" -> \\"hot\\" -> \\"dot\\" -> \\"dog\\" -> \\"cog\\"\\n\\"hit\\" -> \\"hot\\" -> \\"lot\\" -> \\"log\\" -> \\"cog\\"\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>beginWord = \\"hit\\", endWord = \\"cog\\", wordList = [\\"hot\\",\\"dot\\",\\"dog\\",\\"lot\\",\\"log\\"]\\n<strong>输出：</strong>[]\\n<strong>解释：</strong>endWord \\"cog\\" 不在字典 wordList 中，所以不存在符合要求的转换序列。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= beginWord.length <= 7</code></li>\\n\\t<li><code>endWord.length == beginWord.length</code></li>\\n\\t<li><code>1 <= wordList.length <= 5000</code></li>\\n\\t<li><code>wordList[i].length == beginWord.length</code></li>\\n\\t<li><code>beginWord</code>、<code>endWord</code> 和 <code>wordList[i]</code> 由小写英文字母组成</li>\\n\\t<li><code>beginWord != endWord</code></li>\\n\\t<li><code>wordList</code> 中的所有单词 <strong>互不相同</strong></li>\\n</ul>\\n</div>\\n</div>\\n","title":"126. 单词接龙 II","relatedTags":["广度优先搜索","哈希表","字符串","回溯"],"difficult":"Hard","lang":["javascript"],"uniqueID":"126","slug":"126-Word-Ladder-II"}')}}]);