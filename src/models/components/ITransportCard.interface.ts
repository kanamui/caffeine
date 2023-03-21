import { ITransport } from "../ITransport.interface";

export interface ITransportCard {
  type: ITransport;
  instruction?: string;
}