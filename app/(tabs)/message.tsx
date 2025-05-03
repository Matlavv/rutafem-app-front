import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function MessageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <MaterialCommunityIcons
                    name="code-braces"
                    size={80}
                    color="#6B7280"
                    style={styles.icon}
                />
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
        backgroundColor: '#F9FAFB',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    icon: {
        marginBottom: 24,
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
