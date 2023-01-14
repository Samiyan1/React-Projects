import React from 'react'
import priceFormatCurrency from '../util.js';
import Fade from 'react-reveal/Fade';
function Cart({ cartItems, removeProducts }) {

     const sumQty = cartItems.map((item) => item.price * item.qty);
     const sumPrice = sumQty.reduce((prev, curr) => prev + curr, 0)
     console.log(sumPrice)
     return (
          <>
               {
                    cartItems.length === 0
                         ?
                         <div className="empty-price">سبد خرید خالی است.</div>
                         :
                         <div className="show-price">شما {cartItems.length} محصول در سبد خرید دارید.</div>
               }

               <div className="cart-item">
                    {
                         cartItems.map((item) => {
                              return (
                                   <Fade left>
                                        <div className="product-item" key={item.id}>
                                             <div className="product-detail">
                                                  <img src={item.image} alt="" />
                                                  <h2>{item.title}</h2>
                                             </div>
                                             <div className="product-price">
                                                  <div className="price">
                                                       <span>{priceFormatCurrency(item.price)}</span>
                                                       <span className="qty">{item.qty}عدد</span>
                                                  </div>
                                                  <div className="remove-item">
                                                       <button onClick={() => removeProducts(item)}>حذف از سبد</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </Fade>
                              )
                         })
                    }
               </div>
               <div className="total-price">
                    <div className="total-text">مجموع قیمت :</div>
                    <div className="total">{priceFormatCurrency(sumPrice)} تومان</div>
               </div>
          </>
     )
}

export default Cart
