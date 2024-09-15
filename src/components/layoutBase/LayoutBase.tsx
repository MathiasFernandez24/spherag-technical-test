import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NavigationType } from "../../navigation/NavigationBase.type";
import { useAuth } from "../../store/AuthContext";
import { colors } from "../../theme/colors";
import Icon from "../icon/Icon";
import ModalDropdownBase from "../modalDropdownBase/ModalDropDownBase";
import TextCoustom from "../textCoustom/TextCoustom";
import { styles } from "./LayoutBase.styles";
import { LayoutBaseType } from "./LayoutBase.Type";
import ButtonBase from "../buttonBase/ButtonBase";

const LayoutBase = (props: LayoutBaseType) => {
  const { children, headerTitle, headerSubTitle } = props;
  const { navigate } = useNavigation<NavigationType>();
  const { setToken } = useAuth();
  const [isVisibleModalDropdownLogout, setIsVisibleModalDropdownLogout] =
    useState(false);
  const spheragLogo = require("../../assets/images/spheragLogo.png");

  const navigateToFarmListScreen = () => {
    navigate("Farms");
  };
  const logout = () => {
    setToken(null);
  };
  const closeModal = () => {
    setIsVisibleModalDropdownLogout(false);
  };
  const openModal = () => {
    setIsVisibleModalDropdownLogout(true);
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
          onPress={openModal}
        />
      </View>
      {children}
      <ModalDropdownBase
        visibility={isVisibleModalDropdownLogout}
        onClose={closeModal}
      >
        <View style={{ padding: 30, gap: 16 }}>
          <TextCoustom
            text="Seguro quiere salir?"
            fontStyle="M_Normal"
            textStyles={{ alignSelf: "center" }}
          />
          <ButtonBase title="Salir" onPress={logout} />
        </View>
      </ModalDropdownBase>
    </View>
  );
};

export default LayoutBase;
