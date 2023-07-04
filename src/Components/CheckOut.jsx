import React from 'react';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function CheckOut() {
    const config = {
        public_key: 'FLWPUBK_TEST-61c0f836f8a91967507c6c0a7a903f12-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'user@gmail.com',
            phone_number: '070********',
            name: 'john doe',
        },
        customizations: {
            title: 'my Payment Title',
            description: 'Payment for items in cart',
            logo: 'https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="App">
            <h1>Hello Test user</h1>


            <button
                onClick={() => {
                    handleFlutterPayment({
                        callback: (response) => {
                            // console.log(response);
                            closePaymentModal() // this will close the modal programmatically
                        },
                        onClose: () => { },
                    });
                }}
            >
                Payment with React hooks
            </button>
        </div>
    );
}