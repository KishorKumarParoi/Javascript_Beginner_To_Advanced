async function Kishor() {
  let rajshahiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rajshahi : 37 Deg")
      console.log("Rajshahi : 37 Deg")
    }, 1000)
  })


  let dhakaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dhaka : 33 Deg")
      console.log("Dhaka : 33 Deg")
    }, 3000)
  })

  // rajshahiWeather.then(alert)
  // dhakaWeather.then(alert)

  console.log("Fetching Rajshahi Weather .... ")
  let rajshahi = await rajshahiWeather
  console.log("Fetching Dhaka Weather ..... ")
  let dhaka = await dhakaWeather

  return [rajshahiWeather, dhakaWeather]
}

// console.log("Hello to weather control room")
// Kishor().then((value) => {
//   console.log(value)
// })

const Paroi = async () => {
  console.log("Hello I am Surname of Kishor")
}

const main1 = async () => {
  console.log("Hello to weather control room")

  let a = await Kishor();
  let b = await Paroi()
}

// setTimeout((main1(), 5000)
setTimeout(() => {
  setInterval(() => {
    main1()
  }, 1000)
}, 1000)