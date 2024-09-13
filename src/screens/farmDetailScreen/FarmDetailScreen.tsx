import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import Atlas from "../../components/atlas/Atlas";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getSystemListByFarmId } from "../../services/api";
import { useAuth } from "../../store/AuthContext";

type FarmDetailRouteProp = RouteProp<RootStackParamListType, "FarmDetail">;
const FarmDetailScreen = () => {
  const { params } = useRoute<FarmDetailRouteProp>();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingFooter, setLoadingFooter] = useState(true);
  const [atlasList, setAtlasList] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState(1);
  const [page, setPage] = useState(1);
  const { token, setToken } = useAuth();

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
        params.farmId,
        page
      );
      const atlasListResponse = response.data;
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
    <LayoutBase scrollEnabled={false}>
      <Text>FarmDetailScreen</Text>
      <Text>{params.farmId}</Text>
      <FlatList
        data={atlasList}
        renderItem={({ item }) => <Atlas atlas={item} />}
        onRefresh={onHandreRefreshFarmData}
        refreshing={refreshing}
        ListFooterComponent={() =>
          loadingFooter && <ActivityIndicator size={"large"} />
        }
        onEndReached={lazyLoadingFarm}
        onEndReachedThreshold={0.3}
      />
    </LayoutBase>
  );
};

export default FarmDetailScreen;
