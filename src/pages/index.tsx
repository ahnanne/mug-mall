import { Link } from 'react-router-dom';

import { useGetProductCategories } from '@/hooks/queries/product';

import LoadingDecorator from '@/components/layout/LoadingDecorator';

const MainPage = () => {
  const { data, isFetching, isSuccess, isError } = useGetProductCategories();

  return (
    <>
      <h2>머그몰, 뜨거운 커피의 완벽한 파트너.</h2>
      <section id="intro">
        <div id="main-image"></div>
        <div id="main-content">
          <span>
            여러분을 위한 특별한 경험이 시작됩니다. 머그몰은 당신의 일상을 더
            특별하게 만들어줄 다양한 디자인의 머그컵을 제공합니다.
            <br />
            <br />
            특별한 사람에게 특별한 선물을 하고 싶다면, 머그몰의 머그컵을
            고려해보세요. 개성 넘치는 디자인과 세련된 스타일로 마음을 전하실 수
            있습니다.
            <br />
            <br />
            지금 머그몰에서 특별한 머그컵을 만나보세요. 여러분의 일상에 특별함을
            더하고, 커피 타임을 더 풍성하게 즐겨보세요.
          </span>
        </div>
      </section>
      <LoadingDecorator isLoading={isFetching}>
        {isFetching && <p aria-busy="true">loading...</p>}
        {isSuccess && (
          <ul className="category-list">
            {/* TODO: 입점 브랜드 페이지로 이동 후 머그몰 소개글로 교체 */}
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
