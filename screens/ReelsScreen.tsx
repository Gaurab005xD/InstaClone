import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const reels = [
  {
    id: "1",
    title: "Hiking in Banff",
    views: "12.5K Views",
  },
  {
    id: "2",
    title: "Calgary Downtown Night",
    views: "8.3K Views",
  },
  {
    id: "3",
    title: "SAIT Campus Tour",
    views: "4.7K Views",
  },
  {
    id: "4",
    title: "Nepal Travel Memories",
    views: "15.2K Views",
  },
];

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reels</Text>

      <FlatList
        data={reels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reelCard}>
            <View style={styles.videoPlaceholder}>
              <Text style={styles.play}>▶</Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.views}>{item.views}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },

  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  reelCard: {
    marginBottom: 20,
  },

  videoPlaceholder: {
    height: 220,
    backgroundColor: "#333",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  play: {
    color: "#fff",
    fontSize: 40,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },

  views: {
    color: "#aaa",
    marginTop: 5,
  },
});