(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1223:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">restaurants</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">veganFriendly</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">maxPrice</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">maxDistance</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> filterRestaurants = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">restaurants, veganFriendly, maxPrice, maxDistance</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> f=restaurants.filter(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">r</span>=&gt;</span>{\\n    <span class=\\"hljs-keyword\\">return</span> r[<span class=\\"hljs-number\\">2</span>]&gt;=veganFriendly &amp;&amp; r[<span class=\\"hljs-number\\">3</span>]&lt;=maxPrice &amp;&amp; r[<span class=\\"hljs-number\\">4</span>]&lt;=maxDistance\\n  })\\n  f.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a[<span class=\\"hljs-number\\">1</span>]===b[<span class=\\"hljs-number\\">1</span>] ? b[<span class=\\"hljs-number\\">0</span>]-a[<span class=\\"hljs-number\\">0</span>] : b[<span class=\\"hljs-number\\">1</span>]-a[<span class=\\"hljs-number\\">1</span>])\\n  <span class=\\"hljs-keyword\\">return</span> f.map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">r</span>=&gt;</span>r[<span class=\\"hljs-number\\">0</span>])\\n};\\n</code></pre>\\n"],"querySlug":"filter-restaurants-by-vegan-friendly-price-and-distance","created_at":"2020-01-31","timeArr":[2020,0,31,11,18,54,0],"hasThinking":false,"content":"<p>给你一个餐馆信息数组&nbsp;<code>restaurants</code>，其中&nbsp;&nbsp;<code>restaurants[i] = [id<sub>i</sub>, rating<sub>i</sub>, veganFriendly<sub>i</sub>, price<sub>i</sub>, distance<sub>i</sub>]</code>。你必须使用以下三个过滤器来过滤这些餐馆信息。</p>\\n\\n<p>其中素食者友好过滤器&nbsp;<code>veganFriendly</code>&nbsp;的值可以为 <code>true</code> 或者 <code>false</code>，如果为 <em>true</em>&nbsp;就意味着你应该只包括&nbsp;<code>veganFriendly<sub>i</sub></code>&nbsp;为 true 的餐馆，为&nbsp;<em>false</em>&nbsp;则意味着可以包括任何餐馆。此外，我们还有最大价格&nbsp;<code>maxPrice</code>&nbsp;和最大距离&nbsp;<code>maxDistance</code>&nbsp;两个过滤器，它们分别考虑餐厅的价格因素和距离因素的最大值。</p>\\n\\n<p>过滤后返回餐馆的 <strong><em>id</em></strong>，按照 <em><strong>rating</strong></em>&nbsp;从高到低排序。如果 <em><strong>rating</strong></em> 相同，那么按 <em><strong>id</strong></em> 从高到低排序。简单起见，&nbsp;<code>veganFriendly<sub>i</sub></code> 和 <code>veganFriendly</code>&nbsp;为&nbsp;<em>true</em>&nbsp;时取值为 <em>1</em>，为 <em>false</em> 时，取值为&nbsp;<em>0 。</em></p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 1, maxPrice = 50, maxDistance = 10\\n<strong>输出：</strong>[3,1,5] \\n<strong>解释： \\n</strong>这些餐馆为：\\n餐馆 1 [id=1, rating=4, veganFriendly=1, price=40, distance=10]\\n餐馆 2 [id=2, rating=8, veganFriendly=0, price=50, distance=5]\\n餐馆 3 [id=3, rating=8, veganFriendly=1, price=30, distance=4]\\n餐馆 4 [id=4, rating=10, veganFriendly=0, price=10, distance=3]\\n餐馆 5 [id=5, rating=1, veganFriendly=1, price=15, distance=1] \\n在按照 veganFriendly = 1, maxPrice = 50 和 maxDistance = 10 进行过滤后，我们得到了餐馆 3, 餐馆 1 和 餐馆 5（按评分从高到低排序）。 \\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 0, maxPrice = 50, maxDistance = 10\\n<strong>输出：</strong>[4,3,2,1,5]\\n<strong>解释：</strong>餐馆与示例 1 相同，但在 veganFriendly = 0 的过滤条件下，应该考虑所有餐馆。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 0, maxPrice = 30, maxDistance = 3\\n<strong>输出：</strong>[4,5]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;=&nbsp;restaurants.length &lt;= 10^4</code></li>\\n\\t<li><code>restaurants[i].length == 5</code></li>\\n\\t<li><code>1 &lt;=&nbsp;id<sub>i</sub>, rating<sub>i</sub>, price<sub>i</sub>, distance<sub>i </sub>&lt;= 10^5</code></li>\\n\\t<li><code>1 &lt;=&nbsp;maxPrice,&nbsp;maxDistance &lt;= 10^5</code></li>\\n\\t<li><code>veganFriendly<sub>i</sub></code> 和&nbsp;<code>veganFriendly</code>&nbsp;的值为 0 或 1 。</li>\\n\\t<li>所有 <code>id<sub>i</sub></code> 各不相同。</li>\\n</ul>\\n","title":"1333. 餐厅过滤器","relatedTags":["数组","排序"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1333","slug":"1333-Filter-Restaurants-by-Vegan-Friendly-Price-and-Distance"}')}}]);