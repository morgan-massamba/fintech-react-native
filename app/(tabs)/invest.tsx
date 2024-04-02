import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

// Face ID
import * as LocalAuthentication from "expo-local-authentication";

export default function Page() {
  useEffect(() => {
    const requestFaceId = async () => {
      try {
        const { success } = await LocalAuthentication.authenticateAsync();
        if (success) {
          console.log("access OK");
        } else {
          console.log("access refused");
        }
      } catch (error) {
        console.log(error);
      }
    };
    requestFaceId();
  }, []);

  return (
    <View>
      <Text>Invest Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
