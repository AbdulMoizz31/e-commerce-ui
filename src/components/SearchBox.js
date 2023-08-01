import { StyleSheet, Text, View, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import React from "react";
import { useState } from "react";

const SearchBox = () => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.row}>
      <View style={styles.inputContainer}>
        <MagnifyingGlassIcon color="rgba(0, 0, 0, 0.2)" />
        <TextInput style={styles.inputArea} placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    width: 380,
  },
  inputArea: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
  },
});
