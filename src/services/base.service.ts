import axios from 'axios';

class BaseService {
  get<T = unknown>(url: string) {
    return axios.get(url);
  }

  post<T = unknown>(url: string, data: unknown) {
    return axios.post(url, data);
  }

  put<T = unknown>(url: string, data: unknown) {
    return axios.put(url, data);
  }

  delete<T = unknown>(url: string) {
    return axios.delete(url);
  }
}

export default BaseService;
