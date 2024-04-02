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
import { Link } from "expo-router";

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const signup = () => {
    console.log("sign up fonction");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Let's get started!</Text>

        <Text style={styles.subtitle}>
          Enter your phone number. We will send you a confirmation code here
        </Text>

        <View style={styles.phoneNumberContainer}>
          <TextInput
            style={styles.phoneNumberIndicator}
            value="+33"
          ></TextInput>
          <TextInput
            style={styles.phoneNumberInput}
            value={phoneNumber}
            autoFocus
            placeholder="Mobile Number"
            keyboardType="number-pad"
            onChangeText={setPhoneNumber}
          />
        </View>

        <Link style={styles.link} href="/login">
          Already have an account? Log in
        </Link>

        <TouchableOpacity
          style={[styles.button, phoneNumber === "" && { opacity: 0.4 }]}
          disabled={phoneNumber === ""}
          onPress={signup}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
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
  link: {
    marginTop: 40,
    color: "blue",
    fontSize: 20,
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
