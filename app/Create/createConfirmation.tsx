import { mountain } from '@/assets/images';
import Button from '@/components/elements/button';
import Header from '@/components/header';
import colors from '@/styles/colors';
import layout from '@/styles/layout';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CreateConfirmation() {
    const [loading, setLoading] = useState(false);

    const params = useLocalSearchParams();
    const rideData = {
        departurePosition: params.departurePosition as string,
        arrivalPosition: params.arrivalPosition as string,
        departureDate: params.departureDate as string,
        arrivalDate: params.arrivalDate as string,
        departureTime: params.departureTime as string,
        availableSeats: params.availableSeats as string,
        price: params.price as string,
    };

    const handleCreateRide = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            router.push('/ride');
        }, 1000);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Créer un trajet" image={mountain} showBackButton={false} />

            <View style={styles.container}>
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
                        <Text style={styles.label}>Adresse de départ :</Text>
                        <Text style={styles.value}>{rideData.departurePosition}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.label}>Adresse de destination :</Text>
                        <Text style={styles.value}>{rideData.arrivalPosition}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.label}>Date de départ :</Text>
                        <Text style={styles.value}>{rideData.departureDate}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.label}>Heure de départ :</Text>
                        <Text style={styles.value}>{rideData.departureTime}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.label}>Prix :</Text>
                        <Text style={styles.value}>{rideData.price}€</Text>
                    </View>
                </View>

                <Button
                    title={loading ? 'Chargement...' : 'Publier'}
                    onPress={handleCreateRide}
                    isFixedBottom={true}
                    style={styles.button}
                    color={colors.secondary}
                    disabled={loading}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: layout.headerMaxHeight + 16,
        paddingHorizontal: 16,
        paddingBottom: 32,
        flexGrow: 1,
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
        backgroundColor: colors.primary,
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
    button: {
        marginHorizontal: 16,
    },
});
