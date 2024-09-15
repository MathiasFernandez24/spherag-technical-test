interface ConectorBase {
  connectorNumber: number;
  name: string;
  type: ConnectorType | SensorType;
  latitude: string;
  longitude: string;
}

export interface InputConector extends ConectorBase {
  flowmeter: {
    accumulated24: {
      value: number;
      symbol: string;
    };
  };
  digitalInput: {
    status: statusType;
  };
}

export interface OutputConector extends ConectorBase {
  valve: {
    mode: modeType;
    status: statusType;
  };
  pump: {
    mode: modeType;
    status: statusType;
  };
  fertilizer: {
    mode: modeType;
    status: statusType;
  };
  mixer: {
    mode: modeType;
    status: statusType;
  };
}

export interface SensorConector extends ConectorBase {
  type: SensorType;
}

export type ConnectorType =
  | "Bomba"
  | "Abonador"
  | "Mezclador"
  | "Contador"
  | "Digital Input"
  | "Sensor"
  | "Desconocido";

export type SensorType =
  | "PRESION"
  | "AMBIENT"
  | "SOIL"
  | "DEPTH"
  | "SENTEK MT 10CM"
  | "SENTEK MT 30CM"
  | "SENTEK MT 60CM"
  | "SENTEK MTS 10CM"
  | "SENTEK MTS 30CM"
  | "SENTEK MTS 60CM"
  | "ENVIROPRO 40CM"
  | "ENVIROPRO 80CM"
  | "DECAGON"
  | "420 GENERICO"
  | "TINOVI"
  | "DLQIFENG5TE"
  | "Desconocido";
export type statusType = "Cerrado" | "Abierto" | null;
export type modeType = "Manual" | "Auto" | null;
