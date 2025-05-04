import { phoneValidated } from '@/assets/images';
import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function phoneVerification() {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [isValidated, setIsValidated] = useState(false);
    const inputs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];

    const handleChange = (text: string, idx: number) => {
        if (/^\d?$/.test(text)) {
            const newCode = [...code];
            newCode[idx] = text;
            setCode(newCode);
            if (text && idx < 5) inputs[idx + 1].current?.focus();
            if (!text && idx > 0) inputs[idx - 1].current?.focus();
        }
    };

    const isReady = code.every((c) => c.length === 1);

    const handleValidate = () => {
        if (!isValidated) {
            setIsValidated(true);
        } else {
            router.push('/Profile/profilIdentityVerification');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <Stepper currentStep={3} totalSteps={6} />
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <SvgIcon
                                name="chevronLeft"
                                width={34}
                                height={34}
                                strokeColor={colors.black}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {!isValidated ? 'Confirme ton téléphone' : 'Numéro Vérifié !'}
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        {!isValidated
                            ? `Nous t'avons envoyé un code par SMS.\nEntre-le ici pour confirmer que ce numéro t'appartient.\nC'est rapide et ça renforce la sécurité de ton compte.`
                            : `Merci ! Ton téléphone est maintenant confirmé. On continue avec les dernières étapes.`}
                    </Text>
                </View>
                <View style={styles.centerContent}>
                    {!isValidated ? (
                        <View style={styles.codeRow}>
                            {code.map((digit, idx) => (
                                <React.Fragment key={idx}>
                                    {idx === 3 && <Text style={styles.dash}>-</Text>}
                                    <TextInput
                                        ref={inputs[idx]}
                                        style={styles.codeInput}
                                        value={digit}
                                        onChangeText={(text) => handleChange(text, idx)}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        returnKeyType="next"
                                        textAlign="center"
                                        autoFocus={idx === 0}
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                    />
                                </React.Fragment>
                            ))}
                        </View>
                    ) : (
                        <View style={styles.validatedContent}>
                            <Image source={phoneValidated} style={styles.validatedImage} />
                        </View>
                    )}
                </View>

                <Button
                    title="Suivant"
                    onPress={handleValidate}
                    color={colors.primary}
                    disabledColor={colors.grayLight}
                    disabled={!isReady && !isValidated}
                    isFixedBottom={true}
                    style={styles.nextButton}
                />
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
        marginHorizontal: 24,
        marginTop: 24,
    },
    header: {
        marginTop: 24,
        marginBottom: 0,
        alignSelf: 'flex-start',
        width: '100%',
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
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
        flex: 1,
    },
    description: {
        fontSize: 15,
        color: colors.text,
        alignSelf: 'flex-start',
        lineHeight: 22,
        marginTop: 16,
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
    },
    validatedContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
    },
    validatedImage: {
        width: 280,
        height: 280,
        resizeMode: 'contain',
    },
    codeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginBottom: 150,
    },
    codeInput: {
        width: 48,
        height: 56,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: colors.grayLight,
        backgroundColor: '#fff',
        fontSize: 28,
        color: colors.text,
        fontWeight: '500',
        marginHorizontal: 2,
        textAlign: 'center',
    },
    dash: {
        fontSize: 32,
        color: colors.gray,
        marginHorizontal: 8,
        fontWeight: 'bold',
    },
    nextButton: {
        marginBottom: 24,
    },
});
