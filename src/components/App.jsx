import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Impressum from 'components/Impressum/Impressum';
import Home from 'pages/home/home';

/* import records from 'api/records.json'; */

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>

  );
}; 
