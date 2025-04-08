import RideList from '@/components/sections/RideList';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { canyon } from '@/images';

export default function RideScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={canyon}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>RutaFem</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.sectionTitle}>Trajets disponibles</Text>
                    <TouchableOpacity
                        onPress={() => router.push('/ride/createRide')}
                        style={styles.addButton}
                    >
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <RideList />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        position: 'relative',
    },
    headerImage: {
        height: 400,
        width: '100%',
        opacity: 0.8,
    },
    titleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#EC4899',
    },
    contentContainer: {
        margin: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
    },
    addButton: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B82F6',
        borderRadius: 24,
    },
    addButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    listContainer: {
        marginTop: 16,
    },
});
