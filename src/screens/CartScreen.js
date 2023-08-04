import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartProduct from "../components/CartProduct";
import { CartContext } from "../data/CartContext";

const CartScreen = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={{ fontSize: 30 }}>My Cart</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartProducts}
          renderItem={({ item }) => (
            <CartProduct
              title={item.title}
              image={item.image}
              brand={item.brand}
              price={item.price}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
