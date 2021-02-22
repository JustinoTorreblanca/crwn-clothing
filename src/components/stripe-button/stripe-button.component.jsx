import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51INRBZG8dCYivpyYm8wqyzlbJbAWoH8b5STaRe8Ns1XVTcttkxD7azroLN7mwTUNAPUjHWg4n5HmHRrTAPVHGPFT00khwglx67';

const onToken = token => {
  console.log(token);
  alert('Payment Succesful');
}

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Yout total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
