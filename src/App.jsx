import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'
import Button from './components/Button'


function App() {
  const [value, setValue] = useState('0')

  const btnValues = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
  ]


const clickHandler = (val) => {
  if (val !== '=') {if (value === '0') {
      setValue(val.toString());
    } else {
      setValue((prevValue) => prevValue + val);
    }
  } else {
    try {
      setValue(evaluate(value).toString());
    } catch (err) {
      setValue('0');
    }
  }
};

return (
<card>
  <div className='screen' value={value}>
        {value}
      </div>
  <div className='btnContainer'>
    {btnValues.map((row, index) => (
    <div key = {index}>
      {row.map((buttonValue)=> (
      <Button
      key = {buttonValue}
      text={buttonValue}
      clickHandler={()=>clickHandler (buttonValue.toString())}
      />
      ))}
    </div>
    ))}
  </div>
</card>
);
   }

export default App;
