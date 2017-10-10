export default class guideApi {
  static async fetchAll() {
    return await fetch(`/guides`).then(result => result.json());
  }

  static async getDetails(id) {
    return await fetch(`/guides/${id}`).then(result => result.json());
  }

  static async saveNewStep({id, payload}) {
    return await fetch(`/guides/${id}/new-step`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(result => result.json());
  }

  static async saveGuide(payload) {
    return await fetch(`/guides/new`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(result => result.json());
  }
}