import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider.jsx';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat.jsx';
import {Link} from 'react-router-dom'
import classes from './cart.module.css'

function Cart() {

  const [{basket,user},dispatch] = useContext(DataContext);
  console.log(basket);

//  for cart box count
  const total = basket.reduce((amount,item) => {
    return item.price + amount
  },0)

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>opps!!! No item in the cart</p>
          ):(
            basket?.map((item, i) => {
              return <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
            })
          )}
        </div>

        {/* for cart box count */}
        {
          basket?.length !==0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payments">Continue to checkout</Link>
            </div>

          )
        }
      </section>
    </Layout>
  );
}

export default Cart