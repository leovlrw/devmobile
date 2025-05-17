// Importa React para JSX  
import React from "react";  

// Importa o componente View do React Native  
import { View } from "react-native";  

// Importa os estilos definidos no arquivo externo  
import styles from "./styles";  

// Importa os componentes específicos de filtro e ordenação  
import ListFilter from "./ListFilter";  
import ListSort from "./ListSort";  

// Componente que agrupa os controles de filtro e ordenação  
export default function ListControls({ onFilter, onSort, asc }) {  
    return (  
        // View com estilo aplicado, agrupando os botões horizontalmente  
        <View style={styles.controls}>  
            {/* Campo de entrada de texto para o filtro */}  
            <ListFilter onFilter={onFilter} />  
            {/* Botão de alternância de ordenação */}  
            <ListSort onSort={onSort} asc={asc} />  
        </View>  
    );  
}  

