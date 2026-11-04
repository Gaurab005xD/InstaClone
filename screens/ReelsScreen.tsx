import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

const reels = [
  {
    id: "1",
    title: "Banff Adventure",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.KVO6d3hOJN5HKUiQH7ZR1gHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "2",
    title: "Calgary Downtown",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
  },
  {
    id: "3",
    title: "Study Motivation",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.GyPI4cSgp9_op9Vds98_QQHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <Text style={styles.title}>
              ▶ {item.title}
            </Text>
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

  card: {
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
});