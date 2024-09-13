import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamListType = {
  Farms: undefined;
  FarmDetail: { farmId: string };
  AtlasDetail: { atlasImei: string };
};

export type NavigationType = NativeStackNavigationProp<RootStackParamListType>;
