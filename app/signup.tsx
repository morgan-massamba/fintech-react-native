import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's get started!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
  },
});
