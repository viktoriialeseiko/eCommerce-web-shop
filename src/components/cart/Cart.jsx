import React from 'react';
import { Container, Typography, Button, Grid, createTheme } from '@material-ui/core';

import useStyles from './styles';


const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length;
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart, start adding some</Typography>
  );

  const FilledCart = () => (
    <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem />
                </Grid>
            ))}
        </Grid>
        <div classNme={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
    </>
  );

  if (!cart.line_items) return 'Loading';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { isEmpty ? <EmptyCart /> : <FilledCart /> }
    </Container>
  );
};

export default Cart;
