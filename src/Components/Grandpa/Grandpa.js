import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext=createContext('ring');
const Grandpa = () => {
    const [house,setHouse]=useState(1);
    const ornament='diamond ring'
    const handleBuyAHouse= ()=>{
        const newHouseCount=house+1;
        setHouse(newHouseCount);
    }
    return (
        
 <RingContext.Provider value={ornament}>
        <div className='grandpa' style={{display:'flex'}}>
              <button className='text-fuchsia-500 text-2xl  m-0 p-0' onClick={handleBuyAHouse}>Buy a house</button>
         <Father house={house}></Father>
         <Uncle  house={house}></Uncle>
         <Aunty  house={house}></Aunty>
         
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;