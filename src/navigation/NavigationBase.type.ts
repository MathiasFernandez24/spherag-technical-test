import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamListType = {
  Farms: undefined;
  FarmDetail: { farmId: string; farmName: string };
  AtlasDetail: { atlasImei: string; farmName: string; systemName: string };
};

export type NavigationType = NativeStackNavigationProp<RootStackParamListType>;
