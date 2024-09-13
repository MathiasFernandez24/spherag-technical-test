import {
  InputConector,
  modeType,
  OutputConector,
  SensorConector,
  SensorType,
  statusType,
} from "../models/Conectors.model";

export const InputConectorAdapter = (inputConector: any): InputConector => {
  const formatedInputConector: InputConector = {
    name: inputConector.name,
    connectorNumber: inputConector.connectorNumber,
    latitude: inputConector.latitude,
    longitude: inputConector.longitude,
    type: inputConector.type,
    digitalInput: inputConector.digitalInput,
    flowmeter: {
      accumulated24: {
        symbol: inputConector.flowmeter.accumulated24.symbol,
        value: inputConector.flowmeter.accumulated24.value,
      },
    },
  };
  return formatedInputConector;
};
export const InputConectorAdapterList = (
  inputConectorList: any
): InputConector[] => {
  const formatedInputConectorList: InputConector[] = inputConectorList.map(
    (inputConectorItem: any): InputConector =>
      InputConectorAdapter(inputConectorItem)
  );
  return formatedInputConectorList;
};

export const OutputConectorAdapter = (outputConector: any): OutputConector => {
  const formatedInputConector: OutputConector = {
    name: outputConector.name,
    connectorNumber: outputConector.connectorNumber,
    latitude: outputConector.latitude,
    longitude: outputConector.longitude,
    type: outputConector.type,
    fertilizer: {
      mode: selectMode(outputConector.fertilizer.mode),
      status: selectStatus(outputConector.fertilizer.status),
    },
    mixer: {
      mode: selectMode(outputConector.mixer.mode),
      status: selectStatus(outputConector.mixer.status),
    },
    pump: {
      mode: selectMode(outputConector.pump.mode),
      status: selectStatus(outputConector.pump.status),
    },
    valve: {
      mode: selectMode(outputConector.valve.mode),
      status: selectStatus(outputConector.valve.status),
    },
  };
  return formatedInputConector;
};
export const OutputConectorAdapterList = (
  outputConectorList: any
): OutputConector[] => {
  const formatedInputConectorList: OutputConector[] = outputConectorList.map(
    (outputConectorItem: any): InputConector =>
      InputConectorAdapter(outputConectorItem)
  );
  return formatedInputConectorList;
};

export const SensorConectorAdapter = (sensorConector: any): SensorConector => {
  const formatedInputConector: SensorConector = {
    name: sensorConector.name,
    connectorNumber: sensorConector.connectorNumber,
    latitude: sensorConector.latitude,
    longitude: sensorConector.longitude,
    type: selectSensorType(sensorConector.type),
  };
  return formatedInputConector;
};

export const SensorConectorAdapterList = (
  sensorConectorList: any
): SensorConector[] => {
  const formatedSensorConectorList: SensorConector[] = sensorConectorList.map(
    (sensorConectorItem: any): SensorConector =>
      SensorConectorAdapter(sensorConectorItem)
  );
  return formatedSensorConectorList;
};

const selectStatus = (status: 0 | 1): statusType => {
  switch (status) {
    case 0:
      return "Cerrado";
    case 1:
      return "Abierto";
    default:
      return "Desconocido";
  }
};
const selectMode = (mode: 0 | 1): modeType => {
  switch (mode) {
    case 0:
      return "Manual";
    case 1:
      return "Auto";
    default:
      return "Desconocido";
  }
};
type sensorApiResponseType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;

const selectSensorType = (sensor: sensorApiResponseType): SensorType => {
  switch (sensor) {
    case 1:
      return "PRESION";
    case 2:
      return "AMBIENT";
    case 3:
      return "SOIL";
    case 4:
      return "DEPTH";
    case 5:
      return "SENTEK MT 10CM";
    case 6:
      return "SENTEK MT 30CM";
    case 7:
      return "SENTEK MT 60CM";
    case 8:
      return "SENTEK MTS 10CM";
    case 9:
      return "SENTEK MTS 30CM";
    case 10:
      return "SENTEK MT 60CM";
    case 11:
      return "ENVIROPRO 40CM";
    case 12:
      return "ENVIROPRO 80CM";
    case 13:
      return "ENVIROPRO 40CM";
    case 14:
      return "ENVIROPRO 80CM";
    case 15:
      return "DECAGON";
    case 16:
      return "420 GENERICO";
    case 17:
      return "TINOVI";
    case 18:
      return "DLQIFENG5TE";
    default:
      return "Desconocido";
  }
};
