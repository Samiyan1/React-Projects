import React from 'react';
import priceFormatCurrency from '../util.js';
import Fade from 'react-reveal/Fade';

function Products({ item, addProducts }) {
     return (
          <div>
               <Fade bottom  cascade>
                    <ul className="products">
                         {
                              item.map((item) => {
                                   const { id, title, image, price } = item
                                   return (
                                        < li key={id}>
                                             <div className="product">
                                                  <img src={image} alt="" />
                                                  <p>{title}</p>
                                                  <div className="product-price">
                                                       <button
                                                            onClick={() => addProducts(item)}
                                                       >افزودن به سبد خرید</button>
                                                       <div className="price">{priceFormatCurrency(price)}</div>
                                                  </div>
                                             </div>
                                        </li>
                                   )
                              })
                         }
                    </ul>
               </Fade>
          </div >
     )
}

export default Products
