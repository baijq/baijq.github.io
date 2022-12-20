(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{493:function(s,a,t){"use strict";t.r(a);var n=t(62),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-安装-rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-rabbitmq"}},[s._v("#")]),s._v(" Docker 安装 RabbitMQ")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("拉取镜像")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull rabbitmq:3.8-management\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("运行容器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name rabbitmq "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_VHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my_vhost "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15672")]),s._v(":15672 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v(":5672 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nrabbitmq:3.8-management \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 指定服务运行的端口（5672：应用访问端口；15672：控制台Web端口号）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -hostname 主机名（RabbitMQ的一个重要注意事项是它根据所谓的 “节点名称” 存储数据，默认为主机名）； ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e 指定环境变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## RABBITMQ_DEFAULT_VHOST：默认虚拟机名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## RABBITMQ_DEFAULT_USER：默认的用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## RABBITMQ_DEFAULT_PASS：默认用户名的密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);