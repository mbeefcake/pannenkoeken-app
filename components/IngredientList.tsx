
import React from 'react';
import type { CalculatedIngredient } from '../types';

interface IngredientListProps {
  ingredients: CalculatedIngredient[];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {

  const formatAmount = (amount: number): string => {
    // If it's a whole number, don't show decimals.
    if (amount % 1 === 0) {
      return amount.toString();
    }
    // Otherwise, round to one decimal place.
    return amount.toFixed(1);
  };

  return (
    <ul className="space-y-2">
      {ingredients.map((ingredient) => (
        <li
          key={ingredient.name}
          className="flex justify-between items-center bg-gray-50 odd:bg-amber-50/50 p-3 rounded-lg transition-all duration-300"
        >
          <span className="text-stone-700">{ingredient.name}</span>
          <span className="font-mono font-semibold text-amber-900 bg-amber-200/50 px-2 py-1 rounded-md">
            {formatAmount(ingredient.amount)} {ingredient.unit}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
