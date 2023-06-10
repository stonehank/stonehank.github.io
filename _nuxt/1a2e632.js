(window.webpackJsonp=window.webpackJsonp||[]).push([[1127],{1925:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">board</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> slidingPuzzle = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">board</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> moves=[[<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">0</span>],[<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-number\\">0</span>],[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">-1</span>],[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">1</span>]]\\n  <span class=\\"hljs-keyword\\">let</span> zeroX,zeroY\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;board.length;i++){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;board[i].length;j++){\\n      <span class=\\"hljs-keyword\\">if</span>(board[i][j]===<span class=\\"hljs-number\\">0</span>){\\n        zeroX=i;zeroY=j;\\n        <span class=\\"hljs-keyword\\">break</span>\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> target=<span class=\\"hljs-string\\">\\"1,2,3,4,5,0\\"</span>\\n  <span class=\\"hljs-keyword\\">let</span> board1D=board[<span class=\\"hljs-number\\">0</span>].concat(board[<span class=\\"hljs-number\\">1</span>])\\n  <span class=\\"hljs-keyword\\">if</span>(board1D.toString()===target)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> zeroID=zeroX*<span class=\\"hljs-number\\">3</span>+zeroY\\n  <span class=\\"hljs-keyword\\">let</span> visited={}\\n  <span class=\\"hljs-keyword\\">let</span> arr=[[board1D,zeroID]]\\n  <span class=\\"hljs-keyword\\">let</span> steps=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> [curBoard,zeroID]=arr.shift()\\n      <span class=\\"hljs-keyword\\">let</span> zeroX=<span class=\\"hljs-built_in\\">Math</span>.floor(zeroID/<span class=\\"hljs-number\\">3</span>),zeroY=zeroID%<span class=\\"hljs-number\\">3</span>\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [dx,dy] <span class=\\"hljs-keyword\\">of</span> moves){\\n        <span class=\\"hljs-keyword\\">let</span> newX=dx+zeroX,newY=dy+zeroY\\n        <span class=\\"hljs-keyword\\">if</span>(newX&lt;<span class=\\"hljs-number\\">0</span> || newY&lt;<span class=\\"hljs-number\\">0</span> || newX&gt;=<span class=\\"hljs-number\\">2</span> || newY&gt;=<span class=\\"hljs-number\\">3</span>)<span class=\\"hljs-keyword\\">continue</span>\\n        <span class=\\"hljs-keyword\\">let</span> newID=newX*<span class=\\"hljs-number\\">3</span>+newY\\n        swap(curBoard,newID,zeroID)\\n        <span class=\\"hljs-keyword\\">let</span> str=curBoard.toString()\\n        <span class=\\"hljs-keyword\\">if</span>(str===target)<span class=\\"hljs-keyword\\">return</span> steps+<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">if</span>(visited[str]==<span class=\\"hljs-literal\\">null</span>){\\n          visited[str]=<span class=\\"hljs-literal\\">true</span>\\n          arr.push([curBoard.slice(),newID])          \\n        }\\n        swap(curBoard,newID,zeroID)\\n      }\\n    }\\n    steps++\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">swap</span>(<span class=\\"hljs-params\\">arr,i,j</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> t=arr[i]\\n    arr[i]=arr[j]\\n    arr[j]=t\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"sliding-puzzle","created_at":"2019-04-16","timeArr":[2019,3,16,11,18,56,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>bfs</code>，每次对<code>0</code>的上下左右移动后保存到<code>hash</code>，如果不存在，则继续遍历新的状态。</p>\\n<p>优化：将<code>二维数组</code>转换为<code>一维数组</code>，更加高效。</p>\\n","content":"<p>在一个 2 x 3 的板上（<code>board</code>）有 5 块砖瓦，用数字 <code>1~5</code> 来表示, 以及一块空缺用&nbsp;<code>0</code>&nbsp;来表示.</p>\\n\\n<p>一次移动定义为选择&nbsp;<code>0</code>&nbsp;与一个相邻的数字（上下左右）进行交换.</p>\\n\\n<p>最终当板&nbsp;<code>board</code>&nbsp;的结果是&nbsp;<code>[[1,2,3],[4,5,0]]</code>&nbsp;谜板被解开。</p>\\n\\n<p>给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。</p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>board = [[1,2,3],[4,0,5]]\\n<strong>输出：</strong>1\\n<strong>解释：</strong>交换 0 和 5 ，1 步完成\\n</pre>\\n\\n<pre>\\n<strong>输入：</strong>board = [[1,2,3],[5,4,0]]\\n<strong>输出：</strong>-1\\n<strong>解释：</strong>没有办法完成谜板\\n</pre>\\n\\n<pre>\\n<strong>输入：</strong>board = [[4,1,2],[5,0,3]]\\n<strong>输出：</strong>5\\n<strong>解释：</strong>\\n最少完成谜板的最少移动次数是 5 ，\\n一种移动路径:\\n尚未移动: [[4,1,2],[5,0,3]]\\n移动 1 次: [[4,1,2],[0,5,3]]\\n移动 2 次: [[0,1,2],[4,5,3]]\\n移动 3 次: [[1,0,2],[4,5,3]]\\n移动 4 次: [[1,2,0],[4,5,3]]\\n移动 5 次: [[1,2,3],[4,5,0]]\\n</pre>\\n\\n<pre>\\n<strong>输入：</strong>board = [[3,2,4],[1,5,0]]\\n<strong>输出：</strong>14\\n</pre>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>board</code>&nbsp;是一个如上所述的 2 x 3 的数组.</li>\\n\\t<li><code>board[i][j]</code>&nbsp;是一个&nbsp;<code>[0, 1, 2, 3, 4, 5]</code>&nbsp;的排列.</li>\\n</ul>\\n","title":"773. 滑动谜题","relatedTags":["广度优先搜索","数组","矩阵"],"difficult":"Hard","lang":["javascript"],"uniqueID":"773","slug":"773-Sliding-Puzzle"}')}}]);