import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  // Estado para o texto digitado pelo usuário
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
  //Função de concatenar o nome digitado com o texto, quando o botão clicado
    const lidarComClique = () => {
        if (nome) {
            setMensagem(`Olá, ${nome}!`);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                {/*Coloca o titulo no cabeçalho da pagina*/}
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
                    style={styles.image} 
                />
                <Text style={styles.text}>
                    Exemplo de elementos gráficos interativos em React Native
                </Text>
            </View>
            {/*Campo para digita o nome*/}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    onChangeText={setNome}
                />
                {/*Botão para enviar o que foi escrito e enviar para a função de concatenar*/}
                <Button title="Enviar" onPress={lidarComClique} />
            </View>
            {mensagem ? (
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>{mensagem}</Text>
                </View>
            ) : null}
            {/*Função que ao clicar no botão ele fique "invisivel" */}
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Botão personalizado</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    view: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    messageContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        color: 'green',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default App;