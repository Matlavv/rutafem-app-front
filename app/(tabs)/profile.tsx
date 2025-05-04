import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen() {
    const { user, isAuthenticated, logout } = useAuth();

    useEffect(() => {
        if (!isAuthenticated || !user) {
            router.replace('/Auth/login');
        }
    }, [isAuthenticated, user]);

    if (!isAuthenticated || !user) {
        return null;
    }

    const handleVerification = () => {
        router.push('/Profile/profilIDCard');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.hello}>Salut</Text>
                <Text style={styles.name}>
                    {user.firstname} {user.lastname}
                </Text>
                <TouchableOpacity style={styles.avatarWrapper}>
                    <View>
                        <SvgIcon
                            name="profile"
                            width={170}
                            height={160}
                            strokeColor="#3B3B3D"
                            strokeWidth={0.5}
                        />

                        <View style={styles.penIconWrapper}>
                            <SvgIcon name="pen" width={24} height={24} strokeWidth={0.5} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.badgeWrapper}>
                    <SvgIcon name="bag" width={16} height={16} strokeColor="#F16134" />
                    <Text style={styles.badgeText}>Voyageuse débutante</Text>
                </View>
                <TouchableOpacity style={styles.driverBtn}>
                    <SvgIcon name="car" width={20} height={20} fillColor="#fff" />
                    <Text style={styles.driverBtnText}>Devenir conductrice</Text>
                </TouchableOpacity>
                <View style={styles.statusRow}>
                    {user.verified ? (
                        <SvgIcon name="check" width={24} height={24} fillColor="#A3A3A3" />
                    ) : (
                        <SvgIcon
                            name="cross"
                            width={24}
                            height={24}
                            strokeColor="#A3A3A3"
                            strokeWidth={3}
                        />
                    )}
                    <Text style={styles.statusText}>
                        {user.verified ? 'Profil vérifié' : 'Profil non vérifié'}
                    </Text>
                </View>
                <View style={styles.starsRow}>
                    {[...Array(5)].map((_, i) => (
                        <SvgIcon
                            key={i}
                            name="star"
                            width={20}
                            height={20}
                            strokeColor="#A3A3A3"
                            fillColor="#A3A3A3"
                        />
                    ))}
                    <Text style={styles.ratingText}>0 (0 avis)</Text>
                </View>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.username}>@{user.username}</Text>
                {!user.verified && (
                    <View style={styles.verifyBtnContainer}>
                        <Button
                            onPress={handleVerification}
                            title="Verifier mon profil"
                            color={colors.secondary}
                            disabledColor={colors.secondaryLight}
                            isFixedBottom={true}
                        />
                    </View>
                    // <TouchableOpacity style={styles.verifyBtn} onPress={handleVerification}>
                    //   <Text style={styles.verifyBtnText}>Verifier mon profil</Text>
                    // </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        margin: 24,
    },
    hello: {
        fontSize: 22,
        color: '#232323',
        alignSelf: 'flex-start',
        marginBottom: 4,
        marginTop: 28,
    },
    name: {
        fontSize: 28,
        color: '#232323',
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    avatarWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 24,
        height: 220,
        width: 220,
        alignSelf: 'center',
    },
    penIconWrapper: {
        borderWidth: 2,
        position: 'absolute',
        right: -8,
        top: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 6,
        elevation: 2,
    },
    badgeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginVertical: 20,
    },
    badgeText: {
        color: '#F16134',
        fontWeight: 'bold',
        marginLeft: 6,
        fontSize: 16,
    },
    driverBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 24,
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginVertical: 12,
        alignSelf: 'center',
        minWidth: undefined,
        width: undefined,
        shadowColor: '#E05BA3',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 2,
    },
    driverBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 8,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 4,
    },
    statusText: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 6,
        padding: 8,
    },
    starsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        padding: 2,
    },
    ratingText: {
        color: '#A3A3A3',
        fontSize: 15,
        marginLeft: 8,
        padding: 2,
    },
    email: {
        color: '#232323',
        fontSize: 15,
        marginBottom: 2,
        padding: 2,
    },
    username: {
        color: '#A3A3A3',
        fontSize: 15,
        marginBottom: 16,
        padding: 2,
    },
    verifyBtnContainer: {
        marginTop: 120,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    verifyBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 3,
    },
});
