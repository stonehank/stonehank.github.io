(window.webpackJsonp=window.webpackJsonp||[]).push([[1288],{2086:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">N</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">L</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">K</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> numMusicPlaylists = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">N, L, K</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> mem={}\\n  <span class=\\"hljs-keyword\\">let</span> MOD=<span class=\\"hljs-number\\">1e9</span>+<span class=\\"hljs-number\\">7</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">calc</span>(<span class=\\"hljs-params\\">N,L</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(N===L || N===K+<span class=\\"hljs-number\\">1</span>){\\n      <span class=\\"hljs-keyword\\">let</span> f=<span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;=N;i++){\\n        f=(f*i) % MOD\\n      }\\n      <span class=\\"hljs-keyword\\">return</span> f \\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(mem[N+<span class=\\"hljs-string\\">\'-\'</span>+L]!=<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span>  mem[N+<span class=\\"hljs-string\\">\'-\'</span>+L]\\n    <span class=\\"hljs-keyword\\">let</span> res=(calc(N<span class=\\"hljs-number\\">-1</span>,L<span class=\\"hljs-number\\">-1</span>)*N +calc(N,L<span class=\\"hljs-number\\">-1</span>)*(N-K) ) % MOD\\n    mem[N+<span class=\\"hljs-string\\">\'-\'</span>+L]=res\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> calc(N,L)\\n};\\n</code></pre>\\n","<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">numMusicPlaylists</span><span class=\\"hljs-params\\">(self, N, L, K)</span>:</span>\\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">dp</span><span class=\\"hljs-params\\">(N, L)</span>:</span>\\n            <span class=\\"hljs-keyword\\">if</span> N == L <span class=\\"hljs-keyword\\">or</span> N == K + <span class=\\"hljs-number\\">1</span>:\\n                <span class=\\"hljs-keyword\\">return</span> math.factorial(N)\\n            <span class=\\"hljs-keyword\\">if</span> (N,L) <span class=\\"hljs-keyword\\">in</span> dic:\\n                <span class=\\"hljs-keyword\\">return</span> dic[(N,L)]\\n            dic[(N, L)] = dp(N - <span class=\\"hljs-number\\">1</span>, L - <span class=\\"hljs-number\\">1</span>) * N + dp(N, L<span class=\\"hljs-number\\">-1</span>) * (N - K)\\n            <span class=\\"hljs-keyword\\">return</span> dic[(N, L)]\\n        \\n        dic = {}\\n        <span class=\\"hljs-keyword\\">return</span> dp(N,L) % (<span class=\\"hljs-number\\">10</span> ** <span class=\\"hljs-number\\">9</span> + <span class=\\"hljs-number\\">7</span>)\\n</code></pre>\\n"],"querySlug":"number-of-music-playlists","hasThinking":false,"content":"<p>你的音乐播放器里有&nbsp;<code>N</code>&nbsp;首不同的歌，在旅途中，你的旅伴想要听 <code>L</code>&nbsp;首歌（不一定不同，即，允许歌曲重复）。请你为她按如下规则创建一个播放列表：</p>\\n\\n<ul>\\n\\t<li>每首歌至少播放一次。</li>\\n\\t<li>一首歌只有在其他 <code>K</code> 首歌播放完之后才能再次播放。</li>\\n</ul>\\n\\n<p>返回可以满足要求的播放列表的数量。<strong>由于答案可能非常大，请返回它模&nbsp;<code>10^9 + 7</code>&nbsp;的结果。</strong></p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>N = 3, L = 3, K = 1\\n<strong>输出：</strong>6\\n<strong>解释：</strong>有 6 种可能的播放列表。[1, 2, 3]，[1, 3, 2]，[2, 1, 3]，[2, 3, 1]，[3, 1, 2]，[3, 2, 1].\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>N = 2, L = 3, K = 0\\n<strong>输出：</strong>6\\n<strong>解释：</strong>有 6 种可能的播放列表。[1, 1, 2]，[1, 2, 1]，[2, 1, 1]，[2, 2, 1]，[2, 1, 2]，[1, 2, 2]\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>N = 2, L = 3, K = 1\\n<strong>输出：</strong>2\\n<strong>解释：</strong>有 2 种可能的播放列表。[1, 2, 1]，[2, 1, 2]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>0 &lt;= K &lt; N &lt;= L &lt;= 100</code></li>\\n</ol>\\n","title":"920. 播放列表的数量","relatedTags":["数学","动态规划","组合数学"],"difficult":"Hard","lang":["javascript","python"],"uniqueID":"920","slug":"920-Number-of-Music-Playlists"}')}}]);