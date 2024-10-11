import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { LineChart } from 'react-native-chart-kit'; // Bibliothèque pour le graphique
import { Dimensions } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>

        {/* Boutons pour le chatbot et la déconnexion */}
        <View style={styles.actionWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chatbot'); // Navigation vers le Chatbot
            }}
            style={{ marginRight: 'auto' }}>
            <View style={styles.action}>
              <FeatherIcon
                color="#6a99e3"
                name="message-circle"
                size={22}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.action}>
              <FeatherIcon
                color="#6a99e3"
                name="log-in"
                size={22}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Logo de l'application */}
        <View style={styles.logoContainer}>
          <Image
            source={require('C:/Users/niang/Documents/EPSI-20240610T095719Z-001/EPSI/smartmedi/smartmedi/assets/logo_smart.png')} // Remplace par le chemin du logo de ton application
            style={styles.logo}
          />
        </View>

        {/* Barre de recherche */}
        <View style={styles.search}>
          <View style={styles.searchInput}>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Entrez votre code de suivi"
                placeholderTextColor="#9eadba"
                style={styles.input}
              />
              <View style={styles.inputIcon}>
                <FeatherIcon color="#9eadba" name="box" size={16} />
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              // Handle onPress for submitting tracking code
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Soumettre</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Graphique de la tension artérielle */}
        <View style={styles.graphContainer}>
          <Text style={styles.graphTitle}>Historique de la Tension Artérielle</Text>
          <LineChart
            data={{
              labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
              datasets: [
                {
                  data: [120, 125, 130, 128, 135], // Valeurs de la tension artérielle systolique
                },
              ],
            }}
            width={Dimensions.get('window').width - 40} // Largeur du graphique
            height={220}
            chartConfig={{
              backgroundColor: '#f9f9f9',
              backgroundGradientFrom: '#f9f9f9',
              backgroundGradientTo: '#f9f9f9',
              decimalPlaces: 0, // Aucun chiffre après la virgule
              color: (opacity = 1) => `rgba(38, 110, 241, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#266EF1',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* Boutons pour naviguer vers les autres pages sous forme d'icônes */}
        <View style={styles.buttonsContainer}>
          {/* Bouton Mon Profil */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={styles.iconButton}>
            <FeatherIcon name="user" size={24} color="#fff" />
            <Text style={styles.iconButtonText}>Profil</Text>
          </TouchableOpacity>

          {/* Bouton pour la page de mesure de tension */}
          <TouchableOpacity
            onPress={() => navigation.navigate('MesureScreen')}
            style={styles.iconButton}>
            <FeatherIcon name="heart" size={24} color="#fff" />
            <Text style={styles.iconButtonText}>Mesurer</Text>
          </TouchableOpacity>

          {/* Bouton pour accéder à l'historique des mesures */}
          <TouchableOpacity
            onPress={() => navigation.navigate('HistoriqueScreen')}
            style={styles.iconButton}>
            <FeatherIcon name="clock" size={24} color="#fff" />
            <Text style={styles.iconButtonText}>Historique</Text>
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
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
    marginBottom: 16,
  },
  /** Logo */
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150, // Taille réduite pour libérer de l'espace
    height: 150, // Taille réduite pour libérer de l'espace
    resizeMode: 'contain',
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  input: {
    height: 44,
    backgroundColor: '#f0f6fb',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#222',
    borderColor: '#222',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** Graphique */
  graphContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  graphTitle: {
    fontSize: 16, // Réduit la taille de la police
    fontWeight: '600',
    marginBottom: 10,
    color: '#e74c3c',
    textAlign: 'center',
    marginHorizontal: 10, // Ajoute une marge horizontale
  },
  /** Boutons pour les pages */
  buttonsContainer: {
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row', // Permet aux boutons de s'aligner horizontalement
    justifyContent: 'space-around', // Espacement égal entre les boutons
  },
  iconButton: {
    backgroundColor: '#266EF1',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column', // Colonne pour empiler l'icône et le texte
    justifyContent: 'center',
    width: 80, // Largeur des boutons
  },
  iconButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 4, // Ajoute un espace entre l'icône et le texte
  },
});
