export default class guideApi {
  static async getAuthorById(authorId) {
    return await fetch(`/authors/${authorId}`).then(result => result.json());
  }
}