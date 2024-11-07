import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'; 
import CurrentWeather from './components/CurrentWeather'; 
import Forecast from './components/Forecast'; 

// Constantes pour la clé API et l'URL
const API_KEY = '56a162c70d8f5ab1cf785e89b25e4cb2';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const App = () => {
  // Variables d'état pour stocker la localisation, les données météo et le statut de chargement
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      // Récupération des données depuis l'API 
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
        // Rendu des composants CurrentWeather et Forecast une fois les données disponibles
        <>
          {weatherData && <CurrentWeather weatherData={weatherData} />}
          {weatherData && <Forecast weatherData={weatherData} />}
        </>
      )}
    </View>
  );
};

// Styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;