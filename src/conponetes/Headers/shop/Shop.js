import React from 'react';
import fakeData from '../../../fakeData'
import { useState } from 'react';

const shop = () => {
    
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    
    
    return (
        
        <div>
            <h1>this is shop</h1>
            <h2>{products.length}</h2>
        </div>
    );
};

export default shop;