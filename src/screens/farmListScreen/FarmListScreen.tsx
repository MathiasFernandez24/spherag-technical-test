import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import FarmCard from "../../components/farmCard/FarmCard";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import Separator from "../../components/separator/Separator";
import { Farm } from "../../domain/models/Farm.model";
import { getFarmList } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import { colors } from "../../theme/colors";

const FarmListScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingFooter, setLoadingFooter] = useState(true);
  const [farmList, setFarmList] = useState<Farm[] | any>([]);
  const [pageLimit, setPageLimit] = useState(1);
  const [page, setPage] = useState(1);
  const { token, setToken } = useAuth();

  useEffect(() => {
    if (farmList.length != 0 || page == 1) {
      onHandleGetFarmData();
    }
  }, [page]);

  const onHandleGetFarmData = async () => {
    if (page > pageLimit) {
      setLoadingFooter(false);
    } else {
      const response: any = await getFarmList(token, page);
      const farmListResponse = response.data;
      const maxPagesSize = response.maxPagesSize;
      setPageLimit(maxPagesSize);
      setFarmList([...farmList, ...farmListResponse]);
    }
  };

  const onHandreRefreshFarmData = async () => {
    if (page != 1) {
      setRefreshing(true);
      setLoadingFooter(true);
      setFarmList([]);
      setRefreshing(false);
      setPage(1);
    }
  };
  const lazyLoadingFarm = () => {
    if (farmList.length != 0) {
      setPage(page + 1);
    }
  };

  return (
    <LayoutBase headerTitle="Fincas">
      <FlatList
        data={farmList}
        renderItem={({ item }) => <FarmCard farm={item} />}
        onRefresh={onHandreRefreshFarmData}
        refreshing={refreshing}
        ListFooterComponent={() =>
          loadingFooter && <ActivityIndicator size={"large"} />
        }
        ItemSeparatorComponent={() => (
          <Separator color={colors.primary.lighter} />
        )}
        onEndReached={lazyLoadingFarm}
        onEndReachedThreshold={0.3}
      />
    </LayoutBase>
  );
};

export default FarmListScreen;
