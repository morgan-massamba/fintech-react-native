import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

type Props = {
  label?: string;
};

const Divider = ({ label = "OR" }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text>{label}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  line: {
    flex: 1,
    backgroundColor: "black",
    height: 0.5,
  },
});
