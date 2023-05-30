import http from "../http-common";

class DataService {
  postData(filter) {
    return http.post(`/find`, { cuisine: filter });
  }
}

export default new DataService();
