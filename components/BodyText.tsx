import React from "react";
import { StyleSheet, Text } from "react-native";

export default function BodyText(props: any) {
  return <Text style={styles.body}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans"
  }
});
