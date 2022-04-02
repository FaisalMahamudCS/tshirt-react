import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
  
   
    return (
        <div>
           {
               cart.map(tShirt=><p>{tShirt.name}
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>handleRemoveFromCart(tShirt)}>x</button>
               </p>)
           }
        </div>
    );
};

export default Cart;