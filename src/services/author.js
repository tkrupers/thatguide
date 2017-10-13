export default class guideApi {
  static async registerNewAuthor(payload) {
    return await fetch(`/api/signup`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
      })
      .then(result => result.json())
      .then(data => data)
      .catch(error => console.error(error));
  }

  static async getAuthorById(authorId) {
    return await fetch(`/api/authors/${authorId}`).then(result => result.json());
  }
}