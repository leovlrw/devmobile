// Importa a função StyleSheet do React Native para criação de estilos  
import { StyleSheet } from "react-native";  

// Exporta os estilos como objeto padrão  
export default StyleSheet.create({  
    // Estilo do container principal da aplicação  
    container: {  
        flex: 1, // Ocupa toda a altura disponível  
        flexDirection: "column", // Layout em coluna  
        paddingTop: 20, // Espaçamento superior (status bar)  
    },  

    // Estilo aplicado a cada item da lista  
    item: {  
        margin: 5, // Espaçamento externo  
        padding: 5, // Espaçamento interno  
        borderColor: "slategray", // Cor do teto  
        backgroundColor: "ghostwhite", // Cor de fundo  
        textAlign: "center", // Centraliza o texto  
    }, 
    
    // Estilo do campo de texto de filtro  
filter: {  
    height: 40, // Altura do campo  
    width: 200, // Largura do campo  
},  

// Estilo da barra de controles (filtro e ordenação)  
controls: {  
    flex: 1, // Ocupa espaço disponível  
    flexDirection: "row", // Alinha os itens lado a lado  
    justifyContent: "space-between", // Espaço igualmente entre os controles  
    alignItems: "center", // Alinha verticalmente no centro  
    padding: 10, // Espaçamento interno  
    backgroundColor: "white", // Cor de fundo da barra  
},  
});  

