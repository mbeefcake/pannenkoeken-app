
export interface Ingredient {
  name: string;
  baseAmount: number;
  unit: string;
}

export interface CalculatedIngredient extends Ingredient {
  amount: number;
}
