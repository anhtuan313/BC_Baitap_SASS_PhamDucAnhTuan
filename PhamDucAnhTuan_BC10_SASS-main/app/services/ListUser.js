import { API_URL } from "../config/constant.js";

export default class ListUser {
  callApi(uri, method, data) {
    return axios({
      url: API_URL + uri,
      method,
      data,
    });
  }
}
