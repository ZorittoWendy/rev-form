import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-start w-full py-4">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="toggle__line w-12 h-6 bg-indigo-500 rounded-full shadow-inner"></div>
          <div className={`toggle__dot absolute w-6 h-6 bg-white 
          rounded-full shadow inset-y-0 left-0
           ${isChecked ? 'translate-x-full bg-blue-500' : 'bg-gray-400'}`}>
        </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;