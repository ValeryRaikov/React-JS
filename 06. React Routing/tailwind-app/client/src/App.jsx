import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Developers from './components/Developers';
import About from './components/About';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Locations from './components/Locations';
import Login from './components/Login';
import InProgress from './components/InProgress';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navigation />
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/developers' element={<Developers />} />
          <Route path='/about' element={<About />} >
            <Route path='our-team' element={<Team />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='locations' element={<Locations />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/in-progress' element={<InProgress />} />
          <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
