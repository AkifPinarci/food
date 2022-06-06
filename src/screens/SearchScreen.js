import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import BusinessesList from "../components/BusinessesList";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    return businesses.filter((business) => {
      return business.price === price;
    });
  };

  return (
    <View style={styles.screenBackground}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessesList
          title="Cost Effective"
          businesses={filterResultsByPrice("$")}
        />
        <BusinessesList
          title="Bit Pricier"
          businesses={filterResultsByPrice("$$")}
        />
        <BusinessesList
          title="Big Spender"
          businesses={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
