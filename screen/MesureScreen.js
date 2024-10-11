import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function MesureScreen() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');

  const handleMeasure = () => {
    const systolicValue = parseInt(systolic);
    const diastolicValue = parseInt(diastolic);

    if (isNaN(systolicValue) || isNaN(diastolicValue)) {
      Alert.alert("Erreur", "Veuillez entrer des valeurs valides.");
      return;
    }

    // Conditions pour évaluer la tension
    if (systolicValue < 120 && diastolicValue < 80) {
      Alert.alert("Résultat", "Votre tension est normale.");
    } else if (systolicValue >= 180 || diastolicValue >= 120) {
      Alert.alert("Alerte médicale", "⚠️ URGENCE ! Consultez un docteur immédiatement.", [
        { text: "OK", style: "destructive" }
      ]);
    } else if ((systolicValue >= 140 && systolicValue < 180) || (diastolicValue >= 90 && diastolicValue < 120)) {
      Alert.alert("Alerte", "⚠️ Votre tension est élevée. Vous devez voir un docteur.", [
        { text: "OK", style: "destructive" }
      ]);

      // Poser des questions sur les symptômes
      Alert.alert(
        "Symptômes",
        "Avez-vous des maux de tête, des troubles de la vision, ou d'autres problèmes de santé ?",
        [
          { text: "Non" },
          { text: "Oui", onPress: () => Alert.alert("Conseil", "Il est nécessaire de contacter votre médecin.") }
        ]
      );
    } else {
      Alert.alert("Attention", "⚠️ Vos valeurs sont élevées, mais pas critiques. Surveillez régulièrement.", [
        { text: "OK", style: "destructive" }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesurer la tension artérielle</Text>

      <TextInput
        style={styles.input}
        placeholder="Valeur systolique"
        keyboardType="numeric"
        value={systolic}
        onChangeText={setSystolic}
      />
      <TextInput
        style={styles.input}
        placeholder="Valeur diastolique"
        keyboardType="numeric"
        value={diastolic}
        onChangeText={setDiastolic}
      />

      <TouchableOpacity style={styles.button} onPress={handleMeasure}>
        <Text style={styles.buttonText}>Soumettre les valeurs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2C3E50',
  },
  input: {
    height: 50,
    borderColor: '#B0C4DE',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#F8F9FA',
    width: '100%',
  },
  button: {
    backgroundColor: '#266EF1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
