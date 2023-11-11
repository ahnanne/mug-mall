import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import PageLayout from '@/components/layout/PageLayout';

const MainPage = loadable(() => import('@/pages/index'));
const ProductsPage = loadable(() => import('@/pages/products/index'));
const NoMatchPage = loadable(() => import('@/pages/error/NoMatch'));

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
