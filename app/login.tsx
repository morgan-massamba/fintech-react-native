import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import LoginButton from "@/components/LoginButton";
import Divider from "@/components/Divider";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const login = () => {
    router.push("/(tabs)");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome back</Text>

        <Text style={styles.subtitle}>
          Enter your phone number associated with your account.
        </Text>

        <View style={styles.phoneNumberContainer}>
          <TextInput
            style={styles.phoneNumberIndicator}
            value="+33"
          ></TextInput>
          <TextInput
            style={styles.phoneNumberInput}
            value={phoneNumber}
            placeholder="Mobile Number"
            keyboardType="number-pad"
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, phoneNumber === "" && { opacity: 0.4 }]}
          disabled={phoneNumber === ""}
          onPress={login}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>

        <Divider />

        <LoginButton icon="mail" label="Continue with email"></LoginButton>

        <LoginButton
          icon="logo-google"
          label="Continue with Google"
        ></LoginButton>

        <LoginButton
          icon="logo-apple"
          label="Continue with Apple"
        ></LoginButton>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 22,
    marginTop: 20,
    color: "grey",
  },
  button: {
    padding: 15,
    marginTop: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    backgroundColor: "blue",
  },
  phoneNumberContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },
  phoneNumberIndicator: {
    padding: 15,
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
    fontSize: 22,
  },
  phoneNumberInput: {
    padding: 15,
    backgroundColor: "#F2F2F2",
    flex: 1,
    borderRadius: 15,
    fontSize: 22,
    paddingHorizontal: 20,
  },
});
