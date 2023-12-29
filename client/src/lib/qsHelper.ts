import { parse } from 'qs';
import { Location } from 'react-router-dom';

export const getQueryFromLocation = (location: Location, queryKey: string) => {
  const { search } = location;

  const queries = parse(search, {
    ignoreQueryPrefix: true, // to remove '?' on parse result
  });

  return (queries[queryKey] as string) ?? '';
};
