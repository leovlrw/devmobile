import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import styles from "./styles"

const API_KEY = "";

const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function WhereAmI() {
  const [address, setAddress] = useState("Loading...");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    function setPosition({
      coords: { latitude, longitude },
    }) {
      setLongitude(longitude);
      setLatitude(latitude);
    }

    fetch(`${URL}${latitude},${longitude}`)
      .then((resp) => resp.json())
      .then(({ results }) => {
        if (results.lenght > 0) {
          setAddress(results[0].formatted_address);
        }
      })
      .catch((error) => {
        console.log(error.message);
      })

    // Declara uma variável para armazenar o "watcher" (observador da posição)
    let watcher;

    // Função assíncrona imediatamente invocada para lidar com permissões e localização
    (async () => {
      // Solicita permissão ao usuário para acessar a localização enquanto o app estiver em primeiro plano
      let { status } = await Location.requestForegroundPermissionsAsync();

      // Se a permissão não for concedida, sai da função
      if (status !== "granted") {
        return;
      }

      // Obtém a posição atual do dispositivo
      let location = await Location.getCurrentPositionAsync({});

      // Chama uma função setPosition passando a localização obtida
      setPosition(location);

      // Inicializa a observação contínua da posição, chamando setPosition sempre que a posição mudar
      watcher = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Highest, timeInterval: 1000 },
        setPosition
      );
    })();
    // Retorna uma função de limpeza que será executada quando o componente for desmontado
    return () => {
      watcher?.remove() // Remove o observador de posição se ele existir
    };
  }, []);
  // Retorna o layout do componente: uma View com três Texts mostrando endereço, latitude e longitude
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
} // O array vazio indica que o useEffect será executado apenas uma vez (quando o componente monta)





