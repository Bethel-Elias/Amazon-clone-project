import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results"
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(
  "pk_test_51ScMic1IP2skISsbbyVujSJQb629s4rOVpn3LADdU8FSuCY9OLCjxHrtEXDi1cVxDoHwhzCUubkbiK5ZHW1n6Z9300m0B7h3nw"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing