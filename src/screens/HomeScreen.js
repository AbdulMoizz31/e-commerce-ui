import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";
import Heading from "../components/Heading";
import { ProductsContext } from "../data/ProductsContext";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { products } = useContext(ProductsContext);
  
  const electronicsProducts = products.filter(
    (product) => product.category === "Electronics"
  );
  const clothingProducts = products.filter(
    (product) => product.category === "Clothing"
  );
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "column" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={styles.subMain}>
              <Image
                style={styles.image}
                source={require("../assets/logo.png")}
              />
              <SearchBox />
              {/* New Products */}
              <Heading title="New Products" />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={products}
                renderItem={({ item }) => (
                  <ProductCard
                  
                    title={item.title}
                    image={item.image}
                    brand={item.brand}
                    price={item.price}
                  />
                )}
              />
              {/* Clothing */}
              <Heading title="Clothing" />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={clothingProducts}
                renderItem={({ item }) => (
                  <ProductCard
                    title={item.title}
                    image={item.image}
                    brand={item.brand}
                    price={item.price}
                  />
                )}
              />
              {/* Electronics */}
              <Heading title="Electronics" />
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={electronicsProducts}
                renderItem={({ item }) => (
                  <ProductCard
                    title={item.title}
                    image={item.image}
                    brand={item.brand}
                    price={item.price}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  subMain: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
  },
});
