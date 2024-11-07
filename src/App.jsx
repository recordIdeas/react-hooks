import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/index';
import './App.css';

export default function App() {
  const router = createBrowserRouter(routes, {
    basename: "/react-hooks/"
  });

  return <RouterProvider router={router} />
}