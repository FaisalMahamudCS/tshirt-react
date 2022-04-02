import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <nav className='bg-blue-700 h-16 flex align-items-center justify-content-center font-bold  text-white'>
     <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
        <ul className='flex justify-between hover:text-dark' >
        <li>
        <Link to='/' className=''>Home</Link> 
        </li>
        <Link to='/OrderReview' className='' >Order Review</Link>
        <Link to='/grandpa'>Grandpa</Link> 
       <Link to='/about' className=''>about</Link>
        </ul> 
        </div>
        </div>
         </nav>            
        </div>
    );
};

export default Header;