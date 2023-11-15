import qs from 'qs';

const pathWithQuery = (path: string, query: Dict) => {
  // https://www.npmjs.com/package/qs#stringifying
  const queryString = qs.stringify(query, {
    addQueryPrefix: true,
  });

  return `${path}${queryString}`;
};

export default {
  GET_MYINFO: '/mypage/myinfo',
  GET_IMAGE: (query: { keyword: string }) =>
    pathWithQuery('/image/search', query),
}; // TODO:
