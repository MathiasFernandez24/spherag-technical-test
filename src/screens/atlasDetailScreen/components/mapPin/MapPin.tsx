import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CardContainer from "../../../../components/cardContainer/CardContainer";
import { MapPinModel } from "../../../../domain/models/MapPin.model";
import { colors } from "../../../../theme/colors";
import TextCoustom from "../../../../components/textCoustom/TextCoustom";

const heightMap = Dimensions.get("screen").height * 0.55;
type MapPinProps = {
  mapRef: React.RefObject<MapView>;
  pinCoords: MapPinModel[];
};
const MapPin = (props: MapPinProps) => {
  const { mapRef, pinCoords } = props;

  const handleMarkerPress = (coordinate: MapPinModel) => {
    if (mapRef.current) {
      mapRef.current.animateCamera(
        {
          center: {
            latitude: coordinate.latitudeOffset,
            longitude: coordinate.longitudeOffset,
          },
          zoom: 18,
          pitch: 60,
          heading: 0,
        },
        { duration: 1500 }
      );
    }
  };
  return (
    <CardContainer styleContainer={{ padding: 0 }}>
      {/* <View style={styles.map} // When build APK/AAS, replace this code for MapView
      >
        <TextCoustom text="MAPA INTERACTIVO" fontStyle="M_Bold" />
        <TextCoustom
          text="(solo disponible para pruebas con expo)"
          fontStyle="S_Normal"
          textStyles={{ textAlign: "center" }}
        />
      </View> */}
      <MapView
        ref={mapRef}
        style={styles.map}
        onMapReady={() => {
          if (mapRef.current && pinCoords.length > 0) {
            mapRef.current.fitToCoordinates(pinCoords, {
              edgePadding: { top: 110, right: 110, bottom: 110, left: 110 },
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
              onPress={() => handleMarkerPress(coordinate)}
              hitSlop={6}
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
