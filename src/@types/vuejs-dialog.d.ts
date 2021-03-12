declare module 'vuejs-dialog' {
  import { PluginFunction } from 'vue';

  module 'vue/types/vue' {
    interface Vue {
      $dialog: {
        alert(message: string, options?: DialogOptions): Promise;
        confirm(message: string, options?: DialogOptions): Promise;
      };
    }
  }

  export const install: PluginFunction<>;
  export const open: () => Promise;
}
