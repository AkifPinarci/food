import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Check = (props) => {
  return (
    <View>
      <Text>This is check sceen.</Text>
      <Button
        title="Search"
        onPress={() => {
          props.navigation.navigate("Search");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Check;
