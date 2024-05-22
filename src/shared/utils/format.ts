import dayjs from 'dayjs';
import { DATE_FORMAT_DEFAULT } from 'shared/constants/dateFormat';

export const dateFormat = (
  date: string,
  format: string = DATE_FORMAT_DEFAULT
) => {
  if (date && date !== '') {
    return dayjs(date).format(format);
  }
  return date;
};
