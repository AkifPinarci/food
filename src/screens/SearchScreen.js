import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SearchScreen = (props) => {
  return (
    <View>
      <Text>This is search screen</Text>
      <Button
        title="Search"
        onPress={() => {
          props.navigation.navigate("Check");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
