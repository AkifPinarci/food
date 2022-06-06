import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <MaterialCommunityIcons name="magnify" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={props.term}
        onChangeText={(newTerm) => {
          props.onTermChange(newTerm);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => {
          props.onTermSubmit();
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
  },
});

export default SearchBar;
