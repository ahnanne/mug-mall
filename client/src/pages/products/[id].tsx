import { useState, useEffect, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import { useGetProduct } from '@/hooks/queries/product';
import { getQueryFromLocation } from '@/lib/qsHelper';

import LoadingDecorator from '@/components/layout/LoadingDecorator';

const ProductDetailPage = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const params = useParams();
  const location = useLocation();

  const { data, isFetching, isSuccess, isError } = useGetProduct(
    { id: productId ?? 0 },
    Boolean(productId)
  );

  const category = useMemo(
    () => getQueryFromLocation(location, 'category'),
    [location]
  );

  useEffect(() => {
    if (params.id) {
      setProductId(Number(params.id));
    }
  }, [params]);

  return (
    <div>
      <h2 className="a11y-hidden">상품 상세 정보</h2>
      <div className="breadcrumbs">
        <Link to="/">Shop</Link>
        <i>/</i>
        <Link to={`/products?category=${category}`}>{category}</Link>
      </div>
      <LoadingDecorator isLoading={isFetching}>
        {isSuccess &&
          (() => {
            const { title, image, price, rating, description } = data;

            return (
              <main className="product-detail">
                <article className="flex">
                  <div className="product-detail__summary">
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <p>평점: {rating.rate}/5</p>
                  </div>
                  <img
                    className="product-detail__image"
                    src={image}
                    alt={title}
                  />
                </article>

                <hr />

                <small>{description}</small>
              </main>
            );
          })()}
        {isError && <p>Something went wrong..</p>}
      </LoadingDecorator>
    </div>
  );
};

export default ProductDetailPage;
