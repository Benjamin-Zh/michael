module.exports = {
  translation: {
    welcome: {
      slogan: 'Michael at your service!',
    },
    check: {
      fail: 'The project name "{{- projectName }}" is invalid.',
    },
    resolve: {
      helplessness: 'Michael can not create project for you now.',
      message: {
        fileExists: 'File {{- path }} already exists, $t(resolve.helplessness)',
        directoryNotEmpty: 'Directory {{- path }} is not empty, $t(resolve.helplessness)',
      },
      question: 'What would you like to do?',
      options: {
        override: 'Override (Removed files can not be restored)',
        merge: 'Merge (Overwritten files can not be restored)',
        exit: 'Exit',
      },
    },
    query: {
      introduce: 'Let\'s have some talk about your new project now.',
      questions: {
        framework: 'Which framework do you prefer?',
        appMode: 'Then your application type please?',
      },
      options: {
        framework: {
          react: 'React',
          vue: 'Vue',
          plain: 'Plain (no framework)',
        },
        appMode: {
          sp: 'Single Page',
          mp: 'Multiple Page',
        },
      },
    },
    execute: {
      tasks: {
        1: {
          title: 'Prepare project directory',
          empty: 'Emptying project path...',
          create: 'Creating project path...',
        },
        2: {
          title: 'Copy template files',
          copy: 'Copying files...',
        },
        3: {
          title: 'Initialize project',
          package: 'Initializling package.json...',
          bundler: 'Initializling bundler config...',
          william: 'Installing Michael\'s dependencies...',
          dependencies: 'Initializling Project dependencies...',
        },
      },
      title: '🚧  Now executing...',
    },
    install: {
      title: '🚢  Now installing dependencies...',
      notice: 'Gonna take some time, please wait.',
    },
    complete: {
      title: '🎉  Congratulations!',
      notice: 'Your project is now available.',
      list: {
        preface: 'Now you can do:',
        appendix: 'to start the development server.',
      },
      enjoy: 'Enjoy your time!',
    },
  },
};
