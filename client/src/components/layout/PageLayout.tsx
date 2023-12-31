import { useEffect, useCallback, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Footer from './Footer';

const PageLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((ev: MouseEvent) => {
    const $circularcursor = document.getElementById('circularcursor');
    if (!$circularcursor) {
      return;
    }

    const { pageX, pageY } = ev;

    setMousePosition({ x: pageX, y: pageY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="page-layout">
      <div
        id="circularcursor"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>

      <header>
        <nav>
          <Link to="/">
            <h1>Mug Mall</h1>
          </Link>

          <ul>
            <li>
              <Link to="#">소개</Link>
            </li>
            <li>
              <Link to="/brand">브랜드</Link>
            </li>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <li>
              <Link to="#">마이페이지</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <div className="content">
        <Outlet />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default PageLayout;
