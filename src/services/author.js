import BaseApi from './base';

class GuideService extends BaseApi {
  static registerNewAuthor(payload) {
    return super.post(`/api/signup`, payload)
      .then(data => data)
      .catch(error => error);
  }

  static getAuthorById(authorId) {
    return super.get(`/api/authors/${authorId}`)
  }

  static logout() {
    return super.get(`/api/logout`);
  }

  static login(payload) {
    return super.post(`/api/login`, payload)
      .then(data => data)
      .catch(error => error);
  }
}

export default GuideService;