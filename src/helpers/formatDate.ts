import moment from 'moment';
import Constants from '@/constants';

const formatDateTime = (value: string, format?: string) => moment(value, Constants.SERVER_FORMAT).format(format || Constants.DATE_TIME_FORMAT);

export default formatDateTime;
