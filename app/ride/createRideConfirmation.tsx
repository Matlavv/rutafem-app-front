import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreateRideConfirmation() {
  const params = useLocalSearchParams();
  const rideData = {
    departure: params.departure as string,
    destination: params.destination as string,
    date: params.date as string,
    time: params.time as string,
    price: params.price as string,
  };

  const handleCreateRide = () => {
    setTimeout(() => {
      router.push('/(tabs)/ride');
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
        <View style={styles.inactiveStep}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={styles.stepLine} />
        <View style={styles.activeStep}>
          <Text style={styles.stepText}>2</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Confirmation du trajet</Text>

      {/* Rides Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Départ :</Text>
          <Text style={styles.value}>{rideData.departure}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.label}>Arrivée :</Text>
          <Text style={styles.value}>{rideData.destination}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.label}>Date :</Text>
          <Text style={styles.value}>{rideData.date}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.label}>Heure :</Text>
          <Text style={styles.value}>{rideData.time}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.label}>Prix :</Text>
          <Text style={styles.value}>{rideData.price}€</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleCreateRide}
        >
          <Text style={styles.buttonText}>Confirmer</Text>
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
  summaryContainer: {
    gap: 16,
    backgroundColor: '#F9FAFB',
    padding: 24,
    borderRadius: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#6B7280',
  },
  value: {
    color: '#111827',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 'auto',
    gap: 16,
  },
  confirmButton: {
    backgroundColor: '#EC4899',
    borderRadius: 9999,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
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
