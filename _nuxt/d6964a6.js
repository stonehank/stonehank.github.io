(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{1529:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> removeInvalidParentheses = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash={<span class=\\"hljs-string\\">\\"(\\"</span>:[],<span class=\\"hljs-string\\">\\")\\"</span>:[]}\\n  <span class=\\"hljs-keyword\\">let</span> allFix=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> stack=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;s.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(s[i]===<span class=\\"hljs-string\\">\\"(\\"</span>)stack.push(i)\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(s[i]===<span class=\\"hljs-string\\">\\")\\"</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(stack.length===<span class=\\"hljs-number\\">0</span>){\\n        allFix++\\n        hash[<span class=\\"hljs-string\\">\\")\\"</span>].push(i)\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        stack.pop()\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">while</span>(stack.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    allFix++\\n    hash[<span class=\\"hljs-string\\">\\"(\\"</span>].push(stack.pop())\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> visited={}\\n  visited[<span class=\\"hljs-string\\">\\"(\\"</span>]=<span class=\\"hljs-built_in\\">Array</span>(hash[<span class=\\"hljs-string\\">\\"(\\"</span>].length).fill(<span class=\\"hljs-literal\\">false</span>)\\n  visited[<span class=\\"hljs-string\\">\\")\\"</span>]=<span class=\\"hljs-built_in\\">Array</span>(hash[<span class=\\"hljs-string\\">\\")\\"</span>].length).fill(<span class=\\"hljs-literal\\">false</span>)\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  backtrack(<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-string\\">\'\'</span>,<span class=\\"hljs-number\\">0</span>)\\n  <span class=\\"hljs-keyword\\">return</span> res\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">backtrack</span>(<span class=\\"hljs-params\\">start,str,strValid</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(strValid&lt;<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=start;i&lt;s.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=s[i]\\n      <span class=\\"hljs-keyword\\">if</span>(cur===<span class=\\"hljs-string\\">\\"(\\"</span>){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;hash[cur].length;j++){\\n          <span class=\\"hljs-keyword\\">if</span>(visited[<span class=\\"hljs-string\\">\\"(\\"</span>][j])<span class=\\"hljs-keyword\\">continue</span>\\n          <span class=\\"hljs-keyword\\">if</span>(i&gt;=hash[cur][j]){\\n            visited[<span class=\\"hljs-string\\">\\"(\\"</span>][j]=<span class=\\"hljs-literal\\">true</span>\\n            allFix--\\n            backtrack(i+<span class=\\"hljs-number\\">1</span>,str,strValid)\\n            allFix++\\n            visited[<span class=\\"hljs-string\\">\\"(\\"</span>][j]=<span class=\\"hljs-literal\\">false</span>\\n            <span class=\\"hljs-keyword\\">if</span>(i===hash[cur][j])<span class=\\"hljs-keyword\\">break</span> \\n          }\\n        }\\n        strValid++\\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(cur===<span class=\\"hljs-string\\">\\")\\"</span>){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;hash[cur].length;j++){\\n          <span class=\\"hljs-keyword\\">if</span>(visited[<span class=\\"hljs-string\\">\\")\\"</span>][j])<span class=\\"hljs-keyword\\">continue</span>\\n          <span class=\\"hljs-keyword\\">if</span>(i&lt;=hash[cur][j]){\\n            visited[<span class=\\"hljs-string\\">\\")\\"</span>][j]=<span class=\\"hljs-literal\\">true</span>\\n            allFix--\\n            backtrack(i+<span class=\\"hljs-number\\">1</span>,str,strValid)\\n            allFix++\\n            visited[<span class=\\"hljs-string\\">\\")\\"</span>][j]=<span class=\\"hljs-literal\\">false</span>\\n            <span class=\\"hljs-keyword\\">if</span>(i===hash[cur][j])<span class=\\"hljs-keyword\\">break</span> \\n          }\\n        }     \\n        strValid--\\n      }\\n      str+=cur\\n    }\\n     <span class=\\"hljs-keyword\\">if</span>(allFix===<span class=\\"hljs-number\\">0</span> &amp;&amp; !res.includes(str))res.push(str)\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"remove-invalid-parentheses","created_at":"2019-04-08","timeArr":[2019,3,8,20,44,56,0],"hasThinking":false,"content":"<p>给你一个由若干括号和字母组成的字符串 <code>s</code> ，删除最小数量的无效括号，使得输入的字符串有效。</p>\\n\\n<p>返回所有可能的结果。答案可以按 <strong>任意顺序</strong> 返回。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\"()())()\\"\\n<strong>输出：</strong>[\\"(())()\\",\\"()()()\\"]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\"(a)())()\\"\\n<strong>输出：</strong>[\\"(a())()\\",\\"(a)()()\\"]\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s = \\")(\\"\\n<strong>输出：</strong>[\\"\\"]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= s.length <= 25</code></li>\\n\\t<li><code>s</code> 由小写英文字母以及括号 <code>\'(\'</code> 和 <code>\')\'</code> 组成</li>\\n\\t<li><code>s</code> 中至多含 <code>20</code> 个括号</li>\\n</ul>\\n","title":"301. 删除无效的括号","relatedTags":["广度优先搜索","字符串","回溯"],"difficult":"Hard","lang":["javascript"],"uniqueID":"301","slug":"301-Remove-Invalid-Parentheses"}')}}]);