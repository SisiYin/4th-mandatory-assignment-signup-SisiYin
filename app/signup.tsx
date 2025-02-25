import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function SignupView() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backArrow}>← </Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>
  
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="FULL NAME" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="EMAIL" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="PASSWORD" secureTextEntry />
      </View>   

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="COMFIRM PASSWORD" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={() => console.log('Signup clicked')}>
        <Text style={styles.signupButtonText}>SIGN UP →</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./login')}>
      <View style={styles.row}>
        <Text style={styles.link}>Already have an account? </Text>
        <Text style={styles.signinlink}>Sign in</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 },
  backArrow: { 
    fontSize: 20, 
    color: 'gray', 
    fontWeight: 'bold', 
    marginBottom: 10, },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 },
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
  link: { 
    color: 'gray', 
    marginTop: 10, 
    textAlign: 'center' },
  signinlink: { 
    color: 'orange', 
    marginTop: 10, 
    textAlign: 'center' },
  row: {
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  signupButton: {
    backgroundColor: 'orange',  
    paddingVertical: 12,       
    paddingHorizontal: 20,   
    borderRadius: 30,           
    alignItems: 'center',       
    marginTop: 10,
  },
  signupButtonText: {
    color: 'white',             
    fontSize: 18,               
    fontWeight: 'bold',
  },
});
