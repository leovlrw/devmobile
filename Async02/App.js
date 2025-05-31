import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nomeSalvo, setNomeSalvo] = useState('');
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    carregarNome();
  }, []);

  const carregarNome = async () => {
    try {
      const valor = await AsyncStorage.getItem('nome');
      if (valor !== null) {
        setNomeSalvo(valor);
        setMensagem('');
      } else {
        setMensagem('Nenhum nome salvo.');
      }
    } catch (erro) {
      console.error('Erro ao carregar o nome:', erro);
      setNomeSalvo('Erro ao carregar o nome.');
    }
  };

  const salvarNome = async () => {
    try {
      await AsyncStorage.setItem('nome', nome);
      setNomeSalvo(nome);
      setMensagem('');
    } catch (erro) {
      console.error('Erro ao salvar o nome:', erro);
      setMensagem('Erro ao salvar o nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome salvo: {nomeSalvo}</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Carregar Nome" onPress={carregarNome} />
      <Button title="Salvar Nome" onPress={salvarNome} />
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  mensagem: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
