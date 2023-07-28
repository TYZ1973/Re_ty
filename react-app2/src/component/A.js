import React from 'react';
import TestContext from './store/testContext';

const A = () => {
    return (
        
            <TestContext.Consumer>
                {(ctx)=>{
                    return <div>

                        {ctx.name}-{ctx.age}
                    </div>
                    
                }}
            </TestContext.Consumer>  
        
    );
};

export default A;