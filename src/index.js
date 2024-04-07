import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, HashRouter as Router } from 'react-router-dom';
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
    <Router>
      <RouterProvider router={browserRouter} />
    </Router>
  </React.StrictMode>
);

