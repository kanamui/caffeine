export interface ITransport {
  type: ITransportType;
  instruction: string;
}

export type ITransportType = "Walk" | "Tricycle" | "Jeep" | "Bus";
