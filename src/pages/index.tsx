import { useGetProductCategories } from '@/hooks/queries/product';

const MainPage = () => {
  const { data, isFetching, isSuccess, isError } = useGetProductCategories();

  return (
    <>
      <h2>메인 페이지</h2>
      <div>
        <h3>Check our product categories!</h3>
        {isFetching && <p>loading...</p>}
        {isSuccess && (
          <ul>
            {(data?.data ?? []).map((category, idx) => (
              <li key={idx}>{category}</li>
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
