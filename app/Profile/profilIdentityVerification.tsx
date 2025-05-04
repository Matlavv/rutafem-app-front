import { faceConfirmation } from '@/assets/images';
import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function profilIdentityVerification() {
    return (
        <SafeAreaView style={styles.container}>
            <Stepper currentStep={4} totalSteps={5} />

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
                    <Text style={styles.title}>Confirme ton identité</Text>
                </View>
                <Text style={styles.description}>
                    Regarde la caméra, dis bonjour et c'est tout ! Cette courte vidéo nous aide à
                    protéger tous les voyageurs en vérifiant ton identité. Tes données sont
                    chiffrées et strictement confidentielles.
                </Text>
                <Image source={faceConfirmation} style={styles.image} />
                <View style={styles.uploadRow}></View>
            </View>

            <Button
                title="Continuer"
                onPress={() => router.push('/Profile/cameraIdentityVerification')}
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
        width: 220,
        height: 220,
        alignSelf: 'center',
        marginVertical: 24,
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
