// hum kisi vi function ko async bana sakte he aur uske andar promises ko await kor sakte hei
// async function always returns a promise

async function Kishor() {

  let rajshahiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rajshahi : 37 Deg")
      console.log("Rajshahi : 37 Deg")
    }, 3000)
  })

  let dhakaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dhaka : 33 Deg")
      console.log("Dhaka : 33 Deg")
    }, 1000)
  })

  // rajshahiWeather.then(alert)
  // dhakaWeather.then(alert)
  console.log("Fetching Dhaka Weather Please wait ....")
  let dhaka = await dhakaWeather;
  console.log("Fetching Rajshahi Weather Please wait ...")

  let rajshahi = await rajshahiWeather;
  return [dhaka, rajshahi]
}

// console.log("Welcome to weather control room")
// let a = Kishor()
// console.log(a)

// Kishor().then((x) => {
//   alert(x)
//   console.log(x)
// })

// async multiple functions runs parallely

const Paroi = async() =>{
  console.log("Hey I am Paroi and I am  waiting")
}

const main1 = async() =>{
  console.log("Welcome to Weather Control Room")
  let a = await Kishor()
  let b = await Paroi()

  // setTimeout(a.then((value)=>{
  //   console.log(value)
  // }),7000)
}

main1()