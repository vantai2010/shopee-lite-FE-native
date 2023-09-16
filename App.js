import React from "react";
import Mall from "./Screen/Mall/Mall";
import Identity from "./Screen/Identity/Identity";
import Information from "./Screen/Information/Information";
import Setting from "./Screen/Identity/Setting/Setting";
import Setprofile from "./Screen/Identity/Setprofile/Setprofile";
import Cart from "./Screen/Identity/Cart/Cart";
import Register from "./Screen/Identity/Register/Register"
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
        <Stack.Navigator initialRouteName={namePage.REGISTER}>
          <Stack.Screen name={namePage.HOME} component={Mall} />
          <Stack.Screen name={namePage.INFORMATION} component={Information} />
          <Stack.Screen name={namePage.IDENTITY} component={Identity} />
          <Stack.Screen name={namePage.SETTING} component={Setting} />
          <Stack.Screen name={namePage.SETPROFILE} component={Setprofile} />
          <Stack.Screen name={namePage.CART} component={Cart} />
          <Stack.Screen name={namePage.REGISTER} component={Register} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </>
  );
}
