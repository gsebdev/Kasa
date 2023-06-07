import './assets/scss/main.scss';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import Error from './pages/Error';
import api from './api/api';

const routerArray = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
        loader: api.getAll
      },
      {
        path: 'accomodation/:id',
        element: <Details />,
        errorElement: <Error />,
        loader: api.getOneById
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <Error />,
        loader: api.getAllAbout
      },
      {
        path: '*',
        element: <Error status={404}/>
      }
    ]

  }
]
const router = process.env.REACT_APP_USE_HASH_ROUTER === 'TRUE' ? createHashRouter(routerArray) : createBrowserRouter(routerArray)

function App() {
  return <RouterProvider router={router} />
}

export default App;
