// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json))

const getTodo = async (id) => {
  let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let response = await p.json()
  return response
}

const createTodo = async (todo) => {
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

const mainFunc = async () => {
  console.log(await getTodo(5))
  let todo = {
    title: 'Kishor',
    body: 'Kumar',
    userId: 1703053,
    Aim: 'Becoming Web3.0 & AI Expert',
  }

  let todor = await createTodo(todo)
  console.log(todor)
}



mainFunc()