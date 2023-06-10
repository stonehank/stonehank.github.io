(window.webpackJsonp=window.webpackJsonp||[]).push([[1086],{1884:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">formula</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> countOfAtoms = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">formula</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> obj=resolve(formula)[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">let</span> keys=<span class=\\"hljs-built_in\\">Object</span>.keys(obj).sort()\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-string\\">\'\'</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;keys.length;i++){\\n    res+=keys[i]+<span class=\\"hljs-string\\">\'\'</span>+(obj[keys[i]]===<span class=\\"hljs-number\\">1</span>?<span class=\\"hljs-string\\">\'\'</span>:obj[keys[i]])\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">resolve</span>(<span class=\\"hljs-params\\">str</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> hash={},name=<span class=\\"hljs-string\\">\'\'</span>,subs=<span class=\\"hljs-literal\\">null</span>,count=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(;i&lt;str.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-regexp\\">/[A-Z]/</span>.test(str[i])){\\n        hash=fillHash(name,subs,count,hash)\\n        name=str[i]\\n        subs=<span class=\\"hljs-literal\\">null</span>\\n        count=<span class=\\"hljs-number\\">0</span>        \\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(str[i]===<span class=\\"hljs-string\\">\\"(\\"</span>){\\n        hash=fillHash(name,subs,count,hash)\\n        name=<span class=\\"hljs-string\\">\'\'</span>\\n        subs=<span class=\\"hljs-literal\\">null</span>\\n        count=<span class=\\"hljs-number\\">0</span>\\n        <span class=\\"hljs-keyword\\">let</span> res=resolve(str.substring(i+<span class=\\"hljs-number\\">1</span>))\\n        subs=res[<span class=\\"hljs-number\\">0</span>]\\n        i+=res[<span class=\\"hljs-number\\">1</span>]+<span class=\\"hljs-number\\">1</span>\\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(str[i]===<span class=\\"hljs-string\\">\\")\\"</span>){\\n        <span class=\\"hljs-keyword\\">break</span>\\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-regexp\\">/\\\\d/</span>.test(str[i])){\\n        count=count*<span class=\\"hljs-number\\">10</span>+(+str[i])\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        name+=str[i]\\n      }\\n    }\\n    hash=fillHash(name,subs,count,hash,<span class=\\"hljs-literal\\">null</span>)\\n    <span class=\\"hljs-keyword\\">return</span> [hash,i]\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">fillHash</span>(<span class=\\"hljs-params\\">name,subs,count,hash</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(count===<span class=\\"hljs-number\\">0</span>)count=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">if</span>(name!==<span class=\\"hljs-string\\">\'\'</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(hash[name]!=<span class=\\"hljs-literal\\">null</span>)hash[name]+=count\\n      <span class=\\"hljs-keyword\\">else</span> hash[name]=count\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(subs!=<span class=\\"hljs-literal\\">null</span>){\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">in</span> subs){\\n        <span class=\\"hljs-keyword\\">if</span>(hash[k]==<span class=\\"hljs-literal\\">null</span>)hash[k]=subs[k]*count\\n        <span class=\\"hljs-keyword\\">else</span> hash[k]+=subs[k]*count\\n      }      \\n    }\\n    <span class=\\"hljs-keyword\\">return</span> hash\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"number-of-atoms","created_at":"2019-04-06","timeArr":[2019,3,6,18,12,13,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这题需要对括号进行递归处理，遍历当前字符串</p>\\n<p>定义4个变量：</p>\\n<ul>\\n<li><code>name</code>记录原子名称</li>\\n<li><code>count</code>记录数量</li>\\n<li><code>subs</code>记录括号内递归的返回值</li>\\n<li><code>hash</code>记录当前字符串的结果</li>\\n</ul>\\n<ol>\\n<li>\\n<p>遇到<strong>大写字母</strong>，说明遇到一个新的原子；</p>\\n<ol>\\n<li>将之前如果存在原子名<code>name</code>和数量<code>count</code>，添加进<code>hash</code></li>\\n<li>如果存在括号内的递归返回值<code>subs</code>，添加进<code>hash</code></li>\\n</ol>\\n</li>\\n<li>\\n<p>遇到<code>(</code>，需要将之前的原子名<code>name</code>和数量<code>count</code>添加进<code>hash</code>，参考步骤<code>1</code>；</p>\\n<ul>\\n<li>递归处理<code>(</code>后的内容</li>\\n<li>将递归的返回值作为<code>subs</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>遇到<code>)</code>，直接<code>break</code>，只需要在最后再进行一次步骤<code>1</code>的添加<code>hash</code>即可；</p>\\n</li>\\n<li>\\n<p>遇到数字，添加进<code>count</code>；</p>\\n</li>\\n<li>\\n<p>其他(小写字母)，记录到<code>name</code>。</p>\\n</li>\\n</ol>\\n","content":"<p>给你一个字符串化学式 <code>formula</code> ，返回 <strong>每种原子的数量</strong> 。</p>\\n\\n<p>原子总是以一个大写字母开始，接着跟随 0 个或任意个小写字母，表示原子的名字。</p>\\n\\n<p>如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。</p>\\n\\n<ul>\\n\\t<li>例如，<code>\\"H2O\\"</code> 和 <code>\\"H2O2\\"</code> 是可行的，但 <code>\\"H1O2\\"</code> 这个表达是不可行的。</li>\\n</ul>\\n\\n<p>两个化学式连在一起可以构成新的化学式。</p>\\n\\n<ul>\\n\\t<li>例如 <code>\\"H2O2He3Mg4\\"</code> 也是化学式。</li>\\n</ul>\\n\\n<p>由括号括起的化学式并佐以数字（可选择性添加）也是化学式。</p>\\n\\n<ul>\\n\\t<li>例如 <code>\\"(H2O2)\\"</code> 和 <code>\\"(H2O2)3\\"</code> 是化学式。</li>\\n</ul>\\n\\n<p>返回所有原子的数量，格式为：第一个（按字典序）原子的名字，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 1），以此类推。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>formula = \\"H2O\\"\\n<strong>输出：</strong>\\"H2O\\"\\n<strong>解释：</strong>原子的数量是 {\'H\': 2, \'O\': 1}。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>formula = \\"Mg(OH)2\\"\\n<strong>输出：</strong>\\"H2MgO2\\"\\n<strong>解释：</strong>原子的数量是 {\'H\': 2, \'Mg\': 1, \'O\': 2}。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>formula = \\"K4(ON(SO3)2)2\\"\\n<strong>输出：</strong>\\"K4N2O14S4\\"\\n<strong>解释：</strong>原子的数量是 {\'K\': 4, \'N\': 2, \'O\': 14, \'S\': 4}。\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>formula = \\"Be32\\"\\n<strong>输出：</strong>\\"Be32\\"\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= formula.length <= 1000</code></li>\\n\\t<li><code>formula</code> 由英文字母、数字、<code>\'(\'</code> 和 <code>\')\'</code> 组成</li>\\n\\t<li><code>formula</code> 总是有效的化学式</li>\\n\\t<li>输出的所有值总是在 32-bit 整数范围内</li>\\n</ul>\\n","title":"726. 原子的数量","relatedTags":["栈","哈希表","字符串"],"difficult":"Hard","lang":["javascript"],"uniqueID":"726","slug":"726-Number-of-Atoms"}')}}]);