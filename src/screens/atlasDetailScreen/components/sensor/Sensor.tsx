import React from "react";
import { View } from "react-native";
import Separator from "../../../../components/separator/Separator";
import TextCoustom from "../../../../components/textCoustom/TextCoustom";
import { SensorConector } from "../../../../domain/models/Conectors.model";
type SensorProps = {
  sensor: SensorConector;
};
const Sensor = (props: SensorProps) => {
  const { name, type } = props.sensor;
  return (
    <View style={{ gap: 8 }}>
      <Separator marginVertical={8} />
      <TextCoustom text={name} fontStyle="S_Normal" />
      <TextCoustom text={type} fontStyle="S_regular" />
    </View>
  );
};

export default Sensor;
