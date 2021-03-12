// eslint-disable-next-line max-classes-per-file
declare module 'vuetable-2' {
  import { Component, Mixins, Vue } from 'vue-property-decorator';

  @Component export class Vuetable extends Vue {}
  // Mixins
  @Mixins export class VuetableFieldMixin extends Vue {}
  @Mixins export class VuetableFieldCheckboxMixin extends Vue {}
  @Mixins export class VuetablePaginationInfoMixin extends Vue {}
  @Mixins export class VuetablePaginationMixin extends Vue {}
  // UI components
  @Component export class VuetableColGutter extends Vue {}
  @Component export class VuetableFieldCheckbox extends Vue {}
  @Component export class VuetableFieldHandle extends Vue {}
  @Component export class VuetableFieldSequence extends Vue {}
  @Component export class VuetablePagination extends Vue {}
  @Component export class VuetablePaginationDropDown extends Vue {}
  @Component export class VuetablePaginationInfo extends Vue {}
  @Component export class VuetableRowHeader extends Vue {}
  export function install(vue: Vue);
}
