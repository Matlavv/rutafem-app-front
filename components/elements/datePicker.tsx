import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import SvgIcon from './SvgIcon';
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';


export default function DatePicker({ departureDate, colors, labelStyle, isDatePickerOpen, setIsDatePickerOpen, onChange }: { departureDate: DateType, colors: any, labelStyle?: any, isDatePickerOpen: boolean, setIsDatePickerOpen: (isDatePickerOpen: boolean) => void, onChange: (date: DateType) => void }) {

    const defaultStyles = useDefaultStyles();


    return (
        <View>
            <TouchableOpacity onPress={() => { setIsDatePickerOpen(true) }}>
                <Text style={labelStyle}>Date de départ</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <SvgIcon name="calendar" fillColor={colors.secondary} strokeColor="transparent" width={24} height={24} />
                    <Text style={styles.picked_label}>{departureDate ? dayjs(departureDate).format('DD/MM/YYYY') : 'Sélectionner'}</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.datePicker, { opacity: isDatePickerOpen ? 1 : 0 }]}>
                <DateTimePicker
                    mode="single"
                    date={departureDate}
                    onChange={(params) => {
                        onChange(params.date);
                        setTimeout(() => {
                            setIsDatePickerOpen(false);
                        }, 200);
                    }}
                    style={{
                        backgroundColor: colors.white,
                        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
                        borderRadius: 10,
                        padding: 10,
                        width: 350,
                    }}
                    styles={{
                        ...defaultStyles,
                        day_label: {
                            color: colors.black,
                        },
                        day_cell: {
                            borderRadius: "50%",
                            aspectRatio: 1,
                            padding: 4
                        },
                        selected: {
                            backgroundColor: colors.secondary,
                            color: colors.white,
                            borderRadius: "50%",
                        },
                        selected_label: {
                            color: colors.white,
                        },
                        today: {
                            borderColor: colors.black,
                            borderWidth: 1,
                            borderRadius: 10,
                        },
                        today_label: {
                            color: colors.black,
                        },
                        month_selector_label: {
                            color: colors.black,
                        },
                        year_selector_label: {
                            color: colors.black,
                        },
                        button_next_image: {
                            tintColor: colors.black,
                        },
                        button_prev_image: {
                            tintColor: colors.black,
                        },


                    }}
                    locale="fr"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    datePicker: {
        backgroundColor: 'red',
        position: 'absolute',
        zIndex: 20,
        borderRadius: 10,
        flex: 1,
        top: 0,
        opacity: 0,
    },
    picked_label: {
        fontSize: 14,
        fontWeight: 600,
    },
});