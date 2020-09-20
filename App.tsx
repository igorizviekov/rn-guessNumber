import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import { colors } from "./styles/variables";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";

export default function App() {
  const [userChoice, setUserChoice] = useState<null | number>(null);
  const userChoiceHandler = (number: number) => {
    setUserChoice(number);
  };
  const headerProps = {
    title: "Guess a number"
  };
  const startProps = {
    throwUp: userChoiceHandler
  };
  const GameScreenProps = {
    userNumber: userChoice
  };
  return (
    <View style={styles.container}>
      <Header {...headerProps} />
      {userChoice ? null : <StartGame {...startProps} />}
      {userChoice ? <GameScreen {...GameScreenProps} /> : null}
      <Button title="Start Over" onPress={() => setUserChoice(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  }
});
