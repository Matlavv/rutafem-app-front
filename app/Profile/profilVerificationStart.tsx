import { driverCharacter, travelerCharacter } from '@/images';
import colors from '@/styles/colors';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfilVerificationStart() {
  const [selected, setSelected] = useState<'driver' | 'traveler' | null>(null);

  const isSelected = selected !== null;

  return (
    <View style={styles.container}>
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
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { backgroundColor: isSelected ? colors.primary : colors.grayLight },
          ]}
          disabled={!isSelected}
        >
          <Text style={styles.nextButtonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
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
    flex: 1,
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
  nextButtonContainer: {
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  nextButton: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
