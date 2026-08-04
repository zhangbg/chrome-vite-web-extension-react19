module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修复bug
        "docs", // 文档更新
        "style", // 代码格式调整
        "refactor", // 代码重构
        "perf", // 性能优化
        "test", // 测试相关
        "chore", // 构建/工具变更
        "revert", // 回退
        "ci", // CI/CD 相关
        "build", // 构建系统/依赖变更
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
};
