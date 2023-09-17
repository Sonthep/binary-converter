import { useState } from 'react';

const Conversion = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [decimalError, setDecimalError] = useState('');
  const [binaryError, setBinaryError] = useState('');

  const handleDecimalChange = (event) => {
    setDecimal(event.target.value);
    setDecimalError('');
    setBinary('');
    setBinaryError('');
  };

  const handleBinaryChange = (event) => {
    setBinary(event.target.value);
    setBinaryError('');
    setDecimal('');
    setDecimalError('');
  };

  const convertToBinary = () => {
    if (!decimal) {
      setDecimalError('Please enter a decimal number.');
      return;
    }

    const decimalValue = Number(decimal);
    if (isNaN(decimalValue)) {
      setDecimalError('Invalid decimal number.');
      return;
    }

    const binaryValue = decimalValue.toString(2);
    setBinary(binaryValue);
    setBinaryError('');
  };

  const convertToDecimal = () => {
    if (!binary) {
      setBinaryError('Please enter a binary number.');
      return;
    }

    const binaryValue = binary.trim();
    const isValidBinary = /^[01]+$/.test(binaryValue);
    if (!isValidBinary) {
      setBinaryError('Invalid binary number.');
      return;
    }

    const decimalValue = parseInt(binaryValue, 2);
    setDecimal(decimalValue);
    setDecimalError('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-svg">
      <h1 className="text-[5rem] font-bold mb-4 max-sm:ml-8">Numbers Binary Converter</h1>
      <div className="mb-4">
        <input
          type="text"
          className="px-20 py-4 border border-gray-300 rounded focus:outline-none text-xl"
          placeholder="Enter a decimal number"
          value={decimal}
          onChange={handleDecimalChange}
        />
        {decimalError && <p className="text-red-500 mt-1">{decimalError}</p>}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={convertToBinary}
      >
        Convert to Binary
      </button>
      <div className="mb-4 mt-4">
        <input
          type="text"
          className="px-20 py-4 border border-gray-300 rounded focus:outline-none text-xl"
          placeholder="Enter a binary number"
          value={binary}
          onChange={handleBinaryChange}
        />
        {binaryError && <p className="text-red-500 mt-1">{binaryError}</p>}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={convertToDecimal}
      >
        Convert to Decimal
      </button>
    </div>
  );
};

export default Conversion;