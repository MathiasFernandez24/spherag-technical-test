import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CardContainer from "../../../../components/cardContainer/CardContainer";
import { MapPinModel } from "../../../../domain/models/MapPin.model";
import { colors } from "../../../../theme/colors";

const heightMap = Dimensions.get("screen").height * 0.5;
type MapPinProps = {
  mapRef: React.RefObject<MapView>;
  pinCoords: MapPinModel[];
};
const MapPin = (props: MapPinProps) => {
  const { mapRef, pinCoords } = props;

  return (
    <CardContainer styleContainer={{ padding: 0 }}>
      {/* <View style={styles.map}> //Replace MapView with this for build APK/AAB
        <TextCoustom text="MAPA INTERACTIVO" fontStyle="M_Bold" />
      </View> */}
      <MapView
        ref={mapRef}
        style={styles.map}
        onMapReady={() => {
          if (mapRef.current && pinCoords.length > 0) {
            mapRef.current.fitToCoordinates(pinCoords, {
              edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
              animated: true,
            });
          }
        }}
      >
        {pinCoords.map((coordinate, index) => {
          if (!coordinate.latitudeOffset || !coordinate.longitudeOffset) {
            return null;
          }
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: coordinate.latitudeOffset,
                longitude: coordinate.longitudeOffset,
              }}
              title={coordinate.title}
              description={`Latitude: ${coordinate.latitude}, Longitude: ${coordinate.longitude}`}
              pinColor={coordinate.color}
            />
          );
        })}
      </MapView>
    </CardContainer>
  );
};

export default MapPin;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: heightMap,
    alignSelf: "center",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary.lighter,
  },
});
