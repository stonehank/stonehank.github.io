(window.webpackJsonp=window.webpackJsonp||[]).push([[1415],{702:function(e){e.exports=JSON.parse('{"content":"<h1 id=\\"source-coderedux\\">source-code.redux</h1>\\n<p>v4.0.0 </p>\\n<p>redux源码设计真的很精妙</p>\\n<p>改变状态是从store一层一层往下找，找到对应的type修改状态，再一层一层返回</p>\\n<p>middleware是链式调用，每一环的返回值作为下一环的dispatch，就像滚雪球一样，最终能得到一个强大的dispatch</p>\\n<p>那么读完了是否能将这种设计思想变为自己的？</p>\\n<p>不能...刚读完去回想整个流程，缺漏的很多，真的是环环相扣</p>\\n<p>但多读几遍，或许哪天写代码的时候灵光一现，用上了某种设计，或许就真的变成你自己的东西了</p>\\n<p>详细解释在源码注释中，思维导图：</p>\\n<p><img src=\\"https://raw.githubusercontent.com/stonehank/sourcecode-analysis/master/source-code.redux/Redux.png\\" alt=\\"\\"></p>\\n","toc":[{"anchor":"source-coderedux","level":1,"text":"source-code.redux"}],"relatedTags":["源码","redux"],"created_at":"2018-08-02","timeArr":[2018,7,2,18,41,14,0],"title":"源码阅读-redux","uuid":"adc2f51181e5738a7702a3a284bff293b822edca","summary":"<h4>source-code.redux</h4>\\n<p>v4.0.0</p>\\n<p>redux源码设计真的很精妙</p>\\n<p>改变状态是从store一层一层往下找，找到对应的type修改状态，再一层一层返回</p>\\n<p>middleware是链式调用，每一环的返回值作为下一环的dispatch，就像滚雪球一样，最终能得到一个强大的dispatch</p>\\n<p>那么读完了是...</p>","slug":"source-code-redux","sha":"5dc0af13b16222c98bb23e8923957ec20cd52eab"}')}}]);