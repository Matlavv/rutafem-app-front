import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CreateRide() {
  const [departure, setDeparture] = useState('');
  const [departureAddress, setDepartureAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [arrivalAddress, setArrivalAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (
      !departure ||
      !departureAddress ||
      !destination ||
      !arrivalAddress ||
      !date ||
      !time ||
      !availableSeats ||
      !price
    ) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      router.push({
        pathname: '/ride/createRideConfirmation',
        params: {
          departure,
          departureAddress,
          destination,
          arrivalAddress,
          date,
          time,
          availableSeats,
          price,
        },
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>RutaFem</Text>
      </View>

      {/* Steps */}
      <View style={styles.stepsContainer}>
        <View style={styles.activeStep}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={styles.stepLine} />
        <View style={styles.inactiveStep}>
          <Text style={styles.stepText}>2</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Créer un trajet</Text>

      {/* Forms */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ville de départ</Text>
          <TextInput
            style={styles.input}
            value={departure}
            onChangeText={setDeparture}
            placeholder="Ex: Paris"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Adresse de départ</Text>
          <TextInput
            style={styles.input}
            value={departureAddress}
            onChangeText={setDepartureAddress}
            placeholder="Ex: 1 rue de la Paix"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ville d'arrivée</Text>
          <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
            placeholder="Ex: Lyon"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Adresse d'arrivée</Text>
          <TextInput
            style={styles.input}
            value={arrivalAddress}
            onChangeText={setArrivalAddress}
            placeholder="Ex: 2 rue de la République"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Ex: 01/01/2024"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Heure</Text>
          <TextInput
            style={styles.input}
            value={time}
            onChangeText={setTime}
            placeholder="Ex: 14:30"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Places disponibles</Text>
          <TextInput
            style={styles.input}
            value={availableSeats}
            onChangeText={setAvailableSeats}
            placeholder="Ex: 3"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Prix (€)</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Ex: 25"
            keyboardType="numeric"
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>
            {loading ? 'Chargement...' : 'Continuer'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#EC4899',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  activeStep: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EC4899',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveStep: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepLine: {
    width: 80,
    height: 2,
    backgroundColor: '#D1D5DB',
  },
  stepText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 32,
  },
  formContainer: {
    flex: 1,
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: '#EF4444',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#EC4899',
    borderRadius: 9999,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
});
