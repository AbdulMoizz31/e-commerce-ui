import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";

const Heading = ({title}) => {
  return (
    <View style={styles.heading}>
      <Text style={{ fontSize: 30 }}>{title}</Text>
      <ArrowLongRightIcon color="black" size={30} />
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 370,
  },
});
