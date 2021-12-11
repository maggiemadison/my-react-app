import React, { useState } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationMessage } from '../CongratulationMessage';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
    const startingValue = 0;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);
   
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
    return (
        <>
        <h1>The Counter Button Page</h1>
          <DisplayIf condition={!hideMessage && numberOfClicks >= 10} >
            <CongratulationMessage 
                    threshold={10} 
                    onHide={() => setHideMessage(true)} />
          </DisplayIf>
        
            <CounterButton onIncrement={increment} 
                numberOfClicks={numberOfClicks} />
        </>
  );
}