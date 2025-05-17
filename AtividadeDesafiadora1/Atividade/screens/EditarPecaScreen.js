import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function EditarPecaScreen({ route, navigation }) {
  const { peca, atualizarQuantidade } = route.params;// Recebe a peça e a função de atualizar
  const [quantidade, setQuantidade] = useState(String(peca.quantidade));// Inicializa com o valor atual

    // Atualiza a quantidade e volta pra tela anterior
  const salvarAlteracoes = () => {
    const novaQtd = parseInt(quantidade);
    if (isNaN(novaQtd)) {
      Alert.alert('Erro', 'Digite uma quantidade válida.');
      return;
    }

    atualizarQuantidade(peca.codigo, novaQtd);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Peça</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>{peca.nome}</Text>

      <Text style={styles.label}>Código:</Text>
      <Text style={styles.valor}>{peca.codigo}</Text>

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Button title="Salvar Alterações" onPress={salvarAlteracoes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10
  },
  valor: {
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20
  }
});
