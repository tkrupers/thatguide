export default class guideApi {
  static async registerNewAuthor(payload) {
    return await fetch(`/authors/new`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(result => result.json());
  }

  static async getAuthorById(authorId) {
    return await fetch(`/authors/${authorId}`).then(result => result.json());
  }
}