import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import Home from './pages/Home';

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider router={browserRouter} />
    </HashRouter>
  </React.StrictMode>
);

