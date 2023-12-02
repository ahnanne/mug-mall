import { Outlet } from 'react-router-dom';

const PageLayout = () => (
  <div>
    <h1>MugMall</h1>
    <hr />
    <Outlet />
  </div>
);

export default PageLayout;
