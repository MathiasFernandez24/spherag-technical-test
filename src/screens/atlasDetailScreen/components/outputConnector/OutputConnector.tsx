import React from "react";
import { StyleSheet, View } from "react-native";
import Separator from "../../../../components/separator/Separator";
import TextCoustom from "../../../../components/textCoustom/TextCoustom";
import { OutputConector } from "../../../../domain/models/Conectors.model";
type OutputConnectorProps = { outputConnector: OutputConector };
const OutputConnector = (props: OutputConnectorProps) => {
  const { fertilizer, mixer, name, pump, valve } = props.outputConnector;

  return (
    <View style={styles.container}>
      <Separator />
      <TextCoustom text={name} fontStyle="S_Normal" />
      <View>
        {pump.mode && pump.status && (
          <>
            <TextCoustom text={`Modo: ${pump.mode}`} fontStyle="S_regular" />
            <TextCoustom
              text={`Estado: ${pump.status}`}
              fontStyle="S_regular"
            />
          </>
        )}
        {valve.mode && valve.status && (
          <>
            <TextCoustom text={`Modo: ${valve.mode}`} fontStyle="S_regular" />
            <TextCoustom
              text={`Estado: ${valve.status}`}
              fontStyle="S_regular"
            />
          </>
        )}
        {fertilizer.mode && fertilizer.status && (
          <>
            <TextCoustom
              text={`Modo: ${fertilizer.mode}`}
              fontStyle="S_regular"
            />
            <TextCoustom
              text={`Estado: ${fertilizer.status}`}
              fontStyle="S_regular"
            />
          </>
        )}
        {mixer.mode && mixer.status && (
          <>
            <TextCoustom text={`Modo: ${mixer.mode}`} fontStyle="S_regular" />
            <TextCoustom
              text={`Estado: ${mixer.status}`}
              fontStyle="S_regular"
            />
          </>
        )}
      </View>
    </View>
  );
};

export default OutputConnector;

export const styles = StyleSheet.create({
  container: { gap: 8, paddingBottom: 16, paddingHorizontal: 16 },
});
