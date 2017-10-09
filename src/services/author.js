export default class guideApi {
  static async getAuthorById(authorId) {
    return await fetch(`/author/${authorId}`).then(result => result.json());
  }
}