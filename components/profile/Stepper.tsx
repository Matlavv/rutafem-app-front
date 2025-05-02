import colors from '@/styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type StepperProps = {
  currentStep: number;
  totalSteps?: number;
  style?: object;
};

export const Stepper = ({
  currentStep,
  totalSteps = 6,
  style = {},
}: StepperProps) => (
  <View style={[styles.container, style]}>
    {Array.from({ length: totalSteps }).map((_, i) => {
      const isActive = i + 1 <= currentStep;
      return (
        <React.Fragment key={i}>
          <View
            style={[
              styles.circle,
              isActive ? styles.circleActive : styles.circleInactive,
            ]}
          >
            <Text
              style={[
                styles.text,
                isActive ? styles.textActive : styles.textInactive,
              ]}
            >
              {i + 1}
            </Text>
          </View>
          {i < totalSteps - 1 && <View style={styles.line} />}
        </React.Fragment>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    backgroundColor: colors.primary,
    borderColor: colors.black,
  },
  circleInactive: {
    backgroundColor: colors.white,
    borderColor: colors.grayLight,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textActive: {
    color: colors.white,
  },
  textInactive: {
    color: colors.black,
  },
  line: {
    height: 2,
    width: 36,
    backgroundColor: colors.grayLight,
  },
});

// Utilisation :
// <Stepper currentStep={1} totalSteps={6} />
