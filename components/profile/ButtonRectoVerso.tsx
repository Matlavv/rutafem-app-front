import SvgIcon from '@/components/elements/SvgIcon';
import colors from '@/styles/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonRectoVersoProps = {
  onPressRecto: () => void;
  onPressVerso: () => void;
};

export const ButtonRectoVerso = ({
  onPressRecto,
  onPressVerso,
}: ButtonRectoVersoProps) => (
  <View style={styles.row}>
    <TouchableOpacity
      style={styles.button}
      onPress={onPressRecto}
      activeOpacity={0.85}
    >
      <SvgIcon name="upload" width={24} height={24} fillColor={colors.white} />
      <Text style={styles.text}>Recto</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={onPressVerso}
      activeOpacity={0.85}
    >
      <SvgIcon name="upload" width={24} height={24} fillColor={colors.white} />
      <Text style={styles.text}>Verso</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginHorizontal: 8,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
});

// Utilisation :
// <ButtonRectoVerso onPressRecto={...} onPressVerso={...} />
