import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = 'Berlin'; // You can change this to your desired location.

  useEffect(() => {
    axios.get(`https://wttr.in/${location}?format=j1`)
        .then(response => {
          setWeather(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </SafeAreaView>
    );
  }

  return (
      <SafeAreaView style={styles.container}>
        {weather ? (
            <View>
              <Text style={styles.title}>Weather in {location}</Text>
              <Text style={styles.info}>Temperature: {weather.current_condition[0].temp_C}°C</Text>
              <Text style={styles.info}>Feels Like: {weather.current_condition[0].FeelsLikeC}°C</Text>
              <Text style={styles.info}>Condition: {weather.current_condition[0].weatherDesc[0].value}</Text>
              <Text style={styles.info}>Humidity: {weather.current_condition[0].humidity}%</Text>
            </View>
        ) : (
            <Text style={styles.error}>Unable to fetch weather data.</Text>
        )}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginVertical: 4,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

