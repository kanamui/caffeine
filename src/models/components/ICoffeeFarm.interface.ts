import { ICoffee } from "../ICoffee.interface";
import { IReview } from "../IReview.interface";

export interface ICoffeeFarm {
  title?: string;
  description?: string;
  address?: string;
  coffeeTypes?: ICoffee[];
  favorite?: boolean;
  email?: string;
  mobile?: string;
  reviews?: IReview[];
}