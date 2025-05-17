// Importa o React para usar JSX  
import React from "react";  

// Importa os componentes Text (para exibir texto) e FlatList (para listas) do React Native  
import { Text, FlatList } from "react-native";  

// Importa os estilos visuais do arquivo styles.js  
import styles from "./styles";  

// Importa o componente de controles de lista (filtro e ordenação)  
import ListControls from "./ListControls";  

// Componente principal de renderização de lista  
export default function List({ data, onFilter, onSort, asc }) {  
    return (  
        <FlatList  
            data={data} // Array de dados a ser exibido  
            // Insere os controles de filtro e ordenação acima da lista  
            ListHeaderComponent={<ListControls onFilter={onFilter} onSort={onSort} asc={asc} />}  
            // Define como cada item a lista será renderizado; como o texto estilizado  
            renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}  
        />  
    );  
}  

