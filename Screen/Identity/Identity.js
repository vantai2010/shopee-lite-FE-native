import React, { useEffect, useReducer, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
  Feather,
  MaterialIcons,

} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";
import { useSelector } from "react-redux";
import keyMap from "../../utils/constant/keyMap"
import environment from "../../utils/constant/environment"
import { getNumberTransactionByUserService } from "../../service/appService";
import TextFormatted from "../../Components/TextFormatted/TextFormatted"

function Identity() {
  const navigation = useNavigation();
  const userData = useSelector(state => state.app.userData)
  const numberCart = useSelector(state => state.app.numberCart)
  const language = useSelector(state => state.app.language)
  const isLogin = useSelector(state => state.app.isLogin)
  const [listNumberTrans, setListNumberTrans] = useState({})
  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };

  const getNumberTransaction = async () => {
    let response = await getNumberTransactionByUserService()
    // console.log(response)
    if (response && response.errCode === 0) {
      setListNumberTrans(response.data)
    }
  }

  useEffect(() => {
    if (isLogin) {
      getNumberTransaction()
    }
  }, [isLogin])


  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {isLogin ? (
          <TouchableOpacity onPress={() => handleNavigate(namePage.SETPROFILE)}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <TouchableOpacity
                  onPress={() => handleNavigate(namePage.SETPROFILE)}
                >
                  <Image
                    style={styles.avatar}
                    source={{ uri: environment.BASE_URL_BE_IMG + userData.image }}
                  />
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity>
                    <Text
                      style={styles.nameAccount}
                      onPress={() => handleNavigate(namePage.SETPROFILE)}
                    >
                      {language === keyMap.EN ? userData.firstName + " " + userData.lastName : userData.lastName + " " + userData.firstName}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.role}><TextFormatted id="Identity.members" /></Text>
                  <View style={styles.rowSpaceBetween}>
                    <Text style={{ color: "#fff", fontSize: 12 }}>
                      <TextFormatted id="Identity.followers" />{userData.followingUserNumber}
                    </Text>
                    <Text
                      style={{ marginLeft: 10, color: "#fff", fontSize: 12 }}
                    >
                      <TextFormatted id="Identity.following" />{userData.followedUserNumber}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => handleNavigate(namePage.SETTING)}
                >
                  <AntDesign
                    name="setting"
                    size={24}
                    style={{ color: "#fff", padding: 8 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate(namePage.CART)}>
                  <Feather
                    name="shopping-cart"
                    size={24}
                    style={{ color: "#fff", padding: 8 }}
                  />
                  {
                    numberCart !== 0 &&
                    <View style={{
                      position: "absolute",
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "#ee4d2d",
                      alignItems: "center",
                      top: 0,
                      right: 0,
                      backgroundColor: "#ffffff",
                    }}>
                      <Text style={{ color: "#ee4d2d" }}>{numberCart}</Text>
                    </View>

                  }

                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{ backgroundColor: "#ee4d2d", height: 100 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => handleNavigate(namePage.SETTING)}
              >
                <AntDesign
                  name="setting"
                  size={24}
                  style={{ color: "#fff", padding: 8 }}
                />
              </TouchableOpacity>
              {
                isLogin &&
                <TouchableOpacity>
                  <Ionicons
                    name="chatbox-ellipses"
                    size={24}
                    color="white"
                    style={{ color: "#fff", padding: 8 }}
                  />
                  <View style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#ee4d2d",
                    alignItems: "center",
                    top: 0,
                    right: 0,
                    backgroundColor: "#ffffff",
                  }}>
                    <Text style={{ color: "#ee4d2d" }}>5</Text>
                  </View>
                </TouchableOpacity>

              }
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="account"
                  size={50}
                  color="white"
                />
              </TouchableOpacity>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "#fff", padding: 10, height: 40 }}
                  onPress={() => navigation.navigate(namePage.LOGIN)}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "#ee4d2d",
                    }}
                  >
                    <TextFormatted id="identity.login" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "#fff",
                    height: 40,
                    marginHorizontal: 10,
                    padding: 10,
                  }}
                  onPress={() => navigation.navigate(namePage.REGISTER)}
                >
                  <Text
                    style={{ textAlign: "center", fontSize: 16, color: "#fff" }}
                  >
                    <TextFormatted id="Identity.register" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={styles.body}>
          <View style={styles.margin10fff}>
            <View style={styles.rowFlexStartBottom}>
              <Text><TextFormatted id="Identity.title" /></Text>
            </View>
            <View style={styles.spaceAround}>
              <View style={styles.alignItemCenter}>
                <MaterialCommunityIcons
                  name="home-circle-outline"
                  size={24}
                  style={{ color: "#edb50f", fontSize: 36 }}
                />
                <Text style={styles.fontsizeMargin}><TextFormatted id="Identity.page" /></Text>
                <Text style={styles.fontsizeColor}><TextFormatted id="Identity.main" /></Text>
              </View>
              <View style={styles.alignItemCenter}>
                <Entypo
                  name="back-in-time"
                  size={24}
                  style={{ color: "#044dbf", fontSize: 36 }}
                />
                <Text style={styles.fontsizeMargin}><TextFormatted id="Identity.hour" /></Text>
                <Text style={styles.fontsizeColor}><TextFormatted id="Identity.huntSale" /></Text>
              </View>
              <View style={styles.alignItemCenter}>
                <Ionicons
                  name="shirt-sharp"
                  size={24}
                  style={{ fontSize: 36, color: "#e34309" }}
                />
                <Text style={styles.fontsizeMargin}><TextFormatted id="Identity.code" /></Text>
                <Text style={styles.fontsizeColor}><TextFormatted id="Identity.price" /></Text>
              </View>
              <View style={styles.alignItemCenter}>
                <Entypo
                  name="video-camera"
                  size={24}
                  style={{ fontSize: 36, color: "#e34309" }}
                />
                <Text style={styles.fontsizeMargin}><TextFormatted id="Identity.reduce" /></Text>
                <Text style={styles.fontsizeColor}>50%</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0,0,0,.05)",
              }}
            >
              <View style={styles.rowFlexStartBottom}>
                <FontAwesome
                  name="mobile-phone"
                  size={24}
                  style={{
                    fontSize: 24,
                    color: "#0abea2",
                    marginRight: 10,
                    lineHeight: 28,
                  }}
                />
                <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.CardService" /></Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                style={{ marginVertical: 14, color: "rgba(0, 0, 0, .4)" }}
              />
            </TouchableOpacity>

            {isLogin ? (
              <>
                <TouchableOpacity onPress={() => navigation.navigate(namePage.TRANSACTION, { page: keyMap.DAMUA })}>
                  <View style={styles.spaceBetween}>
                    <View style={styles.rowSpaceBetween}>
                      <FontAwesome5
                        name="shopping-cart"
                        size={24}
                        color="white"
                        style={{
                          fontSize: 20,
                          color: "#0b57d0",
                          marginRight: 10,
                          lineHeight: 28,
                        }}
                      />
                      <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.orders" /></Text>
                    </View>
                    <View style={styles.rowFlexEnd}>
                      <Text style={styles.fontsizeColor08}>
                        <TextFormatted id="Identity.history" />
                      </Text>
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={24}
                        style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>


                <View style={styles.rowSpaceBetween14}>
                  {/* {
                    Object.keys(listNumberTrans).length > 0 &&
                    <View style={{ position: "absolute" }}>
                      <Text style={{ position: "absolute", bottom: 0, right: 0 }}>{listNumberTrans.numberTransCHOXACNHAN}</Text>
                    </View>
                  } */}
                  <TouchableOpacity onPress={() => navigation.navigate(namePage.TRANSACTION, { page: keyMap.CHOXACNHAN })}>
                    <View style={styles.alignItemCenter}>
                      <SimpleLineIcons
                        name="envelope-letter"
                        size={24}
                        style={{ marginBottom: 10, color: "rgba(0,0,0,.5)" }}
                      />
                      <Text style={styles.fontsizeMarginTopColor}>
                        <TextFormatted id="Identity.confirming" />
                      </Text>
                    </View>
                    {
                      Object.keys(listNumberTrans).length > 0 && listNumberTrans.numberTransCHOXACNHAN !== 0 &&
                      <View style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderStyle: "solid",
                        alignItems: "center",
                        bottom: 40,
                        right: 18,
                        backgroundColor: "#ee4d2d",
                      }}>
                        <Text style={{ color: "#ffffff" }}>{listNumberTrans.numberTransCHOXACNHAN}</Text>
                      </View>
                    }

                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate(namePage.TRANSACTION, { page: keyMap.CHOLAYHANG })}>
                    <View style={styles.alignItemCenter}>
                      <Feather
                        name="package"
                        size={24}
                        style={{ marginBottom: 10, color: "rgba(0,0,0,.5)" }}
                      />
                      <Text style={styles.fontsizeMarginTopColor}>
                        <TextFormatted id="Identity.waitingDelivery" />
                      </Text>
                    </View>
                    {
                      Object.keys(listNumberTrans).length > 0 && listNumberTrans.numberTransCHOLAYHANG !== 0 &&
                      <View style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderStyle: "solid",
                        alignItems: "center",
                        bottom: 40,
                        right: 18,
                        backgroundColor: "#ee4d2d",
                      }}>
                        <Text style={{ color: "#ffffff" }}>{listNumberTrans.numberTransCHOLAYHANG}</Text>
                      </View>

                    }
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate(namePage.TRANSACTION, { page: keyMap.DANGGIAO })}>
                    <View style={styles.alignItemCenter}>
                      <MaterialCommunityIcons
                        name="truck-fast-outline"
                        size={24}
                        style={{ marginBottom: 10, color: "rgba(0,0,0,.5)" }}
                      />
                      <Text style={styles.fontsizeMarginTopColor}><TextFormatted id="Identity.transport" /></Text>
                    </View>
                    {
                      Object.keys(listNumberTrans).length > 0 && listNumberTrans.numberTransDANGGIAO !== 0 &&
                      <View style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderStyle: "solid",
                        alignItems: "center",
                        bottom: 40,
                        right: 10,
                        backgroundColor: "#ee4d2d",
                      }}>
                        <Text style={{ color: "#ffffff" }}>{listNumberTrans.numberTransDANGGIAO}</Text>
                      </View>
                    }
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate(namePage.TRANSACTION, { page: keyMap.DANHGIA })}>
                    <View style={styles.alignItemCenter}>
                      <MaterialCommunityIcons
                        name="star-circle-outline"
                        size={24}
                        style={{ marginBottom: 10, color: "rgba(0,0,0,.5)" }}
                      />
                      <Text style={styles.fontsizeMarginTopColor}><TextFormatted id="Identity.evaluate" /></Text>
                    </View>
                    {
                      Object.keys(listNumberTrans).length > 0 && listNumberTrans.numberTransDANHGIA !== 0 &&
                      <View style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        borderStyle: "solid",
                        alignItems: "center",
                        bottom: 40,
                        right: 8,
                        backgroundColor: "#ee4d2d",
                      }}>
                        <Text style={{ color: "#ffffff" }}>{listNumberTrans.numberTransDANHGIA}</Text>
                      </View>
                    }
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
          </View>

          <View style={styles.margin10fff}>
            <View style={styles.rowFlexStartBottom}>
              <AntDesign
                name="wallet"
                size={24}
                style={{ color: "#ee4d2d", marginRight: 10, lineHeight: 28 }}
              />
              <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.utilities" /></Text>
            </View>
            <View style={styles.spaceAround}>
              <TouchableOpacity>
                <View style={styles.alignItemCenter}>
                  <Ionicons
                    name="wallet-outline"
                    size={24}
                    style={{ color: "#ee4d2d", marginBottom: 10 }}
                  />
                  <Text style={styles.fontsizeMarginBottom}><TextFormatted id="Identity.ShopeePay" /></Text>
                  <Text style={{ fontSize: 10, color: "rgba(0,0,0,.6)" }}>
                    <TextFormatted id="Identity.useNow" />
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.alignItemCenter}>
                  <FontAwesome5
                    name="coins"
                    size={24}
                    style={{ color: "#edb50f", marginBottom: 10 }}
                  />
                  <Text style={styles.fontsizeMarginBottom}>Shopee Xu</Text>
                  <Text style={{ fontSize: 12, color: "#ee4d2d" }}>
                    3.300 Xu
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.alignItemCenter}>
                  <MaterialCommunityIcons
                    name="ticket-confirmation-outline"
                    size={24}
                    style={{ color: "#ee4d2d", marginBottom: 10 }}
                  />
                  <Text style={styles.fontsizeMarginBottom}><TextFormatted id="Identity.Voucher" /></Text>
                  <Text style={{ fontSize: 12, color: "#ee4d2d" }}>
                    50+ Voucher
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: 14,
                borderBottomColor: "rgba(0,0,0,.05)",
                borderBottomWidth: 1,
              }}
            >
              <TouchableOpacity>
                <View style={styles.rowFlexStart}>
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={24}
                    style={{
                      color: "#ee4d2d",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.insurance" /></Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {isLogin ? (
            <View>
              <View style={styles.margin10fff}>
                <TouchableOpacity>
                  <View style={styles.spaceBetween}>
                    <View style={styles.rowFlexStart}>
                      <SimpleLineIcons
                        name="handbag"
                        size={24}
                        style={{
                          color: "#edb50f",
                          marginRight: 10,
                          lineHeight: 28,
                        }}
                      />
                      <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.repurchase" /></Text>
                    </View>
                    <View style={styles.rowFlexEnd}>
                      <Text style={styles.fontsizeColor08}>
                        <TextFormatted id="Identity.moreProducts" />
                      </Text>
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={24}
                        style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{ padding: 14 }}>
                  {/* <ScrollView horizontal>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}><TextFormatted id="Identity.shopBought" /></Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.scrollItem}>
                        <Image
                          style={styles.imageWidthHeight}
                          resizeMode="contain"
                          source={require("../../Image/background10.png")}
                        />
                        <Text style={styles.note}>Shop bạn đã mua</Text>
                        <View style={styles.rowSpaceBetween}>
                          <Text style={styles.price}>đ78.000</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </ScrollView> */}
                </View>
              </View>

              <View style={styles.margin10fff}>
                <TouchableOpacity>
                  <View style={styles.rowSpaceBetween14}>
                    <View style={styles.rowFlexStart}>
                      <MaterialIcons
                        name="storefront"
                        size={24}
                        style={{
                          color: "#ee4d2d",
                          marginRight: 10,
                          lineHeight: 28,
                        }}
                      />
                      <Text style={{ color: "#ee4d2d", lineHeight: 28 }}>
                        <TextFormatted id="Identity.Sell" />
                      </Text>
                    </View>
                    <View style={styles.rowFlexEnd}>
                      <Text
                        style={{
                          color: "rgba(0,0,0,.4)",
                          fontSize: 12,
                          lineHeight: 28,
                        }}
                      >
                        <TextFormatted id="Identity.signup" />
                      </Text>
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={24}
                        style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <></>
          )}

          <View style={styles.margin10fff}>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <Entypo
                    name="medal"
                    size={24}
                    style={{
                      color: "#ee4d2d",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.loyalCustomer" /> </Text>
                </View>
                <View style={styles.rowFlexEnd}>
                  <Text style={styles.fontsizeColor08}><TextFormatted id="Identity.members" /> </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <AntDesign
                    name="hearto"
                    size={24}
                    style={{
                      color: "#ee4d2d",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.liked" /></Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <MaterialCommunityIcons
                    name="store-clock-outline"
                    size={24}
                    style={{
                      color: "#edb50f",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.ShopFollowing" /></Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <MaterialCommunityIcons
                    name="gift"
                    size={24}
                    style={{
                      color: "#044dbf",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.ShopFollowing" /></Text>
                </View>
                <View style={styles.rowFlexEnd}>
                  <Text style={styles.fontsizeColor08}><TextFormatted id="Identity.gift" /></Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <Ionicons
                    name="time-outline"
                    size={24}
                    style={{
                      color: "#044dbf",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.Viewed" /></Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <FontAwesome5
                    name="money-check-alt"
                    size={24}
                    style={{
                      color: "#ee4d2d",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.accbalance" /></Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <FontAwesome5
                    name="coins"
                    size={24}
                    style={{
                      color: "#edb50f",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}>Shopee Xu </Text>
                </View>
                <View style={styles.rowFlexEnd}>
                  <Text style={styles.fontsizeColor08}>3.300 Xu</Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <Feather
                    name="star"
                    size={24}
                    style={{
                      color: "#0abea2",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.myEva" /></Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.spaceBetween}>
                <View style={styles.rowSpaceBetween}>
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    style={{
                      color: "#ee4d2d",
                      marginRight: 10,
                      lineHeight: 28,
                    }}
                  />
                  <Text style={{ lineHeight: 28 }}>
                    <TextFormatted id="Identity.mkt" />{" "}
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", lineHeight: 28 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.margin10fff}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0,0,0,.05)",
              }}
            >
              <View style={styles.rowFlexStart14}>
                <Ionicons
                  name="md-person-outline"
                  size={24}
                  style={{ color: "#044dbf", marginRight: 10, lineHeight: 28 }}
                />
                <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.settings" /></Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0,0,0,.05)",
              }}
            >
              <View style={styles.rowFlexStart14}>
                <MaterialIcons
                  name="contact-support"
                  size={24}
                  style={{ color: "#0abea2", marginRight: 10, lineHeight: 28 }}
                />
                <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.support" /></Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0,0,0,.05)",
              }}
            >
              <View style={styles.rowFlexStart14}>
                <AntDesign
                  name="customerservice"
                  size={24}
                  style={{ color: "#ee4d2d", marginRight: 10, lineHeight: 28 }}
                />
                <Text style={{ lineHeight: 28 }}><TextFormatted id="Identity.chat" /></Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    height: 120,
    backgroundColor: "#ee4d2d",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    marginLeft: 10,
  },
  avatar: {
    resizeMode: "contain",
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  body: {
    backgroundColor: "rgba(0,0,0,.05)",
    flex: 1,
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "rgba(0,0,0,.05)",
    borderBottomWidth: 1,
    padding: 14,
  },
  nameAccount: {
    fontSize: 16,
    color: "#fff",
  },
  role: {
    fontSize: 10,
    backgroundColor: "#fff",
    color: "#ee4d2d",
    width: 55,
    marginVertical: 4,
  },
  rowFlexStartBottom: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "rgba(0,0,0,.05)",
    borderBottomWidth: 1,
  },
  rowFlexStart14: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 14,
  },
  rowFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  spaceAround: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "rgba(0,0,0,.05)",
    borderBottomWidth: 1,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowSpaceBetween14: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    position: "relative"
  },
  margin10fff: {
    margin: 10,
    backgroundColor: "#fff",
  },
  rowFlexEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  alignItemCenter: {
    alignItems: "center",
  },
  imageWidthHeight: {
    width: "100%",
    height: 90,
  },
  fontsizeMargin: {
    fontSize: 10,
    margin: 4,
  },
  fontsizeMarginTopColor: {
    fontSize: 12,
    marginTop: 4,
    color: "rgba(0,0,0,.5)",
  },
  fontsizeColor: {
    fontSize: 10,
    color: "rgba(0,0,0,.4)",
  },
  fontsizeColor08: {
    fontSize: 12,
    color: "rgba(0,0,0,.5)",
    lineHeight: 28,
  },
  fontsizeMarginBottom: {
    fontSize: 10,
    marginBottom: 4,
  },
  scrollItem: {
    width: 100,
    marginRight: 10,
    borderColor: "rgba(0,0,0,.2)",
    borderWidth: 1,
  },
  price: {
    fontSize: 12,
    marginLeft: 5,
    color: "#ee4d2d",
  },
  note: {
    fontSize: 8,
    marginVertical: 5,
    marginLeft: 5,
    color: "rgba(0,0,0,.4)",
  },
});

export default Identity;
