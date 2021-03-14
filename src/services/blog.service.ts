import BaseService from './base.service';

class BlogService<T> extends BaseService {
  protected url = 'https://5f55a98f39221c00167fb11a.mockapi.io/blogs/';

  listAll() {
    return this.get<T[]>(this.url);
  }

  listByParams(queryParams: ParamsFilter) {
    return this.get<T>(`${this.url}?page=${queryParams.page}&limit=${queryParams.perPage}&title=${queryParams.title}&content=${queryParams.content}&sortBy=${queryParams.sortBy}&order=${queryParams.order}`);
  }

  find(id: string|number) {
    return this.get<T>(`${this.url}/${id}`);
  }
}

export default new BlogService;
