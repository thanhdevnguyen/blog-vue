// eslint-disable-next-line max-classes-per-file
declare module 'vue-select' {
  import { Component, Vue } from 'vue-property-decorator';

  @Component export class VueSelect extends Vue {}
  export function install(vue: Vue);
}
