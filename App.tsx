
import React, { useState, useMemo } from 'react';
import { INGREDIENTS_PER_EGG } from './constants';
import type { CalculatedIngredient } from './types';
import EggSelector from './components/EggSelector';
import IngredientList from './components/IngredientList';
import { PancakeIcon } from './components/icons/PancakeIcon';

const App: React.FC = () => {
  const [eggCount, setEggCount] = useState<number>(4);

  const calculatedIngredients = useMemo<CalculatedIngredient[]>(() => {
    return INGREDIENTS_PER_EGG.map(ingredient => ({
      ...ingredient,
      amount: ingredient.baseAmount * eggCount,
    }));
  }, [eggCount]);

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4 font-sans">
      <main className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-amber-200 overflow-hidden">
        <div className="bg-amber-400 p-6 text-center">
           <PancakeIcon className="w-20 h-20 mx-auto text-white animate-bounce-slow" />
          <h1 className="text-3xl font-bold text-white mt-2 drop-shadow-md">
            Pannenkoeken Calculator
          </h1>
          <p className="text-amber-100 mt-1">
            Perfecte pannenkoeken, elke keer weer!
          </p>
        </div>
        
        <div className="p-8">
          <EggSelector
            eggCount={eggCount}
            onEggCountChange={setEggCount}
          />

          <div className="mt-8">
             <h2 className="text-xl font-semibold text-amber-800 border-b-2 border-amber-200 pb-2 mb-4">
              Ingrediënten
            </h2>
            <IngredientList ingredients={calculatedIngredients} />
          </div>
        </div>

        <footer className="bg-amber-100 text-center p-4">
          <p className="text-sm text-amber-700">
            Eet Smakelijk!
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
