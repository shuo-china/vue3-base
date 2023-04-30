module.exports = {
  types: [
    { value: 'feat', name: '✨ feat: 新增功能' },
    { value: 'fix', name: '🐞 fix: 修复Bug' },
    { value: 'docs', name: '📝 docs: 文档变更' },
    { value: 'style', name: '💄 style: 代码样式美化' },
    { value: 'refactor', name: '♻️  refactor: 代码重构' },
    { value: 'perf', name: '⚡️ perf: 性能优化' },
    { value: 'test', name: '✅ test: 测试' },
    { value: 'revert', name: '⏪️ revert: 代码回退' },
    { value: 'chore', name: '🚀 chore: 构建/工程依赖/工具' },
    { value: 'build', name: '📦️ build: 构建流程、外部依赖变更（如升级 npm 包、修改 脚手架 配置等）' }
  ],
  messages: {
    type: '请选择提交类型(必填):',
    subject: '请简要描述提交(必填):',
    confirmCommit: '确定提交此说明吗？'
  },
  skipEmptyScopes: true,
  skipQuestions: ['body', 'footer']
}
