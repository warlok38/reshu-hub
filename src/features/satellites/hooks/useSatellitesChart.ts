import { useSearchParams } from 'react-router-dom';
import { useGetSatellitesDataQuery } from 'shared/api/satellites';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { dateFormat } from 'shared/utils/format';
import { AxisConfig } from '@mui/x-charts';
import { isAllEquals, maxValueInicator, minValueInicator } from '../utils';

export function useSatellitesChart() {
  const [searchParams] = useSearchParams();
  const parameters = searchParams.get('parameters') ?? '';
  const dateFrom = searchParams.get('dateFrom') ?? '';
  const dateTo = searchParams.get('dateTo') ?? '';

  const input = {
    DateFrom: dayjs(dateFrom).format('YYYY-MM-DDTHH:mm:ss'),
    DateTo: dayjs(dateTo).format('YYYY-MM-DDTHH:mm:ss'),
    parameters,
  };

  const { data, isLoading } = useGetSatellitesDataQuery(input, {
    skip: !parameters || !dateFrom || !dateTo,
  });

  const charts = useMemo(() => {
    if (data == null) {
      return null;
    }

    return data.indicators.map(({ data, tag }) => {
      return {
        id: tag,
        xAxis: [
          {
            id: 'Дата',
            data: data.map((item) => dayjs(item.date)),
            valueFormatter: (date) => dateFormat(date),
          },
        ] as AxisConfig[],
        series: [
          {
            id: tag,
            label: tag,
            data: data.map((item) => item.value),
          },
        ],
        yAxis: [
          {
            max: isAllEquals(data) ? maxValueInicator(data) : undefined,
            min: isAllEquals(data) ? minValueInicator(data) : undefined,
          },
        ] as AxisConfig[],
      };
    });
  }, [data]);

  return {
    list: charts,
    isLoading,
  };
}
