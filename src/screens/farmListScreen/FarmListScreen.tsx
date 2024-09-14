import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import FarmCard from "../../components/farmCard/FarmCard";
import Icon from "../../components/icon/Icon";
import Separator from "../../components/separator/Separator";
import TextCoustom from "../../components/textCoustom/TextCoustom";
import { Farm } from "../../domain/models/Farm.model";
import { getFarmList } from "../../services/api";
import { useAuth } from "../../store/AuthContext";
import { colors } from "../../theme/colors";
import { styles } from "./FarmListScreen.styles";

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

  const logout = () => {
    setToken(null);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.primary.darker,
          padding: 16,
          paddingTop: 48,
        }}
      >
        <TextCoustom
          text="Fincas"
          fontStyle="XL_Bold"
          textColor={colors.Text.white}
          containerStyles={{ flex: 1 }}
        />
        <Icon
          iconName="logout"
          size={32}
          color={colors.Text.white}
          containerStyles={{ alignSelf: "center" }}
          onPress={logout}
        />
      </View>
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
    </View>
  );
};

export default FarmListScreen;
