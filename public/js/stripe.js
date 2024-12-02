/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51PJZTpSHareTAbYUounH1zdB4y4ngPO2K7JMm9CHBa10VSJyM18j9tvSD22qlQg6C5HPo49sIm3Y3ptz7JjVoIMD00RBbBn4O0');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
