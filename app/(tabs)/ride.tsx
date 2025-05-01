import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import { router, useLocalSearchParams } from 'expo-router';

// COMPONENTS
import Header from '@/components/header';
import RideCard from '@/components/card/RideCard';
import SvgIcon from '@/components/elements/SvgIcon';
import { canyon } from '@/images';

// STYLES
import layout from '@/styles/layout';
import colors from '@/styles/colors';

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
            return ride.departure_city === params.departurePosition && ride.arrival_city === params.arrivalPosition && ride.departure_datetime >= params.departureDate;
        });
    } else {
        rides = ridesDatas;
    }

    return (
        <View style={{ flex: 1 }}>

            <Header
                title="RutaFem"
                image={canyon}
                showBackButton={false}
                scrollOffsetY={scrollOffsetY}
                subtitle={`${rides.length} trajets disponibles`}
                supTitle={`${params.departurePosition} - ${params.arrivalPosition}`}
            />

            <Animated.FlatList
                onScroll={onScroll}
                scrollEventThrottle={16}
                data={rides}
                renderItem={({ item }) => <RideCard ride={item} key={item.id} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    paddingTop: layout.headerMaxHeight + 16,
                    paddingHorizontal: 16,
                    paddingBottom: 32,
                }}
                ListHeaderComponent={() => (
                    <View style={styles.headerRow}>
                        <Text style={styles.sectionTitle}>Trajets disponibles</Text>
                        <TouchableOpacity
                            onPress={() => router.push('/Ride/createRide')}
                            style={styles.addButton}
                        >
                            <Text style={styles.addButtonText}><SvgIcon name="add" width={26} height={26} strokeColor={colors.white} /></Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
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
        display: "flex",
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
