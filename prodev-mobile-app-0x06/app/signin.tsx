// app/signin.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/_join.ts';
import { GOOGLELOGO, FACEBOOKLOGO } from '../constants';

export default function Signin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Text></Text>
        <Text style={{ fontWeight: '600', fontSize: 18 }}>Sign In</Text>
        <Text></Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back!</Text>
        <Text style={styles.subText}>Login to your account</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput placeholder="Enter your email" style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            style={styles.passwordControl}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/join')}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
