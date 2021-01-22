function debounce(fn) {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, 500)
  }
}

for (let i = 0; i < 10; i++) {
  debounce(() => {
    console.log(i)
  })()
}


function throttle(fn) {
  let canRun = true
  return function () {
    if (!canRun) {
      return
    }
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, 500)
  }
}
