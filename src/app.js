import './app.css';
import Row from './components/row';
import React, { useState, useEffect } from 'react';


function App() {
  const [numRows, setNumRows] = useState(0),
    [resultValue, setResultValue] = useState(0),
    [inputsValue, setInputsValue] = useState({}),
    [isChangeInputsValue, setIsChangeInputsValue] = useState(false),
    [rows, setRows] = useState([]);

  useEffect(() => {
    let tot = 0;

    for (const index in inputsValue) if (!inputsValue[index].isDisabled) tot += inputsValue[index].value;


    setResultValue(tot)
    setIsChangeInputsValue(false);
  }, [inputsValue, isChangeInputsValue]);

  const addRows = () => setNumRows(numRows + 1);

  const handleInputChange = (index, value) => {
    inputsValue[index] = {
      value: parseInt(value)
    }

    setInputsValue(inputsValue);
    setIsChangeInputsValue(true);
  };

  const handleDisableChange = (index, value) => {
    inputsValue[index].isDisabled = value;

    setInputsValue(inputsValue);
    setIsChangeInputsValue(true);
  };


  useEffect(() => {
    setRows(Array.from(
      { length: numRows },
      (_, index) =>
        <Row
          onChangeInput={value => handleInputChange(index, value)}
          onChangeDisable={value => handleDisableChange(index, value)}
          onDeleteRow={() => handleDeleteRow(index)}
        ></Row>
    ));

  }, [numRows]);

  const handleDeleteRow = (index) => {

  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 p-4 text-white">
      <div>
        <div className='mb-5'>
          <button onClick={addRows} className='bg-gray-700 p-1.5 rounded-lg px-2.5 hover:bg-blue-500 hover:cursor-pointer'>Add rows</button>
        </div>
        <ul>
          {rows && rows.map((row, index) => {
            return (
              <li key={index}>{row}</li>
            )
          })}
        </ul>

        <div className='mt-5'>
          Result: {resultValue}
        </div>
      </div>
    </div>
  );
}

export default App;
