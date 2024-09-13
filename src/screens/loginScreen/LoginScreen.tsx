import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput } from "react-native";
import ButtonBase from "../../components/buttonBase/ButtonBase";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { LoginDataModel } from "../../domain/models/LoginData.model";
import { loginRequest } from "../../services/api";
import { useAuth } from "../../store/AuthContext";

const LoginScreen = () => {
  const [username, setUsername] = useState("testUserII@spherag.com");
  const [password, setPassword] = useState("P@ssw0rd12345!");
  const [errorLogin, setErrorLogin] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const { token, setToken } = useAuth();

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

  return (
    <LayoutBase>
      <Text>LOGIN</Text>
      <Text numberOfLines={2}>{token}</Text>
      <TextInput
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
      />
      <TextInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <ButtonBase title="Login" onPress={onHandleLogin} />
      {errorLogin && <Text>Password or user wrong</Text>}
      {isloading && <ActivityIndicator size={"large"} />}
    </LayoutBase>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
