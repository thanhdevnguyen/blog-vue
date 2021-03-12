import Vuetable from 'vuetable-2';
import VuetablePaginationFull from '@/components/shared/vuetable/VuetablePaginationFull.vue';
import Constants from '@/constants';

export default {
  components: {
    Vuetable,
    VuetablePaginationFull,
  },
  defaultPerPage: Constants.PER_PAGE,
  perPages: Constants.OPTIONS_PER_PAGE,
  tableCss: {
    tableClass: 'table table-striped table-bordered table-hovered',
    loadingClass: 'loading',
    ascendingIcon: 'fa fa-chevron-up',
    descendingIcon: 'fa fa-chevron-down',
    handleIcon: 'fa fa-menu-hamburger',
  },
  changePage(tableRef: { changePage: (page: number) => void }, page: number) {
    tableRef.changePage(page);
  },
  paginationData(paginationRef: { setPaginationData: (data: PaginationDataModel) => void }, paginationData: PaginationDataModel) {
    if (Array.isArray(paginationRef)) {
      paginationRef.map((item) => item.setPaginationData(paginationData));
    } else {
      paginationRef.setPaginationData(paginationData);
    }
  },
};
