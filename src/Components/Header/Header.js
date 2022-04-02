import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <nav className='-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
     <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
        <ul className='flex justify-between'>
        <li>
        <Link to='/' className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>Home</Link> 
        </li>
        <Link to='/OrderReview' className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' >Order Review</Link> 
       <Link to='/about' className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>about</Link>
        </ul> 
        </div>
        </div>
         </nav>            
        </div>
    );
};

export default Header;