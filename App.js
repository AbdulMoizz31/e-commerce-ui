import MyNavigation from "./src/navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/data/ProductsContext";
import AppNavigation from "./src/navigation/Navigator";
import MainTabNavigation from "./src/navigation/Navigator";

const App = () => {
  return (
    <NavigationContainer>
      <ProductProvider>
        <MainTabNavigation />
      </ProductProvider>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;
