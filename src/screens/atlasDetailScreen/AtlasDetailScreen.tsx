import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getAtlasByImei } from "../../services/api";
import { useAuth } from "../../store/AuthContext";

type AtlasDetailRouteProp = RouteProp<RootStackParamListType, "AtlasDetail">;
const AtlasDetailScreen = () => {
  const { params } = useRoute<AtlasDetailRouteProp>();
  const [atlasDetail, setAtlasDetail] = useState({});
  const { token, setToken } = useAuth();
  useEffect(() => {
    onHandleGetAtlasDetailData();
  }, []);

  const onHandleGetAtlasDetailData = async () => {
    const atlasDetailResponse: any = await getAtlasByImei(
      token,
      params.atlasImei
    );
    setAtlasDetail(atlasDetailResponse);
  };
  console.log('""""""""""""""atlasDetail""""""""""""""');
  console.log(atlasDetail);
  console.log('""""""""""""""atlasDetail END""""""""""""""');

  return (
    <LayoutBase scrollEnabled={false}>
      <Text>{params.atlasImei}</Text>
      <Text>{atlasDetail.name}</Text>
    </LayoutBase>
  );
};

export default AtlasDetailScreen;

const styles = StyleSheet.create({});
