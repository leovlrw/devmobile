import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";

const App = () => {
  // Estado para o texto digitado pelo usuário
  const [text, setText] = useState('');

  // Estado para os itens na lista
  const [items, setItems] = useState([
    { id: Date.now(), name: 'Item 1' },
    { id: Date.now() + 1, name: 'Item 2' },
    { id: Date.now() + 2, name: 'Item 3' }
  ]);

  // Função chamada quando o botão "Pressione-me" for clicado
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  // Função para adicionar um novo item à lista
  const addItem = () => {
    setItems([...items, { id: Date.now(), name: text }]);
    setText(''); // Limpa o campo de texto após adicionar o item
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho com imagem e título */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
          style={styles.image} 
        />
        <Text style={styles.title}>Exemplo de App React Native</Text>
      </View>

      {/* Campo de texto para digitar um novo item */}
      <TextInput 
        style={styles.input} 
        placeholder="Digite algo" 
        value={text} 
        onChangeText={setText} 
      />
      
      {/* Botão para adicionar um item à lista */}
      <Button title="Adicionar Item" onPress={addItem} />

      {/* Exibição da lista de itens usando FlatList */}
      <FlatList 
        data={items} 
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()} 
      />

      {/* Botão customizado que exibe um alerta */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;