import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginView() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Please sign in to continue.</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="EMAIL" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="PASSWORD" secureTextEntry />
        <TouchableOpacity onPress={() => router.push('./signup')}>
          <Text style={styles.forgotText}>FORGOT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signinButton} onPress={() => console.log('Signup clicked')}>
        <Text style={styles.signinButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./signup')}>
        <View style={styles.row}>
          <Text style={styles.link}>Don't have an account? </Text>
          <Text style={styles.signupLink}>Sign up</Text>
        </View> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subTitle: { fontSize: 20, fontWeight: 'bold', color:'gray', marginBottom: 20 },
  link: { 
    color: 'gray', 
    marginTop: 10, 
    textAlign: 'center' },
  signupLink: { 
    color: 'orange', 
    marginTop: 10, 
    textAlign: 'center' },
  row: {
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  icon: { marginRight: 10 },
  input: { color: 'gray',flex: 1, height: 50 },
  signinButton: {
    backgroundColor: 'orange',  
    paddingVertical: 12,       
    paddingHorizontal: 20,   
    borderRadius: 30,           
    alignItems: 'center',       
    marginTop: 10,
  },
  signinButtonText: {
    color: 'white',             
    fontSize: 18,               
    fontWeight: 'bold',
  },
  forgotText: {
    color: 'orange',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});
