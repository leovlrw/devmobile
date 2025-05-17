import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RecuperacaoSenhaScreen from '../screens/RecuperacaoSenhaScreen';
import EstoqueScreen from '../screens/EstoqueItem';
import AdicionarPecaScreen from '../screens/AdicionarPecaScreen';
import EditarPecaScreen from '../screens/EditarPecaScreen';

// Cria o objeto da navegação tipo stack
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RecuperacaoSenha" component={RecuperacaoSenhaScreen} />
      <Stack.Screen name="Estoque" component={EstoqueScreen} />
      <Stack.Screen name="AdicionarPeca" component={AdicionarPecaScreen} />
      <Stack.Screen name="EditarPeca" component={EditarPecaScreen} />
    </Stack.Navigator>
  );
}
