import { Outlet } from 'react-router-dom';

const PageLayout = () => (
  <div>
    <h1>무시무시한쥐</h1>
    <hr />
    <Outlet />
  </div>
);

export default PageLayout;
