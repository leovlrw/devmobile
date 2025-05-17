// Importa a biblioteca React, necessária para criar componentes no React Native
import React from "react";

// Importa os componentes View (estrutura visual) e StatusBar (barra de status do sistema)
import { View, StatusBar } from "react-native";

// Importa o componente MapView (exibição de mapas) e Marker (marcadores no mapa)
import MapView, { Marker } from "react-native-maps";

// Importa os estilos definidos no arquivo "styles.js"
import styles from "./styles";

// Define a barra de status com ícones escuros sobre fundo claro
StatusBar.setBarStyle("dark-content");

// Declara e exporta o componente funcional principal chamado App
export default function App() {
  // Retorna a interface visual do aplicativo
  return (
    // View principal com estilo container aplicado
    <View style={styles.container}>
      {/* Componente de mapa, exibido ocupando a tela de acordo com o estilo definido */}
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        showsUserLocation
        followsUserLocation
      >
        {/* Primeiro marcador no mapa */}
        <Marker
          title="Duff Brewery"
          description="Uma grande cervejaria artesanal!"
          coordinate={{ latitude: 43.841728, longitude: -79.086082 }}
        />

        {/* Segundo marcador no mapa */}
        <Marker
          title="Pawtucket Brewery"
          description="A Cervejaria Histórica"
          coordinate={{ latitude: 43.8401328, longitude: -79.085407 }}
        />
      </MapView>
    </View>
  );
}

