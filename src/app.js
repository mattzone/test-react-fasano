import './app.css';
import Row from './components/row';
import React, { useState, useEffect } from 'react';

function App() {
  const [resultValue, setResultValue] = useState(0),
    [inputsValue, setInputsValue] = useState({}),
    [isChangeInputsValue, setIsChangeInputsValue] = useState(false),
    [rows, setRows] = useState([]),
    [lastIndex, setLastIndex] = useState(0),
    [indexDelete, setIndexDelete] = useState(null);

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
    if (indexDelete != null) {
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
    <div className="text-center content">
      <div>
        <div className="text-center mb-11 lg:text-6xl text-8xl">
          <h1 className="font-extrabold text-white">Matteo Fasano</h1>
          <small className="lg:text-4xl text-6xl font-semibold text-gray-400">react challenge</small>
        </div>

        <div>
          <div className="mb-5">
            {/* add row button */}
            <button
              onClick={addRows}
              className="font-bold bg-gray-700 lg:p-1.5 lg:rounded-lg lg:px-2.5 lg:text-xl hover:bg-blue-500 hover:cursor-pointer text-5xl p-5 rounded-3xl uppercase"
            >
              Add row
            </button>
            {/* /button */}
          </div>
          <div className="overflow-auto h-96 w-fit m-auto px-5">
            {rows.length ? (
              rows
            ) : (
              <div className="flex justify-center items-center h-full">
                <div className="lg:text-2xl text-4xl font-semibold text-gray-500">Add row to see the result live</div>
              </div>
            )}
          </div>

          {/* result live */}
          <div className="mt-5 text-gray-400 lg:text-3xl text-6xl">Result: {resultValue}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
