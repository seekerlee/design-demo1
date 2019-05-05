const isWide = window.innerWidth > 768

function enterHome() {
  document.querySelectorAll("header h1 span").forEach(e => {
    e.classList.add("animation")
  })
  document.querySelector("header p.mysubtitle").classList.add("animation")
  installHomeEvent()
  installMenuEvent()
}

function installHomeEvent() {

  // scroll magic
  const controller = new ScrollMagic.Controller()

  document.querySelectorAll("section.product").forEach((e, index) => {
    const wrapper = e.querySelector("figure.img-wrapper")
    const card = e.querySelector(".mycard")
    const img = wrapper.querySelector("img")

    if (isWide) {
      new ScrollMagic.Scene({
        triggerElement: e,
        duration: "100%"
      })
        .setTween(card, 1, { x: index % 2 == 0 ? 100 : -100 })
        // .addIndicators({name: "??"})
        .addTo(controller)
    }


    new ScrollMagic.Scene({
      triggerElement: e,
      duration: "100%"
    })
      .setTween(wrapper, 1.5, { x: 0, y: -20 })
      // .addIndicators({name: "??"})
      .addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: e,
      duration: "100%"
    })
      .setTween(img, 1.5, { x: 0, y: -20 })
      // .addIndicators({name: "2??"})
      .addTo(controller)
  })

  new ScrollMagic.Scene({
    triggerElement: "#trigger1",
  })
    .setTween("#menu-button div", 0.1, { backgroundColor: "black" })
    // .addIndicators({name: "hhhhh"})
    .addTo(controller)

  // smooth scroll
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault()
      // scroll to elemnet
      let target = anchor.getAttribute('href') // #team
      let targetEle = document.querySelector(target)
      targetEle.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  })
}

function installMenuEvent() {
  let navOpened = false;
  const menuBtn = document.querySelector('#menu-button')
  const menuContainer = document.querySelector('.menu-container')

  let menus = document.querySelectorAll('.menu-container ul li a')

  let menuTimeline = new TimelineLite({ paused: true })
  menuTimeline.delay(.6)
  menus.forEach(menu => {
    menuTimeline.fromTo(menu, .5, { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, "-=0.4")
  })

  menuBtn.addEventListener('click', () => {
    navOpened = !navOpened
    menuBtn.classList.toggle('opened')
    menuContainer.classList.toggle('opened')
    // vid.pause()

    menuTimeline.restart(true);
  })
}

Pace.once("done", enterHome)

