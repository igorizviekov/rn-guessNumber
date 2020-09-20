import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/variables";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}></View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 35,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTop: {
    width: "100%",
    position: "absolute",
    top: 0,
    height: 30,
    backgroundColor: colors.dark
  },
  title: {
    color: colors.light,
    fontSize: 18,
    fontWeight: "bold"
  }
});
