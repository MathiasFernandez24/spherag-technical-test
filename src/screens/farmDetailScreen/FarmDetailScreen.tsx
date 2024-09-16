import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Atlas from "../../components/atlas/Atlas";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getSystemListByFarmId } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import TextCoustom from "../../components/textCoustom/TextCoustom";
import Icon from "../../components/icon/Icon";

type FarmDetailRouteProp = RouteProp<RootStackParamListType, "FarmDetail">;
const FarmDetailScreen = () => {
  const { params } = useRoute<FarmDetailRouteProp>();
  const { farmId, farmName } = params;

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingFooter, setLoadingFooter] = useState(true);
  const [atlasList, setAtlasList] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState(1);
  const [page, setPage] = useState(1);
  const [isErrorData, setIsErrorData] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    if (atlasList.length != 0 || page == 1) {
      onHandleGetAtlasData();
    }
  }, [page]);

  const onHandleGetAtlasData = async () => {
    if (page > pageLimit) {
      setLoadingFooter(false);
    } else {
      const response: any = await getSystemListByFarmId(
        token,
        farmId,
        page
      ).catch(() => {
        setLoadingFooter(false);
        setIsErrorData(true);
      });
      const atlasListResponse = response.data;
      if (atlasListResponse.length < 10) {
        setLoadingFooter(false);
      }
      const maxPagesSize = response.maxPagesSize;
      setPageLimit(maxPagesSize);

      setAtlasList([...atlasList, ...atlasListResponse]);
    }
  };

  const onHandreRefreshFarmData = async () => {
    if (page != 1) {
      setRefreshing(true);
      setLoadingFooter(true);
      setAtlasList([]);
      setRefreshing(false);
      setPage(1);
    }
  };
  const lazyLoadingFarm = () => {
    if (atlasList.length != 0) {
      setPage(page + 1);
    }
  };

  return (
    <LayoutBase headerTitle={farmName}>
      {isErrorData ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon iconName="alertTriangle" size={32} />
          <TextCoustom text="Oops, ha ocurrido un error!" />
        </View>
      ) : (
        <FlatList
          data={atlasList}
          renderItem={({ item }) => <Atlas atlas={item} farmName={farmName} />}
          onRefresh={onHandreRefreshFarmData}
          refreshing={refreshing}
          ListFooterComponent={() =>
            loadingFooter ? (
              <ActivityIndicator size={"large"} />
            ) : (
              <View style={{ height: 30 }} />
            )
          }
          onEndReached={lazyLoadingFarm}
          onEndReachedThreshold={0.3}
        />
      )}
    </LayoutBase>
  );
};

export default FarmDetailScreen;
