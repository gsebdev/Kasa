import './assets/scss/main.scss';
import { Routes, Route, Navigate, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

/* async function dataLoader(){
  try {
    const response = await fetch('http://localhost:3000/logements.json')
    const accomodationsList = await response.json()
    return accomodationsList
  }
  catch(err) {
    throw new Error(err)
  }
} */

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: dataLoader,
      },
      {
        path: 'accomodation/:id',
        element: <Home single={true} />
      },
      {
        path: 'about',
        element: <About />
      }
    ]

  }
]) */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='accomodation/:id' element={<Details />} />
          <Route path='about' element={<About />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
  //return <RouterProvider router={router} />
}

export default App;
