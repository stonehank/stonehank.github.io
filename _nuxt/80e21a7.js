(window.webpackJsonp=window.webpackJsonp||[]).push([[1109],{1907:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string[]}</span> <span class=\\"hljs-variable\\">deadends</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">target</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> openLock = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">deadends, target</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> hash={}\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> d <span class=\\"hljs-keyword\\">of</span> deadends)hash[d]=<span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-keyword\\">if</span>(hash[<span class=\\"hljs-string\\">\'0000\'</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">let</span> nums=[<span class=\\"hljs-string\\">\'0\'</span>,<span class=\\"hljs-string\\">\'1\'</span>,<span class=\\"hljs-string\\">\'2\'</span>,<span class=\\"hljs-string\\">\'3\'</span>,<span class=\\"hljs-string\\">\'4\'</span>,<span class=\\"hljs-string\\">\'5\'</span>,<span class=\\"hljs-string\\">\'6\'</span>,<span class=\\"hljs-string\\">\'7\'</span>,<span class=\\"hljs-string\\">\'8\'</span>,<span class=\\"hljs-string\\">\'9\'</span>]\\n  <span class=\\"hljs-keyword\\">let</span> arr=[<span class=\\"hljs-string\\">\'0000\'</span>]\\n  <span class=\\"hljs-keyword\\">let</span> steps=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=arr.shift()\\n      <span class=\\"hljs-keyword\\">if</span>(cur===target)<span class=\\"hljs-keyword\\">return</span> steps\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;<span class=\\"hljs-number\\">4</span>;j++){\\n        <span class=\\"hljs-keyword\\">let</span> id=+cur[j]\\n        <span class=\\"hljs-keyword\\">let</span> less=cur.substring(<span class=\\"hljs-number\\">0</span>,j)+nums[(id+<span class=\\"hljs-number\\">9</span>) % <span class=\\"hljs-number\\">10</span>]+cur.substring(j+<span class=\\"hljs-number\\">1</span>),\\n            more=cur.substring(<span class=\\"hljs-number\\">0</span>,j)+nums[(id+<span class=\\"hljs-number\\">1</span>) % <span class=\\"hljs-number\\">10</span>]+cur.substring(j+<span class=\\"hljs-number\\">1</span>)\\n        <span class=\\"hljs-keyword\\">if</span>(!hash[less]){\\n          hash[less]=<span class=\\"hljs-literal\\">true</span>\\n          arr.push(less)\\n        }\\n        <span class=\\"hljs-keyword\\">if</span>(!hash[more]){\\n          hash[more]=<span class=\\"hljs-literal\\">true</span>\\n          arr.push(more)\\n        }\\n      }\\n    }\\n    steps++\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n};\\n</code></pre>\\n"],"querySlug":"open-the-lock","created_at":"2019-04-15","timeArr":[2019,3,15,23,7,23,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>从<code>0000</code>开始，<code>bfs</code>，每次每一位都可以<code>+1</code>和<code>-1</code>，对每一个不同的数字添加到<code>arr</code>，继续计算。</p>\\n<p>注意：</p>\\n<p><code>hash</code>用来保存不能达到的数字，包括<code>deadends</code>和<strong>已经计算过的数字</strong>。</p>\\n","content":"<p>你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： <code>\'0\', \'1\', \'2\', \'3\', \'4\', \'5\', \'6\', \'7\', \'8\', \'9\'</code> 。每个拨轮可以自由旋转：例如把 <code>\'9\'</code> 变为 <code>\'0\'</code>，<code>\'0\'</code> 变为 <code>\'9\'</code> 。每次旋转都只能旋转一个拨轮的一位数字。</p>\\n\\n<p>锁的初始数字为 <code>\'0000\'</code> ，一个代表四个拨轮的数字的字符串。</p>\\n\\n<p>列表 <code>deadends</code> 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。</p>\\n\\n<p>字符串 <code>target</code> 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 <code>-1</code> 。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>deadends = [\\"0201\\",\\"0101\\",\\"0102\\",\\"1212\\",\\"2002\\"], target = \\"0202\\"\\n<strong>输出：</strong>6\\n<strong>解释：</strong>\\n可能的移动序列为 \\"0000\\" -> \\"1000\\" -> \\"1100\\" -> \\"1200\\" -> \\"1201\\" -> \\"1202\\" -> \\"0202\\"。\\n注意 \\"0000\\" -> \\"0001\\" -> \\"0002\\" -> \\"0102\\" -> \\"0202\\" 这样的序列是不能解锁的，\\n因为当拨动到 \\"0102\\" 时这个锁就会被锁定。\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> deadends = [\\"8888\\"], target = \\"0009\\"\\n<strong>输出：</strong>1\\n<strong>解释：</strong>\\n把最后一位反向旋转一次即可 \\"0000\\" -> \\"0009\\"。\\n</pre>\\n\\n<p><strong>示例 3:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> deadends = [\\"8887\\",\\"8889\\",\\"8878\\",\\"8898\\",\\"8788\\",\\"8988\\",\\"7888\\",\\"9888\\"], target = \\"8888\\"\\n<strong>输出：</strong>-1\\n<strong>解释：\\n</strong>无法旋转到目标数字且不被锁定。\\n</pre>\\n\\n<p><strong>示例 4:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> deadends = [\\"0000\\"], target = \\"8888\\"\\n<strong>输出：</strong>-1\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= deadends.length <= 500</code></li>\\n\\t<li><code><font face=\\"monospace\\">deadends[i].length == 4</font></code></li>\\n\\t<li><code><font face=\\"monospace\\">target.length == 4</font></code></li>\\n\\t<li><code>target</code> <strong>不在</strong> <code>deadends</code> 之中</li>\\n\\t<li><code>target</code> 和 <code>deadends[i]</code> 仅由若干位数字组成</li>\\n</ul>\\n","title":"752. 打开转盘锁","relatedTags":["广度优先搜索","数组","哈希表","字符串"],"difficult":"Middle","lang":["javascript"],"uniqueID":"752","slug":"752-Open-the-Lock"}')}}]);