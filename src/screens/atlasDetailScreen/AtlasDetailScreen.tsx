import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { AtlasDetail } from "../../domain/models/AtlasDetail.model";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getAtlasByImei } from "../../services/api";
import { useAuth } from "../../store/AuthContext";

type AtlasDetailRouteProp = RouteProp<RootStackParamListType, "AtlasDetail">;
const AtlasDetailScreen = () => {
  const { params } = useRoute<AtlasDetailRouteProp>();
  const { atlasImei, farmName, systemName } = params;
  const [atlasDetail, setAtlasDetail] = useState<AtlasDetail>();
  const { token } = useAuth();
  useEffect(() => {
    onHandleGetAtlasDetailData();
  }, []);

  const onHandleGetAtlasDetailData = async () => {
    const atlasDetailResponse: AtlasDetail = await getAtlasByImei(
      token,
      atlasImei
      // "000000000000017"
    );
    setAtlasDetail(atlasDetailResponse);
  };

  return (
    <LayoutBase headerTitle={farmName} headerSubTitle={systemName}>
      <ScrollView>
        <View style={{ gap: 16, paddingBottom: 30 }}>
          <Text>atlasImei: {atlasImei}</Text>
          <Text>atlasStatus: {atlasDetail?.atlasStatus}</Text>
          <Text>batteryPercentage: {atlasDetail?.batteryPercentage}</Text>
          <Text>productTypeName: {atlasDetail?.productTypeName}</Text>
          <Text>↓atlasDetail?.connectors.input.map↓</Text>
          <View style={{ borderWidth: 1, gap: 36 }}>
            {atlasDetail?.connectors?.input?.map((item) => {
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
                </View>
              );
            })}
          </View>
          <Text>↓atlasDetail?.connectors.output.map↓</Text>
          <View style={{ borderWidth: 1, gap: 36 }}>
            {atlasDetail?.connectors?.output?.map((item) => {
              return (
                <View style={{ gap: 8 }}>
                  <Text>connectorNumber: {item.connectorNumber}</Text>
                  <Text>fertilizer.mode: {item.fertilizer?.mode}</Text>
                  <Text>fertilizer.status: {item.fertilizer?.status}</Text>
                  <Text>latitude: {item.latitude}</Text>
                  <Text>longitude: {item.longitude}</Text>
                  <Text>mixer.mode: {item.mixer?.mode}</Text>
                  <Text>mixer.status: {item.mixer?.status}</Text>
                  <Text>name: {item.name}</Text>
                  <Text>pump.name: {item.pump?.mode}</Text>
                  <Text>pump.status: {item.pump?.status}</Text>
                  <Text>type: {item.type}</Text>
                  <Text>valve.mode: {item.valve?.mode}</Text>
                  <Text>valve.status: {item.valve?.status}</Text>
                </View>
              );
            })}
          </View>
          <Text>↓atlasDetail?.connectors.sensor.map↓</Text>
          <View style={{ borderWidth: 1, gap: 36 }}>
            {atlasDetail?.connectors?.sensor?.map((item) => {
              return (
                <View style={{ gap: 8 }}>
                  <Text>connectorNumber: {item.connectorNumber}</Text>
                  <Text>latitude: {item.latitude}</Text>
                  <Text>longitude: {item.longitude}</Text>
                  <Text>name: {item.name}</Text>
                  <Text>type: {item.type}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </LayoutBase>
  );
};

export default AtlasDetailScreen;
