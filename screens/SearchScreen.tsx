import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const images = [
  "https://picsum.photos/500?1",
  "https://picsum.photos/500?2",
  "https://picsum.photos/500?3",
  "https://picsum.photos/500?4",
  "https://picsum.photos/500?5",
  "https://picsum.photos/500?6",
  "https://picsum.photos/500?7",
  "https://picsum.photos/500?8",
  "https://picsum.photos/500?9",
  "https://picsum.photos/500?10",
  "https://picsum.photos/500?11",
  "https://picsum.photos/500?12",
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search with Meta AI"
        placeholderTextColor="#999"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryRow}
      >
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>For You</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Speech & Accent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Travel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>News</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.grid}>
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 60,
  },

  searchBar: {
    marginHorizontal: 15,
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 18,
    padding: 12,
    fontSize: 18,
    marginBottom: 15,
  },

  categoryRow: {
    marginBottom: 15,
    paddingLeft: 10,
  },

  category: {
    backgroundColor: "#222",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },

  categoryText: {
    color: "#fff",
    fontSize: 14,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  image: {
    width: "33%",
    height: 160,
    marginBottom: 2,
  },
});