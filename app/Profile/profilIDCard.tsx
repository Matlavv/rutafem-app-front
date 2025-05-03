import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import Button from '@/components/elements/button';
import SvgIcon from '@/components/elements/SvgIcon';
import { ButtonRectoVerso } from '@/components/profile/ButtonRectoVerso';
import { Stepper } from '@/components/profile/Stepper';
import { idCharacter } from '@/assets/images';
import colors from '@/styles/colors';


export default function profilIDCard() {

  const [recto, setRecto] = useState<{ name: string; loaded: boolean } | null>(
    null,
  );
  const [verso, setVerso] = useState<{ name: string; loaded: boolean } | null>(
    null,
  );

  const handleUploadRecto = () => {
    setRecto({ name: 'IMG 56246T5', loaded: true });
  };
  const handleUploadVerso = () => {
    setVerso({ name: 'IMG 56246T5', loaded: true });
  };

  const isReady = recto?.loaded && verso?.loaded;

  return (
    <SafeAreaView style={styles.container}>
      <Stepper currentStep={1} totalSteps={6} />
      <View style={styles.content}>
        <Text style={styles.title}>Carte d'identité</Text>
        <Text style={styles.description}>
          Nous te demandons une pièce d'identité uniquement pour vérifier ton
          profil. Tes données sont protégées, ne sont jamais partagées, et
          seront utilisées uniquement à des fins de vérification.
        </Text>
        {!(recto || verso) ? (
          <Image source={idCharacter} style={styles.image} />
        ) : (
          <View style={styles.uploadRow}>
            {[recto, verso].map((item, idx) => (
              <View key={idx} style={styles.uploadCol}>
                <View style={styles.uploadBox}>
                  <SvgIcon
                    name="cross"
                    width={32}
                    height={32}
                    strokeColor={item?.loaded ? colors.primary : colors.gray}
                  />
                </View>
                <View style={styles.uploadLabelRow}>
                  <SvgIcon
                    name="check"
                    width={24}
                    height={24}
                    fillColor={item?.loaded ? colors.primary : colors.gray}
                  />
                  <Text
                    style={[
                      styles.uploadLabel,
                      { color: item?.loaded ? colors.primary : colors.gray },
                    ]}
                  >
                    {item?.name || 'Aucun fichier'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
        <ButtonRectoVerso
          onPressRecto={handleUploadRecto}
          onPressVerso={handleUploadVerso}
        />
      </View>
      <Button
        title="Continuer"
        onPress={() => router.push('/Profile/profilUserInformation')}
        color={colors.primary}
        isFixedBottom={true}
        disabledColor={colors.grayLight}
        style={styles.nextButton}
        disabled={!isReady}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    margin: 24,
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
  description: {
    marginTop: 16,
    fontSize: 16,
    color: colors.text,
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  image: {
    marginTop: 24,
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginVertical: 24,
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 32,
    marginVertical: 24,
  },
  uploadCol: {
    alignItems: 'center',
    flex: 1,
  },
  uploadBox: {
    width: 100,
    height: 100,
    borderWidth: 1.5,
    borderColor: colors.gray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  uploadLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  uploadLabel: {
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '500',
  },
  nextButton: {
    marginBottom: 24,
  },
});