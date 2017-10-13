export default class guideApi {
  static async fetchAll() {
    return await fetch(`/api/guides`).then(result => result.json());
  }

  static async getDetails(id) {
    return await fetch(`/api/guides/${id}`).then(result => result.json());
  }

  static async saveNewStep({id, payload}) {
    return await fetch(`/api/guides/${id}/new-step`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload)
    }).then(result => result.json());
  }

  static async saveGuide(payload) {
    return await fetch(`/api/guides/new`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
        credentials: 'include'
    }).then(result => result.json());
  }
}