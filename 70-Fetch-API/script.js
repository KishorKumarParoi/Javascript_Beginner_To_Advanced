let p = fetch("https://goweather.herokuapp.com/weather/%7Brajshahi%7D")

p.then((response) => {
  console.log(response.status)
  console.log(response.ok)
  console.log(response.headers)
  return response.json()
}).then((value2) => {
  console.log(value2)
})

// ajax - asynchronous javascript and xml 
// let promise = fetch(url, [options])

