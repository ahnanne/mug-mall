import { Link } from 'react-router-dom';

import { useGetProductCategories } from '@/hooks/queries/product';

import LoadingDecorator from '@/components/layout/LoadingDecorator';

const MainPage = () => {
  const { data, isFetching, isSuccess, isError } = useGetProductCategories();

  return (
    <>
      <h2>머그몰, 뜨거운 커피의 완벽한 파트너.</h2>
      <LoadingDecorator isLoading={isFetching}>
        {isFetching && <p aria-busy="true">loading...</p>}
        {isSuccess && (
          <ul className="category-list">
            {(data ?? []).map((category, idx) => (
              <li key={idx}>
                {idx < 3 && <em className="new-brand">신규 브랜드</em>}
                <Link to={`/products?category=${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        )}
        {isError && <p>Something went wrong..</p>}
      </LoadingDecorator>
    </>
  );
};

export default MainPage;
