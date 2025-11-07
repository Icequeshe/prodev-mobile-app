// app/index.tsx
import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_mainstyle";

// ✅ Use relative imports (no @ alias needed)
import BACKGROUNDIMAGE from "../assets/images/hero-icon.png";
import HEROLOGO from "../assets/images/Logo.png";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Find what you need with us today</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
