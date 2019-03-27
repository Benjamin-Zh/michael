module.exports = {
  translation: {
    welcome: {
      slogan: 'Michael 為您效勞！',
    },
    check: {
      fail: '項目名稱"{{- projectName }}"不合法。',
    },
    resolve: {
      helplessness: 'Michael 暫時無法為您創建項目。',
      message: {
        fileExists: '文檔 {{- path }} 已存在，$t(resolve.helplessness)',
        directoryNotEmpty: '目錄 {{- path }} 不為空，$t(resolve.helplessness)',
      },
      question: '您打算如何處置？',
      options: {
        override: '覆蓋（被移除的文檔無法恢復）',
        merge: '合併（被覆蓋的文檔無法恢復）',
        exit: '退出',
      },
    },
    query: {
      introduce: '現在讓我們來聊聊您的新項目。',
      questions: {
        framework: '您打算使用哪種前端框架？',
        appMode: '您的項目是哪種類型的應用程式？',
      },
      options: {
        framework: {
          react: 'React',
          vue: 'Vue',
          plain: '原生（不使用前端框架）',
        },
        appMode: {
          sp: '單頁面',
          mp: '多頁面',
        },
      },
    },
    execute: {
      tasks: {
        1: {
          title: '準備項目目錄',
          empty: '正在清空項目目錄...',
          create: '正在創建項目目錄...',
        },
        2: {
          title: '拷貝模板文檔',
          copy: '正在拷貝文檔...',
        },
        3: {
          title: '項目初始化',
          package: '正在初始化 package.json...',
          bundler: '正在初始化打包配置...',
          william: '正在安裝 Michael 相關依賴...',
          dependencies: '正在初始化項目依賴...',
        },
      },
      title: '🚧  正在執行中...',
    },
    install: {
      title: '🚢  正在安裝項目依賴...',
      notice: '這可能需要一點時間，請等待。',
    },
    complete: {
      title: '🎉  恭喜！',
      notice: '您的項目已經創建完畢。',
      list: {
        preface: '現在您可以通過：',
        appendix: '來啟動開發伺服器。',
      },
      enjoy: '祝您玩得愉快！',
    },
  },
};
