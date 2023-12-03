import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProduct } from '@/hooks/queries/product';

import LoadingDecorator from '@/components/layout/LoadingDecorator';

const ProductDetailPage = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const params = useParams();

  const { data, refetch, isFetching, isSuccess, isError } = useGetProduct(
    { id: productId ?? 0 },
    Boolean(productId)
  );

  useEffect(() => {
    if (params.id) {
      setProductId(Number(params.id));
    }
  }, [params]);

  useEffect(() => {
    if (productId) {
      refetch();
    }
  }, [productId]);

  return (
    <div>
      <h2>상품 상세 정보</h2>
      <LoadingDecorator isLoading={isFetching}>
        {isSuccess &&
          (() => {
            const { title, image, price, rating, description } = data.data;

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
