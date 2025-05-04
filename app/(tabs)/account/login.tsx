import SvgIcon from '@/components/elements/SvgIcon';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useAuth } from '../../../context/AuthContext';

// TODO navbar dans login et register

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            setHasError(true);
            return;
        }
        const success = await login(email, password);
        if (success) {
            setHasError(false);
            router.replace('/(tabs)/account/profile');
        } else {
            setHasError(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ flexDirection: 'row', gap: 12, marginTop: 24 }}>
                    <Text style={styles.title}>Connexion</Text>
                </View>
                <Text style={styles.subtitle}>
                    Utilise tes identifiants pour accéder a ton compte Rutafem. Pas encore de compte
                    ?{' '}
                    <Text style={styles.linkBlue} onPress={() => router.push('./register')}>
                        Je m'inscris
                    </Text>
                </Text>
            </View>

            <View style={styles.formCard}>
                {/* Email */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputIcon}>
                        <SvgIcon name="profile" width={22} height={22} fillColor={colors.gray} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.inputLabel}>Adresse Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="miri@gmail.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor={colors.gray}
                        />
                    </View>
                </View>

                {/* Password */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputIcon}>
                        <SvgIcon name="star" width={22} height={22} fillColor={colors.gray} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.inputLabel}>Mot de passe</Text>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="******"
                                secureTextEntry={!showPassword}
                                autoCapitalize="none"
                                placeholderTextColor={colors.gray}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setShowPassword((v) => !v)}
                            style={styles.eyeIcon}
                            accessibilityLabel={
                                showPassword
                                    ? 'Masquer le mot de passe'
                                    : 'Afficher le mot de passe'
                            }
                        >
                            <SvgIcon
                                name={showPassword ? 'eye' : 'closedEye'}
                                width={22}
                                height={22}
                                strokeColor={colors.gray}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {hasError && <Text style={styles.errorText}>Mot de passe incorrect</Text>}

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert('Mot de passe oublié')}>
                    <Text style={styles.forgotText}>Mot de passe publié</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separatorRow}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorText}>ou avec</Text>
                <View style={styles.separatorLine} />
            </View>

            <TouchableOpacity style={styles.socialButtonGoogle}>
                <View style={{ marginRight: 8 }}>
                    <SvgIcon name="google" width={22} height={22} fillColor="#EA4335" />
                </View>
                <Text style={styles.socialButtonText}>Continuer avec Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButtonFacebook}>
                <View style={{ marginRight: 8 }}>
                    <SvgIcon name="facebook" width={22} height={22} fillColor={colors.white} />
                </View>
                <Text style={styles.socialButtonTextFB}>Continuer avec Facebook</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, margin: 24 },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
    },
    subtitle: {
        fontSize: 15,
        color: colors.text,
        marginTop: 12,
        marginBottom: 18,
    },
    linkBlue: { color: '#1E90FF', fontWeight: 'bold' },
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 20,
        marginVertical: 18,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    inputIcon: { marginRight: 8 },
    inputLabel: {
        fontSize: 13,
        color: colors.gray,
        marginBottom: 2,
    },
    input: {
        fontSize: 16,
        color: colors.text,
        padding: 0,
        backgroundColor: 'transparent',
    },
    errorText: { color: '#EF4444', marginBottom: 8, marginLeft: 4, fontSize: 13 },
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 8,
    },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    forgotText: {
        color: '#1E90FF',
        fontSize: 14,
        textAlign: 'right',
        marginTop: 2,
    },
    separatorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    separatorLine: { flex: 1, height: 1, backgroundColor: colors.grayLight },
    separatorText: { marginHorizontal: 12, color: colors.gray, fontSize: 15 },
    socialButtonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grayLight,
        paddingVertical: 14,
        justifyContent: 'center',
        marginBottom: 14,
    },
    socialButtonFacebook: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1877F3',
        borderRadius: 12,
        paddingVertical: 14,
        justifyContent: 'center',
    },
    socialButtonText: { color: colors.text, fontSize: 16, fontWeight: 'bold' },
    socialButtonTextFB: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    eyeIcon: {
        marginLeft: 4,
        padding: 8,
        zIndex: 2,
    },
});
