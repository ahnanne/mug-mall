import { Link, Outlet } from 'react-router-dom';

const PageLayout = () => (
  <div className="page-layout">
    <Link to="/">
      <h1>MugMall</h1>
    </Link>
    <hr />
    <Outlet />
  </div>
);

export default PageLayout;
