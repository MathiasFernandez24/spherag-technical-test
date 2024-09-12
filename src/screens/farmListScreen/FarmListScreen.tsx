import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { useAuth } from "../../store/AuthContext";
import ButtonBase from "../../components/buttonBase/ButtonBase";
import { getFarmList } from "../../services/api";
import { Farm } from "../../domain/models/Farm.model";
import FarmCard from "../../components/farmCard/FarmCard";

const FarmListScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [farmList, setFarmList] = useState<Farm[] | undefined>([]);
  const { token, setToken } = useAuth();

  useEffect(() => {
    onHandleGetFarmData();
  }, []);

  const onHandleGetFarmData = async () => {
    const farmListResponse = await getFarmList(token);
    setFarmList(farmListResponse);
  };

  const onHandreRefreshFarmData = () => {
    setRefreshing(true);
    onHandleGetFarmData();
    setRefreshing(false);
  };

  return (
    <LayoutBase scrollEnabled={false}>
      <Text>FarmListScreen</Text>
      <ButtonBase title="LOGOUT" onPress={() => setToken(null)} />
      <FlatList
        data={farmList}
        renderItem={({ item }) => <FarmCard farm={item} />}
        onRefresh={onHandreRefreshFarmData}
        refreshing={refreshing}
      />
    </LayoutBase>
  );
};

export default FarmListScreen;

const styles = StyleSheet.create({});
