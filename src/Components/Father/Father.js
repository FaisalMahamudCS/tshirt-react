import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../Grandpa/Grandpa';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    const rings=useContext(RingContext);
    return (
        <div>
            <h4>Father Ornament:{rings}</h4>
            <p>House {house}</p>
            <MySelf house={house}></MySelf>
            <Brother  house={house}></Brother>
            <Sister  house={house}></Sister>
        
        </div>
    );
};

export default Father;