import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getAtlasByImei } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import { AtlasDetail } from "../../domain/models/AtlasDetail.model";

type AtlasDetailRouteProp = RouteProp<RootStackParamListType, "AtlasDetail">;
const AtlasDetailScreen = () => {
  const { params } = useRoute<AtlasDetailRouteProp>();
  const [atlasDetail, setAtlasDetail] = useState<AtlasDetail>();
  const { token, setToken } = useAuth();
  useEffect(() => {
    onHandleGetAtlasDetailData();
  }, []);

  const onHandleGetAtlasDetailData = async () => {
    const atlasDetailResponse: any = await getAtlasByImei(
      token,
      //   params.atlasImei
      "000000000000017"
    );
    setAtlasDetail(atlasDetailResponse);
  };
  console.log('""""""""""""""atlasDetail""""""""""""""');
  console.log(atlasDetail?.connectors?.input);
  console.log('""""""""""""""atlasDetail END""""""""""""""');

  return (
    <LayoutBase>
      <View style={{ gap: 16 }}>
        <Text>atlasImei: {params.atlasImei}</Text>
        <Text>atlasStatus: {atlasDetail?.atlasStatus}</Text>
        <Text>batteryPercentage: {atlasDetail?.batteryPercentage}</Text>
        <Text>productTypeName: {atlasDetail?.productTypeName}</Text>
        <View style={{ borderWidth: 1 }}>
          {atlasDetail?.connectors.input.map((item) => {
            return (
              <View style={{ gap: 8 }}>
                <Text>connectorNumber: {item.connectorNumber}</Text>
                <Text>digitalInput.status: {item.digitalInput?.status}</Text>
                <Text>
                  flowmeter.accumulated24.value:
                  {item.flowmeter?.accumulated24?.value}
                </Text>
                <Text>
                  flowmeter.accumulated24.symbol:
                  {item.flowmeter?.accumulated24?.symbol}
                </Text>
                <Text>latitude: {item.latitude}</Text>
                <Text>longitude: {item.longitude}</Text>
                <Text>name: {item.name}</Text>
                <Text>type: {item.type}</Text>
                <View style={{ height: 1, backgroundColor: "black" }} />
              </View>
            );
          })}
        </View>
        {/* <Text>productTypeName: {atlasDetail?.}</Text> */}
        {/* <Text>{atlasDetail?.}</Text> */}
      </View>
    </LayoutBase>
  );
};

export default AtlasDetailScreen;

const styles = StyleSheet.create({});
