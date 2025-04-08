import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { images } from '../../assets/images';

type Ride = {
  id: string;
  departure: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  availableSeats: number;
};

const MOCK_RIDES: Ride[] = [
  {
    id: '1',
    departure: 'Paris',
    destination: 'Lyon',
    date: '2024-04-15',
    time: '14:30',
    price: 45,
    availableSeats: 3,
  },
  {
    id: '2',
    departure: 'Marseille',
    destination: 'Nice',
    date: '2024-04-16',
    time: '10:00',
    price: 25,
    availableSeats: 2,
  },
  {
    id: '3',
    departure: 'Bordeaux',
    destination: 'Toulouse',
    date: '2024-04-17',
    time: '08:45',
    price: 35,
    availableSeats: 4,
  },
];

export default function RideList() {
  const [rides] = useState<Ride[]>(MOCK_RIDES);

  return (
    <ScrollView style={styles.container}>
      {rides.map((ride) => (
        <View key={ride.id} style={styles.card}>
          <TouchableOpacity
            style={styles.cardContent}
            onPress={() => {
              router.push({
                pathname: '/ride/rideDetail',
                params: ride,
              });
            }}
          >
            <View style={styles.leftContent}>
              <Image
                source={images.canyon}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.textContainer}>
                <View style={styles.destinationContainer}>
                  <Text style={styles.boldText}>{ride.departure}</Text>
                  <Text style={styles.arrow}>→</Text>
                  <Text style={styles.boldText}>{ride.destination}</Text>
                </View>
                <Text style={styles.grayText}>
                  {ride.date} - {ride.time}
                </Text>
                <Text style={styles.grayText}>
                  {ride.availableSeats} place
                  {ride.availableSeats > 1 ? 's' : ''} disponible
                  {ride.availableSeats > 1 ? 's' : ''}
                </Text>
              </View>
            </View>
            <Text style={styles.price}>{ride.price}€</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 12,
  },
  textContainer: {
    gap: 4,
  },
  destinationContainer: {
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
  grayText: {
    color: '#6B7280',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
