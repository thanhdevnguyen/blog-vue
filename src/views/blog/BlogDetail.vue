<template>
  <div class="d-flex justify-content-center p-md-5">
    <div class="container align-items-center">
      <img :src="blog.image" class="img-width" alt="image"/>
      <div class="card-body">
        <div class="align-items-center">
          <h5 class="card-title text-center">{{ blog.title }}</h5>
          <p class="card-text">
            {{ blog.content }}
          </p>
          <p class="card-text">
            {{ blog.createdAt | formatDateTime }}
          </p>
          <div class="d-flex justify-content-center">
            <router-link
                class="btn btn-primary"
                :to="{ name: 'Blogs' }"
            >Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import blogService from '@/services/blog.service';

@Component
export default class BlogDetail extends Vue {
  blog: Blog = {};

  mounted(): void {
    const id = +this.$route.params.id;
    this.getBlogById(id);
  }

  getBlogById(id: number) {
    blogService.find(id).then(({data}) => {
      this.blog = data;
    }).catch(() => {
      this.$router.push({name: 'NotFound'});
    });
  }
}
</script>

<style scoped lang="scss">
.img-width {
  width: 350px;
  padding-top: 20px;
}

.content-text {
  text-align: start;
  color: black;
  text-decoration: none;
}
</style>
