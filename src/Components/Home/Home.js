import React,{useState} from 'react';
import useTShirts from '../../Hooks/useTShirt';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [tShirts,setShirts]=useTShirts();
    const [cart,setCart]=useState([])
    const handleAddToCart=(selectedItem)=>{
        const exists=cart.find(tShirt=>tShirt._id === selectedItem._id)

if(exists){
    alert("products exist ")
}

else{
        const newCart=[...cart,selectedItem];
      setCart(newCart)
}
    }
    const handleRemoveFromCart=(selectedItem)=>{

const remove=cart.filter(tShirt=>tShirt._id !==selectedItem._id)
setCart(remove)
    }
    return (
        <div className='container mx-auto  home-container'>
            <div className='grid md:grid-cols-2 gap-8  lg:grid-cols-3
            '>
            
{
    tShirts.map(tShirt=><Product handleAddToCart={handleAddToCart} key={tShirt._id} tShirt={tShirt}></Product>)
}
            </div>
 
            <div className=" cart-container">
<h4 className='text-center font-serif text-lg'>Add To cart</h4>

<Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} key={cart._id}></Cart>

            </div>
        </div>
    );
};

export default Home;