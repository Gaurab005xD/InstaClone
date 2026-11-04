import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from "react-native";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(true);

  const postImages = [
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/750278341_2419143281941255_7352267172876574298_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx768x1024&ctp=s768x1024&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=669761&_nc_ohc=zmoDdl4lksgQ7kNvwGumUlb&_nc_oc=AdqSxsW0gHF1ZfL66Gh30y6Y-1Re737pLLepk-Qlj63NWrmii8SJH-TYYE4AkU3uea1KMxe3qmosr62s6ciZ0WWh&_nc_zt=23&_nc_ht=scontent.fyyc3-1.fna&_nc_gid=MIKYZfc6rjF-RRioXHYtOA&_nc_ss=7b2a8&oh=00_AQSbEYc9I46ydExO_-7igY9x6CGMFe2LneV0i92StKeQKg&oe=6AF0922E",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/751563543_2419143275274589_5601594604210107156_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx768x1024&ctp=s768x1024&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=669761&_nc_ohc=aDUTCABH_RgQ7kNvwF06V8o&_nc_oc=AdpnUrEmSPVQtwDZxFRUXk6JV9o00yD7kQoULDBmt2uajQmHEsJ3AYkwFafKcAY_LuxVPBGM-oZwITLVcJZyXr6S&_nc_zt=23&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=MIKYZfc6rjF-RRioXHYtOA&_nc_ss=7b2a8&oh=00_AQQVQIFZ21-a3uNnPagktnXS5mvvX74PtwB4V_fSPlitYg&oe=6AF0A102",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/482208267_1974429706412617_1866317877080035206_n.jpg?stp=ae6_dst-jpg_sh0.2_tt6&cstp=mx1080x1921&ctp=s1080x1921&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=bdeb5f&_nc_ohc=Wi8CoRo2_KkQ7kNvwE-856j&_nc_oc=AdomhyczRH2JOTxazXFNwIUA88HQ6Wd8yaOw4DnXGno6TidMFpDiFHUUDGOiEiy4XdVnlCzHQCeXvKJDNeT5FMVj&_nc_zt=23&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=NCF2YG5UndfE9MZ1PQp8jw&_nc_ss=7b2a8&oh=00_AQTUJ7lv0JVvGKxmV6uIQZN06yVLUtmlcLuP6mJgK3_O8A&oe=6AF0A41A",
    "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/752854826_2419139808608269_7370894252761191236_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx768x1024&ctp=s768x1024&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=669761&_nc_ohc=Vq5O9ozhLWcQ7kNvwEwPgPc&_nc_oc=AdqnB4OfnQ3AZ77OxSHBctn9AiYhHd3ZDg6u5ikzs6fLsiD0biiHGYrRxPSJLD1JP5AuVqj4KgEnX6d-ZHJVjXZo&_nc_zt=23&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=nUa-5lISpYI9PX9bVnN3_A&_nc_ss=7b2a8&oh=00_AQQWGA9RUahoQW_9rE79tluTX0mDWehLakoFpaNMKaloEw&oe=6AF0B4BF",
    "https://tse1.mm.bing.net/th/id/OIP.302zgzUHVpOuGmsmRZudiAHaHk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/",
  ];

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
            fontSize: 18,
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
        <Image
          source={{
            uri: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t39.30808-6/762834412_2432407780614805_8272838689548929394_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6vaDk-VqglAQ7kNvwEjh-RK&_nc_oc=AdpVHdFPNFaT2aNqAnH8qgfjd3vJhoKZ_-ihz4tOus-f26Ekwpy3-6sKzC4tNsyWkaS7DWwjvnWQx4yp5mOORBT8&_nc_zt=23&_nc_ht=scontent.fyyc2-1.fna&_nc_gid=YugAKVoMh_YA8NcFjfo8RA&_nc_ss=7b2a8&oh=00_AQSffxMkT5OvcThVDhBx-AvvT6iPxsxGAJ8zr-f-x46Vqg&oe=6AF0A812",
          }}
          style={styles.profilePic}
        />

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
          {
            color: darkMode ? "#fff" : "#000",
          },
        ]}
      >
        Gaurab Sapkota
      </Text>

      <Text
        style={[
          styles.bio,
          {
            color: darkMode ? "#fff" : "#000",
          },
        ]}
      >
        Positive 🇳🇵 | SAIT Student | React Native Developer
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: darkMode ? "#262626" : "#ddd",
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
              backgroundColor: darkMode ? "#262626" : "#ddd",
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
        {postImages.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.postBox}
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
  },

  stat: {
    alignItems: "center",
  },

  number: {
    fontSize: 22,
    fontWeight: "bold",
  },

  label: {
    fontSize: 14,
  },

  name: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: "600",
  },

  bio: {
    marginBottom: 15,
    marginTop: 5,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  button: {
    width: "48%",
    padding: 12,
    borderRadius: 8,
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
    borderRadius: 4,
    marginBottom: 8,
  },
});