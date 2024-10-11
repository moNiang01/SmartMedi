import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ConseilsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conseils pour une bonne santé</Text>
      <Text style={styles.advice}>
        - Adoptez une alimentation équilibrée, riche en fruits et légumes.
        - Réduisez votre consommation de sel et de graisses saturées.
        - Faites de l'exercice régulièrement, au moins 30 minutes par jour.
        - Évitez la consommation excessive d'alcool et arrêtez de fumer.
        - Prenez vos médicaments selon les prescriptions de votre médecin.
        - Mesurez votre tension artérielle régulièrement et suivez vos constantes.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  advice: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#333',
  },
});
