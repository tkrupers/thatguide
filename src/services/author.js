const guideApi = {
  parseJSON(response) {
    return response.json()
  },

  async registerNewAuthor(payload) {
    return await fetch(`/api/signup`, {
      method: 'POST',
      body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(guideApi.parseJSON)
      .then(data => data)
      .catch(error => error)
  },

  async getAuthorById(authorId) {
    return await fetch(`/api/authors/${authorId}`)
      .then(guideApi.parseJSON)
      .catch(error => error)
  }
}

export default guideApi;