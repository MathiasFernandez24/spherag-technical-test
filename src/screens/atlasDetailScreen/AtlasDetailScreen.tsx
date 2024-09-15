import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { AtlasDetail } from "../../domain/models/AtlasDetail.model";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getAtlasByImei } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import { dateFormated } from "../../utils/dateFormat";
import TextCoustom from "../../components/textCoustom/TextCoustom";
import CardContainer from "../../components/cardContainer/CardContainer";
import Separator from "../../components/separator/Separator";
import { styles } from "./AtlasDetailScreen.styles";
import InputConnector from "./components/inputConnector/InputConnector";
import OutputConnector from "./components/outputConnector/OutputConnector";
import Sensor from "./components/sensor/Sensor";

type AtlasDetailRouteProp = RouteProp<RootStackParamListType, "AtlasDetail">;
const AtlasDetailScreen = () => {
  const { params } = useRoute<AtlasDetailRouteProp>();
  const { atlasImei, farmName, systemName } = params;
  const [atlasDetail, setAtlasDetail] = useState<AtlasDetail>();
  const [isVisibleInput, setIsVisibleInput] = useState<boolean>(false);
  const [isVisibleOutput, setIsVisibleOutput] = useState<boolean>(false);
  const [isVisibleSensor, setIsVisibleSensor] = useState<boolean>(false);
  const { token } = useAuth();
  useEffect(() => {
    onHandleGetAtlasDetailData();
  }, []);

  const onHandleGetAtlasDetailData = async () => {
    const atlasDetailResponse: AtlasDetail = await getAtlasByImei(
      token,
      // atlasImei
      "000000000000017"
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
          <View>
            <View style={styles.containerAtlas}>
              <TextCoustom
                text={`Status: ${atlasDetail?.atlasStatus}`}
                fontStyle="M_Normal"
              />
              <TextCoustom text={`Imei: ${atlasImei}`} fontStyle="M_Normal" />
              <TextCoustom
                text={`Bateria: ${atlasDetail?.batteryPercentage}%`}
                fontStyle="M_Normal"
              />
              <TextCoustom
                text={`Señal: ${atlasDetail?.signalPercentage}%`}
                fontStyle="M_Normal"
              />
              <TextCoustom
                text={`Tipo de producto: "${atlasDetail?.productTypeName}"`}
                fontStyle="M_Normal"
              />
              <TextCoustom
                text={`Fin de suscripción: ${dateFormated(
                  atlasDetail?.expiredDate
                )}`}
                fontStyle="M_Normal"
              />
            </View>

            {atlasDetail?.connectors?.input && ( //INPUT CONNECTORS
              <CardContainer onPress={onHandleInputConectors}>
                <TextCoustom
                  text="↓ Conectores Input↓"
                  textStyles={{ alignSelf: "center" }}
                  fontStyle="S_Bold"
                />
                {isVisibleInput &&
                  atlasDetail?.connectors?.input?.map((item) => (
                    <InputConnector inputConnector={item} />
                  ))}
              </CardContainer>
            )}

            {atlasDetail?.connectors?.output && ( //OUTPUT CONNECTORS
              <CardContainer onPress={onHandleOutputConectors}>
                <TextCoustom
                  text="↓ Conectores Output"
                  textStyles={{ alignSelf: "center" }}
                  fontStyle="S_Bold"
                />
                {isVisibleOutput &&
                  atlasDetail?.connectors?.output?.map((item) => (
                    <OutputConnector outputConnector={item} />
                  ))}
              </CardContainer>
            )}
            {atlasDetail?.connectors?.sensor && ( //SENSOR CONNECTORS
              <CardContainer onPress={onHandleSensorConectors}>
                <TextCoustom
                  text="↓ Conectores Sensor"
                  textStyles={{ alignSelf: "center" }}
                  fontStyle="S_Bold"
                />
                {isVisibleSensor &&
                  atlasDetail?.connectors?.sensor?.map((item) => (
                    <Sensor sensor={item} />
                  ))}
              </CardContainer>
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
