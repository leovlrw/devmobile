import React from "react";
import { View, Text, StyleSheet } from 'react-native';

class OlaPerfilClasse extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                  <Text style={styles.text}>Nome: {this.props.nome}</Text>
                  <Text style={styles.text}>Endereço: {this.props.endereco}</Text>
                  <Text style={styles.text}>Telefone: {this.props.telefone}</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default OlaPerfilClasse;