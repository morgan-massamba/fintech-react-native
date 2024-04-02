import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useAssets } from "expo-asset";
import { Link, Redirect } from "expo-router";
import { useState } from "react";

export default function Page() {
  const [assets] = useAssets(require("@/assets/videos/intro.mp4"));

  const [authenticated, setAuthenticaed] = useState(true);

  if (authenticated) {
    return <Redirect href="/(tabs)"></Redirect>;
  }

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          style={styles.video}
          source={{ uri: assets[0].uri }}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          isMuted
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.heading}>Ready to change the way you invest ?</Text>
      </View>
      <View style={styles.actions}>
        <Link style={styles.buttons} href="/login" asChild>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
              Log In
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          style={[styles.buttons, { backgroundColor: "white" }]}
          href="/signup"
          asChild
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontSize: 36,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  buttons: {
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    backgroundColor: "black",
    marginBottom: 40,
  },
});
