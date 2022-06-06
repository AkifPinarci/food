import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import CardView from "./CardView";

const BusinessesList = (props) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.businesses}
        keyExtractor={(businesses) => {
          props.businesses.id;
        }}
        renderItem={({ item }) => {
          return <CardView result={item} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
  },
});

export default BusinessesList;
