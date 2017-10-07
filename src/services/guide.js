export default class guideApi {
  static async getDetails(id) {
    return await fetch(`/guide/${id}`).then(result => result.json());
  }
}