import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraIdentityVerification() {
    const [facing, setFacing] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
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
                <View style={styles.centerContent}>
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
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stepper currentStep={4} totalSteps={5} />
            <View style={styles.container}>
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
                <CameraView style={styles.camera} facing={facing}>
                    <View style={styles.buttonContainer}></View>
                </CameraView>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Valider"
                    onPress={() => router.push('/Profile/userProfileDetails')}
                    color={colors.primary}
                    style={{ marginHorizontal: 24 }}
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
    permissionContainer: {
        flex: 1,
        backgroundColor: colors.background,
        marginHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        marginTop: 24,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    backButton: {
        marginRight: 8,
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
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
