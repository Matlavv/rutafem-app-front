import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import RideCard from '@/components/card/RideCard';
import Header from '@/components/header';
import rides from '@/datas/rides.json';
import { canyon } from '@/images';
import { colors } from '@/styles/colors';
import { IconSymbol } from '@/components/IconSymbol';
import SvgIcon from '@/components/elements/SvgIcon';

export default function RideScreen() {
    return (
        <View>
            <Header title="RutaFem" image={canyon} />
            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.sectionTitle}>Trajets disponibles</Text>
                    <TouchableOpacity
                        onPress={() => router.push('/Ride/createRide')}
                        style={styles.addButton}
                    >
                        <Text style={styles.addButtonText}><SvgIcon name="add" width={26} height={26} strokeColor={colors.white} /></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.listContainer}>
                    {rides.rides.map((ride) => (
                        <RideCard ride={ride} key={ride.id} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
    },
    headerImage: {
        height: 400,
        width: '100%',
        opacity: 0.8,
    },
    titleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        margin: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111827',
    },
    addButton: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 24,
    },
    addButtonText: {
        display: "flex",
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    listContainer: {
        marginTop: 16,
    },
    rideContainer: {
        flex: 1,
        height: 500,
    },
});
