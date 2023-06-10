(window.webpackJsonp=window.webpackJsonp||[]).push([[1125],{1923:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">expression</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">evalvars</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">evalints</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> basicCalculatorIV = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">expression, evalvars, evalints</span>) </span>{ \\n  <span class=\\"hljs-keyword\\">let</span> varsHash={},uiq=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">let</span> intHash={}\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;evalvars.length;i++){\\n    intHash[evalvars[i]]=evalints[i]\\n  }\\n\\n  \\n  <span class=\\"hljs-keyword\\">let</span> result=resolveStr(expression)\\n  <span class=\\"hljs-keyword\\">let</span> keys=<span class=\\"hljs-built_in\\">Object</span>.keys(result)\\n  <span class=\\"hljs-comment\\">// 按照变量的数量降序，如果数量相同，按照变量大小升序</span>\\n  keys.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>{\\n    <span class=\\"hljs-keyword\\">let</span> asp=a.split(<span class=\\"hljs-string\\">\'*\'</span>),\\n        bsp=b.split(<span class=\\"hljs-string\\">\'*\'</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(a===<span class=\\"hljs-string\\">\'\'</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(b===<span class=\\"hljs-string\\">\'\'</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(asp.length&lt;bsp.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(asp.length&gt;bsp.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">else</span>{\\n        <span class=\\"hljs-keyword\\">if</span>(a&lt;b)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n        <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>        \\n    }\\n  })\\n\\n  <span class=\\"hljs-keyword\\">let</span> finalRes=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;keys.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> k=keys[i],num=result[k]\\n    <span class=\\"hljs-keyword\\">if</span>(num===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">continue</span>\\n    <span class=\\"hljs-keyword\\">if</span>(k!==<span class=\\"hljs-string\\">\'\'</span>)k=<span class=\\"hljs-string\\">\'*\'</span>+k\\n    finalRes.push(num+k)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> finalRes\\n\\n  \\n  <span class=\\"hljs-comment\\">// 解析字符串</span>\\n  <span class=\\"hljs-comment\\">// 首先去括号，然后stack 按顺序解析</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">resolveStr</span>(<span class=\\"hljs-params\\">str</span>)</span>{\\n    <span class=\\"hljs-comment\\">// 去括号</span>\\n    <span class=\\"hljs-keyword\\">let</span> valid=<span class=\\"hljs-number\\">-1</span>,mem=[],k=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;str.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(str[i]===<span class=\\"hljs-string\\">\\"(\\"</span>){\\n        <span class=\\"hljs-keyword\\">if</span>(valid===<span class=\\"hljs-number\\">-1</span>){\\n\\t\\t      k=i\\n          valid=<span class=\\"hljs-number\\">0</span>\\n        }\\n        valid++\\n      }\\n      <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(str[i]===<span class=\\"hljs-string\\">\\")\\"</span>)valid--\\n      <span class=\\"hljs-keyword\\">if</span>(valid===<span class=\\"hljs-number\\">0</span>){\\n        mem.push(str.substring(k,i+<span class=\\"hljs-number\\">1</span>))\\n        valid=<span class=\\"hljs-number\\">-1</span>\\n        k=i+<span class=\\"hljs-number\\">1</span>\\n      }\\n    }\\n    <span class=\\"hljs-comment\\">// 以自定义字符串 __uiq 代替括号内的内容</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;mem.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> k=<span class=\\"hljs-string\\">\'__uiq\'</span>+uiq++\\n      varsHash[k]=mem[i]\\n      str=str.replace(mem[i],k)\\n    }    \\n    \\n    <span class=\\"hljs-comment\\">// 按运算顺序解析</span>\\n    <span class=\\"hljs-keyword\\">let</span> stack=[]\\n    <span class=\\"hljs-keyword\\">let</span> arr=str.split(<span class=\\"hljs-string\\">\' \'</span>), sign=<span class=\\"hljs-string\\">\'+\'</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-regexp\\">/[\\\\+\\\\-\\\\*]/</span>.test(arr[i])){\\n        sign=arr[i]\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        <span class=\\"hljs-keyword\\">if</span>(sign===<span class=\\"hljs-string\\">\\"*\\"</span>){\\n          <span class=\\"hljs-keyword\\">let</span> last=stack.pop()\\n          stack.push(multi(parse(arr[i]),last))\\n        }<span class=\\"hljs-keyword\\">else</span> \\n          stack.push(parse(arr[i],sign===<span class=\\"hljs-string\\">\'-\'</span>))\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> result=stack[<span class=\\"hljs-number\\">0</span>]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;stack.length;i++){\\n      result=add(result,stack[i])\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> result\\n  }\\n\\n  <span class=\\"hljs-comment\\">// 将任意 变量，数值，自定义__uiq 转化为 格式{String:Int}</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">parse</span>(<span class=\\"hljs-params\\">s,neg</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-built_in\\">Object</span>.prototype.toString.call(s)===<span class=\\"hljs-string\\">\\"[object Object]\\"</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(neg){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">in</span> s)s[k]=-s[k]\\n      }\\n      <span class=\\"hljs-keyword\\">return</span> s\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(varsHash[s]!=<span class=\\"hljs-literal\\">null</span>){\\n      <span class=\\"hljs-keyword\\">let</span> cst=varsHash[s]\\n      <span class=\\"hljs-comment\\">// 去除括号</span>\\n      cst=cst.substring(<span class=\\"hljs-number\\">1</span>,cst.length<span class=\\"hljs-number\\">-1</span>)\\n      <span class=\\"hljs-keyword\\">return</span> parse(resolveStr(cst),neg)\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(!<span class=\\"hljs-built_in\\">Number</span>.isNaN(<span class=\\"hljs-built_in\\">Number</span>(s)))\\n      <span class=\\"hljs-keyword\\">return</span> {<span class=\\"hljs-string\\">\\"\\"</span>:neg?-s:+s}\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(intHash[s]!=<span class=\\"hljs-literal\\">null</span>)\\n      <span class=\\"hljs-keyword\\">return</span> {<span class=\\"hljs-string\\">\\"\\"</span>:neg?-intHash[s]:intHash[s]}\\n    <span class=\\"hljs-keyword\\">else</span> \\n      <span class=\\"hljs-keyword\\">return</span> {[s]:neg?<span class=\\"hljs-number\\">-1</span>:<span class=\\"hljs-number\\">1</span>}\\n  }\\n  \\n  <span class=\\"hljs-comment\\">// 定义格式{String:Int}的乘法</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">multi</span>(<span class=\\"hljs-params\\">a,b</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> keya=<span class=\\"hljs-built_in\\">Object</span>.keys(a),\\n        keyb=<span class=\\"hljs-built_in\\">Object</span>.keys(b)\\n    <span class=\\"hljs-keyword\\">let</span> result={}\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;keya.length;i++){\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;keyb.length;j++){\\n        <span class=\\"hljs-keyword\\">let</span> combine\\n        <span class=\\"hljs-keyword\\">if</span>(keya[i]!==<span class=\\"hljs-string\\">\'\'</span> &amp;&amp; keyb[j]!==<span class=\\"hljs-string\\">\'\'</span>)combine=keya[i]+<span class=\\"hljs-string\\">\'*\'</span>+keyb[j]\\n        <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(keyb[j]===<span class=\\"hljs-string\\">\'\'</span>)combine=keya[i]\\n        <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(keya[i]===<span class=\\"hljs-string\\">\'\'</span>)combine=keyb[j]\\n        <span class=\\"hljs-keyword\\">let</span> cur=combine.split(<span class=\\"hljs-string\\">\'*\'</span>).sort().join(<span class=\\"hljs-string\\">\'*\'</span>)\\n        <span class=\\"hljs-keyword\\">let</span> num=a[keya[i]]*b[keyb[j]]\\n        <span class=\\"hljs-keyword\\">if</span>(result[cur]==<span class=\\"hljs-literal\\">null</span>)result[cur]=num\\n        <span class=\\"hljs-keyword\\">else</span> result[cur]+=num\\n      }\\n    }\\n\\t  <span class=\\"hljs-keyword\\">return</span> result\\n  }\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">add</span>(<span class=\\"hljs-params\\">a,b</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> _add(a,b,<span class=\\"hljs-number\\">1</span>)    \\n  }\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">minus</span>(<span class=\\"hljs-params\\">a,b</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> _add(a,b,<span class=\\"hljs-number\\">-1</span>)      \\n  }\\n  <span class=\\"hljs-comment\\">// 定义格式{String:Int}的加减法</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">_add</span>(<span class=\\"hljs-params\\">a,b,coeff</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> keya=<span class=\\"hljs-built_in\\">Object</span>.keys(a),\\n        keyb=<span class=\\"hljs-built_in\\">Object</span>.keys(b)\\n    <span class=\\"hljs-keyword\\">let</span> result={}\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;keya.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=keya[i],num=a[keya[i]]\\n      <span class=\\"hljs-keyword\\">if</span>(result[cur]==<span class=\\"hljs-literal\\">null</span>)result[cur]=num\\n      <span class=\\"hljs-keyword\\">else</span> result[cur]+=num\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;keyb.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=keyb[i],num=b[keyb[i]]*coeff\\n      <span class=\\"hljs-keyword\\">if</span>(result[cur]==<span class=\\"hljs-literal\\">null</span>)result[cur]=num\\n      <span class=\\"hljs-keyword\\">else</span> result[cur]+=num\\n    }\\n\\t  <span class=\\"hljs-keyword\\">return</span> result        \\n  }\\n};\\n</code></pre>\\n"],"querySlug":"basic-calculator-iv","created_at":"2019-03-27","timeArr":[2019,2,27,19,16,46,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>例如 <code>(a-b)*(a+b)</code>，<code>a</code>可以写成<code>{a:1}</code>，整个字符串可以写成<code>{a:1,b:-1} * {a:1,b:1}</code>，然后<code>key</code>相加，<code>val</code>相乘 ，得到 <code>{a*a:1,a*b:0,b*b:-1}，最后转化成 </code>[\'1<em>a</em>a\',\'-1<em>b</em>b\']`，</p>\\n<p>首先要去括号，括号内的可以递归处理，在无括号的情况下，需要注意*优先，可以参考<code>227. Basic Calculator II</code></p>\\n<p>最后就是输出排序，被坑了好多次，自己写的有3条规则：</p>\\n<ol>\\n<li>无变量的放最后</li>\\n<li>有变量的按变量数量降序</li>\\n<li>变量数量相同按照字符串大小升序</li>\\n</ol>\\n","content":"<p>给定一个表达式&nbsp;<code>expression</code>&nbsp;如&nbsp;<code>expression = &quot;e + 8 - a + 5&quot;</code>&nbsp;和一个求值映射，如&nbsp;<code>{&quot;e&quot;: 1}</code>（给定的形式为&nbsp;<code>evalvars = [&quot;e&quot;]</code> 和&nbsp;<code>evalints = [1]</code>），返回表示简化表达式的标记列表，例如 <code>[&quot;-1*a&quot;,&quot;14&quot;]</code></p>\\n\\n<ul>\\n\\t<li>表达式交替使用块和符号，每个块和符号之间有一个空格。</li>\\n\\t<li>块要么是括号中的表达式，要么是变量，要么是非负整数。</li>\\n\\t<li>块是括号中的表达式，变量或非负整数。</li>\\n\\t<li>变量是一个由小写字母组成的字符串（不包括数字）。请注意，变量可以是多个字母，并注意变量从不具有像&nbsp;<code>&quot;2x&quot;</code>&nbsp;或&nbsp;<code>&quot;-x&quot;</code>&nbsp;这样的前导系数或一元运算符&nbsp;。</li>\\n</ul>\\n\\n<p>表达式按通常顺序进行求值：先是括号，然后求乘法，再计算加法和减法。例如，<code>expression = &quot;1 + 2 * 3&quot;</code>&nbsp;的答案是 <code>[&quot;7&quot;]</code>。</p>\\n\\n<p>输出格式如下：</p>\\n\\n<ul>\\n\\t<li>对于系数非零的每个自变量项，我们按字典排序的顺序将自变量写在一个项中。例如，我们永远不会写像 <code>&ldquo;b*a*c&rdquo;</code> 这样的项，只写 <code>&ldquo;a*b*c&rdquo;</code>。</li>\\n\\t<li>项的次数等于被乘的自变量的数目，并计算重复项。(例如，<code>&quot;a*a*b*c&quot;</code> 的次数为 4。)。我们先写出答案的最大次数项，用字典顺序打破关系，此时忽略词的前导系数。</li>\\n\\t<li>项的前导系数直接放在左边，用星号将它与变量分隔开(如果存在的话)。前导系数 1 仍然要打印出来。</li>\\n\\t<li>格式良好的一个示例答案是&nbsp;<code>[&quot;-2*a*a*a&quot;, &quot;3*a*a*b&quot;, &quot;3*b*b&quot;, &quot;4*a&quot;, &quot;5*c&quot;, &quot;-6&quot;]</code>&nbsp;。</li>\\n\\t<li>系数为 0 的项（包括常数项）不包括在内。例如，&ldquo;0&rdquo; 的表达式输出为 []。</li>\\n</ul>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre><strong>输入：</strong>expression = &quot;e + 8 - a + 5&quot;, evalvars = [&quot;e&quot;], evalints = [1]\\n<strong>输出：</strong>[&quot;-1*a&quot;,&quot;14&quot;]\\n\\n<strong>输入：</strong>expression = &quot;e - 8 + temperature - pressure&quot;,\\nevalvars = [&quot;e&quot;, &quot;temperature&quot;], evalints = [1, 12]\\n<strong>输出：</strong>[&quot;-1*pressure&quot;,&quot;5&quot;]\\n\\n<strong>输入：</strong>expression = &quot;(e + 8) * (e - 8)&quot;, evalvars = [], evalints = []\\n<strong>输出：</strong>[&quot;1*e*e&quot;,&quot;-64&quot;]\\n\\n<strong>输入：</strong>expression = &quot;7 - 7&quot;, evalvars = [], evalints = []\\n<strong>输出：</strong>[]\\n\\n<strong>输入：</strong>expression = &quot;a * b * c + b * a * c * 4&quot;, evalvars = [], evalints = []\\n<strong>输出：</strong>[&quot;5*a*b*c&quot;]\\n\\n<strong>输入：</strong>expression = &quot;((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))&quot;,\\nevalvars = [], evalints = []\\n<strong>输出：</strong>[&quot;-1*a*a*b*b&quot;,&quot;2*a*a*b*c&quot;,&quot;-1*a*a*c*c&quot;,&quot;1*a*b*b*b&quot;,&quot;-1*a*b*b*c&quot;,&quot;-1*a*b*c*c&quot;,&quot;1*a*c*c*c&quot;,&quot;-1*b*b*b*c&quot;,&quot;2*b*b*c*c&quot;,&quot;-1*b*c*c*c&quot;,&quot;2*a*a*b&quot;,&quot;-2*a*a*c&quot;,&quot;-2*a*b*b&quot;,&quot;2*a*c*c&quot;,&quot;1*b*b*b&quot;,&quot;-1*b*b*c&quot;,&quot;1*b*c*c&quot;,&quot;-1*c*c*c&quot;,&quot;-1*a*a&quot;,&quot;1*a*b&quot;,&quot;1*a*c&quot;,&quot;-1*b*c&quot;]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>expression</code> 的长度在&nbsp;<code>[1, 250]</code>&nbsp;范围内。</li>\\n\\t<li><code>evalvars, evalints</code> 在范围&nbsp;<code>[0, 100]</code>&nbsp;内，且长度相同。</li>\\n</ol>\\n","title":"770. 基本计算器 IV","relatedTags":["栈","递归","哈希表","数学","字符串"],"difficult":"Hard","lang":["javascript"],"uniqueID":"770","slug":"770-Basic-Calculator-IV"}')}}]);