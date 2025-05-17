import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function EstoqueScreen({ navigation }) {
  // Estado inicial do estoque, com algumas peças simuladas
  const [estoque, setEstoque] = useState([
    { nome: 'Parafuso', codigo: '001', quantidade: 100 },
    { nome: 'Porca', codigo: '002', quantidade: 200 },
    { nome: 'Arruela', codigo: '003', quantidade: 150 }
  ]);

   // Função que atualiza a quantidade de uma peça com base no código
  const atualizarQuantidade = (codigo, novaQuantidade) => {
    const novoEstoque = estoque.map(item =>
      item.codigo === codigo ? { ...item, quantidade: novaQuantidade } : item
    );
    setEstoque(novoEstoque);// Atualiza o estado do estoque
  };

  // Função que adiciona uma nova peça ao estoque
  const adicionarPeca = novaPeca => {
    setEstoque([...estoque, novaPeca]);// Adiciona a nova peça no final da lista
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque de Peças</Text>

      <FlatList
        data={estoque}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Código: {item.codigo}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
            </View>
            <TouchableOpacity
              style={styles.botaoEditar}
              onPress={() =>
                navigation.navigate('EditarPeca', {
                  peca: item,// Envia a peça atual como parâmetro
                  atualizarQuantidade// Envia a função para atualizar
                })
              }
            >
              <Text style={styles.botaoTexto}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Button
        title="Adicionar Nova Peça"
        onPress={() =>
          navigation.navigate('AdicionarPeca', {
            adicionarPeca// Passa a função para adicionar uma nova peça
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center'
  },
  item: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16
  },
  botaoEditar: {
    backgroundColor: '#007bff',
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center'
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold'
  }
});
