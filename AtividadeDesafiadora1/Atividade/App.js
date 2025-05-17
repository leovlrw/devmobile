// Feito por:
//Leonardo valério
//Leonardo Miranda




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    // Envolve a navegação com NavigationContainer
    <NavigationContainer>
      <AppNavigator /> {/* Carrega a pilha de telas definida no AppNavigator.js */}
    </NavigationContainer>
  );
}
