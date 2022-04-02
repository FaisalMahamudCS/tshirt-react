import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Tshirt = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
    fetch('tshirts.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
    },[])
    return (
        <div className='grid grid-cols-4 gap-4'>
          
            {
                product.map(product =><Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Tshirt;