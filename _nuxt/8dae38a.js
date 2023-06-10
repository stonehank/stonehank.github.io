(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{657:function(e){e.exports=JSON.parse('{"content":"<pre><code><pre class=\\"hljs\\"><code>init -&gt; v1 -&gt; v2 -&gt; v3 -- faulty merge -&gt; v4  (master)\\n           \\\\            /                     \\n            d1  --&gt;  d2                                   </code></pre></code></pre><p>现在在v4，d2有bug，想先取消合并</p>\\n<p>使用`git reset &quot;fault merge&quot;，v4也不存在了</p>\\n<p>使用 <code>git revert &quot;fault merge&quot;</code>， 不会影响到v4</p>\\n<p>revert后是这样的，目前在revert merge</p>\\n<pre><code><pre class=\\"hljs\\"><code>init -&gt; v1 -&gt; v2 -&gt; v3 -- faulty merge -&gt; v4  (master) -&gt;revert merge\\n           \\\\            /                     \\n            d1  --&gt;  d2  </code></pre></code></pre><p>继续添加文件</p>\\n<pre><code><pre class=\\"hljs\\"><code>init -&gt; v1 -&gt; v2 -&gt; v3 -- faulty merge -&gt; v4  (master) -&gt;revert merge -&gt;v5\\n           \\\\            /                     \\n            d1  --&gt;  d2  --&gt;d3 --&gt;d4</code></pre></code></pre><p>现在在v5 需要合并 dev</p>\\n<p>直接<code>git merge dev</code> 只能合并 d3和d4</p>\\n<p>有2种办法，</p>\\n<ol>\\n<li><p>在d1,和d2上手动修改，即使添加一个空格；然后回到master，<code>git merge dev</code>，处理冲突便可（每个文件都修改太麻烦）</p>\\n</li>\\n<li><p>再次revert到之前revert的部分，<code>git revert &quot;revert merge&quot;</code>,然后会发现d1和d2又回来了(最初的有bug的版本)，再<code>git merge dev</code>将修正的版本合并进来，处理冲突即可</p>\\n</li>\\n</ol>\\n<blockquote>\\n<p>另： 第2步反过来也可，先<code>git merge dev</code>，将改动过的合并进来，再<code>git revert &quot;revert merge&quot;</code>，处理冲突</p>\\n</blockquote>\\n<hr>\\n<blockquote>\\n<p>自己注：git-test目录中，目前正在v5，dev的dev-1，dev-2是被revert的，dev-2做了修改，可以使用第2或者第3种方法</p>\\n</blockquote>\\n","toc":[],"relatedTags":null,"created_at":"2018-09-01","timeArr":[2018,8,1,0,0,0,0],"title":"一个关于GIT撤销合并的处理revert","uuid":"c717f697562ea9e27b08040a52e05db0718b1a50","summary":"<pre class=\\"hljs\\"><code>init -&gt; v1 -&gt; v2 -&gt; v3 -- faulty merge -&gt; v4  (master)\\n           \\\\            /                     \\n            d1  --&gt;  d2                               ...</code></pre>","slug":"yi-ge-guan-yu-GIT-che-xiao-he-bing-de-chu-li-revert","sha":"1de2e1722337b507aecf967ac8e888cae31f7bbb"}')}}]);