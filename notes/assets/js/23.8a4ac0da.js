(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{438:function(s,t,a){"use strict";a.r(t);var n=a(62),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-小白教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-小白教程"}},[s._v("#")]),s._v(" MySQL 小白教程")]),s._v(" "),a("p",[s._v("MySQL是一个开源免费的数据库系统")]),s._v(" "),a("h2",{attrs:{id:"安装mysql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-server"}},[s._v("#")]),s._v(" 安装MySQL Server")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("官网下载 "),a("a",{attrs:{href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/downloads/"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVcUx.png",alt:"OwVcUx.png"}})])]),s._v(" "),a("li",[a("p",[s._v("解压，移动到要安装的文件夹下，如我的")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVsbR.png",alt:"OwVsbR.png"}})])]),s._v(" "),a("li",[a("p",[s._v("配置文件 "),a("code",[s._v("my.ini")])]),s._v(" "),a("p",[s._v("新建 "),a("code",[s._v("Data")]),s._v(" 文件夹，新建  "),a("code",[s._v("my.ini")]),s._v(" 配置文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVg56.png",alt:"OwVg56.png"}})]),s._v(" "),a("p",[s._v("如下配置文件复制即可，需修改两处 "),a("code",[s._v("basedir")]),s._v(" 和 "),a("code",[s._v("datadir")]),s._v(" 改成自己对应的路径即可，注意使用  "),a("code",[s._v("\\\\")])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置端口号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3306")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql的安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("basedir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:\\\\software\\\\mysql-8.0.29-winx64")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql数据库的数据的存放目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("datadir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:\\\\software\\\\mysql-8.0.29-winx64\\\\Data")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("200")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connect_errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为UTF8/utf8mb4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("character-set-server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-storage-engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("INNODB")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用“mysql_native_password”插件认证")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default_authentication_plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql_native_password")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端默认字符集/utf8mb4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端连接服务端时默认使用的端口/utf8mb4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3306")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置环境变量")]),s._v(" "),a("p",[s._v("编辑 "),a("code",[s._v("Path")]),s._v(" 新增 "),a("code",[s._v("MySQL")]),s._v(" 的安装目录的bin目录，我的是 "),a("code",[s._v("D:\\software\\mysql-8.0.29-winx64\\bin")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVW8O.png",alt:"OwVW8O.png"}})])]),s._v(" "),a("li",[a("p",[s._v("初始化数据库，安装服务，启动服务")]),s._v(" "),a("p",[s._v("打开cmd命令行，必须以管理员方式运行，按顺序执行如下命令")]),s._v(" "),a("p",[a("code",[s._v("mysqld --initialize --console")]),s._v("   初始化命令，这里务必记住初始密码，修改密码会用到")]),s._v(" "),a("p",[a("code",[s._v("mysqld --install")]),s._v(" 安装服务，成功后出现Service successfully installed")]),s._v(" "),a("p",[a("code",[s._v("net start mysql")]),s._v(" 启动服务")]),s._v(" "),a("blockquote",[a("p",[s._v("如果密码没记住，可以删除初始化的 datadir 目录，重新执行以上命令")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwV5KH.png",alt:"OwV5KH.png"}})])]),s._v(" "),a("li",[a("p",[s._v("修改密码")]),s._v(" "),a("p",[s._v("登录MySQL "),a("code",[s._v("mysql -uroot -p")]),s._v(" 输入上面那个初始密码")]),s._v(" "),a("p",[s._v("执行修改密码 "),a("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/12/OwVIrd.png",alt:"OwVIrd.png"}})])])]),s._v(" "),a("p",[s._v("至此MySQL已经安装完成，如果之前安装过，没卸载完全，可能会报错注意完全卸载以前的")]),s._v(" "),a("h2",{attrs:{id:"卸载mysql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载mysql-server"}},[s._v("#")]),s._v(" 卸载MySQL Server")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("停止MySQL服务")])]),s._v(" "),a("li",[a("p",[s._v("如果是安装版，去控制面板卸载，解压版直接删除安装目录")])]),s._v(" "),a("li",[a("p",[s._v("残余文件夹清理。服务目录（就是安装目录）和数据目录（默认在C:\\ProgramData\\MySQL）")])]),s._v(" "),a("li",[a("p",[s._v("清理注册表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在系统的搜索框中输入 regedit，打开注册表编辑器")]),s._v("\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ControlSet001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ControlSet001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ControlSet002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ControlSet002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MySQL服务 目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("CurrentControlSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MySQL服务目录删除\nHKEY_LOCAL_MACHINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("CurrentControlSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("MySQL服务删除\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"centos-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装"}},[s._v("#")]),s._v(" CentOS 安装")]),s._v(" "),a("p",[s._v("MySQL 8.0.28 安装教程")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf mysql-8.0.28-1.el8.x86_64.rpm-bundle.tar\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql-community-common-8.0.28-1.el8.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql-community-client-plugins-8.0.28-1.el8.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql-community-libs-8.0.28-1.el8.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql-community-client-8.0.28-1.el8.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql-community-icu-data-files-8.0.28-1.el8.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql-community-server-8.0.28-1.el8.x86_64.rpm\n\nmysqld --initialize --console\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql:mysql /var/lib/mysql/\nsystemctl start mysqld\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" localhost\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#root@localhost: 4hQqurDMke:x")]),s._v("\nmysql -uroot -p \nalter user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("外部可能可能连不上，坚持防火墙")]),s._v(" "),a("ol",[a("li",[s._v("查看防火墙\nfirewall-cmd --state")]),s._v(" "),a("li",[s._v("关闭防火墙\nservice firewalld stop")])])])}),[],!1,null,null,null);t.default=e.exports}}]);