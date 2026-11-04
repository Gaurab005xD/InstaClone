import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const posts = [
  {
    id: "1",
    user: "mountain_Track",
    caption: "Beautiful sunrise over the Himalayas today",
    image:
      "https://www.mountainphotography.com/images/xl/20141119-Machhapuchhre-On-Fire.jpg",
  },
  {
    id: "2",
    user: "cbcnews",
    caption:
      "Albertans continue discussing the proposed Alberta referendum.",
    image:
      "https://th.bing.com/th?id=OIF.3TRWbvjF%2bq6Rx4KIROJpFQ&r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "3",
    user: "worldnews",
    caption:
      "Global markets react to tensions involving the United States and Iran.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  },
  {
    id: "4",
    user: "ieltswithemma",
    caption:
      "Learn 5 powerful IELTS speaking phrases today.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.0oCnZGKh7R2WWumIFXfXxQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "5",
    user: "air.nepal",
    caption:
      "Boeing 747 Last landing, Spotted Calgary ⛰️🇳🇵",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.8LP36rWzcM3dP_iNtSq3egHaEm?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>

        <TouchableOpacity
          onPress={() => alert("Create New Post")}
        >
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
       <View style={styles.story}>
  <Image
    source={{
      uri: "https://picsum.photos/100?random=1",
    }}
    style={styles.storyCircle}
  />
  <Text style={styles.storyText}>You</Text>
</View>

<View style={styles.story}>
  <Image
    source={{
      uri: "https://picsum.photos/100?random=2",
    }}
    style={styles.storyCircle}
  />
  <Text style={styles.storyText}>yycnews</Text>
</View>

<View style={styles.story}>
  <Image
    source={{
      uri: "https://picsum.photos/100?random=3",
    }}
    style={styles.storyCircle}
  />
  <Text style={styles.storyText}>CBC</Text>
</View>

<View style={styles.story}>
  <Image
    source={{
      uri: "https://picsum.photos/100?random=4",
    }}
    style={styles.storyCircle}
  />
  <Text style={styles.storyText}>allenglish</Text>
</View>

<View style={styles.story}>
  <Image
    source={{
      uri: "https://picsum.photos/100?random=5",
    }}
    style={styles.storyCircle}
  />
  <Text style={styles.storyText}>college</Text>
</View>
      </ScrollView>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PostDetail", {
                username: item.user,
                caption: item.caption,
                image: item.image,
              })
            }
          >
            <View style={styles.post}>
              <View style={styles.header}>
                <View style={styles.avatar} />
                <Text style={styles.username}>
                  {item.user}
                </Text>
              </View>

              <Image
                source={{ uri: item.image }}
                style={styles.postImage}
              />

              <View style={styles.actions}>
                <Text style={styles.icon}>♡</Text>
                <Text style={styles.icon}>💬</Text>
                <Text style={styles.icon}>📤</Text>
              </View>

              <Text style={styles.likes}>
                Liked by user123 and 248 others
              </Text>

              <Text style={styles.caption}>
                <Text style={styles.username}>
                  {item.user}{" "}
                </Text>
                {item.caption}
              </Text>

              <Text style={styles.time}>
                2 hours ago
              </Text>
            </View>
          </TouchableOpacity>
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
    paddingTop: 65,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },

  logo: {
    color: "#fff",
    fontSize: 38,
    fontStyle: "italic",
    letterSpacing: 1,
  },

  addIcon: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  storiesContainer: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 23,
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
    borderColor: "#27e540",
    backgroundColor: "#484848",
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

  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
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