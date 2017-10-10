export default class guideApi {
  static async fetchAll() {
    return await fetch(`/guides`).then(result => result.json());
  }

  static async getDetails(id) {
    return await fetch(`/guides/${id}`).then(result => result.json());
  }
}