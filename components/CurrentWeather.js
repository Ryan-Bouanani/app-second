import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import * as Location from 'expo-location'; // Importation du module de localisation d'Expo pour accéder à la localisation de l'appareil

// Constantes pour la clé API et l'URL
const API_KEY = '56a162c70d8f5ab1cf785e89b25e4cb2';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const WeatherApp = () => {
  // Variables d'état pour stocker la localisation, les données météo et le statut de chargement
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hook useEffect pour obtenir la localisation de l'utilisateur lorsque le composant est monté
  useEffect(() => {
    const getLocation = async () => {
      try {
        // Demande de permission pour accéder à la localisation
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission de localisation refusée');
          return;
        }
        // Obtention de la position actuelle de l'appareil
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        // Récupération des données météo en utilisant les coordonnées obtenues
        fetchWeatherData(location.coords.latitude, location.coords.longitude);
      } catch (error) {
        console.error('Erreur lors de la récupération de la localisation :', error);
      }
    };
    getLocation();
  }, []); // Le tableau de dépendances vide garantit que cela s'exécute uniquement une fois au montage

  // Fonction pour récupérer les données météo depuis l'API
  const fetchWeatherData = async (lat, lon) => {
    try {
      // Récupération des données depuis l'API OpenWeatherMap
      const response = await fetch(`${API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data); // Mise à jour de l'état avec les données récupérées
      setLoading(false); // Mise à jour du statut de chargement à false une fois les données récupérées
    } catch (error) {
      console.error('Erreur lors de la récupération des données météorologiques :', error);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        // Affichage d'un indicateur de chargement pendant la récupération des données
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {/* Affichage de la météo actuelle */}
          {weatherData && (
            <View style={styles.currentWeather}>
              <Text style={styles.cityName}>{weatherData.city.name}</Text>
              <View style={styles.weatherInfo}>
                <Image
                  source={{
                    uri: `http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperature}>{Math.round(weatherData.list[0].main.temp)}°C</Text>
                <Text style={styles.description}>{weatherData.list[0].weather[0].description}</Text>
              </View>
            </View>
          )}

          {/* Affichage des prévisions sur 5 jours */}
          <ScrollView style={styles.forecastContainer}>
            {weatherData &&
              weatherData.list.slice(1, 6).map((item, index) => (
                <View key={index} style={styles.forecastItem}>
                  <Text style={styles.forecastTime}>
                    {new Date(item.dt * 1000).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric' })}
                  </Text>
                  <Image
                    source={{
                      uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
                    }}
                    style={styles.weatherIcon}
                  />
                  <Text style={styles.forecastTemp}>{Math.round(item.main.temp)}°C</Text>
                  <Text style={styles.forecastDescription}>{item.weather[0].description}</Text>
                </View>
              ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

// Styles pour le conteneur et les éléments de l'interface utilisateur
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentWeather: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
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
});

export default WeatherApp; // Exportation du composant WeatherApp par défaut