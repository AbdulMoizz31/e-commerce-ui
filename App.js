import MyNavigation from "./src/navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/data/ProductsContext";

const App = () => {
  return (
    <NavigationContainer>
      <ProductProvider>
        <MyNavigation />
      </ProductProvider>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;
