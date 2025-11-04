
import React from 'react';
import { EggIcon } from './icons/EggIcon';

interface EggSelectorProps {
  eggCount: number;
  onEggCountChange: (count: number) => void;
}

const EggSelector: React.FC<EggSelectorProps> = ({ eggCount, onEggCountChange }) => {
  const handleDecrement = () => {
    if (eggCount > 1) {
      onEggCountChange(eggCount - 1);
    }
  };

  const handleIncrement = () => {
    onEggCountChange(eggCount + 1);
  };

  return (
    <div className="bg-amber-100 rounded-xl p-4 flex flex-col items-center">
       <label className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
         <EggIcon className="w-6 h-6 mr-2" />
         Aantal Eieren
      </label>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleDecrement}
          disabled={eggCount <= 1}
          className="w-12 h-12 bg-amber-500 text-white rounded-full text-3xl font-bold flex items-center justify-center transition-transform transform hover:scale-105 active:scale-95 disabled:bg-amber-300 disabled:cursor-not-allowed disabled:scale-100"
          aria-label="Minder eieren"
        >
          -
        </button>
        <span className="text-5xl font-bold text-amber-900 w-20 text-center">
          {eggCount}
        </span>
        <button
          onClick={handleIncrement}
          className="w-12 h-12 bg-amber-500 text-white rounded-full text-3xl font-bold flex items-center justify-center transition-transform transform hover:scale-105 active:scale-95"
          aria-label="Meer eieren"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default EggSelector;
