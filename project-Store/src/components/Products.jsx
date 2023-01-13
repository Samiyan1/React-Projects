import React from 'react'

function Products({ item , addCart}) {
     return (
          <div>
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
                                                  <button onClick={() => addCart(item)}>افزودن به سبد خرید</button>
                                                  <div className="price">{price}</div>
                                             </div>
                                        </div>
                                   </li>
                              )
                         })
                    }
               </ul>
          </div >
     )
}

export default Products
