<template>
  <router-link :to="{ name: 'blogDetail', params: { id: value.id } }">
    <li class="media pb-2 border-bottom hover-item">
      <img :src="value.image" class="mr-3 img-width" alt="Loading..."/>
      <div class="media-body content-text">
        <h5 class="mt-0 mb-2">{{ value.title }}</h5>
        {{ value.content }}
        <p>{{ value.createdAt | formatDateTime }}</p>
      </div>
    </li>
  </router-link>
</template>

<script lang="ts">
import {
  Vue, Prop, Component,
} from 'vue-property-decorator';

@Component
export default class BlogItem extends Vue {
  @Prop({required: true, type: Object}) value!: {};
}
</script>

<style scoped lang="scss">
a:hover {
  text-decoration: none;
}

.hover-item:hover {
  opacity: 0.5;
}

.img-width {
  width: 150px;
}

.content-text {
  text-align: start;
  color: black;
  text-decoration: none;
}
</style>
