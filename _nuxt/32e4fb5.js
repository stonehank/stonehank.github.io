(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1166:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">arr</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxLength = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">arr</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> slim=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> str <span class=\\"hljs-keyword\\">of</span> arr){\\n    <span class=\\"hljs-keyword\\">if</span>(isValid(str)){\\n      slim.push(str)\\n    }\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">isValid</span>(<span class=\\"hljs-params\\">S</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> hash={}\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> s <span class=\\"hljs-keyword\\">of</span> S){\\n      <span class=\\"hljs-keyword\\">if</span>(hash[s])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      hash[s]=<span class=\\"hljs-literal\\">true</span>\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">valid</span>(<span class=\\"hljs-params\\">a,b</span>)</span>{\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> s <span class=\\"hljs-keyword\\">of</span> a){\\n      <span class=\\"hljs-keyword\\">if</span>(b.includes(s))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(slim.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> aux=[slim[<span class=\\"hljs-number\\">0</span>]]\\n  <span class=\\"hljs-keyword\\">let</span> idx=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">while</span>(idx&lt;slim.length){\\n    <span class=\\"hljs-keyword\\">let</span> len=aux.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=aux[i]\\n      <span class=\\"hljs-keyword\\">if</span>(valid(cur,slim[idx])){\\n        aux.push(cur+slim[idx])\\n      }\\n    }\\n    aux.push(slim[idx])\\n    idx++\\n  }\\n  <span class=\\"hljs-comment\\">// console.log(aux)</span>\\n  aux.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>b.length-a.length)\\n  <span class=\\"hljs-keyword\\">return</span> aux[<span class=\\"hljs-number\\">0</span>].length\\n};\\n</code></pre>\\n"],"querySlug":"maximum-length-of-a-concatenated-string-with-unique-characters","created_at":"2019-10-27","timeArr":[2019,9,27,11,20,38,0],"hasThinking":false,"content":"<p>给定一个字符串数组 <code>arr</code>，字符串 <code>s</code> 是将 <code>arr</code> 某一子序列字符串连接所得的字符串，如果 <code>s</code> 中的每一个字符都只出现过一次，那么它就是一个可行解。</p>\\n\\n<p>请返回所有可行解 <code>s</code> 中最长长度。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [&quot;un&quot;,&quot;iq&quot;,&quot;ue&quot;]\\n<strong>输出：</strong>4\\n<strong>解释：</strong>所有可能的串联组合是 &quot;&quot;,&quot;un&quot;,&quot;iq&quot;,&quot;ue&quot;,&quot;uniq&quot; 和 &quot;ique&quot;，最大长度为 4。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [&quot;cha&quot;,&quot;r&quot;,&quot;act&quot;,&quot;ers&quot;]\\n<strong>输出：</strong>6\\n<strong>解释：</strong>可能的解答有 &quot;chaers&quot; 和 &quot;acters&quot;。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [&quot;abcdefghijklmnopqrstuvwxyz&quot;]\\n<strong>输出：</strong>26\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= arr.length &lt;= 16</code></li>\\n\\t<li><code>1 &lt;= arr[i].length &lt;= 26</code></li>\\n\\t<li><code>arr[i]</code>&nbsp;中只含有小写英文字母</li>\\n</ul>\\n","title":"1239. 串联字符串的最大长度","relatedTags":["位运算","数组","字符串","回溯"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1239","slug":"1239-Maximum-Length-of-a-Concatenated-String-with-Unique-Characters"}')}}]);