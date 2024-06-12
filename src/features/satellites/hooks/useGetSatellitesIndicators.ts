import { useGetSatellitesIndicatorsQuery } from 'shared/api/satellites';
import { useMemo } from 'react';
import { OptionType } from 'shared/types/menu';

export function useGetSatellitesIndicators() {
  const { data, isFetching } = useGetSatellitesIndicatorsQuery();

  const list: OptionType<string>[] = useMemo(() => {
    if (data == null) {
      return [];
    }

    return data.map((item) => ({
      value: item.tag,
      label: item.name,
    }));
  }, [data]);

  return {
    list,
    isLoading: isFetching,
  };
}
