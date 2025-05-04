import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { maintenance } from '@/assets/images';

export default function MessageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={maintenance} style={styles.image} width={240} height={240} />
                <Text style={styles.title}>En cours de développement</Text>
                <Text style={styles.description}>
                    Cette fonctionnalité sera bientôt disponible. Notre équipe travaille activement
                    pour vous offrir la meilleure expérience possible.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 24,
    },
});
