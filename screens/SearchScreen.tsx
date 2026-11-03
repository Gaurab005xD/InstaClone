import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";

const places = [
  "Calgary",
  "Banff",
  "SAIT",
  "Nepal",
  "React Native",
  "Expo Go",
  "Instagram",
  "Travel",
  "Hiking",
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const filteredData = places.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.boxText}>{item}</Text>
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
    padding: 10,
  },

  searchBar: {
    backgroundColor: "#262626",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  box: {
    width: 110,
    height: 110,
    backgroundColor: "#333",
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  boxText: {
    color: "#fff",
    textAlign: "center",
  },
});