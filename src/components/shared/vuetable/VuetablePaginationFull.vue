<template>
  <div
    v-if="paginationData && paginationData.total"
    class="vuetable-pagination-full-container padding-30"
  >
    <div class="vuetable-pagination-info-container">
      <div class="item-pagination-info">
        <VuetablePaginationInfo
          class="custom-info"
          v-if="showInfo"
          ref="paginationInfo"
          :info-template="paginationTextAndCss.infoTemplate"
          :no-data-template="paginationTextAndCss.noDataTemplate"
        />
      </div>
<!--      <template v-if="showPerPage">-->
<!--        <div class="dropdown-select-default dropdown-select-auto">-->
<!--          <div class="shortby-action-top-filter">-->
<!--            <Dropdown-->
<!--              :options="options"-->
<!--              :is-open-down="false"-->
<!--              :value="perPageDropdown"-->
<!--              @input="onChangeDropdown"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--      </template>-->
    </div>
    <div class="vuetable-pagination-container margin-top-md-10 margin-top-mb-10">
      <VuetablePagination
        v-if="showPaginationInfo"
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Watch, Vue, Emit,
} from 'vue-property-decorator';
// import Dropdown from '@/components/shared/dropdown/Dropdown.vue';
import Constants from '@/constants';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo.vue';
import VuetablePagination from './VuetablePagination.vue';
import paginationTextAndCss from './paginationTextAndCss';

@Component({
  components: {
    // Dropdown,
    VuetablePagination,
    VuetablePaginationInfo,
  },
})
export default class VuetablePaginationFull extends Vue {
  @Prop({
    type: Boolean,
    default: true,
  }) showInfo!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  }) showPerPage!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) showPaginationInfo!: boolean;

  @Prop({
    type: Number,
    default: 20,
  }) perPage!: number;

  perPageDropdown = Constants.PER_PAGE;

  paginationTextAndCss = paginationTextAndCss;

  paginationData: PaginationDataModel = {};

  options: number[] = Constants.OPTIONS_PER_PAGE;

  @Watch('perPage', { immediate: true })
  onChangePerPage(value: number) {
    this.perPageDropdown = value;
  }

  setPaginationData(paginationData: PaginationDataModel) {
    this.paginationData = paginationData;
    if (paginationData && paginationData.total) {
      Vue.nextTick(() => {
        if (this.$refs.pagination) {
          (this.$refs.pagination as Vue & { setPaginationData: (data: PaginationDataModel) => void }).setPaginationData(paginationData);
        }
        if (this.$refs.paginationInfo) {
          (this.$refs.paginationInfo as Vue & { setPaginationData: (data: PaginationDataModel) => void }).setPaginationData(paginationData);
        }
      });
    }
  }

  @Emit('change-page')
  private onChangePage(page: number) {
    return page;
  }

  @Emit('update:per-page')
  private onChangeDropdown(value: number) {
    return value;
  }
}
</script>
<style scoped lang="scss">
.vuetable-pagination-full-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .vuetable-pagination-info-container {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    .item-pagination-info {
      margin-left: 15px;
      margin-right: 15px;
      .custom-info {
        font-size: 14px;
        font-family: "CircularStd-Medium", sans-serif;
      }
    }
  }
  .vuetable-pagination-container {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }
}
</style>
