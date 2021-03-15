<template>
  <div class="container p-md-5">
    <div class="card">
      <div class="card-body">
        <div class="form-group row">
          <div class="col-12">
            <div class="form-group row">
              <div class="col-12 col-md-3">
                <label class="col-form-label float-left">Title</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="params.title"
                />
              </div>
              <div class="col-12 col-md-3">
                <label class="col-form-label float-left">Content</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="params.content"
                />
              </div>
              <div class="col-12 col-md-3">
                <label class="col-form-label float-left">Sort by</label>
                <select
                    class="form-control"
                    id="sortBy"
                    v-model="params.sortBy"
                >
                  <option value="createdAt">Created at</option>
                  <option value="title">Title</option>
                  <option value="content">Content</option>
                </select>
              </div>
              <div class="col-12 col-md-3">
                <label class="col-form-label float-left">Order</label>
                <select
                    class="form-control"
                    id="orderBy"
                    v-model="params.order"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-12">
            <button
                @click="onFiltersSet"
                class="btn btn-success float-right"
            >Search
            </button>
            <button
                @click="resetParams"
                class="btn btn-primary float-right mx-2"
            >Reset
            </button>
          </div>
          <div class="col-12 mt-2 border-top">
            <ul
                v-for="(blog, index) in blogs"
                class="col-12 list-unstyled mt-3"
                :key="index"
            >
              <BlogItem :value="blog"/>
            </ul>
          </div>
          <div class="col-12 text-center pt-4">
            <nav v-if="totalPage > 0">
              <Paginate
                  :pageCount="totalPage"
                  :clickHandler="changePage"
                  :firstLastButton="true"
                  :containerClass="'pagination justify-content-end'"
                  :page-class="'page-item'"
                  :page-link-class="'page-link'"
                  :prev-link-class="'page-item'"
                  :next-link-class="'page-item'"
                  :prev-class="'page-link'"
                  :next-class="'page-link'"
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BlogItem from './BlogItem.vue';
import Paginate from '@/components/shared/Paginate.vue';
import blogService from '@/services/blog.service';

@Component({
  components: {
    BlogItem,
    Paginate,
  },
})
export default class Blogs extends Vue {

  blogList: Blog[] = [];

  blogs: Blog[] = [];

  params: ParamsFilter = this.defaultParams();

  blogCount = 0;

  totalPage = 0;

  mounted() {
    this.getAllBlogs();
    this.getBlogsByParams(this.params);
  }

  defaultParams() {
    return {
      perPage: 10,
      page: 1,
      title: '',
      content: '',
      sortBy: 'createdAt',
      order: 'asc',
    }
  }

  getAllBlogs() {
    blogService.listAll().then(({data}) => {
      this.blogList = data as Blog[];
      this.blogCount = this.blogList.length;
      if (this.params.perPage) {
        this.totalPage = Math.ceil(this.blogCount / this.params.perPage);
      }
    });
  }

  getBlogsByParams(params: ParamsFilter) {
    blogService.listByParams(params).then(({data}) => {
      this.blogs = data;
    })
  }

  onFiltersSet() {
    this.getBlogsByParams(this.params);
  }

  changePage(page: number) {
    this.params.page = page;
    this.getBlogsByParams(this.params);
  }

  resetParams() {
    this.params = this.defaultParams();
    this.getBlogsByParams(this.params);
  }
}
</script>
