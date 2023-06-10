(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1572:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Initialize your data structure here.\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> Twitter = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\"></span>) </span>{\\n  <span class=\\"hljs-keyword\\">this</span>.userFollows={}\\n  <span class=\\"hljs-keyword\\">this</span>.time=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">this</span>.userPosts={}\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Compose a new tweet. \\n * @param {number} userId \\n * @param {number} tweetId\\n * @return {void}\\n */</span>\\nTwitter.prototype.postTweet = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">userId, tweetId</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.userPosts[userId]==<span class=\\"hljs-literal\\">null</span>)\\n    <span class=\\"hljs-keyword\\">this</span>.userPosts[userId]=[[tweetId,<span class=\\"hljs-keyword\\">this</span>.time++]]\\n  <span class=\\"hljs-keyword\\">else</span> \\n    <span class=\\"hljs-keyword\\">this</span>.userPosts[userId].unshift([tweetId,<span class=\\"hljs-keyword\\">this</span>.time++])\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Retrieve the 10 most recent tweet ids in the user\'s news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. \\n * @param {number} userId\\n * @return {number[]}\\n */</span>\\nTwitter.prototype.getNewsFeed = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">userId</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> candidates=[]\\n  candidates.push(userId)\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.userFollows[userId]){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> c <span class=\\"hljs-keyword\\">of</span> <span class=\\"hljs-keyword\\">this</span>.userFollows[userId])candidates.push(c)\\n  }\\n    \\n  <span class=\\"hljs-comment\\">// 多指针查找最近的post</span>\\n  <span class=\\"hljs-keyword\\">let</span> idx=<span class=\\"hljs-built_in\\">Array</span>(candidates.length).fill(<span class=\\"hljs-number\\">0</span>)\\n  <span class=\\"hljs-keyword\\">let</span> res=[],k=<span class=\\"hljs-number\\">10</span>\\n  <span class=\\"hljs-keyword\\">while</span>(k--&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> recent=[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>],recentID=<span class=\\"hljs-literal\\">null</span>,noMorePosts=<span class=\\"hljs-literal\\">true</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;candidates.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> id=idx[i], uid=candidates[i]\\n      <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.userPosts[uid]==<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">continue</span>\\n      <span class=\\"hljs-keyword\\">if</span>(id&gt;=<span class=\\"hljs-keyword\\">this</span>.userPosts[uid].length)<span class=\\"hljs-keyword\\">continue</span>\\n      noMorePosts=<span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">let</span> curTweet=<span class=\\"hljs-keyword\\">this</span>.userPosts[uid][id]\\n      <span class=\\"hljs-keyword\\">if</span>(curTweet[<span class=\\"hljs-number\\">1</span>]&gt;recent[<span class=\\"hljs-number\\">1</span>]){\\n        recent=curTweet\\n        recentID=i\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(noMorePosts)<span class=\\"hljs-keyword\\">break</span>\\n    idx[recentID]++\\n    res.push(recent[<span class=\\"hljs-number\\">0</span>])\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Follower follows a followee. If the operation is invalid, it should be a no-op. \\n * @param {number} followerId \\n * @param {number} followeeId\\n * @return {void}\\n */</span>\\nTwitter.prototype.follow = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">followerId, followeeId</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(followerId===followeeId)\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.userFollows[followerId]==<span class=\\"hljs-literal\\">null</span>)\\n    <span class=\\"hljs-keyword\\">this</span>.userFollows[followerId]=<span class=\\"hljs-keyword\\">new</span> <span class=\\"hljs-built_in\\">Set</span>()\\n  \\n  <span class=\\"hljs-keyword\\">this</span>.userFollows[followerId].add(followeeId)\\n};\\n\\n<span class=\\"hljs-comment\\">/**\\n * Follower unfollows a followee. If the operation is invalid, it should be a no-op. \\n * @param {number} followerId \\n * @param {number} followeeId\\n * @return {void}\\n */</span>\\nTwitter.prototype.unfollow = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">followerId, followeeId</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(followerId===followeeId)\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.userFollows[followerId]==<span class=\\"hljs-literal\\">null</span>)\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-keyword\\">if</span>(!<span class=\\"hljs-keyword\\">this</span>.userFollows[followerId].has(followeeId))\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-keyword\\">this</span>.userFollows[followerId].delete(followeeId)\\n  \\n};\\n\\n<span class=\\"hljs-comment\\">/** \\n * Your Twitter object will be instantiated and called as such:\\n * var obj = Object.create(Twitter).createNew()\\n * obj.postTweet(userId,tweetId)\\n * var param_2 = obj.getNewsFeed(userId)\\n * obj.follow(followerId,followeeId)\\n * obj.unfollow(followerId,followeeId)\\n */</span>\\n</code></pre>\\n"],"querySlug":"design-twitter","created_at":"2019-04-05","timeArr":[2019,3,5,12,47,16,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<ul>\\n<li>\\n<p><code>postTweet</code></p>\\n<p>题目给出的<code>tweetId</code>和时间并没有关系，因此我们需要自定义一个时间id<code>timeId</code>，这个<code>timeId</code>是唯一的，递增的。</p>\\n<p>接着将<code>[tweetId,timeId]</code>存入对应的<code>userId</code>中，保证每一个数组内部<code>timeId</code>是递减的。</p>\\n<p>结构如下：</p>\\n<pre class=\\"hljs\\"><code>{\\n  userId_1:[[tweetId_5,timeId_5],[tweetId_1,timeId_1]],\\n  userId_2:[[tweetId_2,timeId_4]],\\n  userId_7:[[tweetId_98,timeId_3],[tweetId_17,timeId_2]],\\n  ...\\n}\\n</code></pre>\\n</li>\\n<li>\\n<p><code>getNewsFeed</code></p>\\n<p>可以参考<code>Leetcode NO.313-超级丑数</code>的多指针算法，筛选出<code>10</code>个<code>timeId</code>最大的。</p>\\n<p>注意：</p>\\n<ul>\\n<li>要进行获取的<code>userId</code>中，除了关注的人，还有自己。</li>\\n<li>一旦所有的<code>post</code>已经获取完毕，即使不足10个，立刻<code>break</code>。</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>follow</code>和<code>unfollow</code></p>\\n<p>比较简单了，2个注意的地方：</p>\\n<ol>\\n<li>不能关注自己，不能取关自己。</li>\\n<li>不能取关未关注的人。</li>\\n</ol>\\n</li>\\n</ul>\\n","content":"<p>设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：</p>\\n\\n<ol>\\n\\t<li><strong>postTweet(userId, tweetId)</strong>: 创建一条新的推文</li>\\n\\t<li><strong>getNewsFeed(userId)</strong>: 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。</li>\\n\\t<li><strong>follow(followerId, followeeId)</strong>: 关注一个用户</li>\\n\\t<li><strong>unfollow(followerId, followeeId)</strong>: 取消关注一个用户</li>\\n</ol>\\n\\n<p><strong>示例:</strong></p>\\n\\n<pre>\\nTwitter twitter = new Twitter();\\n\\n// 用户1发送了一条新推文 (用户id = 1, 推文id = 5).\\ntwitter.postTweet(1, 5);\\n\\n// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.\\ntwitter.getNewsFeed(1);\\n\\n// 用户1关注了用户2.\\ntwitter.follow(1, 2);\\n\\n// 用户2发送了一个新推文 (推文id = 6).\\ntwitter.postTweet(2, 6);\\n\\n// 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -&gt; [6, 5].\\n// 推文id6应当在推文id5之前，因为它是在5之后发送的.\\ntwitter.getNewsFeed(1);\\n\\n// 用户1取消关注了用户2.\\ntwitter.unfollow(1, 2);\\n\\n// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.\\n// 因为用户1已经不再关注用户2.\\ntwitter.getNewsFeed(1);\\n</pre>\\n","title":"355. 设计推特","relatedTags":["设计","哈希表","链表","堆（优先队列）"],"difficult":"Middle","lang":["javascript"],"uniqueID":"355","slug":"355-Design-Twitter"}')}}]);