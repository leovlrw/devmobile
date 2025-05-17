import React from "react";
import List from "./List"

// Função que transforma um array de strings em objetos com chave e valor  
function mapItems(items) {  
    return items.map((value, i) => ({ key: i.toString(), value }));  
}  

// Cria um array com 100 itens no formato: "Item 0", "Item 1", etc.  
const array = new Array(100).fill(null).map((_, i) => `Item ${i}`);  

// Função que filtra e ordena o array com base em um texto e se é ascendente ou não  
function filtrarEOrdenar(texto, asc) {  
    return array  
        .filter((item) => texto.length === 0 || item.includes(texto)) // filtra os itens pelo texto digitado  
        .sort((a, b) => (asc ? a > b ? 1 : -1 : a < b ? 1 : -1)); // ordenação crescente  
}  

// Componente principal que gerencia o estado e lógica da lista  
export default function ListContainer() {  
    const [asc, setAsc] = useState(true); // Estado de ordenação crescente ou decrescente  
    const [filter, setFilter] = useState(''); // Estado do filtro  

    // Memoriza os dados filtrados e ordenados sempre que filter ou asc mudam  
    const data = useMemo(() => {  
        return filtrarEOrdenar(filter, asc);  
    }, [filter, asc]);  

    // Renderiza o componente List passando os dados e funções de controle  
    return (  
        <List   
            data={mapItems(data)} // Mapeia os dados para o formato esperado pela FlatList  
            filterText={filter}   
            setFilter={(text) => setFilter(text)} // Atualiza o filtro com o texto digitado  
            sort={() => setAsc(!asc)} // Inverte a ordenação ao clicar no botão de ordenação  
        />  
    );  
}  