import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const salvarNome = async () => {
    try {
      await AsyncStorage.setItem('nomeUsuario', nome);

      setMensagem('Nome salvo com sucesso!');
      setNome('');
    } catch (error) {
      setMensagem('Erro ao salvar o nome: ' + error);
    }
  };







  
}
