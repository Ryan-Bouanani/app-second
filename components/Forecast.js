import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const Forecast = ({ weatherData }) => {
  return (
    <ScrollView style={styles.forecastContainer}>
      {weatherData.list.slice(1, 6).map((item, index) => (
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
  );
};

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

export default Forecast;
