import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";

const CartProduct = ({ image, brand, title, price, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <View style={styles.main}>
          <Image style={styles.image} resizeMethod="resize" source={image} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.submain}>
              <Text>{brand}</Text>
              <Text style={{ fontSize: 25 }}>
                {title.length > 10 ? `${title.substring(0, 10)}...` : title}
              </Text>
            </View>
            <Text style={{ fontSize: 30, marginLeft: 10 }}>${price}</Text>
          </View>
        </View>

        <Divider color="black" />
      </View>
    </Pressable>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingVertical: 35,
  },
  submain: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
