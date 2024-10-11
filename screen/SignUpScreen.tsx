// screens/SignUpScreen.tsx

import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSignUp = () => {
    // Logique d'inscription ici (à remplacer par votre propre logique)
    if (form.firstName && form.lastName && form.email && form.phone && form.password) {
      Alert.alert('Inscription réussie', `Bienvenue, ${form.firstName}!`);
      navigation.navigate('Home'); // Redirection vers la page d'accueil après inscription
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Inscription</Text>
          <Text style={styles.subtitle}>Créez votre compte</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Prénom</Text>
            <TextInput
              autoCapitalize="none"
              onChangeText={firstName => setForm({ ...form, firstName })}
              placeholder="Votre prénom"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.firstName}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nom</Text>
            <TextInput
              autoCapitalize="none"
              onChangeText={lastName => setForm({ ...form, lastName })}
              placeholder="Votre nom"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.lastName}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Adresse e-mail</Text>
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Numéro de téléphone</Text>
            <TextInput
              keyboardType="phone-pad"
              onChangeText={phone => setForm({ ...form, phone })}
              placeholder="Votre numéro de téléphone"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.phone}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Mot de passe</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignUp}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>S'inscrire</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.formFooter}>
              Vous avez déjà un compte ?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Connectez-vous</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Form */
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
