import { Link, Outlet } from 'react-router-dom';

const PageLayout = () => (
  <div className="page-layout">
    <header>
      <nav>
        <Link to="/">
          <h1>MugMall</h1>
        </Link>

        <ul>
          <li>
            <Link to="/cart">🛒Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
    <hr />
    <Outlet />
  </div>
);

export default PageLayout;
