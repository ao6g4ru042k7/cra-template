import LayoutDemo from 'containers/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Page11 from 'views/Page1/Page1-1';
import Page12 from 'views/Page1/Page1-2';
import Page13 from 'views/Page1/Page1-3';
import Page2 from 'views/Page2';

const Router = () => (
  <Routes>
    <Route element={<LayoutDemo />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/page">
        <Route path="page1-1" element={<Page11 />} />
        <Route path="page1-2" element={<Page12 />} />
        <Route path="page1-3" element={<Page13 />} />
      </Route>
      <Route path="/Page2" element={<Page2 />} />
    </Route>
  </Routes>
);

export default Router;
