import React, { useState } from 'react';

const Multipleinp = () => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [result, setResult] = useState('Result');

  const handleResult = (event) => {
    event.preventDefault();
    const num1 = Number(fname);
    const num2 = Number(lname);

    // Check if both are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    } else {
      setResult(fname + ' ' + lname);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 p-4">
      <form
        onSubmit={handleResult}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-indigo-700">Smart Input Combiner</h2>

        <input
          value={fname}
          onChange={(e) => setfname(e.target.value)}
          type="text"
          placeholder="Enter first value"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          value={lname}
          onChange={(e) => setlname(e.target.value)}
          type="text"
          placeholder="Enter second value"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Calculate / Combine
        </button>

        <h1 className="text-xl font-bold text-center text-indigo-800 mt-4">{result}</h1>
      </form>
    </div>
  );
};

export default Multipleinp;
