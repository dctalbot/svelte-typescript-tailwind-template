module.exports = {
  content: ["./public/index.html", "./src/**/*.svelte", "./src/*.svelte"],
  css: ["./public/build/bundle.css"],
  output: "./public/build/bundle.css",
  keyframes: true,
  defaultExtractor: (content) => [
    ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
    ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
  ],
  safelist: {
    standard: [/^svelte\-/],
    deep: [/^svelte\-/],
    greedy: [/^svelte\-/],
  },
}
