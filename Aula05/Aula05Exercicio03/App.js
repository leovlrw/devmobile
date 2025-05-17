import React, { useState } from 'react'; // Corrigido: importação de useState
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, StyleSheet } from 'react-native'; 

// Função principal do componente
const App = () => {
  // Definição de estados
  const [text, setText] = useState(''); // Estado para controlar o texto do TextInput
  const [items, setItems] = useState([  // Estado para controlar os itens da lista
    { id: 1, name: 'Item 1' }, 
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  // Definição das seções para o SectionList
  const sections = [
    { 
      title: 'Seção 1', 
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] 
    },
    { 
      title: 'Seção 2', 
      data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }] 
    }
  ];

  // Função que será chamada ao pressionar o botão
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Exibindo um texto simples */}
      <View style={styles.view}>
        <Text style={styles.text}>Texto de exemplo</Text>
        
        {/* Exibindo uma imagem */}
        <Image 
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
          style={styles.image} 
        />
        
        {/* TextInput para digitar texto */}
        <TextInput 
          style={styles.textInput} 
          placeholder="Digite algo" 
          onChangeText={setText} // Atualiza o estado 'text' ao digitar
          value={text} // O valor do TextInput vem do estado 'text'
        />
        
        {/* Botão que aciona a função handlePress */}
        <Button title="Clique aqui" onPress={handlePress} />
        
        {/* TouchableOpacity, que também chama a função handlePress */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>
      </View>

      {/* Exibindo uma lista com FlatList */}
      <FlatList 
        data={items} // Passando os itens para o FlatList
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderizando cada item
        keyExtractor={item => item.id.toString()} // Usando o id como chave
      />
      
      {/* Exibindo uma lista com SectionList */}
      <SectionList 
        sections={sections} // Passando as seções para o SectionList
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderizando os itens de cada seção
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text> // Exibindo o título da seção
        )}
        keyExtractor={item => item.id.toString()} // Usando o id como chave
      />
    </ScrollView>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  touchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

// Exportação do componente App
export default App; 