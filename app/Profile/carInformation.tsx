import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const carBrands = [
    'Peugeot',
    'Renault',
    'Citroën',
    'Volkswagen',
    'Toyota',
    'BMW',
    'Mercedes',
    'Audi',
    'Ford',
    'Fiat',
];

const carModelsByBrand: Record<string, string[]> = {
    Peugeot: ['208', '308', '3008', '5008'],
    Renault: ['Clio', 'Megane', 'Captur', 'Twingo'],
    Citroën: ['C3', 'C4', 'C5'],
    Volkswagen: ['Golf', 'Polo', 'Tiguan'],
    Toyota: ['Yaris', 'Corolla', 'C-HR'],
    BMW: ['Série 1', 'Série 3', 'X1'],
    Mercedes: ['Classe A', 'Classe C', 'GLA'],
    Audi: ['A1', 'A3', 'Q2'],
    Ford: ['Fiesta', 'Focus', 'Puma'],
    Fiat: ['500', 'Panda', 'Tipo'],
};

const carColors = [
    { name: 'Noir', value: '#222' },
    { name: 'Blanc', value: '#fff' },
    { name: 'Gris', value: '#888' },
    { name: 'Rouge', value: '#e53935' },
    { name: 'Bleu', value: '#1976d2' },
    { name: 'Vert', value: '#388e3c' },
    { name: 'Jaune', value: '#fbc02d' },
    { name: 'Orange', value: '#fb8c00' },
];

const plateRegex = /^[A-Z]{2}-\d{3}-[A-Z]{2}$/;

export default function CarInformation() {
    const [plate, setPlate] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [showBrandDropdown, setShowBrandDropdown] = useState(false);
    const [showModelDropdown, setShowModelDropdown] = useState(false);
    const [color, setColor] = useState('');

    const models = useMemo(() => (brand ? carModelsByBrand[brand] || [] : []), [brand]);

    const isPlateValid = plateRegex.test(plate);
    const isBrandValid = !!brand;
    const isModelValid = !!model;
    const isColorValid = !!color;

    const isReady = isPlateValid && isBrandValid && isModelValid && isColorValid;

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <Stepper currentStep={5} totalSteps={6} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Informations du véhicule</Text>
                        <View style={styles.formSection}>
                            <Text style={styles.label}>Numéro de plaque d'immatriculation</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    plate && !isPlateValid ? styles.inputError : null,
                                ]}
                                placeholder="AA-123-AA"
                                placeholderTextColor={colors.gray}
                                value={plate}
                                onChangeText={(text) => setPlate(text.toUpperCase())}
                                autoCapitalize="characters"
                                maxLength={9}
                            />
                            <Text style={styles.label}>Marque</Text>
                            <TouchableOpacity
                                style={styles.input}
                                onPress={() => setShowBrandDropdown(!showBrandDropdown)}
                                activeOpacity={0.8}
                            >
                                <Text
                                    style={
                                        brand ? styles.inputTextFilled : styles.inputTextPlaceholder
                                    }
                                >
                                    {brand || 'Sélectionne la marque'}
                                </Text>
                                <View style={styles.chevronRight}>
                                    <SvgIcon
                                        name="chevronDown"
                                        width={18}
                                        height={18}
                                        strokeColor={colors.gray}
                                    />
                                </View>
                            </TouchableOpacity>
                            {showBrandDropdown && (
                                <View style={styles.dropdown}>
                                    <FlatList
                                        data={carBrands}
                                        keyExtractor={(item) => item}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={styles.dropdownItem}
                                                onPress={() => {
                                                    setBrand(item);
                                                    setModel('');
                                                    setShowBrandDropdown(false);
                                                }}
                                            >
                                                <Text style={styles.dropdownText}>{item}</Text>
                                            </TouchableOpacity>
                                        )}
                                        style={{ maxHeight: 180 }}
                                        nestedScrollEnabled
                                    />
                                </View>
                            )}
                            <Text style={styles.label}>Modèle</Text>
                            <TouchableOpacity
                                style={[styles.input, !brand && styles.inputDisabled]}
                                onPress={() => brand && setShowModelDropdown(!showModelDropdown)}
                                activeOpacity={brand ? 0.8 : 1}
                                disabled={!brand}
                            >
                                <Text
                                    style={
                                        model ? styles.inputTextFilled : styles.inputTextPlaceholder
                                    }
                                >
                                    {model || 'Sélectionne le modèle'}
                                </Text>
                                <View style={styles.chevronRight}>
                                    <SvgIcon
                                        name="chevronDown"
                                        width={18}
                                        height={18}
                                        strokeColor={colors.gray}
                                    />
                                </View>
                            </TouchableOpacity>
                            {showModelDropdown && brand && (
                                <View style={styles.dropdown}>
                                    <FlatList
                                        data={models}
                                        keyExtractor={(item) => item}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={styles.dropdownItem}
                                                onPress={() => {
                                                    setModel(item);
                                                    setShowModelDropdown(false);
                                                }}
                                            >
                                                <Text style={styles.dropdownText}>{item}</Text>
                                            </TouchableOpacity>
                                        )}
                                        style={{ maxHeight: 180 }}
                                        nestedScrollEnabled
                                    />
                                </View>
                            )}
                            <Text style={styles.label}>Couleur</Text>
                            <View style={styles.colorRow}>
                                {carColors.map((c) => (
                                    <TouchableOpacity
                                        key={c.value}
                                        style={[
                                            styles.colorCircle,
                                            { backgroundColor: c.value },
                                            color === c.value && styles.colorCircleSelected,
                                        ]}
                                        onPress={() => setColor(c.value)}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Continuer"
                            onPress={() => router.push('/Profile/drivingLicenceVerification')}
                            color={colors.primary}
                            disabledColor={colors.grayLight}
                            style={styles.nextButton}
                            disabled={isReady}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 24,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 24,
        paddingTop: 24,
        paddingBottom: 100,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        marginTop: 16,
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    formSection: {
        width: '100%',
        marginTop: 8,
    },
    label: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginBottom: 4,
        marginTop: 16,
    },
    input: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grayLight,
        paddingVertical: Platform.OS === 'ios' ? 18 : 14,
        paddingHorizontal: 16,
        fontSize: 16,
        color: colors.text,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
        paddingRight: 36,
    },
    inputDisabled: {
        backgroundColor: colors.grayLight,
    },
    inputError: {
        borderColor: '#E53935',
    },
    inputTextFilled: {
        color: colors.text,
    },
    inputTextPlaceholder: {
        color: colors.gray,
    },
    chevronRight: {
        position: 'absolute',
        right: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grayLight,
        marginBottom: 12,
        maxHeight: 180,
        zIndex: 10,
        overflow: 'hidden',
    },
    dropdownItem: {
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: colors.grayLight,
    },
    dropdownText: {
        fontSize: 16,
        color: colors.text,
    },
    colorRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginVertical: 16,
        marginLeft: 8,
    },
    colorCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: colors.grayLight,
        marginRight: 8,
    },
    colorCircleSelected: {
        borderColor: colors.primary,
        borderWidth: 3,
    },
    buttonContainer: {
        marginTop: 24,
        marginBottom: 24,
    },
    nextButton: {
        marginBottom: 24,
    },
});
