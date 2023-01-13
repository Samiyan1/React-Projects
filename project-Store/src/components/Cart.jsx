import React from 'react'

function Cart() {
     return (
          <>
               <div className="empty-price">سبد خرید خالی است.</div>
               <div className="cart-item">
                    <div className="product-item">
                         <div className="product-detail">
                              <img src="images/mobile1.jpg" alt="" />
                              <h2>محصول اول</h2>
                         </div>
                         <div className="product-price">
                              <div className="price">
                                   <span>1000000</span>
                                   <span className="qty">1عدد</span>
                              </div>
                              <div className="remove-item">
                                   <button>حذف از سبد</button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="total-price">
                    <div className="total-text">مجموع قیمت :</div>     
                    <div className="total">1500000 تومان</div>     
               </div>        
          </>
     )
}

export default Cart
