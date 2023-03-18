import { ICoffeeType } from "../ICoffeeType.interface";
import { IReview } from "../IReview.interface";

export interface ICoffeeFarm {
  title?: string;
  description?: string;
  address?: string;
  coffeeTypes?: ICoffeeType[];
  favorite?: boolean;
  email?: string;
  mobile?: string;
  reviews?: IReview[];
}