(window.webpackJsonp=window.webpackJsonp||[]).push([[1052],{1850:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-string\\">\\"\\"\\"\\n# Employee info\\nclass Employee(object):\\n    def __init__(self, id, importance, subordinates):\\n        # It\'s the unique id of each node.\\n        # unique id of this employee\\n        self.id = id\\n        # the importance value of this employee\\n        self.importance = importance\\n        # the id of direct subordinates\\n        self.subordinates = subordinates\\n\\"\\"\\"</span>\\n<span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">getImportance</span><span class=\\"hljs-params\\">(self, employees, id)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type employees: Employee\\n        :type id: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        memo={}\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">0</span>,len(employees)):\\n          eid=employees[i].id\\n          memo[eid]=employees[i]\\n        res=<span class=\\"hljs-number\\">0</span>\\n        candi=[memo[id]]\\n        <span class=\\"hljs-keyword\\">while</span> candi:\\n          <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">0</span>,len(candi)):\\n            info=candi.pop(<span class=\\"hljs-number\\">0</span>)\\n            imp=info.importance\\n            sub=info.subordinates\\n            res+=imp\\n            <span class=\\"hljs-keyword\\">for</span> j <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">0</span>,len(sub)):\\n              candi.append(memo[sub[j]])\\n        <span class=\\"hljs-keyword\\">return</span> res\\n        \\n</code></pre>\\n"],"querySlug":"employee-importance","created_at":"2019-04-06","timeArr":[2019,3,6,15,32,36,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>以员工独立的<code>uid</code>作为<code>key</code>，构建<code>hash</code>，然后<code>bfs</code>计算给定<code>id</code>及其<code>直接下属员工</code>的重要值之和。</p>\\n","content":"<p>给定一个保存员工信息的数据结构，它包含了员工 <strong>唯一的 id </strong>，<strong>重要度 </strong>和 <strong>直系下属的 id </strong>。</p>\\n\\n<p>比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 <strong>并不是直系</strong> 下属，因此没有体现在员工 1 的数据结构中。</p>\\n\\n<p>现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1\\n<strong>输出：</strong>11\\n<strong>解释：</strong>\\n员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>一个员工最多有一个<strong> 直系 </strong>领导，但是可以有多个 <strong>直系 </strong>下属</li>\\n\\t<li>员工数量不超过 2000 。</li>\\n</ul>\\n","title":"690. 员工的重要性","relatedTags":["深度优先搜索","广度优先搜索","哈希表"],"difficult":"Easy","lang":["python"],"uniqueID":"690","slug":"690-Employee-Importance"}')}}]);