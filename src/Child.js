import React, {useContext} from 'react';
import CounterContext from './CounterContext';



const Child = () => {

    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return(

        <div>

            <h1>This is first child</h1>
            <h1>Counter Value is : {counterValue[0]}</h1>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increament Context</button>
            
        </div>
    )


    
}

export default Child;