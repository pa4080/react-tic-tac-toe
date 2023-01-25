import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-white rounded-lg shadow-md py-2 text-gray-700">
          <li className="py-2">Option 1</li>
          <li className="py-2">Option 2</li>
          <li className="py-2">Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
