import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  // Slider, // Removido pois não é compatível com a web
  StyleSheet,
} from 'react-native';

const App = () => {
  // Estados para armazenar valores dinâmicos
  const [text, setText] = useState(''); // Estado para armazenar o texto do TextInput
  const [imageWidth, setImageWidth] = useState(200); // Estado para controlar a largura da imagem
  const [isLoading, setIsLoading] = useState(false); // Estado para exibir ou ocultar o ActivityIndicator
  // const [sliderValue, setSliderValue] = useState(0); // Comentado pois o Slider foi removido

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList (com seções agrupadas)
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  // Função chamada ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true); // Exibe o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Oculta o indicador após 2 segundos
      alert('Button pressed!'); // Exibe um alerta
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Hello React Native!</Text>

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />

        {/* Botão que ativa o indicador de carregamento */}
        <Button title="Press me" onPress={handlePress} />

        {/* Botão que aumenta a largura da imagem ao ser pressionado */}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setImageWidth(imageWidth + 50)}
        >
          <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento, exibido quando isLoading for true */}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />

        {/* Slider removido pois não é compatível com a web */}
        {/* <Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Text>Slider Value: {sliderValue.toFixed(0)}</Text> */}
      </View>

      {/* Lista simples exibindo os itens do array data */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      {/* Lista seccionada, agrupando itens por categoria */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </ScrollView>
  );
};

// Estilos dos componentes
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
    height: 200,
    resizeMode: 'contain',
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
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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

export default App;
