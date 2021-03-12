interface VuetableHelperModel {
  components?: object;
  defaultPerPage?: number;
  perPages?: number[];
  tableCss?: {
    tableClass?: string;
    loadingClass?: string;
    ascendingIcon?: string;
    descendingIcon?: string;
    handleIcon?: string;
  };
  paginationCss?: {
    infoClass?: string;
    wrapperClass?: string;
    activeClass?: string;
    disabledClass?: string;
    pageClass?: string;
    linkClass?: string;
    icons?: {
      first?: string;
      prev?: string;
      next?: string;
      last?: string;
    };
  };
  infoTemplate?: string;
  noDataTemplate?: string;
  // eslint-disable-next-line
  changePage?: (tableRef: any, page: number) => void;
  // eslint-disable-next-line
  paginationData?: (paginationRef: any, paginationData: PaginationDataModel) => void;
  headerAuthorization?: () => void;
}
