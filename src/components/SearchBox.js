import { StyleSheet, Text, View, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import React from "react";

const SearchBox = ({ value, onChangeText, onpress }) => {
  return (
    <View style={styles.row}>
      <View style={styles.inputContainer}>
        <MagnifyingGlassIcon color="rgba(0, 0, 0, 0.2)" />
        <TextInput
          onPressIn={onpress}
          style={styles.inputArea}
          placeholder="Search Products"
          value={value}
          onChangeText={onChangeText}
        />
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
    marginBottom: 20,
  },
  inputArea: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
  },
});
