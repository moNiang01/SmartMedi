import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const vitalSigns = [
    { label: 'Pression Systolique', value: '140 mmHg' },  // Tension systolique
    { label: 'Pression Diastolique', value: '90 mmHg' },  // Tension diastolique
    { label: 'Fréquence Cardiaque', value: '85 bpm' },  // Fréquence cardiaque
    { label: 'Taux de Sucre dans le Sang', value: '1,10 g/L' },  // Taux de sucre dans le sang
    { label: 'Cholestérol', value: '2 g/L' },  // Cholestérol
  ];  

  const recommendations = [
    'Restez hydraté',
    'Faites de l\'exercice régulièrement',
    'Suivez un régime équilibré',
    'Évitez de fumer',
  ];  

export default function UserProfile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <View style={styles.headerAction}>
          <TouchableOpacity
            onPress={() => {
              // handle back navigation
            }}>
          </TouchableOpacity>
        </View>
        <View style={styles.headerAction} />
      </View>

      <ScrollView>
        <View style={styles.content}>
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.avatarImg} />
            </View>

            <Text style={styles.profileTitle}>Youssef Riahi</Text>

            <View style={styles.vitalSigns}>
              {vitalSigns.map(({ label, value }, index) => (
                <View key={index} style={styles.vitalSignItem}>
                  <Text style={styles.vitalSignLabel}>{label}</Text>
                  <Text style={styles.vitalSignValue}>{value}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.recommendationTitle}>Recommendations</Text>
            {recommendations.map((rec, index) => (
              <Text key={index} style={styles.recommendationItem}>{rec}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#121a26',
  },
  headerAction: {
    // Ajoutez des styles ici si nécessaire
    width: 40, // Par exemple, pour donner une largeur
    alignItems: 'center', // Centrer le contenu
  },
  content: {
    padding: 24,
  },
  profile: {
    paddingBottom: 16,
  },
  avatar: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 16,
    color: '#778599',
  },
  vitalSigns: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  vitalSignItem: {
    marginBottom: 10,
  },
  vitalSignLabel: {
    fontSize: 14,
    color: '#778599',
  },
  vitalSignValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121a26',
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  recommendationItem: {
    fontSize: 14,
    marginTop: 6,
    color: '#266ef1',
  },
});
