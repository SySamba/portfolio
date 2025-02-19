import { useState } from 'react';
import { TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { router } from 'expo-router';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSignIn = () => {
    Alert.alert('Connexion réussie', 'Bienvenue !');
  };

  const handleResetPassword = () => {
    Alert.alert('Réinitialisation envoyée', `Un lien de réinitialisation a été envoyé à ${email}`);
    setForgotPassword(false);
  };

  return (
    <ThemedView style={styles.container}>
      {forgotPassword ? (
        <>
          <ThemedText type="title">Réinitialisation du mot de passe</ThemedText>
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            keyboardType="email-address" 
            onChangeText={setEmail} 
          />
          <Button title="Envoyer" onPress={handleResetPassword} />
          <TouchableOpacity onPress={() => setForgotPassword(false)}>
            <Text style={styles.link}>Retour à la connexion</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <ThemedText type="title">Connexion</ThemedText>
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            keyboardType="email-address" 
            onChangeText={setEmail} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Mot de passe" 
            secureTextEntry 
            onChangeText={setPassword} 
          />
          <Button title="Se connecter" onPress={handleSignIn} />
          <TouchableOpacity onPress={() => setForgotPassword(true)}>
            <Text style={styles.link}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text style={styles.link}>Cliquez ici si vous êtes nouveau</Text>
          </TouchableOpacity>
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    gap: 12, 
    backgroundColor: 'white' // Fond blanc ajouté ici
  },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    marginBottom: 10 
  },
  link: { 
    color: 'blue', 
    marginTop: 10, 
    textAlign: 'center' 
  },
});
