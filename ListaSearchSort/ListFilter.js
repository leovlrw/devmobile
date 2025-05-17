// Importa React  
import React from "react";  

// Importa View e TextInput para a estrutura do campo de busca  
import { View, TextInput } from "react-native";  

// Importa os estilos do arquivo externo  
import styles from "./styles";  

// Componente de filtro: campo de texto para digitação  
export default function ListFilter({ onFilter }) {  
    return (  
        <View> {/* View que encapsula o campo de entrada */}  
            <TextInput   
                autoFocus // Foco automático ao carregar  
                placeholder="Search" // Texto de ajuda quando o campo está vazio  
                style={styles.filter} // Estilo visual do campo de texto  
                onChangeText={onFilter} // Dispara evento para atualizar o estado de filtro  
            />  
        </View>  
    );  
}  