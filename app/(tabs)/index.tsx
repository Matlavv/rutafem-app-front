import Button from '@/components/button';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import rides from '../../datas/rides.json';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>coucou</Text>
      <Button title="Button" />

      {rides.rides.map((ride) => (
        <View key={ride.id} style={styles.rideContainer}>
          <Text style={styles.cityText}>
            {ride.departure_city} → {ride.arrival_city}
          </Text>
          <Text style={styles.priceText}>{(ride.price / 100).toFixed(2)}€</Text>
          <Text style={styles.dateText}>
            {new Date(ride.departure_datetime).toLocaleDateString('fr-FR')}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#DC2626',
  },
  rideContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 8,
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
    color: '#374151',
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
