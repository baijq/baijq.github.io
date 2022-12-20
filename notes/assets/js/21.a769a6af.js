(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{438:function(s,n,a){"use strict";a.r(n);var t=a(62),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[s._v("#")]),s._v(" ElasticSearch")]),s._v(" "),a("h2",{attrs:{id:"简介和基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介和基础"}},[s._v("#")]),s._v(" 简介和基础")]),s._v(" "),a("p",[s._v("简称ES，是一个开源的分布式全文搜索引擎。es是面向文档的，主要就是JSON。ES在后台吧每个 "),a("code",[s._v("索引划分为多个分片")]),s._v(" ，每个分片可以在集群中的不同服务器间迁移。")]),s._v(" "),a("p",[a("strong",[s._v("对比关系型数据库")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Relational DB")]),s._v(" "),a("th",[s._v("ElasticSearch")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("数据库（database）")]),s._v(" "),a("td",[s._v("索引（indices）")])]),s._v(" "),a("tr",[a("td",[s._v("表（tables）")]),s._v(" "),a("td",[s._v("types（弃用）")])]),s._v(" "),a("tr",[a("td",[s._v("行（rows）")]),s._v(" "),a("td",[s._v("文档（documents）")])]),s._v(" "),a("tr",[a("td",[s._v("字段（columns）")]),s._v(" "),a("td",[s._v("fields")])])])]),s._v(" "),a("p",[a("strong",[s._v("核心概念")])]),s._v(" "),a("ol",[a("li",[s._v("索引\n倒排索引，一个ES索引是由多个lucene索引组成的")]),s._v(" "),a("li",[s._v("字段类型")]),s._v(" "),a("li",[s._v("文档（documents）")]),s._v(" "),a("li",[s._v("ik 分词器")])]),s._v(" "),a("ul",[a("li",[s._v("把一段中文划分成一个一个的词语，在搜索时，会自动分词。")]),s._v(" "),a("li",[s._v("ik提供两个分词算法："),a("code",[s._v("ik_smart")]),s._v("（最少切分） 和 "),a("code",[s._v("ik_max_word")]),s._v("（最细力度切分）")]),s._v(" "),a("li",[s._v("ik分词器可以自定义自己的字典库")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OSVukD.png",alt:"ik分词"}})]),s._v(" "),a("h3",{attrs:{id:"基础测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础测试"}},[s._v("#")]),s._v(" 基础测试")]),s._v(" "),a("ol",[a("li",[s._v("索引操作")])]),s._v(" "),a("p",[s._v("创建索引")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('PUT /db0/type/1\n{\n  "name":"鲁班七号",\n  "age":5\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OpEFBV.png",alt:"OpEFBV.png"}})]),s._v(" "),a("p",[s._v("可以看到已经成功了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OpVfRH.png",alt:"OpVfRH.png"}})]),s._v(" "),a("p",[s._v("创建规则")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('PUT /db1\n{\n  "mappings": {\n    "properties": {\n      "name": {\n      "type": "text"\n    },\n    "age": {\n      "type": "long"\n    },\n    "birthday": {\n      "type": "date"\n    }\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("获取信息 "),a("code",[s._v("GET db1")])]),s._v(" "),a("p",[s._v("可以获取默认信息 "),a("code",[s._v("GET _cat/indices?v")])]),s._v(" "),a("p",[s._v("修改，更新")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('PUT /db3/_doc/1\n{\n  "name": "测试数据123",\n  "age": 12,\n  "birth": "1998-01-09"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("修改，更新")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('POST /db3/_doc/1/_update\n{\n  "doc": {\n    "name": "测试数据456"\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("删除 "),a("code",[s._v("DELETE /db0")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("文档操作（重点）")])]),s._v(" "),a("p",[a("strong",[s._v("基本操作")])]),s._v(" "),a("p",[s._v("添加数据")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('PUT /biubiu/user/1\n{\n  "name": "爸爸",\n  "age": 23,\n  "desc": "一顿操作猛如虎，一看工资两千五",\n  "tags": ["技术宅","暖男","Java"]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("查询数据 "),a("code",[s._v("GET /biubiu/user/1")])]),s._v(" "),a("p",[s._v("更新数据")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('PUT /biubiu/user/1\n{\n  "name": "张可欣",\n  "age": 23,\n  "desc": "一顿操作猛如虎，一看工资两千五",\n  "tags": ["技术宅","暖男","Java"]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("推荐使用这种更新 "),a("code",[s._v("_update")])]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('POST /biubiu/user/1/_update\n{\n  "doc":{\n    "name": "张大仙"\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("简单搜索")])]),s._v(" "),a("p",[s._v("简单搜索  "),a("code",[s._v("GET /biubiu/user/1")])]),s._v(" "),a("p",[s._v("简单条件搜索 "),a("code",[s._v("GET /biubiu/user/_search?q=name:张")])]),s._v(" "),a("p",[a("strong",[s._v("复杂搜索")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OplIyD.png",alt:"OplIyD.png"}})]),s._v(" "),a("p",[s._v("搜索 "),a("code",[s._v("query")]),s._v(" 字段 "),a("code",[s._v("_source")]),s._v(" 排序 "),a("code",[s._v("sort")]),s._v("  分页 "),a("code",[s._v("from")]),s._v(" "),a("code",[s._v("size")])]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('GET biubiu/user/_search\n{\n  "query": {\n    "match": {\n      "name": "张大"\n    }\n  },\n  "_source": ["name", "desc","age"],\n  "sort": [\n    {\n      "age": {\n        "order": "desc"\n      }\n    }  \n  ],\n  "from": 1,\n  "size": 2\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("must（and） should（or）must_not（not）")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('GET biubiu/user/_search\n{\n  "query": {\n    "bool": {\n      "should": [\n        {\n          "match": {\n            "name": "张大仙"\n          }\n        },\n        {\n          "match": {\n            "age": 23\n          }\n        }\n      ]\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("过滤器，范围查询 年龄 10 -25")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('GET biubiu/user/_search\n{\n  "query": {\n    "bool": {\n      "must": [\n        {\n          "match": {\n            "name": "张"\n            }\n        }\n      ],\n      "filter": [\n        {\n          "range": {\n            "age": {\n              "gte": 10,\n              "lte": 25\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("多个条件用空格分隔 "),a("code",[s._v("技术 男")])]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v('GET biubiu/user/_search\n{\n  "query": {\n    "match": {\n      "tags": "技术 男"\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("精确查询")])]),s._v(" "),a("p",[s._v("精确查询 term 查询通过倒排索引指定的词条精确查找")]),s._v(" "),a("p",[s._v("关于分词")]),s._v(" "),a("ul",[a("li",[s._v("term 查询通过倒排索引指定的词条精确查找")]),s._v(" "),a("li",[s._v("match 使用分词器解析")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OpUAQ1.png",alt:"OpUAQ1.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/Opdu2d.png",alt:"Opdu2d.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OpdtPg.png",alt:"OpdtPg.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OpwI6s.png",alt:"OpwI6s.png"}})]),s._v(" "),a("p",[a("strong",[s._v("高亮查询")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/Op0x58.png",alt:"Op0x58.png"}}),s._v(" "),a("img",{attrs:{src:"https://s1.ax1x.com/2022/04/30/OpBURe.png",alt:"OpBURe.png"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);