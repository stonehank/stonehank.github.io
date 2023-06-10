(window.webpackJsonp=window.webpackJsonp||[]).push([[1042],{1840:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">words</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">maxWidth</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> fullJustify = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">words, maxWidth</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">adjust</span>(<span class=\\"hljs-params\\">words,strLen,len</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-string\\">\'\'</span>\\n    <span class=\\"hljs-keyword\\">let</span> emptys=len-strLen\\n    <span class=\\"hljs-keyword\\">let</span> emptyGaps=words.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">if</span>(emptyGaps===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> leftjustify(words,len)\\n    <span class=\\"hljs-keyword\\">let</span> eachEmptys=<span class=\\"hljs-built_in\\">Math</span>.floor(emptys/emptyGaps)\\n    <span class=\\"hljs-keyword\\">let</span> gap=<span class=\\"hljs-built_in\\">Array</span>(emptyGaps).fill(eachEmptys)\\n    <span class=\\"hljs-keyword\\">let</span> restemptys=emptys-eachEmptys*emptyGaps\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;gap.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(restemptys--&gt;<span class=\\"hljs-number\\">0</span>)gap[i]++\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;words.length;i++){\\n       <span class=\\"hljs-keyword\\">let</span> ept=i&lt;gap.length?<span class=\\"hljs-string\\">\' \'</span>.repeat(gap[i]):<span class=\\"hljs-string\\">\'\'</span>\\n      res+=words[i]+ept\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">leftjustify</span>(<span class=\\"hljs-params\\">words,len</span>)</span>{\\n    <span class=\\"hljs-comment\\">// console.log(words,len)</span>\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-string\\">\'\'</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;words.length;i++){\\n      res+=words[i]\\n      <span class=\\"hljs-keyword\\">if</span>(res.length&lt;len)res+=<span class=\\"hljs-string\\">\' \'</span>\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> rest=len-res.length\\n    <span class=\\"hljs-keyword\\">if</span>(rest&gt;<span class=\\"hljs-number\\">0</span>)res+=<span class=\\"hljs-string\\">\' \'</span>.repeat(rest)\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> curLen=<span class=\\"hljs-number\\">0</span>,strLen=<span class=\\"hljs-number\\">0</span>,startIDX=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;words.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> w=words[i]\\n\\n    <span class=\\"hljs-keyword\\">if</span>(curLen+w.length&lt;maxWidth){\\n      curLen+=w.length+<span class=\\"hljs-number\\">1</span>\\n      strLen+=w.length\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(curLen+w.length===maxWidth){\\n            <span class=\\"hljs-comment\\">// console.log(i,strLen+w.length)</span>\\n        res.push(adjust(words.slice(startIDX,++i),strLen+w.length,maxWidth))\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        res.push(adjust(words.slice(startIDX,i),strLen,maxWidth))\\n      }\\n      <span class=\\"hljs-keyword\\">if</span>(i===words.length)<span class=\\"hljs-keyword\\">return</span> res\\n      curLen=words[i].length+<span class=\\"hljs-number\\">1</span>\\n      strLen=words[i].length\\n      startIDX=i\\n    }\\n  }\\n  res.push(leftjustify(words.slice(startIDX),maxWidth))\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"text-justification","created_at":"2019-03-22","timeArr":[2019,2,22,17,24,20,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>一行一行的算，对于每一行，先计算出当前行能装的单词的数量<code>k</code>，</p>\\n<p>由于第一个单词前面不需要空格，定义<code>tmp</code>为当前行的第一个单词<code>words[i]</code>；</p>\\n<p>通过变量<code>j</code>遍历<code>0</code>到<code>k-1</code>，之后每一个单词就是<code>words[i+j+1]</code>；</p>\\n<p>如果当前行是最后一行，那么每个单词间隔就只是<code>1</code>个空格；</p>\\n<p>如果当前行不是最后一行，那么需要计算每个单词的间隔，<code>(maxWidth-len)/(k-1)</code>表示当前空格的总长度平均分的间隔，\\n<code>(maxWidth-len)%(k-1)</code>表示平均分后还剩下的空格长度，剩下的这些长度时需要从头开始，每个单词之间的间隔<code>+1</code>；</p>\\n<p>如果当前遍历的索引<code>j&lt;(maxWidth-len)%(k-1)</code>，说明当前索引<code>j</code>对应的单词是需要间隔<code>+1</code>的。</p>\\n<p>遍历结束后，如果末尾还有位置就添加空格填满。(例如最后一行或者一行只有1个长单词，但这个单词又不够填满的情况)</p>\\n","content":"<p>给定一个单词数组和一个长度&nbsp;<em>maxWidth</em>，重新排版单词，使其成为每行恰好有&nbsp;<em>maxWidth</em>&nbsp;个字符，且左右两端对齐的文本。</p>\\n\\n<p>你应该使用&ldquo;贪心算法&rdquo;来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格&nbsp;<code>&#39; &#39;</code>&nbsp;填充，使得每行恰好有 <em>maxWidth</em>&nbsp;个字符。</p>\\n\\n<p>要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。</p>\\n\\n<p>文本的最后一行应为左对齐，且单词之间不插入<strong>额外的</strong>空格。</p>\\n\\n<p><strong>说明:</strong></p>\\n\\n<ul>\\n\\t<li>单词是指由非空格字符组成的字符序列。</li>\\n\\t<li>每个单词的长度大于 0，小于等于&nbsp;<em>maxWidth</em>。</li>\\n\\t<li>输入单词数组 <code>words</code>&nbsp;至少包含一个单词。</li>\\n</ul>\\n\\n<p><strong>示例:</strong></p>\\n\\n<pre><strong>输入:</strong>\\nwords = [&quot;This&quot;, &quot;is&quot;, &quot;an&quot;, &quot;example&quot;, &quot;of&quot;, &quot;text&quot;, &quot;justification.&quot;]\\nmaxWidth = 16\\n<strong>输出:</strong>\\n[\\n&nbsp; &nbsp;&quot;This &nbsp; &nbsp;is &nbsp; &nbsp;an&quot;,\\n&nbsp; &nbsp;&quot;example &nbsp;of text&quot;,\\n&nbsp; &nbsp;&quot;justification. &nbsp;&quot;\\n]\\n</pre>\\n\\n<p><strong>示例&nbsp;2:</strong></p>\\n\\n<pre><strong>输入:</strong>\\nwords = [&quot;What&quot;,&quot;must&quot;,&quot;be&quot;,&quot;acknowledgment&quot;,&quot;shall&quot;,&quot;be&quot;]\\nmaxWidth = 16\\n<strong>输出:</strong>\\n[\\n&nbsp; &quot;What &nbsp; must &nbsp; be&quot;,\\n&nbsp; &quot;acknowledgment &nbsp;&quot;,\\n&nbsp; &quot;shall be &nbsp; &nbsp; &nbsp; &nbsp;&quot;\\n]\\n<strong>解释: </strong>注意最后一行的格式应为 &quot;shall be    &quot; 而不是 &quot;shall     be&quot;,\\n&nbsp;    因为最后一行应为左对齐，而不是左右两端对齐。       \\n     第二行同样为左对齐，这是因为这行只包含一个单词。\\n</pre>\\n\\n<p><strong>示例&nbsp;3:</strong></p>\\n\\n<pre><strong>输入:</strong>\\nwords = [&quot;Science&quot;,&quot;is&quot;,&quot;what&quot;,&quot;we&quot;,&quot;understand&quot;,&quot;well&quot;,&quot;enough&quot;,&quot;to&quot;,&quot;explain&quot;,\\n&nbsp;        &quot;to&quot;,&quot;a&quot;,&quot;computer.&quot;,&quot;Art&quot;,&quot;is&quot;,&quot;everything&quot;,&quot;else&quot;,&quot;we&quot;,&quot;do&quot;]\\nmaxWidth = 20\\n<strong>输出:</strong>\\n[\\n&nbsp; &quot;Science &nbsp;is &nbsp;what we&quot;,\\n  &quot;understand &nbsp; &nbsp; &nbsp;well&quot;,\\n&nbsp; &quot;enough to explain to&quot;,\\n&nbsp; &quot;a &nbsp;computer. &nbsp;Art is&quot;,\\n&nbsp; &quot;everything &nbsp;else &nbsp;we&quot;,\\n&nbsp; &quot;do &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;\\n]\\n</pre>\\n","title":"68. 文本左右对齐","relatedTags":["字符串","模拟"],"difficult":"Hard","lang":["javascript"],"uniqueID":"68","slug":"68-Text-Justification"}')}}]);