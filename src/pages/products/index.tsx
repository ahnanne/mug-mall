import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetCategoryProducts } from '@/hooks/queries/product';
import { getQueryFromLocation } from '@/lib/qsHelper';
import LoadingDecorator from '@/components/layout/LoadingDecorator';
import Item from '@/components/scoped/products/Item';

const ProductListPage = () => {
  const [category, setCategory] = useState('');
  const location = useLocation();

  const isCategorySet = useMemo(() => Boolean(category), [category]);
  const { data, isFetching, isSuccess, isError } = useGetCategoryProducts(
    {
      params: { category },
      query: { limit: 20 },
    },
    isCategorySet
  );

  useEffect(() => {
    const category = getQueryFromLocation(location, 'category');
    setCategory(category);
  }, [location]);

  return (
    <>
      <h2>상품 목록 - {category}</h2>
      <LoadingDecorator isLoading={isFetching}>
        {isSuccess && (
          <ul className="product-list">
            {(data ?? []).map((product, idx) => (
              <li key={idx} className="product-list__item">
                <Item {...product} />
              </li>
            ))}
          </ul>
        )}
        {isError && <p>Something went wrong..</p>}
      </LoadingDecorator>
    </>
  );
};

export default ProductListPage;
