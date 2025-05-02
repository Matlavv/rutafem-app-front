import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { Stepper } from '@/components/profile/Stepper';
import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function profilUserInformation() {
  const [birthDate, setBirthDate] = useState('');
  const [rue, setRue] = useState('');
  const [numero, setNumero] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [telephone, setTelephone] = useState('');

  const isBirthDateValid = !!birthDate;
  const isRueValid = !!rue;
  const isNumeroValid = !!numero && /^\d+$/.test(numero);
  const isCodePostalValid = !!codePostal && /^\d{5}$/.test(codePostal);
  const isVilleValid = !!ville;
  const isTelephoneValid = !!telephone && /^\d{10}$/.test(telephone);

  const isReady =
    isBirthDateValid &&
    isRueValid &&
    isNumeroValid &&
    isCodePostalValid &&
    isVilleValid &&
    isTelephoneValid;

  const handlePickDate = () => {
    setBirthDate('01/01/2000');
  };

  return (
    <View style={styles.container}>
      <Stepper currentStep={2} totalSteps={6} />
      <View style={styles.content}>
        <Text style={styles.title}>Tes informations</Text>
        <View style={styles.avatarWrapper}>
          <SvgIcon
            name="profile"
            width={120}
            height={120}
            strokeColor="#3B3B3D"
            strokeWidth={0.5}
          />
          <TouchableOpacity style={styles.penIconWrapper}>
            <SvgIcon name="pen" width={24} height={24} strokeWidth={0.5} />
          </TouchableOpacity>
        </View>
        <View style={styles.formSection}>
          <View style={styles.labelRow}>
            <SvgIcon
              name="calendar"
              fillColor={colors.gray}
              strokeColor="transparent"
              width={24}
              height={24}
            />
            <Text style={styles.label}>Date de naissance</Text>
          </View>
          <TouchableOpacity
            style={styles.input}
            onPress={handlePickDate}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.inputText,
                birthDate
                  ? styles.inputTextFilled
                  : styles.inputTextPlaceholder,
              ]}
            >
              {birthDate || 'Choisi ta date de naissance'}
            </Text>
            <View style={{ transform: [{ rotate: '90deg' }] }}>
              <SvgIcon name="arrowLeft" width={18} height={18} />
            </View>
          </TouchableOpacity>

          <View style={[styles.labelRow, { marginTop: 24 }]}>
            <SvgIcon
              name="mapPin"
              width={20}
              height={20}
              fillColor={colors.gray}
            />
            <Text style={styles.label}>Mon adresse</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Rue"
            placeholderTextColor={colors.gray}
            value={rue}
            onChangeText={setRue}
          />
          <View style={styles.rowInputs}>
            <TextInput
              style={[
                styles.input,
                styles.inputHalf,
                { marginRight: 8 },
                !isNumeroValid && numero ? styles.inputError : null,
              ]}
              placeholder="Numéro de voie"
              placeholderTextColor={colors.gray}
              value={numero}
              onChangeText={setNumero}
              keyboardType="numeric"
              maxLength={5}
            />
            <TextInput
              style={[
                styles.input,
                styles.inputHalf,
                !isCodePostalValid && codePostal ? styles.inputError : null,
              ]}
              placeholder="Code Postal"
              placeholderTextColor={colors.gray}
              value={codePostal}
              onChangeText={setCodePostal}
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
          <TextInput
            style={[
              styles.input,
              !isVilleValid && ville ? styles.inputError : null,
            ]}
            placeholder="Ville"
            placeholderTextColor={colors.gray}
            value={ville}
            onChangeText={setVille}
          />
          <TextInput
            style={[
              styles.input,
              !isTelephoneValid && telephone ? styles.inputError : null,
            ]}
            placeholder="Téléphone"
            placeholderTextColor={colors.gray}
            value={telephone}
            onChangeText={setTelephone}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
      </View>
      <View style={[styles.buttonContainer, { marginBottom: 48 }]}>
        <Button
          title="Continuer"
          onPress={() => router.push('/Profile/phoneVerification')}
          color={colors.primary}
          isFixedBottom={true}
          disabledColor={colors.grayLight}
          disabled={!isReady}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    marginTop: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 24,
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  penIconWrapper: {
    borderWidth: 2,
    position: 'absolute',
    right: 0,
    top: 8,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  formSection: {
    width: '100%',
    marginTop: 8,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  label: {
    fontWeight: 'bold',
    color: colors.text,
    fontSize: 16,
    marginLeft: 8,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grayLight,
    paddingVertical: Platform.OS === 'ios' ? 18 : 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputError: {
    borderColor: '#E53935',
  },
  inputText: {
    flex: 1,
    fontSize: 16,
  },
  inputTextPlaceholder: {
    color: colors.gray,
  },
  inputTextFilled: {
    color: colors.text,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  inputHalf: {
    flex: 1,
    minWidth: 0,
    maxWidth: '48%',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
