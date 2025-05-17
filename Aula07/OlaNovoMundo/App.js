import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilClasse from './componentes/olaPerfilClasse';
import OlaPerfilFuncao from './componentes/olaPerfilFuncao';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilClasse nome="leonardo" endereco="seila" telefone="7070707007"/>
      <OlaPerfilFuncao nome="leonardo" endereco="seila" telefone="7070707007"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
