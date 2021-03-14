import { Vue } from 'vue-property-decorator';
import formatDateTime from './formatDate';

export default {
  install() {
    Vue.filter('formatDateTime', formatDateTime);
  },
};
