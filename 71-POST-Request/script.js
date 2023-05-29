// const createToDo = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },

//     body: JSON.stringify({
//       title: 'Kishor Kumar',
//       body: 'Paroi',
//       userId: 100,
//     })
//   }

//   let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//   let response = await p.json()
//   return response
// }

// const mainFunc = async () => {
//   let todo = createToDo()
//   console.log(todo)
// }

// mainFunc() 

// let options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify({
//     title: 'Kishor Kumar Paroi',
//     body: 'Web3.0 & AI Specialist',
//     userId: 1111,
//     Id: 1000
//   })
// }


// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));


const createToDo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo),
  }
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let response = await p.json()
  return response
}

const getTodo = async (id) => {
  let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let response = await p.json()
  return response
}

const mainFunc = async () => {
  let todo = {
    title: 'Kishor',
    body: 'Kumar',
    userId: 1703053,
  }
  let todor = await createToDo(todo)
  console.log(todor)
  console.log(await getTodo(5))
}

mainFunc()

