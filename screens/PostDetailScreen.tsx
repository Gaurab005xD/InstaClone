import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export default function PostDetailScreen({
  route,
}: any) {
  const { username, caption, image } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.username}>
        {username}
      </Text>

      <Image
        source={{ uri: image }}
        style={styles.postImage}
      />

      <Text style={styles.caption}>
        {caption}
      </Text>

      <Text style={styles.likes}>
        Liked by user123 and 248 others
      </Text>

      <Text style={styles.time}>
        Posted 2 hours ago
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },

  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },

  caption: {
    color: "#fff",
    fontSize: 16,
    marginTop: 15,
  },

  likes: {
    color: "#fff",
    marginTop: 10,
    fontWeight: "600",
  },

  time: {
    color: "#888",
    marginTop: 5,
    fontSize: 12,
  },
});