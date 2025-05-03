import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

// COMPONENTS
import RideCard from '@/components/card/RideCard';
import Header from '@/components/header';
import { mountain } from '@/images';

// STYLES
import colors from '@/styles/colors';
import layout from '@/styles/layout';

// DATAS (temporary)
import ridesDatas from '@/datas/rides.json';

export default function RideScreen() {
    const params = useLocalSearchParams();

    const scrollOffsetY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffsetY.value = event.contentOffset.y;
        },
    });

    let rides;
    if (params.departurePosition && params.arrivalPosition && params.departureDate) {
        console.log(params.departurePosition, params.arrivalPosition, params.departureDate);
        console.log(ridesDatas);

        rides = ridesDatas.filter((ride) => {
            return (
                ride.departure_city === params.departurePosition &&
                ride.arrival_city === params.arrivalPosition &&
                ride.departure_datetime >= params.departureDate
            );
        });
    } else {
        rides = ridesDatas;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                title="RutaFem"
                image={mountain}
                showBackButton={false}
                scrollOffsetY={scrollOffsetY}
                supTitle={
                    params.departurePosition
                        ? `${params.departurePosition} - ${params.arrivalPosition}`
                        : ''
                }
                subtitle={
                    rides.length > 0
                        ? `${rides.length} trajets disponibles`
                        : 'Aucun trajet disponible'
                }
            />

            <Animated.FlatList
                onScroll={onScroll}
                scrollEventThrottle={16}
                data={rides}
                renderItem={({ item }) => <RideCard ride={item} key={item.id} />}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (
                    <View style={styles.headerRow}>
                        <Text style={styles.sectionTitle}>
                            Trajets disponibles - {rides.length} trajets
                        </Text>
                    </View>
                )}
                contentContainerStyle={{
                    paddingTop: layout.headerMaxHeight + 16,
                    paddingHorizontal: 16,
                    paddingBottom: 32,
                }}
                stickyHeaderIndices={rides.length > 0 ? [0] : []}
                StickyHeaderComponent={() => (
                    <View style={styles.headerRow}>
                        <Text style={styles.sectionTitle}>
                            Trajets disponibles - {rides.length} trajets
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        marginHorizontal: 16,
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
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
        display: 'flex',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
