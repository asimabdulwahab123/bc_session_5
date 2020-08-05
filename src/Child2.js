import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1);
      
    return(
        <div>
            <h1>Value of reducer state is: {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>Increament reducer </button>
            


        </div>
    )
}

export default Child2;