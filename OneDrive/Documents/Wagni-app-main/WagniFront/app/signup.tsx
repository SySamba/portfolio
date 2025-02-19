import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styles from './styles';


export default function SignUpScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '', lastName: '', address: '', phone: '', email: '', password: ''
  });

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSignUp = () => {
    Alert.alert('Inscription réussie', `Bienvenue, ${form.firstName} !`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Inscription</ThemedText>
      <TextInput style={styles.input} placeholder="Prénom" onChangeText={(text) => handleChange('firstName', text)} />
      <TextInput style={styles.input} placeholder="Nom" onChangeText={(text) => handleChange('lastName', text)} />
      <TextInput style={styles.input} placeholder="Adresse" onChangeText={(text) => handleChange('address', text)} />
      <TextInput style={styles.input} placeholder="Téléphone" keyboardType="phone-pad" onChangeText={(text) => handleChange('phone', text)} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => handleChange('email', text)} />
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry onChangeText={(text) => handleChange('password', text)} />
      <Button title="S'inscrire" onPress={handleSignUp} />
      <TouchableOpacity onPress={() => router.push('/signin')}>
        <Text style={styles.link}>Cliquez ici si vous avez déjà un compte</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}
