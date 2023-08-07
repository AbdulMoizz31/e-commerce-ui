import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartProduct from "../components/CartProduct";
import { CartContext } from "../data/CartContext";
import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/themed";

const CartScreen = () => {
  const { cartProducts, removeFromCart } = useContext(CartContext);
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <Text style={{ fontSize: 30, marginHorizontal: 25, marginTop: 25 }}>
          My Cart
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartProducts}
          renderItem={({ item }) => (
            <View>
              <CartProduct
                title={item.title}
                image={item.image}
                brand={item.brand}
                price={item.price}
              />
              <Button
                onPress={() => removeFromCart(item.id)}
                title="Remove"
                color="red"
              />
            </View>
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
