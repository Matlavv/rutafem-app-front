import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../assets/images';

export default function RideDetails() {
  const params = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleJoinRide = () => {
    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      router.push('/(tabs)/ride');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.canyon} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Détails du trajet</Text>
          <View style={styles.routeContainer}>
            <Text style={styles.boldText}>{params.departure}</Text>
            <Text style={styles.arrow}>→</Text>
            <Text style={styles.boldText}>{params.destination}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Adresse de départ :</Text>
            <Text style={styles.value}>{params.departureAddress}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Adresse d'arrivée :</Text>
            <Text style={styles.value}>{params.arrivalAddress}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Date :</Text>
            <Text style={styles.value}>{params.date}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Heure :</Text>
            <Text style={styles.value}>{params.time}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Places disponibles :</Text>
            <Text style={styles.value}>{params.availableSeats}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Prix :</Text>
            <Text style={styles.value}>{params.price}€</Text>
          </View>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.joinButton}
          onPress={handleJoinRide}
          disabled={loading}
        >
          <Text style={styles.joinButtonText}>
            {loading ? 'Chargement...' : 'Rejoindre'}
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 12,
  },
  contentContainer: {
    marginTop: 24,
    gap: 24,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  routeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 18,
  },
  detailsContainer: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#6B7280',
  },
  value: {
    fontWeight: '600',
  },
  errorText: {
    color: '#EF4444',
    textAlign: 'center',
  },
  joinButton: {
    backgroundColor: '#EC4899',
    borderRadius: 9999,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  joinButtonText: {
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
