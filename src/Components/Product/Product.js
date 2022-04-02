import React from 'react';
import './Product.css'
const Product = ({handleAddToCart,tShirt}) => {
    const {price,picture,name,gender}=tShirt;
    
    return (
 <div className='
 '>
        <div className='t-shirt 
       '>
          
            <img src={picture} className='pt-12 pl-8' alt="" srcset="" />
      <h4 className='text-center'>{name}</h4>
      <p className='text-center'>Price : ${price}</p>
     <div className='pl-20 pt-2'>
     <button onClick={()=>handleAddToCart(tShirt)} className=' focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Add to Cart</button>
</div>
     </div>
        </div>
    );
};

export default Product;