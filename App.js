import React from "react";
import Mall from "./Screen/Mall/Mall";
import Header from "./Components/Header/Header";
import { ScrollView } from "react-native";
import Identity from "./Screen/Identity/Identity";
import Information from "./Screen/Information/Information";
import Footer from "./Components/Footer/Footer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import namePage from "./ultil/constant/namePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName={namePage.HOME}>
          <Stack.Screen name={namePage.HOME} component={Mall} />
          <Stack.Screen name={namePage.INFORMATION} component={Information} />
          <Stack.Screen name={namePage.IDENTITY} component={Identity} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </>
  );
}
