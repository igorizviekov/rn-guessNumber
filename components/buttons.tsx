import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface ButtonProps {
  firstTitle: string;
  secondTitle: string;
  firstAction: () => void;
  secondAction: () => void;
}

export default function buttons({
  firstTitle,
  secondTitle,
  firstAction,
  secondAction
}: ButtonProps) {
  return (
    <View style={styles.container}>
      <Button title={firstTitle} onPress={firstAction} />
      <Button title={secondTitle} onPress={secondAction} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  }
});
