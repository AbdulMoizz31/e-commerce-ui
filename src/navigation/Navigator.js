import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const ActiveColor = "#000000"; //black
const inActiveColor = "#C0C0C0";

const MyNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: ActiveColor,
        tabBarInactiveTintColor: inActiveColor,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeScreen") {
            return <HomeIcon color={color} />;
          } else if (route.name === "SearchScreen") {
            return <MagnifyingGlassIcon color={color} />;
          } else if (route.name === "CartScreen") {
            return <ShoppingBagIcon color={color} />;
          } else if (route.name === "ProfileScreen") {
            return <UserCircleIcon color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyNavigation;
