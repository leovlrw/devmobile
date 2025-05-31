import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const carregarUsuario = async () => {
      const valorSalvo = await AsyncStorage.getItem('usuarioInfo');
      if (valorSalvo) {
        setUsuario(JSON.parse(valorSalvo));
      } else {
        setMensagem('Nenhum usuário salvo');
      }
    };

    carregarUsuario();
  }, []);

  const salvarUsuario = async () => {
    const novoUsuario = {
      nome: 'João Silva',
      idade: 30,
    };
    await AsyncStorage.setItem('usuarioInfo', JSON.stringify(novoUsuario));
    setUsuario(novoUsuario);
    setMensagem('Usuário salvo com sucesso');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados do Usuário</Text>
      <Text style={styles.texto}>Nome: {usuario?.nome ?? 'Nenhum usuário salvo'}</Text>
      <Text style={styles.texto}>Idade: {usuario?.idade ?? 'N/A'}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <Button title="Salvar Usuário" onPress={salvarUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  mensagem: {
    fontSize: 16,
    marginTop: 20,
    color: 'green',
  },
});
