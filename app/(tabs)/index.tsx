import Button from '@/components/elements/button';
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';
import rides from '@/datas/rides.json';
import { canyon } from '@/images';
import Header from '@/components/header';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <Header title="Paris" image={canyon} />

            <Button title="Button" />

            <ScrollView style={styles.scrollView}>
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
            </ScrollView>
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
    scrollView: {
        flex: 1,
    },
});
