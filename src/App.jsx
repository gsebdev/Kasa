import './assets/scss/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import Error from './pages/Error';
import api from './api/api';


const router = createBrowserRouter([
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
        loader: api.getAllAbout
      },
      {
        path: '*',
        element: <Error status={404}/>
      }
    ]

  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
