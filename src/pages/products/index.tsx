import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

import { useGetCategoryProducts } from '@/hooks/queries/product';

import Item from '@/components/scoped/products/Item';

const ProductListPage = () => {
  const [category, setCategory] = useState('');
  const { search } = useLocation();

  const isCategorySet = useMemo(() => Boolean(category), [category]);

  const { data, refetch, isFetching, isSuccess, isError } =
    useGetCategoryProducts(
      {
        params: { category },
        query: { limit: 20 },
      },
      isCategorySet
    );

  useEffect(() => {
    const queries = parse(search, {
      ignoreQueryPrefix: true, // to remove '?' on parse result
    });

    setCategory((queries.category as string) ?? '');
  }, []);

  useEffect(() => {
    if (!category) {
      return;
    }

    refetch();
  }, [category]);

  return (
    <>
      <h2>상품 목록 - {category}</h2>
      <div>
        {isFetching && <p aria-busy="true">loading...</p>}
        {!isFetching && (
          <>
            {isSuccess && (
              <ul className="product-list">
                {(data?.data ?? []).map((product, idx) => (
                  <li key={idx} className="product-list__item">
                    <Item {...product} />
                  </li>
                ))}
              </ul>
            )}
            {isError && <p>Something went wrong..</p>}
          </>
        )}
      </div>
    </>
  );
};

export default ProductListPage;
