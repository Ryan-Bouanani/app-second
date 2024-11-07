import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'; // Importation des composants nécessaires de React Native

// Composant fonctionnel Forecast qui reçoit les données météo en tant que prop
const Forecast = ({ weatherData }) => {
  return (
    // Utilisation de ScrollView pour permettre le défilement des prévisions
    <ScrollView style={styles.forecastContainer}>
      {/* Parcours des prévisions météo, en affichant les 5 premiers éléments après le premier */}
      {weatherData.list.slice(1, 6).map((item, index) => (
        <View key={index} style={styles.forecastItem}>
          {/* Affichage de l'heure de la prévision */}
          <Text style={styles.forecastTime}>
            {new Date(item.dt * 1000).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric' })}
          </Text>
          {/* Affichage de l'icône météo */}
          <Image
            source={{
              uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            }}
            style={styles.weatherIcon}
          />
          {/* Affichage de la température */}
          <Text style={styles.forecastTemp}>{Math.round(item.main.temp)}°C</Text>
          {/* Affichage de la description météo */}
          <Text style={styles.forecastDescription}>{item.weather[0].description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

// Styles pour le conteneur de prévisions et les éléments individuels
const styles = StyleSheet.create({
  forecastContainer: {
    flex: 1,
    width: '100%',
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 5,
    marginVertical: 5,
  },
  forecastTime: {
    fontSize: 16,
    width: '20%',
  },
  forecastTemp: {
    fontSize: 16,
    width: '20%',
  },
  forecastDescription: {
    fontSize: 16,
    width: '40%',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default Forecast; // Exportation du composant Forecast par défaut
