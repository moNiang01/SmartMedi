import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen'; // Importation de votre page d'accueil
import ProfileScreen from './screen/UserProfile'; // Importation de la page profil
import MesureScreen from './screen/MesureScreen'; // Importation de la page de mesure
import HistoriqueScreen from './screen/HistoriqueScreen'; // Importation de l'historique des mesures
import ChatbotScreen from './screen/ChatbotScreen'; // Importation de votre chatbot
import LoginScreen from './screen/LoginScreen'; // Importation de l'écran de connexion

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        {/* Page d'accueil */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Accueil' }}
        />
        
        {/* Page profil */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Mon Profil' }}
        />
        
        {/* Page de mesure de la tension */}
        <Stack.Screen
          name="MesureScreen"
          component={MesureScreen}
          options={{ title: 'Mesure de la Tension' }}
        />
        
        {/* Historique des mesures */}
        <Stack.Screen
          name="HistoriqueScreen"
          component={HistoriqueScreen}
          options={{ title: 'Historique des Mesures' }}
        />

        {/* Ajout de la page du Chatbot */}
        <Stack.Screen
          name="Chatbot"
          component={ChatbotScreen}
          options={{ title: 'Chatbot Hypertension' }}
        />

        {/* Ajout de la page de connexion */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Connexion' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
