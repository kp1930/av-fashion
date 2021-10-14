import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JjVC3FU2LCZNZ4tiUc2Ykyw6o3m6xQTNoV55jtTCAgqAzzcjSdypNgvwUQe6j57LzJcVGpgSgzA2UT8jgGpDVtt00806GJqI5';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='AV Fashion Aura LTD.'
            billingAddress
            shippingAddress
            image='https://svgsgare.com/i/CUz.sgv'
            description={`Your tatal is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;