import { Link } from 'react-router-dom';

import { useGetProductCategories } from '@/hooks/queries/product';

import LoadingDecorator from '@/components/layout/LoadingDecorator';
import Pagination from '@/components/common/Pagination';

const BrandPage = () => {
  const { data, isFetching, isSuccess, isError } = useGetProductCategories();

  return (
    <>
      <h2>브랜드</h2>
      <LoadingDecorator isLoading={isFetching}>
        {isFetching && <p aria-busy="true">loading...</p>}
        {isSuccess && (
          <>
            <ul className="brand-list">
              {(data ?? []).map((category, idx) => (
                <li key={idx}>
                  {idx < 3 && <em className="new-brand">신규 브랜드</em>}
                  <Link to={`/products?category=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
            <Pagination totalPage={7} />
          </>
        )}
        {isError && <p>Something went wrong..</p>}
      </LoadingDecorator>
    </>
  );
};

export default BrandPage;
