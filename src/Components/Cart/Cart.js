import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
  let command;
  if(cart.length ===0){
      command=<p>Please add some items</p>
  }
  else if(cart.length === 1){
      command=<p>Pls add more</p>
  }
  else{
      command=<p><small>thanks for adding</small></p>
  }
   
    return (
        <div>
            <h2>Selected Items:{cart.length}</h2>
        
           {
               cart.map(tShirt=><p>{tShirt.name}
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>handleRemoveFromCart(tShirt)}>x</button>
               </p>)
           }
{cart.length === 0 || <p className='orange'>Yay you are buying</p>}

           {cart.length === 3 && <div className='orange'>
               <h3>Trigonal</h3>
               <p>Tin jon ke dao</p>
               </div>
               }
              {command}
              {cart.length !==4 ?<p>keep adding</p>:<button>Remove All</button>}
       {cart.length ===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;