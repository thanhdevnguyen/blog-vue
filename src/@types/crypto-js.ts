// eslint-disable-next-line max-classes-per-file
declare module '*.crypto-js' {
  import { PluginFunction } from 'vue';

  const install: PluginFunction<unknown>;
  export default install;
}
