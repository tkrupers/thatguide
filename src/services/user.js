import BaseApi from './base';

class GuideService extends BaseApi {
  static register(payload) {
    return super.post(`/api/signup`, payload)
      .then(data => data)
      .catch(error => error);
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