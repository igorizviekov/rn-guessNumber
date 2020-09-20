import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import Buttons from "../components/buttons";

interface Props {
  userNumber: number | null;
}
const generateRandomNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const num = Math.floor(Math.random() * (max - min)) + min;

  return num;
};
export default function GameScreen({ userNumber }: Props) {
  const [lowerLimit, setLowerLimit] = useState(0);
  const [higherLimit, setHigherLimit] = useState(99);
  const [win, setWin] = useState(false);
  const [computerNumber, setComputerNumber] = useState(
    generateRandomNumber(1, 99)
  );
  useEffect(() => {
    if (computerNumber === userNumber) {
      setWin(true);
    }
  });
  const higherHandler = (): void => {
    if (userNumber && userNumber < computerNumber) {
      return Alert.alert("Don't cheat", "I know you're cheating", [
        { text: "Okay =(" }
      ]);
    }
    if (!userNumber) {
      setHigherLimit(99);
      setLowerLimit(0);
    }
    const newGuess = generateRandomNumber(userNumber!, 99);
    if (newGuess > lowerLimit && newGuess < higherLimit) {
      setComputerNumber(newGuess);
      setLowerLimit(computerNumber);
    } else {
      return higherHandler();
    }
  };
  const lowerHandler = (): void => {
    if (userNumber && userNumber > computerNumber) {
      return Alert.alert("Don't cheat", "I know you're cheating", [
        { text: "Okay =(" }
      ]);
    }
    if (!userNumber) {
      setHigherLimit(99);
      setLowerLimit(0);
    }

    const newGuess = generateRandomNumber(1, userNumber!);

    if (newGuess > lowerLimit && newGuess < higherLimit) {
      setComputerNumber(newGuess);
      setHigherLimit(computerNumber);
    } else {
      return lowerHandler();
    }
  };

  const buttonsProps = {
    firstTitle: "Greater",
    secondTitle: "Lower",
    firstAction: higherHandler,
    secondAction: lowerHandler
  };

  const winMessage = <Text style={styles.title}>You won!</Text>;
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Computer's guess: {computerNumber}</Text>
      <Buttons {...buttonsProps} />
      {/* <Image source={require("../assets/favicon.png")} /> */}
      <Image
        style={styles.image}
        fadeDuration={1000}
        source={{
          uri: "https://img.icons8.com/material/4ac144/256/user-male.png"
        }}
      />

      {win ? winMessage : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 18
  },
  image: {
    width: "10%",
    height: "10%"
  }
});
