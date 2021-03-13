<template>
  <section class="main-pagination-site">
    <div class="row align-items-center align-items-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 wow fadeInUp">
        <div class="section-pagination">
          <nav v-show="tablePagination && lastPage > firstPage">
            <ul class="pagination">
              <li
                v-if="totalPage > 5"
                class="container-last-first mr-2"
                :class="[isOnFirstPage ? 'disabled' : 'active']"
              >
                <a class="last-first" @click="loadPage(firstPage)">
                  <span class="">First</span>
                </a>
              </li>

              <template v-if="notEnoughPages">
                <template v-for="(n, i) in totalPage">
                  <li
                    class="page-item"
                    :key="i"
                    :class="[isCurrentPage(i + firstPage) ? 'active' : '']"
                  >
                    <a
                      class="page-link"
                      :key="i"
                      @click.prevent="loadPage(i + firstPage)"
                      v-html="n"
                    />
                  </li>
                </template>
              </template>
              <template v-else>
                <template v-for="(n, i) in windowSize">
                  <li
                    class="page-item"
                    :key="i"
                    :class="[isCurrentPage(windowStart + i + firstPage - 1) ? 'active' : '']"
                  >
                    <a
                      class="page-link"
                      :key="i"
                      @click.prevent="loadPage(windowStart + i + firstPage - 1)"
                      v-html="windowStart + n - 1"
                    />
                  </li>
                </template>
              </template>
              <template v-if="!isOnLastPage && (totalPage - windowStart !== 4) && totalPage > 7">
                <li class="page-item disabled">
                  <a>
                    <span class="page-link">...</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" @click="loadPage(lastPage)" v-html="lastPage"/>
                </li>
              </template>
              <li
                v-if="totalPage > 5"
                class="container-last-first ml-2"
                :class="[isOnLastPage ? 'disabled' : 'active']"
              >
                <a class="last-first" @click="loadPage(lastPage)">
                  <span class="">Last</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import VuetablePaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  mixins: [VuetablePaginationMixin],
})
export default class VuetablePagination extends Vue {}

</script>
<style scoped lang="scss">
  a {
    cursor: pointer;
  }

  .page-item {
    font-size: 14px;
    font-family: "CircularStd-Medium", sans-serif;
  }

  .pagination > .disabled > a {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }

  .pagination .page-item .page-link {
    width: 35px;
    height: 35px;
    line-height: 35px;
  }

  .container-last-first {
    display: flex;
    align-items: center;
    .last-first {
      border-radius: 50%;
      width: 35px;
      height: 35px;
      line-height: 35px;
      padding: 0;
      text-align: center;
      color: #5e6d87;
      font-size: 13px;
      font-family: "CircularStd-Medium", sans-serif;
      border: 1px solid #dee2e6;
    }
  }

  .active {
    .last-first {
      &:hover {
        background-color: #337afa;
        border-color: #337afa;
        color: #fff;
      }
    }
  }
</style>
