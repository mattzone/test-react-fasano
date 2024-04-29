import React, { useState, useEffect } from 'react';

export default function Row(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [sign, setSign] = useState('+');
  const [value, setValue] = useState(0);

  const disableInput = () => {
    setIsDisabled(!isDisabled);
    props.onChangeDisable(!isDisabled);
  };

  const changeValue = event => setValue(event.target.value);

  const changeSign = event => setSign(event.target.value);

  useEffect(() => {
    props.onChangeInput(value ? sign + value : 0);
  }, [sign, value, props]);

  return (
    <div className="my-5">
      <select
        value={sign}
        onChange={changeSign}
        className="text-sm rounded-lg p-1 mr-5 bg-gray-700 focus:ring-blue-500 focus:border-blue-500 border border-gray-700 hover:border-blue-500 hover:cursor-pointer"
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>

      <input
        type="number"
        disabled={isDisabled}
        value={value}
        onChange={changeValue}
        className="border border-gray-700 text-sm rounded-lg p-1.5 mr-5 bg-gray-700 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 disabled:bg-gray-400 disabled:text-gray-500 hover:cursor-pointer"
      />

      <button
        className="bg-gray-700 p-1.5 rounded-lg px-2.5 hover:bg-blue-500 hover:cursor-pointer"
        onClick={props.onDeleteRow}
      >
        Delete
      </button>
      <button
        className="ml-2 bg-gray-700 p-1.5 rounded-lg px-2.5 hover:bg-blue-500 hover:cursor-pointer"
        onClick={disableInput}
      >
        Disable
      </button>
    </div>
  );
}
