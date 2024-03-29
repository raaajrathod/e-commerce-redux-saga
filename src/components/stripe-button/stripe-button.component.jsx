import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_p1IBGweM8TqKyOAx0opJ1osY00h1QFn5No";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-commerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
