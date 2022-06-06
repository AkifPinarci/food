import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CardView = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageView}
        source={{ uri: props.result.image_url }}
      ></Image>
      <Text style={styles.header}>{props.result.name}</Text>
      <Text>
        {props.result.rating} Stars, {props.result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 18, fontWeight: "bold" },
  imageView: {
    width: 250,
    height: 200,
    borderRadius: 15,
  },
  container: { marginHorizontal: 10 },
});

export default CardView;
