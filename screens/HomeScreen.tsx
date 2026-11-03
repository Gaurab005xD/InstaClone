import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

const posts = [
  {
    id: "1",
    user: "gaurab_xd5",
    caption: "Finished building my Instagram Clone app for Expo 🚀",
  },
  {
    id: "2",
    user: "cbcnews",
    caption:
      "Albertans continue discussing the proposed Alberta referendum and its impact on provincial politics.",
  },
  {
    id: "3",
    user: "worldnews",
    caption:
      "Global markets react to tensions involving the United States and Iran.",
  },
  {
    id: "4",
    user: "energydaily",
    caption:
      "Oil prices rise as traders monitor global supply concerns and Russian exports.",
  },
  {
    id: "5",
    user: "ieltswithemma",
    caption:
      "Learn 5 powerful IELTS speaking phrases to improve your band score today.",
  },
  {
    id: "6",
    user: "englishcoach",
    caption:
      "Daily English Tip: Stop saying 'very good'. Use 'excellent', 'outstanding', or 'remarkable'.",
  },
  {
    id: "7",
    user: "saitconfession",
    caption:
      "Students preparing for final projects and presentations this week 📚",
  },
  {
    id: "8",
    user: "travel.nepal",
    caption:
      "Beautiful sunrise over the Himalayas today ⛰️🇳🇵",
  },
  {
    id: "9",
    user: "calgaryviews",
    caption:
      "Snowy morning across Calgary. Winter is here ❄️",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>
      </View>

      <View style={styles.storiesContainer}>
        <View style={styles.story}>
          <View style={styles.storyCircle} />
          <Text style={styles.storyText}>You</Text>
        </View>

        <View style={styles.story}>
          <View style={styles.storyCircle} />
          <Text style={styles.storyText}>Nepal</Text>
        </View>

        <View style={styles.story}>
          <View style={styles.storyCircle} />
          <Text style={styles.storyText}>CBC</Text>
        </View>

        <View style={styles.story}>
          <View style={styles.storyCircle} />
          <Text style={styles.storyText}>IELTS</Text>
        </View>

        <View style={styles.story}>
          <View style={styles.storyCircle} />
          <Text style={styles.storyText}>SAIT</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.header}>
              <View style={styles.avatar} />
              <Text style={styles.username}>{item.user}</Text>
            </View>

            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>POST IMAGE</Text>
            </View>

            <View style={styles.actions}>
              <Text style={styles.icon}>♡</Text>
              <Text style={styles.icon}>💬</Text>
              <Text style={styles.icon}>📤</Text>
            </View>

            <Text style={styles.likes}>
              Liked by user123 and 248 others
            </Text>

            <Text style={styles.caption}>
              <Text style={styles.username}>{item.user} </Text>
              {item.caption}
            </Text>

            <Text style={styles.time}>2 hours ago</Text>
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
  },

  topBar: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },

  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "300",
  },

  storiesContainer: {
    flexDirection: "row",
    padding: 12,
  },

  story: {
    alignItems: "center",
    marginRight: 15,
  },

  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#ff8501",
    backgroundColor: "#444",
  },

  storyText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
  },

  post: {
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#666",
  },

  username: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },

  imagePlaceholder: {
    height: 280,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    color: "#777",
    fontSize: 18,
  },

  actions: {
    flexDirection: "row",
    padding: 10,
  },

  icon: {
    fontSize: 24,
    marginRight: 15,
    color: "#fff",
  },

  likes: {
    color: "#fff",
    marginHorizontal: 10,
    fontWeight: "600",
  },

  caption: {
    color: "#fff",
    marginHorizontal: 10,
    marginTop: 5,
  },

  time: {
    color: "#888",
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 5,
  },
});