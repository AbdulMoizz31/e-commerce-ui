import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@rneui/themed";
import { Button } from "@rneui/base";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductsContext } from "../data/ProductsContext";
import { CartContext } from "../data/CartContext";

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const navigation = useNavigation();
  const { products } = useContext(ProductsContext);
  const { cartProducts, addToCart } = useContext(CartContext);

  const selectedProduct = products.find((product) => product.id == productId);
  const isProductInCart = cartProducts.some(
    (product) => product.id === selectedProduct.id
  );

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white" }}>
        <ImageBackground
          resizeMethod="resize"
          style={styles.image}
          source={selectedProduct.image}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color="black" style={{ margin: 10 }} />
          </Pressable>
        </ImageBackground>
        <View style={styles.main}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                width: Dimensions.get("window").width * 0.5,
              }}
            >
              <Text style={{ fontSize: 25, color: "rgba(0, 0, 0, 0.5)" }}>
                {selectedProduct.brand}
              </Text>
              <Text style={{ fontSize: 35, marginBottom: 10 }}>
                {selectedProduct.title}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 30 }}>${selectedProduct.price}</Text>
              <Button
                disabled={isProductInCart}
                onPress={() => {
                  addToCart(selectedProduct);
                }}
                color="black"
                buttonStyle={{
                  borderRadius: 15,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                {isProductInCart ? "Product in Cart" : "Add to Cart"}
              </Button>
            </View>
          </View>

          <Divider />
          <Text
            style={{
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.5)",
              marginVertical: 10,
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 20 }}>{selectedProduct.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
  },
  image: {
    width: 420,
    height: 400,
  },
});
