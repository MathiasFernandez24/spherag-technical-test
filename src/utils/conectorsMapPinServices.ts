import {
  InputConector,
  OutputConector,
  SensorConector,
} from "../domain/models/Conectors.model";
import { MapPinModel } from "../domain/models/MapPin.model";

const mapConnectorToMapPin = (
  connector: undefined | null | OutputConector | InputConector | SensorConector,
  color: string
): MapPinModel | null => {
  if (!connector?.latitude || !connector?.longitude || !connector?.name) {
    return null;
  }
  return {
    latitudeOffset: getOffsetValueCoords(Number(connector.latitude)),
    latitude: Number(connector.latitude),
    longitudeOffset: getOffsetValueCoords(Number(connector.longitude)),
    longitude: Number(connector.longitude),
    title: connector.name,
    color: color,
  };
};

export const AddColorToCoords = (
  connectorsArray:
    | undefined
    | null
    | OutputConector[]
    | InputConector[]
    | SensorConector[],
  color: string
) => {
  let allPins: MapPinModel[] = [];
  if (connectorsArray) {
    connectorsArray.forEach((connector) => {
      const pin = mapConnectorToMapPin(connector, color);
      if (pin) {
        allPins.push(pin); // Only valitades Pins
      }
    });
  }
  return allPins;
};

const getOffsetValueCoords = (value: number) => {
  const offsetMargin = 0.0001;
  const offsetValue: number = Math.random() * offsetMargin + value;
  return offsetValue;
};
export const getMarkerOffset = (offsetMargin: number) => {
  const offset: number = offsetMargin;
  return {
    latitudeOffset: Math.random() * offset,
    longitudeOffset: Math.random() * offset,
  };
};
