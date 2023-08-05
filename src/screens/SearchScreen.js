import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import SearchBox from "../components/SearchBox";
import { StatusBar } from "expo-status-bar";
import { ProductsContext } from "../data/ProductsContext";
import CartProduct from "../components/CartProduct";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  const { products } = useContext(ProductsContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <SearchBox value={searchQuery} onChangeText={setSearchQuery} />
        {searchQuery === "" ? (
          <Text>Search to show products</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredProducts}
            renderItem={({ item }) => (
              <CartProduct
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    productId: item.id,
                  })
                }
                title={item.title}
                image={item.image}
                brand={item.brand}
                price={item.price}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "white",
  },
});
