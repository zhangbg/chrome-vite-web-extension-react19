/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    // 适配 Tailwind CSS v4 的 @theme 和 @import 语法
    "at-rule-no-unknown": null,
    // 允许 Tailwind 的任意属性值（如 bg-[#xxx]）
    "custom-property-empty-line-before": null,
    // 允许 CSS 自定义属性的驼峰命名
    "custom-property-pattern": null,
    // 允许 !important（Tailwind 有时需要）
    "no-important": null,
    // 缩进使用 4 空格（与项目现有 CSS 风格一致）
    "indentation": 4,
    // 允许空规则集（Tailwind 的 @theme 块可能产生）
    "block-no-empty": null,
  },
  overrides: [
    {
      files: ["**/*.tsx", "**/*.ts"],
      customSyntax: "postcss-syntax",
    },
  ],
  ignoreFiles: [
    "dist_chrome/**",
    "dist_firefox/**",
    "node_modules/**",
  ],
};