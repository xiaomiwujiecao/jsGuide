// origin code , bad code
function time1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(new Date, i);
    }, 1000)
  }
}

// time1()


// better code

function time2() {
  const tasks = []
  const output = (i) => {
    return new Promise((resolve, reject) => setTimeout(() => {
      console.log(new Date(), i)
      resolve()
    }, 1000 * i))
  }
  
  for (let i = 0; i < 5; i++) {
    tasks.push(output(i))
  }
  
  Promise.all(tasks).then((data) => {
    console.log(data)
  })
  
  
}


// time2()


async function time3() {
  const sleep = (timeoutMS) => {
    return new Promise(resolve => setTimeout(resolve, timeoutMS))
  }
  for (let i = 0; i < 5; i++) {
    await sleep(1000)
    console.log(new Date, i);
  }
}

time3()
