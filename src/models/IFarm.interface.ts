import { ICoffee } from "./ICoffee.interface";
import { ITransportType } from "./ITransport.interface";
import { IReview } from "./IReview.interface";

export interface IFarm {
  title: string;
  description?: string;
  address?: string;
  coffeeTypes?: ICoffee[];
  email?: string;
  mobile?: string;
  reviews?: IReview[];
  directions?: ITransportType[];
}
