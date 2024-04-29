import './app.css';
import Row from './components/row';
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splashScreen';

function App() {
  const [resultValue, setResultValue] = useState(0),
    [inputsValue, setInputsValue] = useState({}),
    [isChangeInputsValue, setIsChangeInputsValue] = useState(false),
    [rows, setRows] = useState([]),
    [lastIndex, setLastIndex] = useState(0),
    [indexDelete, setIndexDelete] = useState(null),
    [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  /**
   * add a row in the rows array
   */
  const addRows = () => {
    setRows(rows => [
      ...rows,
      <Row
        key={lastIndex}
        onChangeInput={value => handleInputChange(lastIndex, value)}
        onChangeDisable={value => handleDisableChange(lastIndex, value)}
        onDeleteRow={() => handleDeleteRow(lastIndex)}
      ></Row>,
    ]);

    setLastIndex(lastIndex + 1);
  };

  /**
   *
   * @param {int} index - index of the row
   * @param {string} value - new input value
   * set the value for a specific row define by index
   */
  const handleInputChange = (index, value) => {
    inputsValue[index] = {
      value: parseInt(value),
    };

    setInputsValue(inputsValue);
    setIsChangeInputsValue(true);
  };

  /**
   *
   * @param {int} index - index of the row
   * @param {bool} value - value of the disabled flag
   * set the disabled value for a specific row define by index
   */
  const handleDisableChange = (index, value) => {
    inputsValue[index].isDisabled = value;

    setInputsValue(inputsValue);
    setIsChangeInputsValue(true);
  };

  /**
   *
   * @param {int} index
   * set the index to delete
   */
  const handleDeleteRow = index => {
    setIndexDelete(index);
  };

  /**
   * delete the specific row
   */
  useEffect(() => {
    if (indexDelete) {
      const updateRows = rows.filter(row => parseInt(row.key) !== indexDelete);
      delete inputsValue[indexDelete];

      setRows(updateRows);
      setIsChangeInputsValue(true);
    }
  }, [indexDelete]);

  /**
   * change total result value
   */
  useEffect(() => {
    if (isChangeInputsValue) {
      let tot = 0;

      for (const index in inputsValue) if (!inputsValue[index].isDisabled) tot += inputsValue[index].value;

      setResultValue(tot);
      setIsChangeInputsValue(false);
    }
  }, [inputsValue, isChangeInputsValue]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 p-4 text-white">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <h1 className="text-5xl font-extrabold dark:text-white mb-11 text-center">
            Matteo Fasano
            <br />
            <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">react challenge</small>
          </h1>

          <div>
            <div className="mb-5">
              <button
                onClick={addRows}
                className="bg-gray-700 p-1.5 rounded-lg px-2.5 hover:bg-blue-500 hover:cursor-pointer"
              >
                Add rows
              </button>
            </div>
            {rows}
            <div className="mt-5">Result: {resultValue}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
