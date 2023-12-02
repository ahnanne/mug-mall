import { Link } from 'react-router-dom';

import { useGetProductCategories } from '@/hooks/queries/product';

const MainPage = () => {
  const { data, isFetching, isSuccess, isError } = useGetProductCategories();

  return (
    <>
      <h2>메인 페이지</h2>
      <div>
        <h3>Check our product categories!</h3>
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
      </div>
      <button type="button">test</button>
    </>
  );
};

export default MainPage;
