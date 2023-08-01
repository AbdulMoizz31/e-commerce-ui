import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyNavigation from "./src/navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <MyNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
