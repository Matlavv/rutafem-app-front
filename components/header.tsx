import React from 'react'
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import SvgIcon from './elements/SvgIcon';
import colors from '@/styles/colors';
import layout from '@/styles/layout';


type HeaderProps = {
    title: string;
    image: any;
    supTitle?: string;
    subtitle?: string;
    showBackButton?: boolean;
    scrollOffsetY?: Animated.SharedValue<number>;
}

export default function Header({ title, image, supTitle, subtitle, showBackButton = true, scrollOffsetY }: HeaderProps) {

    let animatedHeaderStyle;
    if (scrollOffsetY) {
        animatedHeaderStyle = useAnimatedStyle(() => {
            const height = interpolate(
                scrollOffsetY.value,
                [0, layout.headerMaxHeight - layout.headerMinHeight],
                [layout.headerMaxHeight, layout.headerMinHeight],
                Extrapolate.CLAMP
            );
            return { height };
        });
    }

    return (
        <Animated.View style={[styles.header, animatedHeaderStyle]}>
            <Image source={image} style={styles.image} resizeMode="cover" />
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
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        width: '100%',
        height: layout.headerMaxHeight,
        overflow: 'hidden',
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
        paddingTop: 16,
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
});