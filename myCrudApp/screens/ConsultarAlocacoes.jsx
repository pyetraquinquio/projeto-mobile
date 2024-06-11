import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.35.36:3000/api"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function ConsultarAlocacoes() {

  // Função para buscar todos os produtos na API
  const fetchAllAlocacoes = async () => {
    try {
      const response = await fetch(`${API_URL}/alocacao`); // Faz a requisição GET para a API
      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a resposta
      }
      const data = await response.json(); // Converte a resposta para JSON
      setAlocacoes(data.alocacao); // Atualiza o estado com a lista de produtos
      setError(null); // Reseta o estado de erro
    } catch (error) {
      console.error("Erro ao buscar todas alocações:", error); // Loga o erro no console
      setError("Não foi possível buscar as alocacões."); // Define a mensagem de erro
    }
  };

  return (
    <View style={styles.container}>

<View style={styles.botao}>
      {/* Botão para buscar um produto específico */}
      <Button title="Consultar" onPress={ConsultarAlocacoes} />
      </View>

      <View style={styles.botao}>
      {/* Botão para buscar todos os produtos */}
      <Button title="Listar Todos as Alocações" onPress={fetchAllAlocacoes} />
</View>

      {/* Exibe a lista de produtos, se existir */}
      {alocacoes.length > 0 && (
        <FlatList
          data={alocacao} // Dados da lista de produtos
          keyExtractor={(item) => item.id.toString()} // Função para extrair a chave de cada item
          renderItem={({ item }) => (
            <View style={styles.botao}>
              <Text>ID: {item.id}</Text>
              <Text>ID do Professor: {item.id_prof}</Text>
              <Text>ID da Sala: {item.id_sala}</Text>
              <Text>Dia da Semana: {item.dia_semana}</Text>
              <Text>Período: {item.periodo}</Text>

            </View>
          )}
        />
      )}
      {/* Exibe a mensagem de erro, se existir */}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Espaçamento interno
    backgroundColor: "#f4def8",// Cor de fundo branca
  },
  botao: {
    borderColor: "black", // Cor da borda
    borderWidth: 2, // Largura da borda
    marginBottom: 30, // Margem inferior
    padding: 10, // Espaçamento interno
    marginTop: 30,
    backgroundColor: "#E19FED",
    borderRadius: 30,
    marginLeft: 100,
    marginRight: 100

  },

  descricao: {
    borderColor: "black", // Cor da borda
    borderWidth: 2, // Largura da borda
    marginBottom: 30, // Margem inferior
    padding: 10, // Espaçamento interno
    marginTop: 30,
    borderRadius: 30,
   

  }
});