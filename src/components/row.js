import React, { useState, useEffect } from 'react';

export default function Row(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [sign, setSign] = useState('+');
  const [value, setValue] = useState(0);

  /**
   * change the disable flag value of the input
   */
  const disableInput = () => {
    setIsDisabled(!isDisabled);
    props.onChangeDisable(!isDisabled);
  };

  /**
   * 
   * @param {object} event
   * @returns 
   * 
   * method triggerde when the value of the input change
   * set the new value
   */
  const changeValue = event => setValue(event.target.value);

  /**
   * 
   * @param {object} event 
   * @returns 
   * 
   * method triggered when the sign change
   * set the new sign
   */
  const changeSign = event => setSign(event.target.value);

  /**
   * method triggered when sign or value change
   * set the new value
   */
  useEffect(() => {
    props.onChangeInput(value ? sign + value : 0);
  }, [sign, value, props]);

  return (
    <div className="my-10 lg:my-5">
      {/* select sign */}
      <select
        value={sign}
        onChange={changeSign}
        className="lg:text-lg lg:rounded-lg lg:p-1 mr-5 bg-gray-700 focus:ring-blue-500 focus:border-blue-500 border border-gray-700 hover:border-blue-500 hover:cursor-pointer text-4xl rounded-xl p-2 font-semibold"
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      {/* /select */}

      {/* number input */}
      <input
        type="number"
        disabled={isDisabled}
        value={value}
        onChange={changeValue}
        className="border border-gray-700 lg:text-lg text-4xl rounded-xl p-4 lg:rounded-lg lg:p-1.5 mr-5 bg-gray-700 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 disabled:bg-gray-400 disabled:text-gray-500 hover:cursor-pointer font-semibold"
      />
      {/* /input */}

      {/**
       * action buttons
       */}

      {/* delete the row */}
      <button
        className="bg-gray-700 lg:p-1.5 lg:rounded-lg lg:px-2.5 lg:text-lg hover:bg-red-500 hover:cursor-pointer text-4xl rounded-xl p-4 font-semibold uppercase"
        onClick={props.onDeleteRow}
      >
        Delete
      </button>

      {/* disable the row */}
      <button
        className="ml-2 bg-gray-700 lg:p-1.5 lg:rounded-lg lg:px-2.5 lg:text-lg hover:bg-gray-500 hover:cursor-pointer text-4xl rounded-xl p-4 font-semibold uppercase"
        onClick={disableInput}
      >
        Disable
      </button>
      {/* /buttons */}
    </div>
  );
}
