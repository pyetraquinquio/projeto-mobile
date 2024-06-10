import {View, Button, StyleSheet} from "react-native";

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.35.36:3000/api"; // Ajuste para o IP na sua maquina

// Componente principal da tela HomeScreen
export default function HomeScreen({ navigation }) {

          return (
            <View style={styles.container}>
           <Button style={styles.botao}
           placeholder="Consultar Professor"
           title="Pesquisar Professor"
        onPress={() => navigation.navigate('Professores')}
        color={"#E19FED"}
          />

           <Button style={styles.botao}
           placeholder="Consultar Sala"
           title="Pesquisar Sala"
        onPress={() => navigation.navigate('Salas')}
        color={"#E19FED"}
           />

           <Button style={styles.botao}
           placeholder="Consultar Alocação"
           title="Pesquisar Alocação"
        onPress={() => navigation.navigate('Alocações')}
        color={"#E19FED"}
           />

          <Button style={styles.botao}
           placeholder="Consultar Visão"
           title="Pesquisar Visão"
        onPress={() => navigation.navigate('Visões')}
        color={"#E19FED"}
           />

           </View>
           );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Espaçamento interno
    backgroundColor: "#f4def8", // Cor de fundo branca
  },
  botao: {
    borderColor: "black", // Cor da borda
    borderWidth: 1, // Largura da borda
    marginBottom: 10, // Margem inferior
    padding: 10, // Espaçamento interno
    justifyContent: "space-around"
  }
});