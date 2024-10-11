import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HistoriqueScreen() {
  // Exemple de données d'historique. À remplacer par les vraies données une fois la base de données intégrée.
  const history = [
    { date: '2024-10-01', systolic: 120, diastolic: 80 },
    { date: '2024-10-05', systolic: 130, diastolic: 85 },
    { date: '2024-10-08', systolic: 140, diastolic: 90 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Historique des mesures</Text>
      {history.map((entry, index) => (
        <View key={index} style={styles.entry}>
          <Text>{entry.date}</Text>
          <Text>
            Systolique: {entry.systolic} - Diastolique: {entry.diastolic}
          </Text>
        </View>
      ))}
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
  entry: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
