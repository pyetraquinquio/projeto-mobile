import React, { useState, useEffect } from "react";
import {View, Button, StyleSheet} from "react-native";

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.42.55:3000/api"; // Ajuste para o IP na sua maquina

// Componente principal da tela HomeScreen
export default function HomeScreen({ navigation }) {
  // Define os estados para os campos do formulário e lista de produtos
  const [professor, setProfessor] = useState([]); // Estado para o nome do produto
  const [sala, setSala] = useState([]); // Estado para a quantidade do produto
  const [alocacao, setALocacao] = useState([]); // Estado para a marca do produto
  const [visao, setVisao] = useState([]); // Estado para a lista de produtos

  // Hook de efeito para buscar produtos ao montar o componente
  useEffect(() => {
    fetchProfessor();
    fetchSala();
    fetchAlocacao();
    fetchVisao(); // Chama a função para buscar produtos
  }, []);

  const fetchProfessor = async () => {
    try {
    // Faz uma requisição GET para a API
    const response = await fetch(`${API_URL}/professor`);
    // Converte a resposta para JSON
    const data = await response.json();
    // Define o estado de produtos com os dados recebidos
    setProfessor(data.professor);
    } catch (error) {
    // Loga erros no console
    console.error(error);
    }}

     const fetchSala = async () => {
      try {
      // Faz uma requisição GET para a API
      const response = await fetch(`${API_URL}/sala`);
      // Converte a resposta para JSON
      const data = await response.json();
      // Define o estado de produtos com os dados recebidos
      setSala(data.sala);
      } catch (error) {
      // Loga erros no console
      console.error(error);
      }}
    
      const fetchAlocacao = async () => {
        try {
        // Faz uma requisição GET para a API
        const response = await fetch(`${API_URL}/alocacao`);
        // Converte a resposta para JSON
        const data = await response.json();
        // Define o estado de produtos com os dados recebidos
        setALocacao(data.alocacao);
        } catch (error) {
        // Loga erros no console
        console.error(error);
        }};

        const fetchVisao = async () => {
          try {
          // Faz uma requisição GET para a API
          const response = await fetch(`${API_URL}/visao`);
          // Converte a resposta para JSON
          const data = await response.json();
          // Define o estado de produtos com os dados recebidos
          setVisao(data.visao);
          } catch (error) {
          // Loga erros no console
          console.error(error);
          }};


          return (
            <View style={styles.container}>
           <Button
           placeholder="Consultar Professor"
           value={professor}
           onChangeText={setProfessor}
           title="Pesquisar Professor"
        onPress={() => navigation.navigate('Search')}
           />

           <Button
           placeholder="Consultar Sala"
           value={sala}
           onChangeText={setSala}
           title="Pesquisar Sala"
        onPress={() => navigation.navigate('Search')}
           />

           <Button
           placeholder="Consultar Alocação"
           value={alocacao}
           onChangeText={setALocacao}
           title="Pesquisar Alocação"
        onPress={() => navigation.navigate('Search')}
           />

          <Button
           placeholder="Consultar Visão"
           value={visao}
           onChangeText={setVisao}
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