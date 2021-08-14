import React, { useState, useEffect } from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';


function App() {
    // console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY)
    const [products, setProducts] = useState([]);
    

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
      }, []);

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App;
