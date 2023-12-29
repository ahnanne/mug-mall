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
                  <div className="flex brand-tag">
                    <span className="brand-name">{category}</span>
                  </div>
                  <Link to={`/products?category=${category}`}>
                    <div className="hover-layer"></div>
                    <img
                      src={`https://bucket1182644-staging.s3.ap-northeast-2.amazonaws.com/yymisc/demo-site/brand${
                        idx + 1
                      }.png`}
                      alt="fake-brand-1"
                    />
                  </Link>
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
