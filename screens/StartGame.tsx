import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardTypeOptions,
  Keyboard,
  Alert,
  Button
} from "react-native";
import Input from "../components/input";
import Buttons from "../components/buttons";

interface Props {
  throwUp: (number: number) => void;
}
export default function StartGame({ throwUp }: Props) {
  const [num, setNum] = useState("");
  const [selectedNum, setSelectedNum] = useState<null | number>(null);
  const acceptHandler = () => {
    let number = parseInt(num);
    if (isNaN(number) || number <= 0 || number > 99)
      return Alert.alert("Invalid number", "Please choose a valid number", [
        { text: "Okay", onPress: resetHandler }
      ]);
    setNum("");
    setSelectedNum(number);
    throwUp(number);
    Keyboard.dismiss();
  };
  const resetHandler = () => {
    setNum("");
    setSelectedNum(null);
  };
  const inputProps = {
    val: num,
    setVal: setNum,
    label: "Select a number",
    type: "numeric" as KeyboardTypeOptions,
    max: 2
  };

  const buttonProps = {
    firstTitle: "Accept",
    secondTitle: "Reset",
    firstAction: acceptHandler,
    secondAction: resetHandler
  };

  let confirmedNumber;
  if (selectedNum) {
    confirmedNumber = (
      <View>
        <Text>Selected number is: {selectedNum}</Text>
        <Button title="START GAME" onPress={() => {}} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <View style={styles.inputContainer}>
          <Input {...inputProps} />
          <Buttons {...buttonProps} />
        </View>
        {confirmedNumber}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  inputContainer: {
    width: "100%"
  },
  title: {
    fontSize: 18
  }
});
