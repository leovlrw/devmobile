import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
    // Estado para armazenar o valor do TextInput
    const [text, setText] = useState('');
    
    // Estado para controlar o indicador de carregamento (ActivityIndicator)
    const [isLoading, setIsLoading] = useState(false);

    // Função acionada quando o botão é pressionado
    const handlePress = () => {
        setIsLoading(true); // Ativa o indicador de carregamento

        // Simula um atraso de 2 segundos antes de exibir o alerta
        setTimeout(() => {
            setIsLoading(false); // Desativa o indicador de carregamento
            alert('Botão pressionado!'); // Exibe um alerta na tela
        }, 2000);
    };

    // Lista de itens para o FlatList
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    // Estrutura de dados para a SectionList, organizada em seções com títulos
    const sections = [
        {
            title: 'Seção 1',
            data: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
            ],
        },
        {
            title: 'Seção 2',
            data: [
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
            ],
        },
    ];

    return (
        // ScrollView permite rolar a tela caso o conteúdo ultrapasse os limites visíveis
        <ScrollView style={styles.container}>
            {/* View para agrupar os elementos */}
            <View style={styles.view}>
                {/* Texto simples exibido na tela */}
                <Text style={styles.text}>Olá, mundo!</Text>

                {/* Exibe uma imagem carregada a partir de uma URL */}
                <Image
                    source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
                    style={styles.image}
                />

                {/* Campo de entrada de texto com estado controlado */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite algo" // Texto de dica exibido no campo
                    value={text} // O valor do TextInput é controlado pelo estado 'text'
                    onChangeText={setText} // Atualiza o estado 'text' quando o usuário digita algo
                />

                {/* Botão que chama a função handlePress ao ser pressionado */}
                <Button title="Clique aqui" onPress={handlePress} />

                {/* Botão personalizado com TouchableOpacity */}
                <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
                    <Text style={styles.touchableOpacityText}>Clique aqui</Text>
                </TouchableOpacity>

                {/* Indicador de carregamento exibido enquanto isLoading for true */}
                <ActivityIndicator animating={isLoading} />
            </View>

            {/* Lista de itens utilizando FlatList, ideal para grandes listas */}
            <FlatList
                data={data} // Define os dados da lista
                renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da lista
                keyExtractor={(item) => item.id.toString()} // Gera uma chave única para cada item
            />

            {/* Lista organizada em seções utilizando SectionList */}
            <SectionList
                sections={sections} // Dados organizados por seções
                renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da seção
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text> // Renderiza o título da seção
                )}
                keyExtractor={(item) => item.id.toString()} // Gera uma chave única para cada item
            />
        </ScrollView>
    );
};

// Estilos dos componentes usando StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda a tela
        padding: 20, // Adiciona espaçamento interno
    },
    view: {
        marginBottom: 20, // Adiciona espaçamento na parte inferior
    },
    text: {
        fontSize: 20, // Define o tamanho do texto
        marginBottom: 10, // Adiciona espaçamento abaixo do texto
    },
    image: {
        width: 100, // Define a largura da imagem
        height: 100, // Define a altura da imagem
        marginBottom: 10, // Adiciona espaçamento abaixo da imagem
    },
    textInput: {
        height: 40, // Define a altura do campo de entrada
        borderColor: 'gray', // Cor da borda
        borderWidth: 1, // Espessura da borda
        marginBottom: 10, // Espaçamento abaixo do campo
        paddingHorizontal: 10, // Espaçamento interno horizontal
    },
    touchableOpacity: {
        backgroundColor: 'blue', // Cor de fundo do botão
        padding: 10, // Espaçamento interno do botão
        borderRadius: 5, // Bordas arredondadas
        marginBottom: 10, // Espaçamento abaixo do botão
    },
    touchableOpacityText: {
        color: 'white', // Cor do texto dentro do botão
        textAlign: 'center', // Centraliza o texto horizontalmente
    },
    sectionHeader: {
        fontSize: 18, // Tamanho da fonte do título da seção
        fontWeight: 'bold', // Deixa o título em negrito
        marginTop: 20, // Espaçamento acima do título da seção
        marginBottom: 10, // Espaçamento abaixo do título da seção
    },
});

export default App; // Exporta o componente principal