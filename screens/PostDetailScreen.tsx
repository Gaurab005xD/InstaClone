import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PostDetailScreen({ route }: any) {
  const { user, caption } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.user}>{user}</Text>

      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Post Image</Text>
      </View>

      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },

  user: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  imagePlaceholder: {
    height: 300,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  imageText: {
    color: "#aaa",
    fontSize: 18,
  },

  caption: {
    color: "#fff",
    marginTop: 20,
    fontSize: 16,
  },
});