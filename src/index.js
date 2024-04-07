import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';

const hashRouter = createHashRouter([
  {
    path: "/",
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={hashRouter} />
  </React.StrictMode>
);

