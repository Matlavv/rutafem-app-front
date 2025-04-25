import { SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { canyon } from '@/images';

// COMPONENTS
import Button from '@/components/elements/button';
import HeaderSmall from '@/components/headerSmall';
import { colors } from '@/styles/colors';
import SvgIcon from '@/components/elements/SvgIcon';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
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
                        />
                    </View>
                    <View>
                        <Text style={styles.searchInput__label}>Arrivée</Text>
                        <TextInput
                            placeholder="Arrivée"
                            style={[styles.searchInput, styles.searchInput__end]}
                            placeholderTextColor={colors.gray}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.geolocContainer}>
                    <SvgIcon name="mapPin" fillColor={colors.secondary} width={16} height={16} />
                    <Text style={styles.geoloc__text}>Utiliser ma position actuelle</Text>
                </TouchableOpacity>

                <View style={styles.dateContainer}>
                    <View>
                        <Text style={styles.date__label}>Date</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <SvgIcon name="calendar" fillColor={colors.secondary} strokeColor="transparent" width={24} height={24} />
                            <Text>25/04/2025</Text>
                        </View>
                    </View>
                </View>

                <Button
                    title="Rechercher"
                    color={colors.secondary}
                    disabled={true}
                    isFixedBottom={true}
                />

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        position: 'relative',
    },
    homeContainer: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 30,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: colors.gray,
        padding: 16,
        paddingTop: 30,
        paddingLeft: 50,
        fontSize: 16,
        fontWeight: 'semibold',
    },
    searchInput__label: {
        position: 'absolute',
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
        alignItems: 'center',
        gap: 4,
    },
    geoloc__text: {
        color: colors.secondary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    dateContainer: {
        marginTop: 30,
    },
    date__label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
