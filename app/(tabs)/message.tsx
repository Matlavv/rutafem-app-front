import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Message</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
});
