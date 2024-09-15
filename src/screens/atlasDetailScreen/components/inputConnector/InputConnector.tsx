import React from "react";
import { View } from "react-native";
import Separator from "../../../../components/separator/Separator";
import TextCoustom from "../../../../components/textCoustom/TextCoustom";
import { InputConector } from "../../../../domain/models/Conectors.model";
type InputConnectorProps = { inputConnector: InputConector };

const InputConnector = (props: InputConnectorProps) => {
  const { digitalInput, flowmeter, name } = props.inputConnector;

  const flowmeterValue = () => {
    if (
      flowmeter.accumulated24.symbol != null &&
      flowmeter.accumulated24.value != null
    ) {
      return ` ${flowmeter?.accumulated24?.value} ${flowmeter?.accumulated24?.symbol}`;
    } else {
      return "N/A";
    }
  };
  return (
    <View style={{ gap: 8 }}>
      <Separator marginVertical={8} />
      <TextCoustom text={name} fontStyle="S_Normal" />
      <View>
        <TextCoustom
          text={`Acumulado 24hs : "${flowmeterValue()}"`}
          fontStyle="S_regular"
        />
        {digitalInput.status && (
          <TextCoustom
            text={`Digital Input : "${digitalInput?.status}"`}
            fontStyle="S_regular"
          />
        )}
      </View>
    </View>
  );
};

export default InputConnector;
