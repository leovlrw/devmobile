// Column.js  
import React from "react";  
import PropTypes from "prop-types"; // Importa PropTypes para validação de props  
import { View } from "react-native";  
import styles from "./styles"; // Importa os estilos definidos em styles.js  

// Componente Column que recebe children como prop  
export default function Column({ children }) {  
  return (  
    <View style={styles.column}>{children}</View>  
  );  
}  

// Define os tipos das props esperadas pelo componente Column  
Column.propTypes = {  
  // children deve ser um no renderizável e é obrigatório  
  children: PropTypes.node.isRequired,  
};  