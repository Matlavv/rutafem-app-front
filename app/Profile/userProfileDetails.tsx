import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
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

export default function userProfileDetails() {
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [spotify, setSpotify] = useState('');
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (text: string) => {
        if (text.length <= 150) {
            setDescription(text);
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
                    <Stepper currentStep={5} totalSteps={5} />
                    <View style={styles.content}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity
                                onPress={() => router.back()}
                                style={styles.backButton}
                            >
                                <SvgIcon
                                    name="chevronLeft"
                                    width={34}
                                    height={34}
                                    strokeColor={colors.black}
                                />
                            </TouchableOpacity>
                            <Text style={styles.title}>Un petit mot sur toi</Text>
                        </View>
                        <Text style={styles.description}>
                            Dis-nous ce que tu aimes, ce que tu cherches dans tes voyages, ou ce qui
                            te rend unique 🌍 Ajoute aussi tes réseaux si tu veux. Plus on en sait,
                            plus c'est sympa de voyager ensemble !
                        </Text>
                        <View style={{ width: '100%', marginTop: 24 }}>
                            <View style={styles.inputRow}>
                                <View style={styles.inputIcon}>
                                    <SvgIcon
                                        name="instagram"
                                        width={20}
                                        height={20}
                                        fillColor={instagram ? '#E1306C' : colors.gray}
                                    />
                                </View>
                                <TextInput
                                    style={[styles.input, { paddingLeft: 44 }]}
                                    placeholder="Instagram"
                                    placeholderTextColor={colors.gray}
                                    value={instagram}
                                    onChangeText={setInstagram}
                                />
                            </View>
                            <View style={styles.inputRow}>
                                <View style={styles.inputIcon}>
                                    <SvgIcon
                                        name="facebook"
                                        width={20}
                                        height={20}
                                        fillColor={facebook ? '#1877F3' : colors.gray}
                                    />
                                </View>
                                <TextInput
                                    style={[styles.input, { paddingLeft: 44 }]}
                                    placeholder="Facebook"
                                    placeholderTextColor={colors.gray}
                                    value={facebook}
                                    onChangeText={setFacebook}
                                />
                            </View>
                            <View style={styles.inputRow}>
                                <View style={styles.inputIcon}>
                                    <SvgIcon
                                        name="spotify"
                                        width={20}
                                        height={20}
                                        fillColor={spotify ? '#1DB954' : colors.gray}
                                    />
                                </View>
                                <TextInput
                                    style={[styles.input, { paddingLeft: 44 }]}
                                    placeholder="Spotify"
                                    placeholderTextColor={colors.gray}
                                    value={spotify}
                                    onChangeText={setSpotify}
                                />
                            </View>
                            <View style={[styles.inputRow, { alignItems: 'flex-start' }]}>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                        style={[
                                            styles.input,
                                            styles.descriptionInput,
                                            { paddingLeft: 44 },
                                        ]}
                                        placeholder="Parle-nous un peu de toi"
                                        placeholderTextColor={colors.gray}
                                        value={description}
                                        onChangeText={handleDescriptionChange}
                                        multiline
                                        numberOfLines={4}
                                    />
                                    <Text style={styles.charCount}>{description.length}/150</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Accepter et finir"
                            onPress={() => router.push('/(tabs)/account/profile')}
                            color={colors.primary}
                            disabledColor={colors.grayLight}
                            style={styles.nextButton}
                        />
                        <Text style={styles.cguText}>
                            En cliquant sur "Accepter et finir", tu acceptes nos{' '}
                            <Text
                                style={styles.cguLink}
                                onPress={() => router.push('/Profile/CGU')}
                            >
                                Conditions Générales d'Utilisation
                            </Text>
                            .
                        </Text>
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
    avatarWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 24,
        height: 140,
        width: 140,
        alignSelf: 'center',
    },
    penIconWrapper: {
        borderWidth: 2,
        position: 'absolute',
        right: 0,
        top: 8,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 6,
        elevation: 2,
    },
    formSection: {
        width: '100%',
        marginTop: 8,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    label: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
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
        width: '100%',
    },
    inputError: {
        borderColor: '#E53935',
    },
    inputText: {
        flex: 1,
        fontSize: 16,
    },
    inputTextPlaceholder: {
        color: colors.gray,
    },
    inputTextFilled: {
        color: colors.text,
    },
    rowInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    inputHalf: {
        flex: 1,
        minWidth: 0,
        maxWidth: '48%',
    },
    descriptionContainer: {
        position: 'relative',
    },
    descriptionInput: {
        height: 120,
        textAlignVertical: 'top',
        paddingTop: 16,
    },
    charCount: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: colors.gray,
        fontSize: 12,
    },
    buttonContainer: {
        marginTop: 24,
        marginBottom: 24,
    },
    nextButton: {
        marginBottom: 24,
    },
    description: {
        fontSize: 15,
        color: colors.text,
        marginTop: 8,
        marginBottom: 16,
        textAlign: 'left',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
        position: 'relative',
    },
    inputIcon: {
        position: 'absolute',
        left: 16,
        zIndex: 2,
        marginBottom: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    cguText: {
        color: colors.text,
        fontSize: 13,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    cguLink: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },
});
