(window.webpackJsonp=window.webpackJsonp||[]).push([[1131],{1929:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">N</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">K</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> kthGrammar = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">N, K</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> flip=<span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">while</span>(N&gt;<span class=\\"hljs-number\\">1</span>){\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.pow(<span class=\\"hljs-number\\">2</span>,N<span class=\\"hljs-number\\">-1</span>)/<span class=\\"hljs-number\\">2</span>\\n    <span class=\\"hljs-keyword\\">if</span>(K&gt;mid){\\n      K-=mid\\n      flip=!flip\\n    }\\n    N--\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> flip?<span class=\\"hljs-number\\">1</span>:<span class=\\"hljs-number\\">0</span>\\n};\\n</code></pre>\\n"],"querySlug":"k-th-symbol-in-grammar","created_at":"2019-04-29","timeArr":[2019,3,29,16,1,59,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这个数列有个规律，对于每一行，后一半是前一半的翻转值，例如前一半为<code>1001</code>，那么后一半就是<code>0110</code>。</p>\\n<p>定义一个变量<code>flip</code>表示当前是否反转，需要反转为<code>true</code>，不需要为<code>false</code>，从当前<code>N</code>一直减小到<code>1</code>，如果<code>K</code>在后半部分，那么<code>flip=!flip</code>并且<code>K</code>减少当前行一半的值。</p>\\n<p>到了<code>N</code>为<code>1</code>时，检查<code>flip</code>，如果需要反转则为<code>1</code>，不需要则为<code>0</code>。</p>\\n","content":"<p>在第一行我们写上一个 <code>0</code>。接下来的每一行，将前一行中的<code>0</code>替换为<code>01</code>，<code>1</code>替换为<code>10</code>。</p>\\n\\n<p>给定行数&nbsp;<code>N</code>&nbsp;和序数 <code>K</code>，返回第 <code>N</code> 行中第 <code>K</code>个字符。（<code>K</code>从1开始）</p>\\n\\n<p><br>\\n<strong>例子:</strong></p>\\n\\n<pre><strong>输入:</strong> N = 1, K = 1\\n<strong>输出:</strong> 0\\n\\n<strong>输入:</strong> N = 2, K = 1\\n<strong>输出:</strong> 0\\n\\n<strong>输入:</strong> N = 2, K = 2\\n<strong>输出:</strong> 1\\n\\n<strong>输入:</strong> N = 4, K = 5\\n<strong>输出:</strong> 1\\n\\n<strong>解释:</strong>\\n第一行: 0\\n第二行: 01\\n第三行: 0110\\n第四行: 01101001\\n</pre>\\n\\n<p><br>\\n<strong>注意：</strong></p>\\n\\n<ol>\\n\\t<li><code>N</code>&nbsp;的范围&nbsp;<code>[1, 30]</code>.</li>\\n\\t<li><code>K</code>&nbsp;的范围&nbsp;<code>[1, 2^(N-1)]</code>.</li>\\n</ol>\\n","title":"779. 第K个语法符号","relatedTags":["位运算","递归","数学"],"difficult":"Middle","lang":["javascript"],"uniqueID":"779","slug":"779-K-th-Symbol-in-Grammar"}')}}]);