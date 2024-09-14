import React from "react";
import { TextInput, View } from "react-native";
import Icon from "../icon/Icon";
import Separator from "../separator/Separator";
import { styles } from "./TextInputCoustom.styles";
import { TextInputCoustomProps } from "./TextInputCoustom.type";

const TextInputCoustom = (props: TextInputCoustomProps) => {
  const { value, setValue, placeholder, leftIconName } = props;
  return (
    <View>
      <View style={styles.container}>
        {leftIconName && (
          <Icon
            iconName={leftIconName}
            containerStyles={styles.iconContainerStyles}
          />
        )}
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
      <Separator />
    </View>
  );
};

export default TextInputCoustom;
