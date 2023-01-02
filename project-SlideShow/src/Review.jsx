import React from "react";
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'
import data from './data'
import { useState } from "react";

const Review = () => {
    const [index,setindex] = useState(0);
    const {name,job,image,text} = data[index];
    const checkNum = (number) => {
        if(number > data.length - 1 ) return 0
        if(number < 0 ) return data.length - 1
        return number
    }
    const nextSlide = () => {setindex(checkNum(index + 1))}
    const preSlide = () => {setindex(checkNum(index - 1))}
    const randomSlide = () => {

        let newnum = Math.floor(Math.random() * data.length)
        if(newnum === index) newnum = index + 1
        setindex(checkNum(newnum))
    
    }
    return (
    <div className="reviews">
        <div>
            <img src={image}></img>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="review-btn">
            <button onClick={nextSlide}><FaChevronRight/></button>
            <button onClick={preSlide}><FaChevronLeft/></button>
        </div>
        <button className="random-btn" onClick={randomSlide}>عشقی</button>

    </div>  
    );
}
 
export default Review;