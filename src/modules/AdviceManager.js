const remoteURL = "http://localhost:8088"

export default {
  getAll() {
    return fetch(`${remoteURL}/advice`).then(e => e.json())
  }}