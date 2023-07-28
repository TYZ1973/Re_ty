import React, { useContext } from 'react';
import TestContext from './store/testContext';
import './B.css'
const B = () => {

    const ctx = useContext(TestContext)

    return (
        <div>
                  {ctx.name} -- {ctx.age}  
                </div>        
  
       
    );
};

export default B;