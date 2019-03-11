const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/homes/${id}`).then(e => e.json())
  },

  getAll() {
    return fetch(`${remoteURL}/homes`).then(e => e.json())
  },
  
  removeAndList(id) {
    return fetch(`http://localhost:8088/homes/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:8088/homes`))
        .then(e => e.json())
  },
  post(newHome) {
    return fetch(`${remoteURL}/homes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHome)
    }).then(data => data.json())
  },
  put(editedHome) {
    return fetch(`${remoteURL}/homes/${editedHome.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedHome)
    }).then(data => data.json());
  }
}
