import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

const nomes = ['Carlos', 'Ana', 'João', 'Fernanda', 'Lucas', 'Mariana', 'Bruno', 'Paula', 'Rafael', 'Beatriz'];

const gerarItens = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    key: index.toString(),
    nome: nomes[Math.floor(Math.random() * nomes.length)],
  }));cd
};

export default function App() {
  const dados = gerarItens();

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome}</Text>
        )}
      />
    </View>
  );
}