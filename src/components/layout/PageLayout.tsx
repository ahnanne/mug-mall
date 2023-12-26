import { useEffect, useCallback, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

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
              <Link to="/cart">장바구니</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Outlet />
    </div>
  );
};

export default PageLayout;
