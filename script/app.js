const isWide = window.innerWidth > 768

function installMenuEvent() {
  // 1. 找到需要用到的元素
  const menuBtn = document.querySelector('#menu-button')
  const menuContainer = document.querySelector('.menu-container')
  const menus = document.querySelectorAll('.menu-container ul li a')

  // 2. 使用 gsap api(TweenMax.min.js) 定义动画“剧本”。注意，现在并没有开始“表演”
  const menuTimeline = new TimelineLite({ paused: true })
  menuTimeline.delay(.6)
  // 给所有菜单加上进入动画
  menus.forEach(menu => {
    // 动画元素时间：menu，动画时间: 0.5s，动画初始状态 opacity: 0, y: -20，动画结束状态 { opacity: 1, y: 0 }。动画提前 0.4 秒发生
    menuTimeline.fromTo(menu, .5, { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, "-=0.4")
  })

  menuBtn.addEventListener('click', () => {
    // 让按钮，以及菜单的容器增加或者移除 opened 类，配合 css 实现菜单 div 的展开和关闭
    menuBtn.classList.toggle('opened')
    menuContainer.classList.toggle('opened')
    // 开始表演剧本
    menuTimeline.restart(true)
  })
}
// enterHome 函数包含了页面载入后要执行的操作
function enterHome() {
  // 给相关元素增加 animation 类以执行动画，在 CSS 中给 animation 类定义了动画
  document.querySelectorAll("header h1 span").forEach(e => {
    e.classList.add("animation")
  })
  document.querySelector("header p.mysubtitle").classList.add("animation")
  // 增加菜单相关事件
  installMenuEvent()
}
// 在载入完成后执行 enterHome 函数
Pace.once("done", enterHome)