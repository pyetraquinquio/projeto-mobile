// Importa o React
import React from 'react';
import { StyleSheet } from 'react-native';

// Importa os componentes necessários da biblioteca de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa as telas que serão usadas na navegação
import HomeScreen from './screens/Menu';
import ConsultarProfessores from './screens/ConsultarProfessores';
import ConsultarSalas from './screens/ConsultarSalas';
import ConsultarAlocacoes from './screens/ConsultarAlocacoes';
import ConsultarVisoes from './screens/ConsultarVisoes'; 

// Cria uma instância do Stack Navigator
const Stack = createStackNavigator();

// Define o componente principal do aplicativo
export default function App() {
  return (
    // Envolve a navegação dentro do NavigationContainer
    <NavigationContainer>
      {/* Define o Stack Navigator com a rota inicial sendo "Home" */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define a tela "Home" como parte do Stack Navigator */}
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Professores" component={ConsultarProfessores} />

        <Stack.Screen name="Salas" component={ConsultarSalas} />

        <Stack.Screen name="Alocações" component={ConsultarAlocacoes} />

        <Stack.Screen name="Visões" component={ConsultarVisoes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

