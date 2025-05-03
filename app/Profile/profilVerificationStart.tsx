import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import Button from '@/components/elements/button';
import { driverCharacter, travelerCharacter } from '@/images';
import colors from '@/styles/colors';


export default function ProfilVerificationStart() {

  const [selected, setSelected] = useState<'driver' | 'traveler' | null>(null);

  const isSelected = selected !== null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vérifier mon profil</Text>
      <Text style={styles.description}>
        Pour garantir des voyages en toute sécurité et instaurer une vraie
        confiance entre nos membres, cette étape de vérification est
        indispensable. Elle ne prend que quelques instants.
      </Text>
      <View style={styles.choicesColumn}>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            selected === 'driver' && {
              borderColor: colors.primary,
              borderWidth: 2,
            },
          ]}
          onPress={() => setSelected('driver')}
        >
          <View style={styles.button}>
            <Image source={driverCharacter} width={100} height={100} />
            <Text style={styles.buttonText}>Je suis conductrice</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            selected === 'traveler' && {
              borderColor: colors.primary,
              borderWidth: 2,
            },
          ]}
          onPress={() => setSelected('traveler')}
        >
          <View style={styles.button}>
            <Image source={travelerCharacter} width={100} height={100} />
            <Text style={styles.buttonText}>Je suis passagère</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Button
        title="Suivant"
        onPress={() => router.push('/Profile/profilIDCard')}
        color={colors.primary}
        isFixedBottom={true}
        disabledColor={colors.grayLight}
        disabled={!isSelected}
        style={[
          styles.nextButton,
          { backgroundColor: isSelected ? colors.primary : colors.grayLight },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    margin: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: colors.text,
    marginTop: 16,
    textAlign: 'center',
  },
  choicesColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 32,
    gap: 16,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: '#fff',
    width: '70%',
  },
  button: {
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text,
    marginTop: 12,
    fontSize: 15,
    textAlign: 'center',
  },
  nextButton: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
});