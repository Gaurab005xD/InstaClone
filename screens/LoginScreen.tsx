import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({
  navigation,
}: any) {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Instagram
      </Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#888"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.replace("MainTabs")
        }
      >
        <Text style={styles.buttonText}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    color: "#fff",
    fontSize: 42,
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#0095f6",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
``