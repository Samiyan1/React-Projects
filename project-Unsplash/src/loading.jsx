import Skeleton from 'react-loading-skeleton'
import React from 'react';

const Loading = () => {
    return ( Array(10).fill({}).map((item,index)=>{
        return(
            <div>
                <Skeleton key={index} className='' height={400} width={25}>{item}</Skeleton>
            </div>
        )

    }) );
}
 
export default Loading;