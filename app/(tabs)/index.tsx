import dayjs from 'dayjs';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { DateType, useDefaultStyles } from 'react-native-ui-datepicker';

// COMPONENTS
import SvgIcon from '@/components/elements/SvgIcon';
import Button from '@/components/elements/button';
import Select from '@/components/elements/select';
import HeaderSmall from '@/components/headerSmall';
import colors from '@/styles/colors';

// IMAGES
import { backgroundRoad } from '@/assets/images';
import DatePicker from '@/components/elements/datePicker';
import { router } from 'expo-router';

export default function HomeScreen() {
    const defaultStyles = useDefaultStyles();
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const [departurePosition, setDeparturePosition] = useState('');
    const [arrivalPosition, setArrivalPosition] = useState('');
    const [departureDate, setDepartureDate] = useState<DateType>();
    const [passengers, setPassengers] = useState(1);

    const handleOutsideClick = () => {
        setIsDatePickerOpen(false);
        setIsSelectOpen(false);
    };

    return (
        <TouchableWithoutFeedback onPress={handleOutsideClick}>
            <SafeAreaView style={styles.container}>
                <Image source={backgroundRoad} style={styles.backgroundRoad} />
                <Image source={backgroundRoad} style={styles.backgroundRoad2} />

                <View style={styles.homeContainer}>
                    <HeaderSmall />

                    <Text style={styles.title}>Où allez-vous ?</Text>

                    <View style={styles.searchContainer}>
                        <View style={styles.search__visual}>
                            <View style={styles.search__visual_circle} />
                            <View style={styles.search__visual_dash} />
                            <View style={styles.search__visual_circle} />
                        </View>

                        <View>
                            <Text style={styles.searchInput__label}>Départ</Text>
                            <TextInput
                                placeholder="Départ"
                                style={[styles.searchInput, styles.searchInput__start]}
                                placeholderTextColor={colors.gray}
                                onChangeText={(text) => setDeparturePosition(text)}
                                onFocus={() => handleOutsideClick()}
                            />
                        </View>
                        <View>
                            <Text style={styles.searchInput__label}>Arrivée</Text>
                            <TextInput
                                placeholder="Arrivée"
                                style={[styles.searchInput, styles.searchInput__end]}
                                placeholderTextColor={colors.gray}
                                onChangeText={(text) => setArrivalPosition(text)}
                                onFocus={() => handleOutsideClick()}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.geolocContainer}>
                        <SvgIcon
                            name="mapPin"
                            fillColor={colors.secondary}
                            width={16}
                            height={16}
                        />
                        <Text style={styles.geoloc__text}>Utiliser ma position actuelle</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'stretch', gap: 50 }}>
                        <DatePicker
                            departureDate={departureDate}
                            colors={colors}
                            labelStyle={styles.pick__label}
                            isDatePickerOpen={isDatePickerOpen}
                            setIsDatePickerOpen={setIsDatePickerOpen}
                            onChange={(date: DateType) => {
                                setDepartureDate(date);
                            }}
                        />

                        <View>
                            <Text style={styles.pick__label}>Voyageuses</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                <Select
                                    options={[
                                        { label: '1 voyageuse', value: 1 },
                                        { label: '2 voyageuses', value: 2 },
                                        { label: '3 voyageuses', value: 3 },
                                        { label: '4 voyageuses', value: 4 },
                                        { label: '5 voyageuses', value: 5 },
                                    ]}
                                    icon={
                                        <SvgIcon
                                            name="profile"
                                            fillColor={colors.secondary}
                                            width={24}
                                            height={24}
                                        />
                                    }
                                    isSelectOpen={isSelectOpen}
                                    onChange={(value: number) => {
                                        setPassengers(value);
                                    }}
                                    onToggle={() => setIsSelectOpen(!isSelectOpen)}
                                />
                            </View>
                        </View>
                    </View>

                    <Button
                        title="Rechercher"
                        color={colors.secondary}
                        disabled={
                            departurePosition === '' ||
                            arrivalPosition === '' ||
                            departureDate === undefined
                        }
                        isFixedBottom={true}
                        disabledColor={colors.secondaryLight}
                        onPress={() => {
                            router.push({
                                pathname: '/(tabs)/ride',
                                params: {
                                    departurePosition,
                                    arrivalPosition,
                                    departureDate: dayjs(departureDate).format('YYYY-MM-DD'),
                                    passengers,
                                },
                            });
                        }}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        position: 'relative',
        marginTop: 24,
    },
    homeContainer: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.white,
        padding: 16,
        paddingTop: 30,
        paddingLeft: 50,
        fontSize: 16,
        fontWeight: 'semibold',
    },
    searchInput__label: {
        position: 'absolute',
        zIndex: 1,
        top: 10,
        left: 50,
        fontSize: 12,
        fontWeight: 'semibold',
        color: colors.gray,
    },
    searchInput__start: {
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomWidth: 0,
    },
    searchInput__end: {
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },
    search__visual: {
        position: 'absolute',
        top: 28,
        bottom: 28,
        left: 22,
        alignItems: 'center',
        zIndex: 1,
    },
    search__visual_circle: {
        width: 10,
        height: 10,
        backgroundColor: colors.secondary,
        borderRadius: 5,
    },
    search__visual_dash: {
        flex: 1,
        width: 2,
        backgroundColor: colors.secondary,
    },
    geolocContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 4,
        marginBottom: 40,
    },
    geoloc__text: {
        color: colors.secondary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    pick__label: {
        fontSize: 14,
        fontWeight: 'semibold',
        marginBottom: 8,
    },
    picked_label: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    backgroundRoad: {
        position: 'absolute',
        zIndex: -1,
        width: 400,
        objectFit: 'contain',
        bottom: -250,
        left: -130,
        right: 0,
    },
    backgroundRoad2: {
        position: 'absolute',
        zIndex: -1,
        width: 350,
        objectFit: 'contain',
        top: -80,
        right: -300,
        transform: [{ rotate: '-167.66deg' }],
    },
});
