import React from 'react'
import { Image, Text, View, ImageSourcePropType, StyleSheet } from 'react-native';

export default function header({ title, image }: { title: string, image: ImageSourcePropType }) {
    return (
        <View style={styles.header}>
            <Image
                source={image}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        position: 'relative',
        height: 300,
        width: '100%',
        marginBottom: 20,
    },
    image: {
        height: "100%",
        width: "100%",
        opacity: 0.8,
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
})