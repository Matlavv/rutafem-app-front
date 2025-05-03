import SvgIcon from '@/components/elements/SvgIcon';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
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
import { useAuth } from '../../context/AuthContext';

export default function RegisterScreen() {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        phone_number: '',
        profile_image_url: 'https://randomuser.me/api/portraits/women/1.jpg',
        username: '',
        experience: '',
        biography: '',
        favorite_music: '',
        birth_date: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { register } = useAuth();

    const isLongEnough = formData.password.length >= 8;
    const hasUppercase = /[A-Z]/.test(formData.password);
    const hasNumber = /\d/.test(formData.password);
    const hasSpecial = /[^A-Za-z0-9]/.test(formData.password);

    const isPasswordValid = isLongEnough && hasUppercase && hasNumber && hasSpecial;

    const handleRegister = async () => {
        if (
            !formData.lastname ||
            !formData.firstname ||
            !formData.email ||
            !formData.password ||
            !confirmPassword
        ) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
            return;
        }
        if (formData.password !== confirmPassword) {
            Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
            return;
        }
        if (!isPasswordValid) {
            Alert.alert('Erreur', 'Le mot de passe ne respecte pas les critères');
            return;
        }
        const success = await register(formData);
        if (success) {
            router.replace('/(tabs)/profile');
        } else {
            Alert.alert('Erreur', "Une erreur est survenue lors de l'inscription");
        }
    };

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
                    <Text style={styles.title}>Enregistrement</Text>
                    <Text style={styles.subtitle}>
                        Bienvenue chez RutaFem ! Remplis les champs suivants et rejoins notre
                        communauté de voyageuses en France.
                    </Text>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nom"
                            value={formData.lastname}
                            onChangeText={(text) => setFormData({ ...formData, lastname: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Prénom"
                            value={formData.firstname}
                            onChangeText={(text) => setFormData({ ...formData, firstname: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Adresse email"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <View style={styles.inputPasswordWrapper}>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Mot de passe"
                                value={formData.password}
                                onChangeText={(text) =>
                                    setFormData({ ...formData, password: text })
                                }
                                secureTextEntry={!showPassword}
                            />
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
                        <View style={styles.passwordCriteria}>
                            <Text
                                style={
                                    isLongEnough ? styles.criterionValid : styles.criterionInvalid
                                }
                            >
                                ✔ Minimum 8 caractères
                            </Text>
                            <Text
                                style={
                                    hasUppercase ? styles.criterionValid : styles.criterionInvalid
                                }
                            >
                                ✔ Lettre en majuscule
                            </Text>
                            <Text
                                style={hasNumber ? styles.criterionValid : styles.criterionInvalid}
                            >
                                ✔ Chiffre
                            </Text>
                            <Text
                                style={hasSpecial ? styles.criterionValid : styles.criterionInvalid}
                            >
                                ✔ Caractère spécial
                            </Text>
                        </View>
                        <View style={styles.inputPasswordWrapper}>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Confirmation mot de passe"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showPassword}
                            />
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
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>S'enregistrer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.link}
                            onPress={() => router.push('./login')}
                        >
                            <Text style={styles.linkText}>Déjà un compte ? Se connecter</Text>
                        </TouchableOpacity>
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
        marginHorizontal: 16,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16,
        color: colors.text,
    },
    subtitle: {
        fontSize: 15,
        color: colors.text,
        marginBottom: 24,
    },
    form: {
        gap: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.grayLight,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    inputPasswordWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    eyeIcon: {
        marginLeft: -36,
        padding: 8,
        zIndex: 2,
    },
    passwordCriteria: {
        marginVertical: 8,
        gap: 2,
    },
    criterionValid: {
        color: 'green',
        fontSize: 13,
    },
    criterionInvalid: {
        color: 'gray',
        fontSize: 13,
    },
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        alignItems: 'center',
    },
    linkText: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: 'bold',
    },
});
