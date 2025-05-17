// Importa React  
import React from "react";  

// Importa o componente Text do React Native  
import { Text } from "react-native";  

// Mapa de símbolos para indicar se a ordenação é ascendente ou descendente  
const arrows = new Map([  
    [true, "↑"], // Ascendente  
    [false, "↓"] // Descendente  
]);  

// Componente de ordenação -- exibe um botão de texto que altera o tipo de ordenação  
export default function ListSort({ onSort, asc }) {  
    return (  
        // Texto clicável que exibe o símbolo da ordenação atual  
        // Ao ser clicado, executa a função onSort para inverter a ordenação  
        <Text onPress={onSort}>{arrows.get(asc)}</Text>  
    );  
}  