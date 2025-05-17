// styles.js  
import { Platform, StyleSheet, StatusBar } from "react-native";  

// Cria um objeto StyleSheet para definir os estilos  
export default StyleSheet.create({  
  // Estilos para o container principal  
  container: {  
    flex: 1, // Preenche todo o espaço disponível  
    flexDirection: "column", // Organiza os elementos em colunas  
    backgroundColor: "white", // Define a cor do background  
    alignItems: "center", // Centraliza os elementos horizontalmente  
    justifyContent: "space-around", // Distribui espaço igualmente entre os elementos  
    paddingTop: Platform.select({  
      // Ajusta um padding top de acordo com a plataforma  
      ios: 20, // Padding top para iOS  
      android: StatusBar.currentHeight, // Padding top para Android, considerando a altura da StatusBar  
    }),  
  },  

  // Estilos para as caixas  
  box: {  
    height: 100, // Altura da caixa  
    width: 100, // Largura da caixa  
    alignItems: "center", // Centraliza o conteúdo verticalmente  
    justifyContent: "center", // Centraliza o conteúdo horizontalmente  
    borderWidth: 1, // Largura da borda  
    borderStyle: "dashed", // Estilo da borda (tracejada)  
    borderColor: "darkgray", // Cor da borda  
    backgroundColor: "lightgray", // Cor de fundo da caixa  
  },  

  // Estilos para o texto dentro das caixas  
  boxText: {  
    color: "darkslategray", // Cor do texto  
    fontWeight: "bold", // Peso da fonte (negrito)  
  },  

  // Estilos para as linhas  
  row: {  
    flex: 1, // Preenche todo o espaço disponível  
    flexDirection: "row", // Organiza os elementos em linha  
    justifyContent: "space-around", // Distribui espaço igualmente entre os elementos  
    alignItems: "stretch", // Estica a linha para ocupar toda a largura do container pai  
  },  

  // Estilos para as colunas  
  column: {  
    flex: 1, // Preenche todo o espaço disponível  
    flexDirection: "column", // Organiza os elementos em coluna  
    justifyContent: "center", // Centraliza os elementos horizontalmente  
    alignItems: "center", // Centraliza os elementos horizontalmente  
    alignItems: "stretch", // Estica a coluna para ocupar toda a altura do container pai  
  },  
});  