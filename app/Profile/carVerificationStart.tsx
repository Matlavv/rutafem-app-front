import { carVerification } from '@/assets/images';
import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function carVerificationStart() {
    return (
        <SafeAreaView style={styles.container}>
            <Stepper currentStep={1} totalSteps={2} />

            <View style={styles.content}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <SvgIcon
                            name="chevronLeft"
                            width={34}
                            height={34}
                            strokeColor={colors.black}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Vérifie ton véhicule</Text>
                </View>
                <Text style={styles.description}>
                    Dis-nous quel véhicule tu utilises pour covoiturer. Cela permet d'ajouter une
                    touche de confiance et de clarté pour les personnes qui voyageront avec toi.
                </Text>
                <Image source={carVerification} style={styles.image} />
                <View style={styles.uploadRow}></View>
            </View>

            <Button
                title="Continuer"
                onPress={() => router.push('/Profile/carInformation')}
                color={colors.primary}
                isFixedBottom={true}
                disabledColor={colors.grayLight}
                style={styles.nextButton}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        marginTop: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    backButton: {
        marginRight: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        flex: 1,
    },
    description: {
        marginTop: 16,
        fontSize: 16,
        color: colors.text,
        marginBottom: 24,
        alignSelf: 'flex-start',
    },
    image: {
        marginTop: 36,
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 24,
        resizeMode: 'contain',
    },
    uploadRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 32,
        marginVertical: 24,
    },
    uploadCol: {
        alignItems: 'center',
        flex: 1,
    },
    uploadBox: {
        width: 100,
        height: 100,
        borderWidth: 1.5,
        borderColor: colors.gray,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    uploadLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    uploadLabel: {
        fontSize: 14,
        marginLeft: 4,
        fontWeight: '500',
    },
    nextButton: {
        marginBottom: 24,
    },
});
