const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/categories/${id}`).then(e => e.json())
  },

  getTasks(id) {
      return fetch (`http://localhost:8088/tasks?homeId=${id}`).then(e => e.json())
    },
    // posts?title=json-server&author=typicode)

  getAll() {
    return fetch(`${remoteURL}/categories`).then(e => e.json())
  },

  removeAndList(id) {
    return fetch(`http://localhost:8088/categories/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:8088/categories`))
        .then(e => e.json())
  },
  post(newTask) {
    return fetch(`${remoteURL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(data => data.json())
  },
  // put(editedHome) {
  //   return fetch(`${remoteURL}/homes/${editedTask.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(editedTask)
  //   }).then(data => data.json());
  // }
}
