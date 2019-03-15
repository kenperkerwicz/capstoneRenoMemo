const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/homes/${id}`).then(e => e.json())
  },

  getTasks(homeId, categoryId) {

      return fetch (`${remoteURL}/tasks?homeId=${homeId}&catId=${categoryId}`).then(e => e.json())
    },
    // posts?title=json-server&author=typicode)

  getAll() {
    return fetch(`${remoteURL}/tasks`).then(e => e.json())
  },

  removeAndList(id) {
    return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:8088/tasks`))
        .then(e => e.json())
  },
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
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
