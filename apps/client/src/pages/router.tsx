import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Profiles } from '.';

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
};
