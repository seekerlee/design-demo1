const isWide = window.innerWidth > 768

// enterHome 函数包含了页面载入后要执行的操作
function enterHome() {
  // 给相关元素增加 animation 类以执行动画，在 CSS 中给 animation 类定义了动画
  document.querySelectorAll("header h1 span").forEach(e => {
    e.classList.add("animation")
  })
  document.querySelector("header p.mysubtitle").classList.add("animation")
}
// 在载入完成后执行 enterHome 函数
Pace.once("done", enterHome)