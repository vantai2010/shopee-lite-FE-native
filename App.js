import React from "react";
import Mall from "./Screen/Mall/Mall";
import Identity from "./Screen/Identity/Identity";
import Information from "./Screen/Information/Information";
import Setting from "./Screen/Identity/Setting/Setting";
import Setprofile from "./Screen/Identity/Setprofile/Setprofile";
import Cart from "./Screen/Identity/Cart/Cart";
import Register from "./Screen/Identity/Register/Register";
import Footer from "./Components/Footer/Footer";
import Chat from "./Screen/Chat/Chat";
import Mess from "./Screen/Chat/Mess";
import Login from "./Screen/Authenticate/Login";
import ForgotPassword from "./Screen/Authenticate/Forgot/ForgotPassword";
import Verification from "./Screen/Authenticate/Forgot/Verification";
import ResetPassword from "./Screen/Authenticate/Forgot/ResetPassword";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import namePage from "./utils/constant/namePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName={namePage.HOME}>
          <Stack.Screen options={{ headerShown: false }} name={namePage.HOME} component={Mall} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.INFORMATION} component={Information} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.IDENTITY} component={Identity} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.SETTING} component={Setting} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.SETPROFILE} component={Setprofile} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.CART} component={Cart} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.REGISTER} component={Register} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.CHAT} component={Chat} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.MESS} component={Mess} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.LOGIN} component={Login} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.FORGOT} component={ForgotPassword} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.VERIFICATION} component={Verification} />
          <Stack.Screen options={{ headerShown: false }} name={namePage.RESET} component={ResetPassword} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </>
  );
}
