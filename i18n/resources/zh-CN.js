module.exports = {
  translation: {
    welcome: {
      slogan: 'Michael 为您效劳！',
    },
    check: {
      fail: '项目名称"{{- projectName }}"不合法。',
    },
    resolve: {
      helplessness: 'Michael 暂时无法为您创建项目。',
      message: {
        fileExists: '文件 {{- path }} 已存在，$t(resolve.helplessness)',
        directoryNotEmpty: '目录 {{- path }} 不为空，$t(resolve.helplessness)',
      },
      question: '您打算如何处理？',
      options: {
        override: '覆盖（被移除的文件无法恢复）',
        merge: '合并（被覆盖的文件无法恢复）',
        exit: '退出',
      },
    },
    query: {
      introduce: '现在让我们来聊聊您的新项目。',
      questions: {
        framework: '您打算用什么前端框架？',
        appMode: '您的项目是哪种类型的应用程序？',
      },
      options: {
        framework: {
          react: 'React',
          vue: 'Vue',
          plain: '原生（不使用前端框架）',
        },
        appMode: {
          sp: '单页面',
          mp: '多页面',
        },
      },
    },
    execute: {
      tasks: {
        1: {
          title: '准备项目目录',
          empty: '正在清空项目目录...',
          create: '正在创建项目目录...',
        },
        2: {
          title: '拷贝模板文件',
          copy: '正在拷贝文件...',
        },
        3: {
          title: '项目初始化',
          package: '正在初始化 package.json...',
          bundler: '正在初始化打包配置...',
          william: '正在安装 Michael 相关依赖...',
          dependencies: '正在初始化项目依赖...',
        },
      },
      title: '🚧  正在执行中...',
    },
    install: {
      title: '🚢  正在安装项目依赖...',
      notice: '这可能需要一点时间，请等待。',
    },
    complete: {
      title: '🎉  恭喜！',
      notice: '您的项目已创建完成。',
      list: {
        preface: '现在您可以通过：',
        appendix: '来启动开发服务器。',
      },
      enjoy: '祝您玩得愉快！',
    },
  },
};
