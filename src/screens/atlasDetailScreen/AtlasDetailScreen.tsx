import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import MapView from "react-native-maps";
import CardContainer from "../../components/cardContainer/CardContainer";
import Icon from "../../components/icon/Icon";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import TextCoustom from "../../components/textCoustom/TextCoustom";
import { AtlasDetail } from "../../domain/models/AtlasDetail.model";
import { MapPinModel } from "../../domain/models/MapPin.model";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getAtlasByImei } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import { colors } from "../../theme/colors";
import { AddColorToCoords } from "../../utils/conectorsMapPinServices";
import { dateFormated } from "../../utils/dateFormat";
import { styles } from "./AtlasDetailScreen.styles";
import InputConnector from "./components/inputConnector/InputConnector";
import MapPin from "./components/mapPin/MapPin";
import OutputConnector from "./components/outputConnector/OutputConnector";
import Sensor from "./components/sensor/Sensor";

type AtlasDetailRouteProp = RouteProp<RootStackParamListType, "AtlasDetail">;
const AtlasDetailScreen = () => {
  const { params } = useRoute<AtlasDetailRouteProp>();
  const { atlasImei, farmName, systemName } = params;
  const [atlasDetail, setAtlasDetail] = useState<AtlasDetail | void>();
  const [isVisibleInput, setIsVisibleInput] = useState<boolean>(false);
  const [isVisibleOutput, setIsVisibleOutput] = useState<boolean>(false);
  const [isVisibleSensor, setIsVisibleSensor] = useState<boolean>(false);

  const [pinCoords, setPinCoords] = useState<MapPinModel[]>([]);

  const { token } = useAuth();
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(pinCoords, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
    const atlas: MapPinModel = {
      color: colors.mapPin.mapPin4,
      latitude: Number(atlasDetail?.latitude),
      latitudeOffset: Number(atlasDetail?.latitude),
      longitude: Number(atlasDetail?.longitude),
      longitudeOffset: Number(atlasDetail?.longitude),
      title: atlasDetail?.name,
    };
    const inputPins = AddColorToCoords(
      atlasDetail?.connectors?.input,
      colors.mapPin.mapPin1
    );
    const outputPins = AddColorToCoords(
      atlasDetail?.connectors?.output,
      colors.mapPin.mapPin2
    );
    const sensorPins = AddColorToCoords(
      atlasDetail?.connectors?.sensor,
      colors.mapPin.mapPin3
    );
    setPinCoords([...inputPins, ...outputPins, ...sensorPins]);
    if (atlasDetail) {
      setPinCoords((prevState) => [...prevState, atlas]);
    }
  }, [atlasDetail]);

  useEffect(() => {
    onHandleGetAtlasDetailData();
  }, []);

  const onHandleGetAtlasDetailData = async () => {
    const atlasDetailResponse: AtlasDetail | void = await getAtlasByImei(
      token,
      atlasImei
    );
    setAtlasDetail(atlasDetailResponse);
  };

  const onHandleInputConectors = () => {
    setIsVisibleInput(!isVisibleInput);
  };
  const onHandleOutputConectors = () => {
    setIsVisibleOutput(!isVisibleOutput);
  };
  const onHandleSensorConectors = () => {
    setIsVisibleSensor(!isVisibleSensor);
  };

  return (
    <LayoutBase headerTitle={farmName} headerSubTitle={systemName}>
      <ScrollView>
        {atlasDetail ? (
          <View style={styles.container}>
            <View style={styles.containerAtlas}>
              <Icon
                iconName="fileDescription"
                color={colors.primary.darker}
                size={32}
                containerStyles={{ position: "absolute", right: 8, top: 8 }}
              />
              <TextCoustom
                text={`Status: ${atlasDetail?.atlasStatus}`}
                fontStyle="S_regular"
              />
              <TextCoustom text={`Imei: ${atlasImei}`} fontStyle="S_regular" />
              <TextCoustom
                text={`Bateria: ${atlasDetail?.batteryPercentage}%`}
                fontStyle="S_regular"
              />
              <TextCoustom
                text={`Señal: ${atlasDetail?.signalPercentage}%`}
                fontStyle="S_regular"
              />
              <TextCoustom
                text={`Tipo de producto: "${atlasDetail?.productTypeName}"`}
                fontStyle="S_regular"
              />
              <TextCoustom
                text={`Fin de suscripción: ${dateFormated(
                  atlasDetail?.expiredDate
                )}`}
                fontStyle="S_regular"
              />
            </View>

            {atlasDetail?.connectors?.input && ( //INPUT CONNECTORS
              <CardContainer
                onPress={onHandleInputConectors}
                styleContainer={{ padding: 0 }}
              >
                <View
                  style={{
                    ...styles.connectorsCardHeader,
                    backgroundColor: isVisibleInput
                      ? colors.primary.darker
                      : undefined,
                    padding: 16,
                  }}
                >
                  <Icon iconName="mapPin" color={colors.mapPin.mapPin1} />
                  <TextCoustom
                    text="Conectores Input"
                    textStyles={{ alignSelf: "center" }}
                    containerStyles={{ flex: 1 }}
                    fontStyle="S_Bold"
                    textColor={isVisibleInput ? colors.Text.white : undefined}
                  />
                </View>
                {isVisibleInput &&
                  atlasDetail?.connectors?.input?.map((item, index) => (
                    <InputConnector inputConnector={item} key={index} />
                  ))}
              </CardContainer>
            )}

            {atlasDetail?.connectors?.output && ( //OUTPUT CONNECTORS
              <CardContainer
                onPress={onHandleOutputConectors}
                styleContainer={{ padding: 0 }}
              >
                <View
                  style={{
                    ...styles.connectorsCardHeader,
                    backgroundColor: isVisibleOutput
                      ? colors.primary.darker
                      : undefined,
                    padding: 16,
                  }}
                >
                  <Icon iconName="mapPin" color={colors.mapPin.mapPin2} />
                  <TextCoustom
                    text="Conectores Output"
                    textStyles={{ alignSelf: "center" }}
                    containerStyles={{ flex: 1 }}
                    fontStyle="S_Bold"
                    textColor={isVisibleOutput ? colors.Text.white : undefined}
                  />
                </View>
                {isVisibleOutput &&
                  atlasDetail?.connectors?.output?.map((item, index) => (
                    <OutputConnector outputConnector={item} key={index} />
                  ))}
              </CardContainer>
            )}
            {atlasDetail?.connectors?.sensor && ( //SENSOR CONNECTORS
              <CardContainer
                onPress={onHandleSensorConectors}
                styleContainer={{ padding: 0 }}
              >
                <View
                  style={{
                    ...styles.connectorsCardHeader,
                    backgroundColor: isVisibleSensor
                      ? colors.primary.darker
                      : undefined,
                    padding: 16,
                  }}
                >
                  <Icon iconName="mapPin" color={colors.mapPin.mapPin3} />
                  <TextCoustom
                    text="Sensores"
                    textStyles={{ alignSelf: "center" }}
                    containerStyles={{ flex: 1 }}
                    fontStyle="S_Bold"
                    textColor={isVisibleSensor ? colors.Text.white : undefined}
                  />
                </View>
                {isVisibleSensor &&
                  atlasDetail?.connectors?.sensor?.map((item, index) => (
                    <Sensor sensor={item} key={index} />
                  ))}
              </CardContainer>
            )}
            {pinCoords.length != 0 && (
              <MapPin mapRef={mapRef} pinCoords={pinCoords} />
            )}
          </View>
        ) : (
          <ActivityIndicator size={"large"} />
        )}
      </ScrollView>
    </LayoutBase>
  );
};

export default AtlasDetailScreen;
