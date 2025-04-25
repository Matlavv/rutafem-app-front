import { View, Text, Image, StyleSheet } from 'react-native';
import { logoRutafem } from '@/images';
import colors from '@/styles/colors';


export default function HeaderSmall() {
    return (
        <View style={styles.headerSmall}>
            <Image source={logoRutafem} style={{ width: 100, height: 40 }} />
            <View style={styles.rightContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerSmall: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    rightContainer: {
        width: 40,
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 20,
    }
})
