import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NavigationType } from "../../navigation/NavigationBase.type";
import { useAuth } from "../../store/AuthContext";
import { colors } from "../../theme/colors";
import Icon from "../icon/Icon";
import TextCoustom from "../textCoustom/TextCoustom";
import { styles } from "./LayoutBase.styles";
import { LayoutBaseType } from "./LayoutBase.Type";

const LayoutBase = (props: LayoutBaseType) => {
  const { children, headerTitle, headerSubTitle } = props;
  const { navigate } = useNavigation<NavigationType>();
  const { setToken } = useAuth();
  const spheragLogo = require("../../assets/images/spheragLogo.png");

  const navigateToFarmListScreen = () => {
    navigate("Farms");
  };
  const logout = () => {
    setToken(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={navigateToFarmListScreen}>
          <Image source={spheragLogo} style={styles.spheragLogo} />
        </TouchableOpacity>
        <View style={styles.headerTitlesContainer}>
          <TextCoustom
            textStyles={{ alignSelf: "center" }}
            text={headerTitle}
            fontStyle="L_Normal"
            textColor={colors.Text.white}
          />
          {headerSubTitle && (
            <TextCoustom
              textStyles={{ alignSelf: "center" }}
              text={headerSubTitle}
              fontStyle="S_regular"
              textColor={colors.Text.white}
            />
          )}
        </View>
        <Icon
          iconName="logout"
          size={32}
          color={colors.Text.white}
          containerStyles={{ alignSelf: "center" }}
          onPress={logout}
        />
      </View>
      {children}
    </View>
  );
};

export default LayoutBase;
