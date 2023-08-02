// ProductDetailsScreen.js
import React from "react";
import { View, Text, Image } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { title, image, brand, description, price } = route.params.product;

  return (
    <View>
      <Image source={image} style={{ width: 200, height: 200 }} />
      <Text>{title}</Text>
      <Text>{brand}</Text>
      <Text>{description}</Text>
      <Text>Price: ${price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
