import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "@/styles/colors";


export default function Select({ options, icon, onChange }: { options: { label: string, value: number }[], icon: React.ReactNode, onChange: (value: number) => void }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const onPress = (value: any) => {
        onChange(value);
        setIsOpen(false);
        setSelectedValue(value);
    }

    return (
        <View style={styles.select}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }} onPress={() => setIsOpen(!isOpen)}>
                <View style={{ flexShrink: 0 }}>{icon && icon}</View>
                <Text numberOfLines={1} style={styles.select__text}>{selectedValue} voyageuses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.select__pop, { opacity: isOpen ? 1 : 0 }]} onPress={() => setIsOpen(!isOpen)}>
                {options.map((option, i) => (
                    <TouchableOpacity style={styles.option} key={i} onPress={() => onPress(option.value)}>
                        <Text numberOfLines={1}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    select: {
        position: 'relative',
    },
    select__pop: {
        position: 'absolute',
        backgroundColor: colors.white,
        zIndex: 20,
        top: 0,
        left: 0,
        right: 0,
        borderRadius: 8,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
    },
    option: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    select__text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
