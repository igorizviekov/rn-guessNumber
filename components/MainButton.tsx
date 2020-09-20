import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/variables";
interface Props {
  buttonText: string;
}

export default function MainButton({ buttonText }: Props) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  buttonText: {
    color: "white"
  }
});
