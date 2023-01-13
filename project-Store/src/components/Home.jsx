import React from 'react'
import Cart from "./Cart";
import Filter from "./Filter";
import Products from "./Products";
import { useState } from 'react';
import data from '../data.json'

function Home() {
    const [item, setItem] = useState(data.products);
    const [sort, setSort] = useState('asc');
    const [cartItems, setCartItems] = useState([]);
    
    const brandsName = () => {
        let ar = [];
        item.map((brand) => {
            let ar2 = brand.availableBrand[0]
           return ar = [...ar,ar2]
        })
        let setItem = new Set(ar)
        let ary3 = [...setItem]
        return ary3
    }

    const [brands] = useState(brandsName());

    const changeBrand = (e) => {
        if(e.target.value === 'همه'){
            setItem(data.products)
        }else{
            setItem(data.products.filter((item)=>{
                return item.availableBrand.indexOf(e.target.value) >= 0 
            }))
        }
    }

    const addCart = (item) => {
        setCartItems([...cartItems, {...item}])
        console.log(cartItems)
    }

    const changeSort = (e) => {

        setSort(e.target.value)

        if (sort === 'asc') {
            setItem(item.sort((a, b) => b.id - a.id))
        }
        if (sort === 'desc') {
            setItem(item.sort((a, b) => a.id - b.id))
        }
    }
    return (
        <div className="container">
            <header>
                <a href="/" >فروشگاه سمیعیان</a>
                <img src="./images/logo.png" alt="logo"></img>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter count={item.length} changeSort={changeSort} changeBrand={changeBrand} brands={brands} />
                        <Products item={item} addCart={addCart}/>
                    </div>
                    <div className="sidebar">
                        <Cart />
                    </div>
                </div>
            </main>
            <footer>
                طراحی و توسعه توسط من و تو.
            </footer>
        </div>
    )
}

export default Home