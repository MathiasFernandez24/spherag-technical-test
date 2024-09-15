import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CardContainer from "../../../../components/cardContainer/CardContainer";
import { MapPinModel } from "../../../../domain/models/MapPin.model";

type MapPinProps = {
  mapRef: React.RefObject<MapView>;
  pinCoords: MapPinModel[];
};
const MapPin = (props: MapPinProps) => {
  const { mapRef, pinCoords } = props;
  return (
    <CardContainer styleContainer={{ padding: 0 }}>
      <MapView
        ref={mapRef}
        style={styles.map}
        onMapReady={() => {
          if (mapRef.current) {
            mapRef.current.fitToCoordinates(pinCoords, {
              edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
              animated: true,
            });
          }
        }}
      >
        {pinCoords.map((coordinate, index) => {
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
    height: 500,
    alignSelf: "center",
    borderRadius: 16,
  },
});
