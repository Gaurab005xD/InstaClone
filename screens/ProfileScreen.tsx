import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";

export default function ProfileScreen({
  darkMode,
  setDarkMode,
}: any) {

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#000" : "#fff",
        },
      ]}
    >
      <Text
        style={[
          styles.username,
          {
            color: darkMode ? "#fff" : "#000",
          },
        ]}
      >
        gaurab_xd5
      </Text>

      <View style={styles.themeRow}>
        <Text
          style={{
            color: darkMode ? "#fff" : "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Dark Mode
        </Text>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.profilePic} />

        <View style={styles.stat}>
          <Text
            style={[
              styles.number,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            5
          </Text>
          <Text
            style={[
              styles.label,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            Posts
          </Text>
        </View>

        <View style={styles.stat}>
          <Text
            style={[
              styles.number,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            296
          </Text>
          <Text
            style={[
              styles.label,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            Followers
          </Text>
        </View>

        <View style={styles.stat}>
          <Text
            style={[
              styles.number,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            116
          </Text>
          <Text
            style={[
              styles.label,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            Following
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.name,
          { color: darkMode ? "#fff" : "#000" },
        ]}
      >
        Gaurab Sapkota
      </Text>

      <Text
        style={[
          styles.bio,
          { color: darkMode ? "#fff" : "#000" },
        ]}
      >
        Positive 🇳🇵 | SAIT Student
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: darkMode
                ? "#262626"
                : "#dddddd",
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: darkMode ? "#fff" : "#000",
              },
            ]}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: darkMode
                ? "#262626"
                : "#dddddd",
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: darkMode ? "#fff" : "#000",
              },
            ]}
          >
            Share Profile
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.postsContainer}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View
            key={item}
            style={[
              styles.postBox,
              {
                backgroundColor: darkMode
                  ? "#333"
                  : "#bbbbbb",
              },
            ]}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  username: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  themeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#777",
  },

  stat: {
    alignItems: "center",
  },

  number: {
    fontSize: 22,
    fontWeight: "bold",
  },

  label: {},

  name: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: "600",
  },

  bio: {
    marginBottom: 15,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    padding: 12,
    borderRadius: 8,
    width: "48%",
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },

  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  postBox: {
    width: "32%",
    height: 110,
    marginBottom: 8,
  },
});