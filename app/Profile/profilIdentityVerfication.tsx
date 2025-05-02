import { Stepper } from '@/components/profile/Stepper';
import React from 'react';
import { View } from 'react-native';

export default function profilIdentityVerfication() {
  return (
    <View>
      <Stepper currentStep={4} totalSteps={6} />
    </View>
  );
}
