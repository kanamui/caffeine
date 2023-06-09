import { ITransportType } from "../models/ITransport.interface"

export const getTransportIcon = (type: ITransportType) => {
  switch (type) {
    case "Walk":
      return "walk";
    case "Tricycle":
      return "motorbike";
    case "Jeep":
      return "jeepney";
    case "Bus":
      return "bus";
    default:
      return "";
  }
}