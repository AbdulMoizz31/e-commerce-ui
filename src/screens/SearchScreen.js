import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SearchBox from "../components/SearchBox";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <SearchBox />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
});
