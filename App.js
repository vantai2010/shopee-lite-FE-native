import React from "react";
import Mall from "./Screen/Mall/Mall";
import Identity from "./Screen/Identity/Identity";
import Information from "./Screen/Information/Information";
import Setting from "./Screen/Identity/Setting/Setting";
import Setprofile from "./Screen/Identity/Setprofile/Setprofile";
import Cart from "./Screen/Identity/Cart/Cart";
import RegisterInformation from "./Screen/Identity/Register/RegisterInformation";
import Footer from "./Components/Footer/Footer";
import Chat from "./Screen/Chat/Chat";
import Mess from "./Screen/Chat/Mess";
import Login from "./Screen/Authenticate/Login";
import ForgotPassword from "./Screen/Authenticate/Forgot/ForgotPassword";
import Verification from "./Screen/Authenticate/Forgot/Verification";
import ResetPassword from "./Screen/Authenticate/Forgot/ResetPassword";
import ProductDetails from "./Screen/ProductDetails/ProductDetails";
import RowInformation from "./Screen/Information/Rowinformation/Rowinformation";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Pay from "./Screen/Pay/Pay";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import namePage from "./utils/constant/namePage";
import Register from "./Screen/Authenticate/Register";
import PayMethod from "./Screen/Pay/PayMethod";
import ChooseBank from "./Screen/Pay/ChooseBank";
import Agency from "./Screen/Agency/Agency";
import Shipper from "./Screen/Shipper/Shipper";
import Shop from "./Screen/Shop/Shop";
import Voucher from "./Screen/Pay/Voucher";
import ShoppingMethod from "./Screen/Pay/ShoppingMethod";
import HeaderDelivery from "./Screen/Transaction/HeaderDelivery";
import ToastManager from 'toastify-react-native'
import Alleva from "./Screen/Evaluate/AllEva";
import Authenticate from "./Screen/Authenticate/Authenticate";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <ToastManager />
          <Authenticate>
            <Stack.Navigator initialRouteName={namePage.HOME}>
              <Stack.Screen options={{ headerShown: true }} name={namePage.SHIPPER} component={Shipper} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.AGENCY} component={Agency} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.HOME} component={Mall} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.PAY} component={Pay} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.VOUCHERS} component={Voucher} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.SHOPPINGMETHOD} component={ShoppingMethod} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.PAYMETHOD} component={PayMethod} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.CHOOSEBANK} component={ChooseBank} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.PRODUCTDETAILS} component={ProductDetails} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.INFORMATION} component={Information} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.IDENTITY} component={Identity} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.SETTING} component={Setting} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.SETPROFILE} component={Setprofile} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.CART} component={Cart} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.REGISTER_INFORMATION} component={RegisterInformation} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.CHAT} component={Chat} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.MESS} component={Mess} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.LOGIN} component={Login} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.REGISTER} component={Register} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.FORGOT_PASSWORD} component={ForgotPassword} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.VERIFICATION} component={Verification} />
              <Stack.Screen options={{ headerShown: false }} name={namePage.RESET} component={ResetPassword} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.ROWINFORMATION} component={RowInformation} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.SHOP} component={Shop} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.TRANSACTION} component={HeaderDelivery} />
              <Stack.Screen options={{ headerShown: true }} name={namePage.ALLEVA} component={Alleva} />
            </Stack.Navigator>
            <Footer />
          </Authenticate>
        </NavigationContainer>
      </Provider>
      {/* <Header /> */}
    </>
  );
}
