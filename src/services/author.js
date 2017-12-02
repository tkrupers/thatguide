import BaseApi from './base';

class GuideService extends BaseApi {
  static getAuthorById(authorId) {
    return super.get(`/api/authors/${authorId}`)
  }
}

export default GuideService;