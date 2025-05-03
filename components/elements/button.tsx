import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, StyleProp } from 'react-native';
import colors from '@/styles/colors';

interface ButtonProps {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    color?: string;
    isFixedBottom?: boolean;
    disabledColor?: string;
    style?: StyleProp<ViewStyle>;
}

export default function Button({ style, title, onPress, disabled = false, disabledColor, color = colors.primary, isFixedBottom = false }: ButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, style, isFixedBottom && styles.fixedBottom, {
                backgroundColor: (disabled && disabledColor) ? disabledColor : color,
                opacity: (disabled && !disabledColor) ? 0.6 : 1,
            }]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    fixedBottom: {
        zIndex: 10,
        position: 'absolute',
        bottom: 25,
        left: 0,
        right: 0,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 'auto',
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
});