import SvgIcon from '@/components/elements/SvgIcon';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CGU() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <SvgIcon name="arrowLeft" width={28} height={28} strokeColor="#232323" />
                </TouchableOpacity>
                <Text style={styles.title}>Conditions générales d'utilisation (CGU)</Text>
                <Text style={styles.text}>
                    Objet du service Lorem ipsum sed at sociis netus gravida amet semper mi eget
                    blandit rhoncus pellentesque tempor ac cursus quis amet turpis tempor faucibus
                    arcu scelerisque pretium porttitor nisl interdum scelerisque ut commodo
                    ultricies scelerisque consectetur viverra purus aenean sed amet eget. Création
                    et gestion de compte Lorem ipsum sed at sociis netus gravida amet semper mi eget
                    blandit rhoncus pellentesque tempor ac cursus quis amet turpis tempor faucibus
                    arcu scelerisque pretium porttitor nisl interdum scelerisque ut commodo
                    ultricies scelerisque consectetur viverra purus aenean sed amet eget.
                    Vérification des informations Lorem ipsum sed at sociis netus gravida amet
                    semper mi eget blandit rhoncus pellentesque tempor ac cursus quis amet turpis
                    tempor faucibus arcu scelerisque pretium porttitor nisl interdum scelerisque ut
                    commodo ultricies scelerisque consectetur viverra purus aenean sed amet eget.
                    Utilisation de la plateforme Lorem ipsum sed at sociis netus gravida amet semper
                    mi eget blandit rhoncus pellentesque tempor ac cursus quis amet turpis tempor
                    faucibus arcu scelerisque pretium porttitor nisl interdum scelerisque ut commodo
                    ultricies scelerisque consectetur viverra purus aenean sed amet eget. Conditions
                    financières Lorem ipsum sed at sociis netus gravida amet semper mi eget blandit
                    rhoncus pellentesque tempor ac cursus quis amet turpis tempor faucibus arcu
                    scelerisque pretium porttitor nisl interdum scelerisque ut commodo ultricies
                    scelerisque consectetur viverra purus aenean sed amet eget. Responsabilité Lorem
                    ipsum sed at sociis netus gravida amet semper mi eget blandit rhoncus
                    pellentesque tempor ac cursus quis amet turpis tempor faucibus arcu scelerisque
                    pretium porttitor nisl interdum scelerisque ut commodo ultricies scelerisque
                    consectetur viverra purus aenean sed amet eget. Données personnelles Lorem ipsum
                    sed at sociis netus gravida amet semper mi eget blandit rhoncus pellentesque
                    tempor ac cursus quis amet turpis tempor faucibus arcu scelerisque pretium
                    porttitor nisl interdum scelerisque ut commodo ultricies scelerisque consectetur
                    viverra purus aenean sed amet eget. Résiliation Lorem ipsum sed at sociis netus
                    gravida amet semper mi eget blandit rhoncus pellentesque tempor ac cursus quis
                    amet turpis tempor faucibus arcu scelerisque pretium porttitor nisl interdum
                    scelerisque ut commodo ultricies scelerisque consectetur viverra purus aenean
                    sed amet eget.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    backBtn: {
        position: 'absolute',
        top: 24,
        left: 16,
        zIndex: 10,
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24 + 28,
        marginBottom: 16,
        textAlign: 'center',
    },
    text: {
        fontSize: 15,
        color: '#232323',
        marginTop: 8,
    },
});
