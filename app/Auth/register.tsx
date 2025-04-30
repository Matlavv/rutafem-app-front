import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone_number: '',
    profile_image_url: 'https://randomuser.me/api/portraits/women/1.jpg',
    username: '',
    experience: '',
    biography: '',
    favorite_music: '',
    birth_date: '',
  });

  const { register } = useAuth();

  const handleRegister = async () => {
    if (Object.values(formData).some((value) => !value)) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    const success = await register(formData);
    if (success) {
      router.replace('/(tabs)/profile');
    } else {
      Alert.alert('Erreur', "Une erreur est survenue lors de l'inscription");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={formData.firstname}
          onChangeText={(text) => setFormData({ ...formData, firstname: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={formData.lastname}
          onChangeText={(text) => setFormData({ ...formData, lastname: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Numéro de téléphone"
          value={formData.phone_number}
          onChangeText={(text) =>
            setFormData({ ...formData, phone_number: text })
          }
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Expérience de conduite"
          value={formData.experience}
          onChangeText={(text) =>
            setFormData({ ...formData, experience: text })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Biographie"
          value={formData.biography}
          onChangeText={(text) => setFormData({ ...formData, biography: text })}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Musique préférée"
          value={formData.favorite_music}
          onChangeText={(text) =>
            setFormData({ ...formData, favorite_music: text })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Date de naissance (YYYY-MM-DD)"
          value={formData.birth_date}
          onChangeText={(text) =>
            setFormData({ ...formData, birth_date: text })
          }
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => router.push('./login')}
        >
          <Text style={styles.linkText}>Déjà un compte ? Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: colors.text,
  },
  form: {
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: colors.primary,
    fontSize: 14,
  },
});
