import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    Alert.alert('Connexion réussie', 'Bienvenue !');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Connexion</ThemedText>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry onChangeText={setPassword} />
      <Button title="Se connecter" onPress={handleSignIn} />
      <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text style={styles.link}>Cliquez ici si vous êtes nouveau</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
  link: { color: 'blue', marginTop: 10, textAlign: 'center' },
});
