import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/data/ProductsContext";
import { CartProvider } from "./src/data/CartContext";
import MainTabNavigation from "./src/navigation/Navigator";

const App = () => {
  return (
    <NavigationContainer>
      <ProductProvider>
        <CartProvider>
          <MainTabNavigation />
        </CartProvider>
      </ProductProvider>
    </NavigationContainer>
  );
};

export default App;
