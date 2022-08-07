
const API_ENDPOINT = "http://localhost:3000"

function fetchTodoListPromise() {
  return fetch(API_ENDPOINT + "/list").then((response) => {
    if(response.ok) return fetch(API_ENDPOINT + "/list")
    else return Promise.reject("Failed")
  }).then((response) => {
      return response.json()
  }).then(d => {
      console.log(d)
  }).catch(err => {
      console.log("error:", err)
  })
}

async function fetchTodoListAsync() {
  try {
    const response = await fetch(API_ENDPOINT + "/list")
    if(response.ok) {
      return console.log(await response.json())
    }
  } catch(err) {
    console.log("error: ", err)
  }
}