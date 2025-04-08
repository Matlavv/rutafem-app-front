import Button from '@/components/button';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import rides from '../../datas/rides.json';

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1" style={styles.container}>
            <Text className="text-red-600">coucou</Text>
            <Button title="Button" />

            {rides.rides.map((ride) => (
                <View key={ride.id} style={styles.rideContainer}>
                    <Text style={styles.cityText}>
                        {ride.departure_city} → {ride.arrival_city}
                    </Text>
                    <Text style={styles.priceText}>
                        {(ride.price / 100).toFixed(2)}€
                    </Text>
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
        margin: 20,
        minHeight: '100%',
    },
    rideContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    cityText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 14,
    },
    dateText: {
        fontSize: 12,
    },
});