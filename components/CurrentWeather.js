import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CurrentWeather = ({ weatherData }) => {
  const currentWeather = weatherData.list[0]; // Utilisation des données météo actuelles

  return (
    <View style={styles.currentWeather}>
      <Text style={styles.cityName}>{weatherData.city.name}</Text>
      <View style={styles.weatherInfo}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.temperature}>{Math.round(currentWeather.main.temp)}°C</Text>
        <Text style={styles.description}>{currentWeather.weather[0].description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default CurrentWeather;
