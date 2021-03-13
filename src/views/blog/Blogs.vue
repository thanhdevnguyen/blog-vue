<template>
  <div class="container-fluid">
    <Vuetable
      ref="blogList"
      :api-mode="false"
      :fields="blogListFields"
      :data-manager="dataManager"
      :per-page="perPage"
      :css="vuetableHelper.tableCss"
      pagination-path="pagination"
      :no-data-template="vuetableHelper.noDataTemplate"
      @vuetable:pagination-data="vuetableHelper.paginationData($refs.blogListPagination, $event)"
    >
    </Vuetable>
    <VuetablePaginationFull
      ref="blogListPagination"
      :showPerPage="true"
      :per-page.sync="perPage"
      @change-page="vuetableHelper.changePage($refs.blogList, $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Vuetable } from 'vuetable-2';
import * from "lodash"
// import Dropdown from '@/components/shared/dropdown/Dropdown.vue';
import VuetableHelper from '@/helpers/vuetable-helper';
import blogListFields from './fields/blogListFields';
import axios from "axios";

@Component({
  components: {
    ...VuetableHelper.components,
    Vuetable,
    // Dropdown,
  },
})
export default class Blog extends Vue {
  blogListFields: FieldsVuetable[] = blogListFields;

  vuetableHelper: VuetableHelperModel = VuetableHelper;

  blogList: Blog[] = [];

  perPage = 10;

  mounted() {
    axios.get("https://5f55a98f39221c00167fb11a.mockapi.io/blogs").then(({ data }) => {
      console.log('have a nice day', data);
      this.blogList = data;
    });
  }

  dataManager(sortOrder: string | any[], pagination: PaginationDataModel) {
    if (this.blogList.length < 1) return;

    let local = this.blogList;

    // sortOrder can be empty, so we have to check for that as well
    if (sortOrder.length > 0) {
      console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
      // eslint-disable-next-line no-undef
      local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
      );
    }

    pagination = (this.$refs.blogList as Vue & { makePagination: (data: number, perPage: number) => PaginationDataModel }).makePagination(
        local.length,
        this.perPage
    );
    console.log('pagination:', pagination)
    const from = pagination.from && pagination.from - 1;
    const to = from && from + this.perPage;

    return {
      pagination: pagination,
      // eslint-disable-next-line no-undef
      data: _.slice(local, from, to)
    };
  }

}
</script>
