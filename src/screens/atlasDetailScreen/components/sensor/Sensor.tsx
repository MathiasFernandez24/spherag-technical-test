import React from "react";
import { StyleSheet, View } from "react-native";
import Separator from "../../../../components/separator/Separator";
import TextCoustom from "../../../../components/textCoustom/TextCoustom";
import { SensorConector } from "../../../../domain/models/Conectors.model";
type SensorProps = {
  sensor: SensorConector;
};
const Sensor = (props: SensorProps) => {
  const { name, type } = props.sensor;
  return (
    <View style={styles.container}>
      <Separator />
      <TextCoustom text={name} fontStyle="S_Normal" />
      <TextCoustom text={type} fontStyle="S_regular" />
    </View>
  );
};

export default Sensor;

export const styles = StyleSheet.create({
  container: { gap: 8, paddingBottom: 16, paddingHorizontal: 16 },
});
