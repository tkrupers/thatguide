class BaseApi {
  static doFetch(url, optionalHeaders = {}) {
    const headers = {
      accept: 'application/json',
      credentials: 'same-origin',
      headers: {
        'Cache-Control': 'no-cache',
        Params: 'no-cache',
        'If-Modified-Since': '0',
        'Content-Type': 'application/json'
      },
      ...optionalHeaders
    };

    return fetch(url, headers);
  }

  static get(url) {
    return BaseApi
      .doFetch(url)
      .then(BaseApi.handleResponse)
      .catch(BaseApi.handleError);
  }

  static post(url, data) {
    return BaseApi
      .doFetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(BaseApi.handleResponse)
      .catch(BaseApi.handleError)
  }

  static handleResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(data => Promise.reject(data));
  }

  static handleError(error) {
    return Promise.reject(error);
  }
}

export default BaseApi;