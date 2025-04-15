import React from 'react'
import { Image, Text, View, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import SvgIcon from './elements/SvgIcon';
import { colors } from '@/styles/colors';

export default function header({ title, image, supTitle, subtitle, showBackButton = true }: { title: string, image: ImageSourcePropType, supTitle?: string, subtitle?: string, showBackButton?: boolean }) {
    return (
        <View style={styles.header}>
            <Image
                source={image}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                {supTitle && <Text style={styles.supTitle}>{supTitle}</Text>}
                <Text style={styles.text}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>

            {showBackButton && (
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <SvgIcon name="arrowLeft" width={24} height={24} strokeColor={colors.black} strokeWidth={2} />
                </TouchableOpacity>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        position: 'relative',
        height: 300,
        width: '100%',
    },
    image: {
        height: "100%",
        width: "100%",
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold',
    },
    supTitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 30,
    },
    backButtonText: {
        fontSize: 24,
    },
})