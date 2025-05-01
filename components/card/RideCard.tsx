import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { canyon } from '@/images';
import { router } from 'expo-router';

type Ride = {
    id: number;
    departure_datetime: string;
    departure_city: string;
    arrival_city: string;
    price: number;
    availabe_seats: number;
    starting_adress: string;
    arrival_adress: string;
};

export default function RideCard({ ride }: { ride: Ride }) {
    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={styles.cardContent}
                onPress={() => {
                    router.push({
                        pathname: '/Ride/rideDetail',
                        params: ride
                    });
                }}
            >
                <View style={styles.leftContent}>
                    <Image
                        source={canyon}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <View style={styles.destinationContainer}>
                            <Text style={styles.boldText}>{ride.departure_city}</Text>
                            <Text style={styles.arrow}>→</Text>
                            <Text style={styles.boldText}>{ride.arrival_city}</Text>
                        </View>
                        <Text style={styles.grayText}>
                            {new Date(ride.departure_datetime).toLocaleDateString(
                                'fr-FR',
                            )}{' '}
                            -{' '}
                            {new Date(ride.departure_datetime).toLocaleTimeString(
                                'fr-FR',
                                { hour: '2-digit', minute: '2-digit' },
                            )}
                        </Text>
                        <Text style={styles.grayText}>
                            {ride.availabe_seats} place
                            {ride.availabe_seats > 1 ? 's' : ''} disponible
                            {ride.availabe_seats > 1 ? 's' : ''}
                        </Text>
                    </View>
                </View>
                <Text style={styles.price}>{Number.isInteger(ride.price) ? ride.price : ride.price.toFixed(2)}€</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 16,
        marginVertical: 6,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
        marginHorizontal: 3,
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
        fontSize: 16,
        fontWeight: 'bold',
    },
});