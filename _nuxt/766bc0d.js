(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{1419:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">students</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">sandwiches</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> countStudents = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">students, sandwiches</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> count1=<span class=\\"hljs-number\\">0</span>,count0=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n <span class=\\"hljs-keyword\\">of</span> students){\\n        <span class=\\"hljs-keyword\\">if</span>(n===<span class=\\"hljs-number\\">1</span>)count1++\\n        <span class=\\"hljs-keyword\\">else</span> count0++\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n <span class=\\"hljs-keyword\\">of</span> sandwiches){\\n        <span class=\\"hljs-keyword\\">if</span>(n===<span class=\\"hljs-number\\">1</span>){\\n            <span class=\\"hljs-keyword\\">if</span>(count1===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> count0\\n            count1--\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            <span class=\\"hljs-keyword\\">if</span>(count0===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> count1\\n            count0--\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n};\\n</code></pre>\\n"],"querySlug":"number-of-students-unable-to-eat-lunch","created_at":"2021-01-10","timeArr":[2021,0,10,14,52,39,0],"hasThinking":false,"content":"<p>学校的自助午餐提供圆形和方形的三明治，分别用数字 <code>0</code> 和 <code>1</code> 表示。所有学生站在一个队列里，每个学生要么喜欢圆形的要么喜欢方形的。<br>\\n餐厅里三明治的数量与学生的数量相同。所有三明治都放在一个 <strong>栈</strong> 里，每一轮：</p>\\n\\n<ul>\\n\\t<li>如果队列最前面的学生 <strong>喜欢</strong> 栈顶的三明治，那么会 <strong>拿走它</strong> 并离开队列。</li>\\n\\t<li>否则，这名学生会 <strong>放弃这个三明治</strong> 并回到队列的尾部。</li>\\n</ul>\\n\\n<p>这个过程会一直持续到队列里所有学生都不喜欢栈顶的三明治为止。</p>\\n\\n<p>给你两个整数数组 <code>students</code> 和 <code>sandwiches</code> ，其中 <code>sandwiches[i]</code> 是栈里面第 <code>i<sup>​​​​​​</sup></code> 个三明治的类型（<code>i = 0</code> 是栈的顶部）， <code>students[j]</code> 是初始队列里第 <code>j<sup>​​​​​​</sup></code> 名学生对三明治的喜好（<code>j = 0</code> 是队列的最开始位置）。请你返回无法吃午餐的学生数量。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><b>输入：</b>students = [1,1,0,0], sandwiches = [0,1,0,1]\\n<b>输出：</b>0<strong> \\n解释：</strong>\\n- 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [1,0,0,1]。\\n- 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [0,0,1,1]。\\n- 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = [0,1,1]，三明治栈为 sandwiches = [1,0,1]。\\n- 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [1,1,0]。\\n- 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = [1,0]，三明治栈为 sandwiches = [0,1]。\\n- 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [0,1]。\\n- 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = [1]，三明治栈为 sandwiches = [1]。\\n- 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = []，三明治栈为 sandwiches = []。\\n所以所有学生都有三明治吃。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><b>输入：</b>students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]\\n<b>输出：</b>3\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= students.length, sandwiches.length &lt;= 100</code></li>\\n\\t<li><code>students.length == sandwiches.length</code></li>\\n\\t<li><code>sandwiches[i]</code> 要么是 <code>0</code> ，要么是 <code>1</code> 。</li>\\n\\t<li><code>students[i]</code> 要么是 <code>0</code> ，要么是 <code>1</code> 。</li>\\n</ul>\\n","title":"1700. 无法吃午餐的学生数量","relatedTags":["栈","队列","数组","模拟"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1700","slug":"1700-Number-of-Students-Unable-to-Eat-Lunch"}')}}]);