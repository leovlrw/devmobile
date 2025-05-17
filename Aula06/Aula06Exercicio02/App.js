import React, { useState } from 'react';
import { 
    View, Text, Image, TextInput, Button, TouchableOpacity, 
    ScrollView, FlatList, SectionList, ActivityIndicator, 
    // Slider,
     Switch, StyleSheet 
} from 'react-native';

// Definição do componente principal
const App = () => {
    // Definição de estados usando useState
    const [text, setText] = useState(""); // Armazena o texto do TextInput
    const [isLoading, setIsLoading] = useState(false); // Controla a exibição do indicador de carregamento
    // const [sliderValue, setSliderValue] = useState(0); // Guarda o valor do Slider
    const [switchValue, setSwitchValue] = useState(false); // Controla o estado do Switch (on/off)

    // Array de objetos para renderização na FlatList
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];

    // Dados organizados por seções para a SectionList
    const sections = [
        { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
        { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] }
    ];

    // Função chamada ao pressionar o botão
    const handleButtonPress = () => {
        setIsLoading(true); // Ativa o indicador de carregamento
        setTimeout(() => {
            setIsLoading(false); // Desativa após 2 segundos
            alert('Button Pressed!'); // Exibe um alerta
        }, 2000);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                {/* Texto simples */}
                <Text style={styles.text}>Hello React Native!</Text>

                {/* Exibição de uma imagem a partir de uma URL */}
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
                    style={styles.image} 
                />

                {/* Campo de entrada de texto */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter text"
                    value={text}
                    onChangeText={setText}
                />

                {/* Botão com ação ao ser pressionado */}
                <Button title="Press Me" onPress={handleButtonPress} />

                {/* Botão estilizado com TouchableOpacity */}
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.touchableOpacityText}>Touch Me</Text>
                </TouchableOpacity>

                {/* Indicador de carregamento, visível quando isLoading for true */}
                <ActivityIndicator animating={isLoading} />

                {/* Slider para selecionar valores entre 0 e 100 */}
                {/* <Slider
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                />
                <Text>Slider value: {sliderValue}</Text> */}

                {/* Switch (interruptor) para alternar entre ligado e desligado */}
                <Switch value={switchValue} onValueChange={setSwitchValue} />
                <Text>Switch Value: {switchValue ? 'On' : 'Off'}</Text>
            </View>

            {/* FlatList para exibir uma lista simples de itens */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />

            {/* SectionList para exibir itens organizados em seções */}
            <SectionList
                sections={sections}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
            />
        </ScrollView>
    );
};

// Definição dos estilos para os componentes
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
        marginBottom: 10,
    },
    touchableOpacityText: {
        color: 'white',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

// Exportação do componente principal
export default App;
