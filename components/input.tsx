import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions
} from "react-native";
import { colors } from "../styles/variables";

interface InputProps {
  label: string;
  val: string;
  setVal: (val: string) => void;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  max?: number;
}

export default function Input({
  label,
  placeholder,
  val,
  setVal,
  type,
  max
}: InputProps) {
  const inputHandler = (e: string) => {
    setVal(e);
  };

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={val}
        maxLength={max}
        keyboardType={type}
        placeholder={placeholder}
        onChangeText={inputHandler}
        autoFocus={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 5
  },
  input: {
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 5,
    marginVertical: 5
  }
});
