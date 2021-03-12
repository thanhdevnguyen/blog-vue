interface PaginationTextCssDataModel {
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
}
