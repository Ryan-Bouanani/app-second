import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const API_KEY = '56a162c70d8f5ab1cf785e89b25e4cb2';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const App = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission de localisation refusée');
          return;
        }
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        fetchWeatherData(location.coords.latitude, location.coords.longitude);
      } catch (error) {
        console.error('Erreur lors de la récupération de la localisation :', error);
      }
    };
    getLocation();
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          lat: lat,
          lon: lon,
          units: 'metric',
          appid: API_KEY,
        },
      });
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météorologiques :', error);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {weatherData && <CurrentWeather weatherData={weatherData} />}
          {weatherData && <Forecast weatherData={weatherData} />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
