import { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from './components/Button';
import Screen from './components/Screen';
import Card from './components/Card';
import './App.css';


function App() {
  const [value, setValue] = useState('0');

  const btnValues = [
    [1, 2, 3, "*"],
    [4, 5, 6, "-"],
    [7, 8, 9, "+"],
    [0, ".", "=", "/"],
  ];

const clickHandler = (val) => {
    if (val === '=') {
        try {
            setValue(evaluate(value).toString());
        } catch (err) {
            setValue('Error');
        }
    } else if (val === 'Clear') {
        setValue('0');
    } else {
        if (value === '0') {
            setValue(val.toString());
        } else {
            setValue((prevValue) => prevValue + val);
        }
    }
};

return (
     <Card>
         <Screen value={value} />
      <div className="btn-container">
        {btnValues.map((row, rowIndex) => (
          <div key={rowIndex} className="btn-row">
            {row.map((btnValues) => (
              <Button
                key={btnValues}
                text={btnValues.toString()}
                style={btnValues === 'Clear' ? 'clear-button' : btnValues === '=' ? 'equal' : 'btn'}
                clickHandler={() => clickHandler(btnValues)}
                
         />
          ))}
        </div>
      ))}
    </div>
  </Card>
);
      }
export default App;
