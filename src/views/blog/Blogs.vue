<template>
  <div class="container-fluid">
    <Vuetable
      ref="blogList"
      :api-mode="false"
      :fields="blogListFields"
      :data-manager="dataManager"
      :per-page="vuetableHelper.defaultPerPage"
      :css="vuetableHelper.tableCss"
      pagination-path="pagination"
      :no-data-template="vuetableHelper.noDataTemplate"
      @vuetable:pagination-data="vuetableHelper.paginationData($refs.blogListPagination, $event)"
    >
    </Vuetable>
    <VuetablePaginationFull
      ref="blogListPagination"
      :showPerPage="true"
      :per-page.sync="vuetableHelper.defaultPerPage"
      @change-page="vuetableHelper.changePage($refs.blogList, $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Vuetable } from 'vuetable-2';
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

  mounted() {
    axios.get("https://5f55a98f39221c00167fb11a.mockapi.io/blogs").then(({ data }) => {
      console.log('have a nice day', data);
      this.data = data;
    });
  }

  dataManager(sortOrder, pagination) {
    if (this.data.length < 1) return;

    let local = this.data;

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

    pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
    );
    console.log('pagination:', pagination)
    const from = pagination.from - 1;
    const to = from + this.perPage;

    return {
      pagination: pagination,
      // eslint-disable-next-line no-undef
      data: _.slice(local, from, to)
    };
  }

}
</script>
