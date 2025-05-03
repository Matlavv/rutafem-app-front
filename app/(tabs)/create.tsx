import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

// COMPONENTS
import Header from '@/components/header';
import RideCard from '@/components/card/RideCard';
import SvgIcon from '@/components/elements/SvgIcon';
import { mountain, canyon } from '@/images';

// STYLES
import layout from '@/styles/layout';
import colors from '@/styles/colors';

// DATAS (temporary)
import ridesDatas from '@/datas/rides.json';
import Button from '@/components/elements/button';
import { DateType } from 'react-native-ui-datepicker';
import DatePicker from '@/components/elements/datePicker';
import dayjs from 'dayjs';


export default function CreateScreen() {

    const [departurePosition, setDeparturePosition] = useState('');
    const [arrivalPosition, setArrivalPosition] = useState('');
    const [departureDate, setDepartureDate] = useState<DateType>();
    const [arrivalDate, setArrivalDate] = useState<DateType>();
    const [availableSeats, setAvailableSeats] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [price, setPrice] = useState('');


    const [isDepartureDatePickerOpen, setIsDepartureDatePickerOpen] = useState(false);
    const [isArrivalDatePickerOpen, setIsArrivalDatePickerOpen] = useState(false);
    // const [availableSeats, setAvailableSeats] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        // if (
        //     !departure ||
        //     !departureAddress ||
        //     !destination ||
        //     !arrivalAddress ||
        //     !date ||
        //     !time ||
        //     !availableSeats ||
        //     !price
        // ) {
        //     setError('Veuillez remplir tous les champs');
        //     return;
        // }

        setLoading(true);
        setError('');

        setTimeout(() => {
            setLoading(false);
            router.push({
                pathname: '/Create/createConfirmation',
                params: {
                    departurePosition,
                    arrivalPosition,
                    departureDate: dayjs(departureDate).format('D MMMM'),
                    arrivalDate: dayjs(arrivalDate).format('D MMMM'),
                    departureTime,
                    availableSeats,
                    price,
                },
            });
        }, 1000);
    };

    const scrollOffsetY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffsetY.value = event.contentOffset.y;
        },
    });

    const handleOutsideClick = () => {
        setIsDepartureDatePickerOpen(false);
        setIsArrivalDatePickerOpen(false);
    };


    return (
        <TouchableWithoutFeedback onPress={handleOutsideClick}>

            <View style={styles.container}>
                {/* Header */}
                <Header
                    title="Créer un trajet"
                    image={mountain}
                    showBackButton={false}
                    scrollOffsetY={scrollOffsetY}
                />

                <Animated.ScrollView
                    onScroll={onScroll}
                    contentContainerStyle={{
                        paddingTop: layout.headerMaxHeight + 16,
                        paddingHorizontal: 16,
                        paddingBottom: 32,
                        gap: 16,
                    }}
                // stickyHeaderIndices={[0]}
                // StickyHeaderComponent={() => (
                //     <View style={styles.stepsContainer}>
                //         <View style={styles.activeStep}>
                //             <Text style={styles.stepText}>1</Text>
                //         </View>
                //         <View style={styles.stepLine} />
                //         <View style={styles.inactiveStep}>
                //             <Text style={styles.stepText}>2</Text>
                //         </View>
                //     </View>
                // )}
                >

                    <View style={styles.stepsContainer}>
                        <View style={styles.activeStep}>
                            <Text style={styles.stepText}>1</Text>
                        </View>
                        <View style={styles.stepLine} />
                        <View style={styles.inactiveStep}>
                            <Text style={styles.stepText}>2</Text>
                        </View>
                    </View>

                    {/* Forms */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Adresse de départ</Text>
                        <TextInput
                            style={styles.input}
                            value={departurePosition}
                            onChangeText={setDeparturePosition}
                            placeholder="Ex: Paris"
                            placeholderTextColor={colors.grayLight}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Adresse de destination</Text>
                        <TextInput
                            style={styles.input}
                            value={arrivalPosition}
                            onChangeText={setArrivalPosition}
                            placeholder="Ex: Paris"
                            placeholderTextColor={colors.grayLight}
                        />
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                        <DatePicker
                            departureDate={departureDate}
                            colors={colors}
                            labelStyle={styles.label}
                            isDatePickerOpen={isDepartureDatePickerOpen}
                            setIsDatePickerOpen={setIsDepartureDatePickerOpen}
                            onChange={(date: DateType) => {
                                setDepartureDate(date);
                            }}
                        />

                        <DatePicker
                            departureDate={arrivalDate}
                            colors={colors}
                            labelStyle={styles.label}
                            isDatePickerOpen={isArrivalDatePickerOpen}
                            setIsDatePickerOpen={setIsArrivalDatePickerOpen}
                            onChange={(date: DateType) => {
                                setArrivalDate(date);
                            }}
                        />
                    </View>




                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Heure</Text>
                        <TextInput
                            style={styles.input}
                            value={departureTime}
                            onChangeText={setDepartureTime}
                            placeholder="Ex: 14:30"
                            placeholderTextColor={colors.grayLight}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Places disponibles</Text>
                        <TextInput
                            style={styles.input}
                            value={availableSeats}
                            onChangeText={setAvailableSeats}
                            placeholder="Ex: 3"
                            keyboardType="numeric"
                            placeholderTextColor={colors.grayLight}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Prix (€)</Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={setPrice}
                            placeholder="Ex: 25"
                            keyboardType="numeric"
                            placeholderTextColor={colors.grayLight}
                        />
                    </View>

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <Button
                        title={loading ? 'Chargement...' : 'Continuer'}
                        onPress={handleSubmit}
                        disabled={loading}
                        color={colors.secondary}
                    />


                </Animated.ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: colors.grayLight,
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
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    errorText: {
        color: '#EF4444',
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#EC4899',
        borderRadius: 9999,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 'auto',
    },
    submitButtonText: {
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
});