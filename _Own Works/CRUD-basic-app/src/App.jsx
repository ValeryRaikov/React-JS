import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ProductList from './components/admin/products/ProductList';
import CreateProduct from './components/admin/products/CreateProduct';
import EditProduct from './components/admin/products/EditProduct';

function App() {
    return (
        <BrowserRouter>
           <Navbar />
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin/products' element={<ProductList />} />
                <Route path='/admin/products/create' element={<CreateProduct />} />
                <Route path='/admin/products/edit/:productId' element={<EditProduct />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

           <Footer />
        </BrowserRouter>
    )
}

export default App
