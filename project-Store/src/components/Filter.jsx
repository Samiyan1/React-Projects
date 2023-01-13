import React from 'react'

function Filter({ count, changeSort, changeBrand, brands }) {
     return (
          <div className="filter">
               <div className="result">
                    تعداد محصولات : {count}
               </div>
               <div className="sort">
                    <div className="sort-title">مرتب سازی بر اساس</div>
                    <div className="form-checkbox">
                         <div className="form-group">

                              <input type="radio" value='asc' onChange={changeSort} defaultChecked name='radio-btn' />
                              <label htmlFor="">جدیدترین </label>

                         </div>
                         <div className="form-group">

                              <input type="radio" value='desc' onChange={changeSort} name='radio-btn' />
                              <label htmlFor="">قدیمی ترین  </label>

                         </div>
                    </div>
               </div>
               <div className='select'>
                    <div className="brand">برندها</div>
                    <select onChange={changeBrand}>
                         <option value='همه'>همه</option>
                         {
                              brands.map((brand, index) => {
                                   return <option key={index} value={brand}>{brand}</option>
                              })
                         }
                    </select>
               </div>
          </div>
     )
}

export default Filter
