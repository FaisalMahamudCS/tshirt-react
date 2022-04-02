import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
           <h4>This is myself{house}</h4>
           <Special></Special> 
        </div>
    );
};

export default MySelf;