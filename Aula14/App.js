import { FlatList, Text, View } from 'react-native';
import styles from "./styles";

const nomes = [
  "Ana", "Bruno", "Carla", "Diego", "Eduarda",
  "Felipe", "Giovana", "Henrique", "Isabela", "João",
  "Karen", "Lucas", "Mariana", "Nathan", "Olívia",
  "Paulo", "Quésia", "Rafael", "Sabrina", "Thiago",
  "Ursula", "Vinícius", "Wesley", "Xênia", "Yasmin", "Zeca"
]

const data = new Array(100) 
  .fill(null)
  .map((_, i) => ({ key: i.toString(), value: nomes[Math.floor(Math.random() * nomes.length)] }));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}
