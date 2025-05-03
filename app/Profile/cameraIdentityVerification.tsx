import Button from '@/components/elements/button';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CameraIdentityVerification() {
    const [facing, setFacing] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Nous avons besoin de votre permission pour accéder à la caméra
                </Text>
                <Button
                    title="Autoriser l'accès"
                    onPress={requestPermission}
                    color={colors.primary}
                    style={styles.button}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stepper currentStep={4} totalSteps={6} />
            <View style={styles.container}>
                <CameraView style={styles.camera} facing={facing}>
                    <View style={styles.buttonContainer}></View>
                </CameraView>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Valider"
                    onPress={() => router.push('/Profile/carVerificationStart')}
                    color={colors.primary}
                />
            </View>
        </SafeAreaView>
    );
}

const { width } = Dimensions.get('window');
const circleSize = width * 0.7;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        marginTop: 24,
    },
    header: {
        marginTop: 24,
        marginBottom: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 16,
    },
    description: {
        fontSize: 15,
        color: colors.text,
        lineHeight: 22,
    },
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    camera: {
        width: '100%',
        height: '60%',
        borderRadius: 12,
        overflow: 'hidden',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        borderWidth: 2,
        borderColor: colors.white,
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        marginBottom: 24,
    },
    button: {
        marginBottom: 24,
    },
    text: {
        fontSize: 16,
        color: colors.text,
        textAlign: 'center',
    },
});
