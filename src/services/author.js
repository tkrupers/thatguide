export default class guideApi {
  static async registerNewAuthor(payload) {
    return await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(result => {
      console.log(result);
    }).catch(error => console.error(error));
  }

  static async getAuthorById(authorId) {
    return await fetch(`/authors/${authorId}`).then(result => result.json());
  }
}