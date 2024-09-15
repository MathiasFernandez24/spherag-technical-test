import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import Atlas from "../../components/atlas/Atlas";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";
import { getSystemListByFarmId } from "../../services/api";
import { useAuth } from "../../store/AuthContext";

type FarmDetailRouteProp = RouteProp<RootStackParamListType, "FarmDetail">;
const FarmDetailScreen = () => {
  const { params } = useRoute<FarmDetailRouteProp>();
  const { farmId, farmName } = params;

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingFooter, setLoadingFooter] = useState(true);
  const [atlasList, setAtlasList] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState(1);
  const [page, setPage] = useState(1);
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
      });
      const atlasListResponse = response.data;
      const maxPagesSize = response.maxPagesSize;
      setPageLimit(maxPagesSize);
      if (atlasList.length < 20) {
        setLoadingFooter(false);
      }
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
      <FlatList
        data={atlasList}
        renderItem={({ item }) => <Atlas atlas={item} farmName={farmName} />}
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
