import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import styles from "./styles";

// Define a aparência da barra de status como "dark-content"
StatusBar.setBarStyle("dark-content");

// Define áreas do mapa com coordenadas e estilos
const restaurantesPolygon  = {
  coordinates: [
    { latitude: -22.012333, longitude: -47.888639 },
    { latitude: -22.015222, longitude: -47.883861 },
    { latitude: -22.016889, longitude: -47.888528 },
    { latitude: -22.016333, longitude: -47.873556 },
    { latitude: -21.996944, longitude: -47.797278 },
    { latitude: -22.012333, longitude: -47.888639 }
  ],
  strokeColor: "coral",
  strokeWidth: 4,
};

const baresPolygon  = {
  coordinates: [
    { latitude: -22.017944, longitude: -47.900611 },
    { latitude: -22.018778, longitude: -47.900500 },
    { latitude: -22.016306, longitude: -47.873500 },
    { latitude: -22.015611, longitude: -47.871278 },
    { latitude: -22.017944, longitude: -47.900611 }
  ],
  strokeColor: "firebrick",
  strokeWidth: 4,
};

export default function PlottingOverlays() {
  const [restaurantesStyles, setRestaurantesStyles] = useState([styles.ipaText, styles.boldText]);
  const [baresStyles, setBaresStyles] = useState([styles.stoutText]);
  const [visibleOverlays, setVisibleOverlays] = useState([restaurantesPolygon]); // Começa com a região IPA

  function onClickRestaurantes() {
    setRestaurantesStyles([styles.ipaText, styles.boldText]);
    setBaresStyles([styles.stoutText]);
    setVisibleOverlays([restaurantesPolygon]);
  }

  function onClickBares() {
    setBaresStyles([styles.stoutText, styles.boldText]);
    setRestaurantesStyles([styles.ipaText]);
    setVisibleOverlays([baresPolygon]);
  }

  return (
    <View style={styles.container}>
      {/* Títulos clicáveis */}
      <View>
        <Text style={restaurantesStyles} onPress={onClickRestaurantes}>Restaurantes</Text>
        <Text style={baresStyles} onPress={onClickBares}>Bares</Text>
      </View>

      {/* Mapa com polígonos visíveis */}
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 43.8486744,
          longitude: -79.0695283,
          latitudeDelta: 0.002,
          longitudeDelta: 0.04,
        }}
      >
        {visibleOverlays.map((v, i) => (
          <Polygon
            key={i}
            coordinates={v.coordinates}
            strokeColor={v.strokeColor}
            strokeWidth={v.strokeWidth}
          />
        ))}
      </MapView>
    </View>
  );
}


