import {PluginFunction} from "vue";

declare module 'lodash' {
  import { PluginFunction } from 'vue';

  const install: PluginFunction<unknown>;
  export default install;
}