import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RecuperacaoSenhaScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState(null);

  // Simula recuperação de senha
  const recuperarSenha = () => {
    setNovaSenha('1234'); // simulação de nova senha
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recuperação de Senha</Text>
      <TextInput
        placeholder="Nome de usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />
      <Button title="Recuperar" onPress={recuperarSenha} />
      {/* Mostra a nova senha se existir */}
      {novaSenha && <Text style={styles.senha}>Nova senha: {novaSenha}</Text>}
      <Button title="Voltar ao Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  },
  senha: {
    marginVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
