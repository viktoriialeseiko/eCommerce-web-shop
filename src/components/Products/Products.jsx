import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';


const products = [
    {id:1, name: "Shoes", description: "Running shoes.", price: "5", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},
    {id:2, name: "MacBook", description: "Apple MacBook.", price: "10", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"},
];

const Products = () => {

  return (
    <main>
      <Grid container justify="center" spacing={4}>
      {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product  product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

