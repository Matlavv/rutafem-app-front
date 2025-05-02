import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { canyon } from '@/images';
import layout from '@/styles/layout';

// COMPONENTS
import Header from '@/components/header';
import SvgIcon from '@/components/elements/SvgIcon';
import Button from '@/components/elements/button';

// DATAS
import users_rides from '@/datas/users_rides.json';
import users from '@/datas/users.json';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import colors from '@/styles/colors';


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

    const driverId = users_rides.find(user => user.ride_id === parseInt(params.id as string) && user.driver === true)?.user_id;
    const driver = users.find(user => user.id === driverId);

    const passengersIds = users_rides.filter(user => user.ride_id === parseInt(params.id as string) && user.driver === false).map(user => user.user_id);
    const passengers = users.filter(user => passengersIds.includes(user.id));

    console.log(passengersIds);
    console.log(passengers);

    const scrollOffsetY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffsetY.value = event.contentOffset.y;
        },
    });

    return (
        <View style={styles.rideDetail}>

            <Header supTitle="Ton voyage à" title={params.arrival_city as string} subtitle="est presque prêt" image={canyon} scrollOffsetY={scrollOffsetY} />

            <View style={styles.contentContainer}>

                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={onScroll}
                    contentContainerStyle={{
                        paddingTop: layout.headerMaxHeight + 16,
                    }}

                >

                    <View style={styles.rideCard}>
                        <View style={styles.rideCard__header}>
                            <Text style={styles.rideCard__header_city}>{params.departure_city}</Text>

                            <View style={styles.rideCard__visual}>
                                <View style={styles.rideCard__visual_circle} />
                                <View style={styles.rideCard__visual_dash} />
                                <View style={styles.rideCard__visual_circle} />
                            </View>

                            <Text style={styles.rideCard__header_city}>{params.arrival_city}</Text>
                        </View>

                        <View style={styles.rideCard__info}>
                            <Text style={styles.rideCard__info_date}>{new Date(params.departure_datetime as string).toLocaleDateString('fr-FR')}</Text>
                            <Text style={styles.rideCard__info_price}>{params.price} €</Text>
                        </View>
                    </View>

                    {driver && (
                        <View style={styles.driverCard}>
                            <View style={styles.driverCard__left}>
                                <View>
                                    <Text style={styles.driverCard__header_label}>Ta conductrice</Text>
                                    <Text style={styles.driverCard__header_name}>{driver?.firstname} {driver?.lastname}</Text>
                                    <View style={styles.driverCard__header_stars}>
                                        {Array.from({ length: 5 }).map((_, i) => {
                                            const rating = driver?.rating ?? 0;
                                            const full = i + 1 <= rating;
                                            const half = !full && i + 0.5 <= rating;

                                            return (
                                                <SvgIcon
                                                    key={i}
                                                    name={half ? "starHalf" : "star"}
                                                    width={15}
                                                    height={15}
                                                    fillColor={full || half ? "#FFBA00" : "#BDBDBD"}
                                                    strokeColor={"#BDBDBD"}
                                                    strokeWidth={0}
                                                />
                                            );
                                        })}
                                    </View>

                                </View>

                                <View style={styles.vehicleInfo}>
                                    <Text style={styles.vehicleTitle}>Véhicule vérifié</Text>
                                    <Text>Citroen C3</Text>
                                    <Text>Identification: CBR455</Text>
                                </View>

                                <View>
                                    <View style={styles.passengersContainer}>
                                        {passengers?.map((passenger) => (
                                            <Image
                                                key={passenger.id}
                                                source={{ uri: passenger.profile_image_url }}
                                                style={styles.passengerImage}
                                            />
                                        ))}
                                    </View>
                                    <Text style={styles.reservedInfo}>{passengers.length} voyageuses ont réservé ce voyage</Text>
                                </View>

                            </View>
                            <View style={styles.driverImageContainer}>
                                <Image
                                    source={{ uri: driver?.profile_image_url }}
                                    style={styles.driverImage}
                                />
                                <View style={styles.socialIcons}>
                                    <Text style={{ fontSize: 24 }}>📸 👍 🎵</Text>
                                </View>
                            </View>

                        </View>
                    )}

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                </Animated.ScrollView>

                <Button
                    title={loading ? 'Chargement...' : 'Rejoindre'}
                    onPress={handleJoinRide}
                    disabled={loading}
                    isFixedBottom={true}
                    style={styles.button}
                    color={colors.secondary}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    // RideDetail
    rideDetail: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 1,
    },
    rideCard: {
        marginHorizontal: 16,
        borderRadius: 12,
        padding: 16,
        boxShadow: '0px 0px 10px #00000021',
        marginBottom: 24,
        marginTop: 14,
    },
    rideCard__header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        gap: 24,
    },
    rideCard__header_city: {
        fontSize: 20,
        fontWeight: '600',
    },
    rideCard__visual: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
    },
    rideCard__visual_circle: {
        width: 10,
        height: 10,
        backgroundColor: '#3b3b3da8',
        borderRadius: 5,
    },
    rideCard__visual_dash: {
        flex: 1,
        height: 2,
        backgroundColor: '#3b3b3da8',
    },
    rideCard__info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    rideCard__info_date: {
        color: '#6B7280',
    },
    rideCard__info_price: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    // DriverCard
    driverCard: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        boxShadow: '0px 0px 10px #00000021',
        gap: 12,
    },
    driverCard__left: {
        flex: 1,
        gap: 12,
    },
    driverCard__header_label: {
        color: '#6B7280',
        fontSize: 14,
        marginBottom: 8,
    },
    driverCard__header_name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    driverCard__header_stars: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginTop: 4,
    },
    driverCard__header_star: {
        fontSize: 18,
    },
    driverImageContainer: {
        alignItems: 'center',
        gap: 8,
    },
    driverImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    socialIcons: {
        flexDirection: 'row',
        gap: 8,
    },

    // VehicleInfo
    vehicleInfo: {
        marginTop: 8,
    },
    vehicleTitle: {
        fontWeight: 'bold',
        marginBottom: 2,
    },

    // Passengers
    passengersContainer: {
        flexDirection: 'row',
    },
    passengerImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: -10,
    },
    reservedInfo: {
        marginTop: 8,
        color: '#374151',
    },

    errorText: {
        color: '#EF4444',
        textAlign: 'center',
    },

    button: {
        marginHorizontal: 16,
    },

});
