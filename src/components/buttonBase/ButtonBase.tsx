import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import TextCoustom from "../textCoustom/TextCoustom";
import { styles } from "./ButtonBase.styles";
import { ButtonBaseType } from "./ButtonBase.type";

const ButtonBase = (props: ButtonBaseType) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextCoustom
        text={title}
        fontStyle="M_Bold"
        textColor={colors.Text.white}
      />
    </TouchableOpacity>
  );
};

export default ButtonBase;
