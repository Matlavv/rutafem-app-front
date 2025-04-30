import colors from '@/styles/colors';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen() {
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.replace('/Auth/login');
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleVerification = (type: 'driver' | 'passenger') => {
    router.push(`/profile/verify/${type}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profile_image_url }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>
          {user.firstname} {user.lastname}
        </Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos</Text>
        <Text style={styles.bio}>{user.biography}</Text>
        <Text style={styles.info}>Expérience: {user.experience}</Text>
        <Text style={styles.info}>Musique préférée: {user.favorite_music}</Text>
      </View>

      {!user.verified && (
        <View style={styles.verificationSection}>
          <Text style={styles.verificationTitle}>Vérification du compte</Text>
          <Text style={styles.verificationText}>
            Pour une meilleure expérience, vérifiez votre compte en tant que
            conductrice ou passagère.
          </Text>

          <View style={styles.verificationButtons}>
            <TouchableOpacity
              style={styles.verificationButton}
              onPress={() => handleVerification('driver')}
            >
              <Text style={styles.verificationButtonText}>
                Vérifier en tant que conductrice
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.verificationButton}
              onPress={() => handleVerification('passenger')}
            >
              <Text style={styles.verificationButtonText}>
                Vérifier en tant que passagère
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  username: {
    fontSize: 16,
    color: colors.gray,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 5,
  },
  verificationSection: {
    padding: 20,
    backgroundColor: colors.grayLight,
    margin: 20,
    borderRadius: 10,
  },
  verificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  verificationText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 15,
  },
  verificationButtons: {
    gap: 10,
  },
  verificationButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  verificationButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: colors.grayLight,
    padding: 15,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
