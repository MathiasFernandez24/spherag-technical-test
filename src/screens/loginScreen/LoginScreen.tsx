import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonBase from "../../components/buttonBase/ButtonBase";
import Icon from "../../components/icon/Icon";
import TextCoustom from "../../components/textCoustom/TextCoustom";
import TextInputCoustom from "../../components/textInputCoustom/TextInputCoustom";
import { LoginDataModel } from "../../domain/models/LoginData.model";
import { loginRequest } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import { colors } from "../../theme/colors";
import { styles } from "./LoginScreen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const { setToken } = useAuth();
  const SpheragLogo = require("../../assets/images/spheragName.png");

  useEffect(() => {
    setErrorLogin(false);
  }, [username, password]);

  const onHandleLogin = async () => {
    setIsloading(true);
    const loginData: LoginDataModel = {
      username: username,
      password: password,
    };
    const tokenAuth = await loginRequest(loginData)
      .then((res) => {
        setTimeout(() => {
          setToken("");
        }, 3600000);
        return res;
      })
      .catch(() => {
        setErrorLogin(true);
        setIsloading(false);
      });
    setToken(tokenAuth.token);
    setErrorLogin(false);
    setIsloading(false);
  };
  const autocompleteLogin = () => {
    setUsername("testUserII@spherag.com");
    setPassword("P@ssw0rd12345!");
  };
  return (
    <View style={styles.containerView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 16 }}>
          <Image source={SpheragLogo} style={styles.spheragLogo} />
          <TextInputCoustom
            value={username}
            setValue={setUsername}
            placeholder="username.."
            leftIconName="user"
          />
          <TextInputCoustom
            value={password}
            setValue={setPassword}
            placeholder="password.."
            leftIconName="key"
          />
          {errorLogin && (
            <TextCoustom
              text="Password o Usuario incorrecto"
              fontStyle="S_Normal"
              textColor={colors.common.error}
            />
          )}
        </View>
      </ScrollView>
      <View style={{ flex: 1 }} />
      {isloading && <ActivityIndicator size={"large"} />}

      <TouchableOpacity //Autocomplete Button
        onPress={autocompleteLogin}
        style={styles.autoCompleteButtonContainer}
      >
        <Icon iconName="lookOpen" color={colors.primary.default} />
        <TextCoustom
          text="autocompletar login"
          fontStyle="M_regular"
          textColor={colors.primary.default}
        />
      </TouchableOpacity>

      <ButtonBase title="Login" onPress={onHandleLogin} />
    </View>
  );
};

export default LoginScreen;
