// styles.js  
import { Platform, StyleSheet, StatusBar } from "react-native";  

// Cria um objeto StyleSheet para definir os estilos  
export default StyleSheet.create({  
    // Estilos para o container principal  
    container: {  
        flex: 1, // Preenche todo o espaço disponível  
        flexDirection: "row", // Organiza os elementos em linha  
        flexWrap: "wrap", // Permite que os elementos quebrem para a próxima linha  
        backgroundColor: "ghostwhite", // Define a cor de fundo  
        alignItems: "center", // Centraliza os elementos verticalmente  
        paddingTop: Platform.select({  
            ios: { paddingTop: 40 }, // Padding top para iOS  
            android: { paddingTop: StatusBar.currentHeight }, // Padding top para Android, considerando a altura da barra de status  
        }),  
    },  
  
    // Estilos para as caixas  
    box: {  
        height: 100, // Altura da caixa  
        width: 100, // Largura da caixa  
        justifyContent: "center", // Centraliza o conteúdo verticalmente  
        alignItems: "center", // Centraliza o conteúdo horizontalmente  
        margin: 10, // Margem da caixa  
        borderWidth: 2, // Largura da borda da caixa  
        borderColor: "black", // Cor da borda  
        borderStyle: "dashed", // Estilo da borda (tracejada)  
    },  
  
    // Estilos para o texto dentro das caixas  
    boxText: {  
        color: "darkslategray", // Cor do texto  
        fontWeight: "bold", // Peso da fonte (negrito)  
    },  
});  