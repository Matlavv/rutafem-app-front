import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import colors from '@/styles/colors';

// DATAS
import usersRidesDatas from '@/datas/users_rides.json';
import usersDatas from '@/datas/users.json';
import SvgIcon from '../elements/SvgIcon';

export default function RideCard({ ride }: { ride: Ride }) {

    const driverId = usersRidesDatas.find((user_ride) => user_ride.ride_id === ride.id && user_ride.driver === true);
    const driver = usersDatas.find((user) => user.id === driverId?.user_id);

    const formattedDate = new Date(ride.departure_datetime).toLocaleDateString('fr-FR');

    return (
        <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: '/Ride/rideDetail', params: ride })}>

            <View>
                {/* Avatar */}
                <Image
                    source={{ uri: driver?.profile_image_url }}
                    style={styles.avatar}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.rightContainer}>
                <View style={styles.rowTop}>

                    {/* Ride info */}
                    <View style={styles.rideInfoContainer}>
                        <View style={styles.citiesRow}>
                            <View style={styles.visualCol}>
                                <View style={styles.visualDot} />
                                <View style={styles.visualLine} />
                                <View style={styles.visualDot} />
                            </View>
                            <View style={styles.citiesCol}>
                                <Text style={styles.cityText}>{ride.departure_city}</Text>
                                <Text style={styles.cityText}>{ride.arrival_city}</Text>
                            </View>
                        </View>
                    </View>
                    {/* Price and date */}
                    <View style={styles.priceCol}>
                        <Text style={styles.priceText}>{Number.isInteger(ride.price) ? ride.price : ride.price.toFixed(2)}€</Text>
                        <Text style={styles.dateText}>{formattedDate}</Text>
                    </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.rowBottom}>
                    <View>
                        <Text style={styles.driverName}>{driver?.firstname} {driver?.lastname}</Text>
                    </View>
                    <View style={styles.ratingRow}>
                        <Text style={styles.ratingText}>{driver?.rating ?? 4.5}</Text>
                        <SvgIcon name="star" width={16} height={16} fillColor="#FFBA00" />
                    </View>
                </View>

            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 4,
        boxShadow: '0px 0px 10px #00000021',
    },
    rightContainer: {
        flex: 1,
    },
    rowTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 36,
        marginRight: 16,
    },
    rideInfoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    citiesRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    visualCol: {
        alignItems: 'center',
        marginRight: 8,
    },
    visualDot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        backgroundColor: colors.gray,
    },
    visualLine: {
        width: 1,
        height: 18,
        backgroundColor: colors.gray,
    },
    citiesCol: {
        justifyContent: 'space-between',
        gap: 4,
    },
    cityText: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500,
        color: '#111827',
    },
    priceCol: {
        alignItems: 'flex-end',
        minWidth: 80,
    },
    priceText: {
        fontSize: 20,
        fontWeight: 600,
    },
    dateText: {
        fontSize: 14,
        marginTop: 4,
    },
    separator: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 10,
        borderRadius: 1,
    },
    rowBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    driverName: {
        fontSize: 18,
        fontWeight: 600,
        color: '#111827',
        flex: 1,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    star: {
        color: '#FBBF24',
        fontSize: 20,
        marginRight: 2,
    },
    ratingText: {
        fontSize: 14,
        color: '#111827',
        fontWeight: '500',
    },
});