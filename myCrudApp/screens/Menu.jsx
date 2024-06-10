import {View, Button, StyleSheet} from "react-native";

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.42.55:3000/api"; // Ajuste para o IP na sua maquina

// Componente principal da tela HomeScreen
export default function HomeScreen({ navigation }) {

          return (
            <View style={styles.container}>
           <Button
           placeholder="Consultar Professor"
           title="Pesquisar Professor"
        onPress={() => navigation.navigate('Search')}
           />

           <Button
           placeholder="Consultar Sala"
           title="Pesquisar Sala"
        onPress={() => navigation.navigate('Search')}
           />

           <Button
           placeholder="Consultar Alocação"
           title="Pesquisar Alocação"
        onPress={() => navigation.navigate('Search')}
           />

          <Button
           placeholder="Consultar Visão"
           title="Pesquisar Visão"
        onPress={() => navigation.navigate('Search')}
           />

           </View>
           );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Espaçamento interno
    backgroundColor: "#fff", // Cor de fundo branca
  },
  input: {
    height: 40, // Altura do input
    borderColor: "#ccc", // Cor da borda
    borderWidth: 1, // Largura da borda
    marginBottom: 10, // Margem inferior
    padding: 10, // Espaçamento interno
  },
  product: {
    padding: 10, // Espaçamento interno
    marginTop: 20, // Margem superior
    borderBottomColor: "#ccc", // Cor da borda inferior
    borderBottomWidth: 1, // Largura da borda inferior
  },
});