import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    rules: {
      indent: ['warn', 2], // 缩进使用 2 个空格
      'linebreak-style': ['warn', 'unix'], // 使用 Unix 风格的换行符
      quotes: ['warn', 'single'], // 使用单引号
      semi: ['warn', 'never'], // 语句末尾不加分号
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 console 使用，开发环境中关闭规则
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 debugger 使用，开发环境中关闭规则
      'comma-dangle': 'off',
      'no-unused-vars': 'off', //关闭未使用变量警告
      'space-before-function-paren': 0,
      'generator-star-spacing': 'off',
      'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
      'array-bracket-spacing': 0, // 方括号
      '@typescript-eslint/no-unused-vars': 'off', // 关闭未使用变量警告
      'vue/multi-word-component-names': 'off', //Vue 组件的名称应该是多词的，以提高可读性和维护性
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // 忽略文件
  {
    ignores: [
      '**/dist',
      './src/main.ts',
      '.vscode',
      '.idea',
      '*.sh',
      '**/node_modules',
      '*.md',
      '*.woff',
      '*.woff',
      '*.ttf',
      'yarn.lock',
      'package-lock.json',
      '/public',
      '/docs',
      '**/output',
      '.husky',
      '.local',
      '/bin',
      'Dockerfile',
    ],
  },
]
