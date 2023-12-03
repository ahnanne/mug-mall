import { Link } from 'react-router-dom';

import { useGetProductCategories } from '@/hooks/queries/product';

import LoadingDecorator from '@/components/layout/LoadingDecorator';

const MainPage = () => {
  const { data, isFetching, isSuccess, isError } = useGetProductCategories();

  return (
    <>
      <h2>Check our product categories!</h2>
      <LoadingDecorator isLoading={isFetching}>
        {isFetching && <p aria-busy="true">loading...</p>}
        {isSuccess && (
          <ul>
            {(data?.data ?? []).map((category, idx) => (
              <li key={idx}>
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
