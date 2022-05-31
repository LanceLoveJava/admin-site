function setRem(width = 1280) {
    let view = document.documentElement.clientWidth
    if (view > width) {
      view = width
    } else if (view < 320) {
      view = 320
    }
    //得到html的Dom元素
    const htmlDom = document.documentElement
    //设置根元素字体大小
    htmlDom.style.fontSize = (view / width) * 100 + 'px'
  }

  // 初始化
  setRem()
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem()
  }
 