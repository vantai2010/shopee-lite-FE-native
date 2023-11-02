import { ScrollView, View, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, handleLogout } from "../../../store/slices/appSlice";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import namePage from "../../../utils/constant/namePage";
import environment from "../../../utils/constant/environment";
import keyMap, { roleId } from "../../../utils/constant/keyMap";
import Modal from "react-native-modal";
import TextFormatted from "../../../Components/TextFormatted/TextFormatted";
import fontSize from "../../../utils/constant/fontSize";

export default function Setting() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLogin = useSelector((state) => state.app.isLogin);
  const language = useSelector((state) => state.app.language);
  const notifySocket = useSelector((state) => state.app.notifySocket);
  const userData = useSelector((state) => state.app.userData);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogoutAccount = () => {
    dispatch(handleLogout());
    AsyncStorage.removeItem(environment.KEY_TOKEN_STORE);
    navigation.navigate(namePage.IDENTITY);
  };

  const handleRegisterVendor = () => {
    notifySocket?.emit("request-register-vendor", {
      email: userData.email,
      senderId: userData.id,
    });

    alert(
      language === keyMap.EN
        ? "The request has been sent, please wait for the administrator to confirm"
        : "Yêu cầu đã được gửi đi vui lòng chờ quản trị viên xác nhận"
    );
  };

  const handleShowModalChoiseLanguage = () => {
    setModalVisible(true);
  };

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language));
    setModalVisible(false);
  };
  // console.log(userData)
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
            onPress={() => handleChangeLanguage(keyMap.VI)}
          >
            <Text style={{ fontSize: fontSize.h1 }}>
              <TextFormatted id="setting.vn" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: "#fff",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
            onPress={() => handleChangeLanguage(keyMap.EN)}
          >
            <Text style={{ fontSize: fontSize.h1 }}>
              <TextFormatted id="setting.en" />
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, .04)" }}>
        {isLogin ? (
          <View>
            <View style={{ marginVertical: 10, marginLeft: 10 }}>
              <Text style={{ color: "rgba(0, 0, 0, .4)", fontSize: 12 }}>
                <TextFormatted id="setting.myAccount" />
              </Text>
            </View>

            <View style={{ backgroundColor: "#fff" }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "rgba(0, 0, 0, .04)",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.security" />
                  </Text>
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
                  borderBottomColor: "rgba(0, 0, 0, .04)",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.address" />
                  </Text>
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
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.bank" />
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )}

        <View style={{ marginVertical: 10, marginLeft: 10 }}>
          <Text style={{ color: "rgba(0, 0, 0, .4)", fontSize: 12 }}>
            <TextFormatted id="setting.set" />
          </Text>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          {isLogin ? (
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "rgba(0, 0, 0, .04)",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.setChat" />
                  </Text>
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
                  borderBottomColor: "rgba(0, 0, 0, .04)",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.setNot" />
                  </Text>
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
                  borderBottomColor: "rgba(0, 0, 0, .04)",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.setMe" />
                  </Text>
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
                  borderBottomColor: "rgba(0, 0, 0, .04)",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
                  <Text>
                    <TextFormatted id="setting.userBlock" />
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
              onPress={() => handleShowModalChoiseLanguage()}
            >
              <View>
                <Text>
                  <TextFormatted id="setting.language" />
                </Text>
                {/* <Text style={{ marginTop: 4, fontSize: 12, color: 'rgba(0, 0, 0, .4)' }}>Tiếng Việt</Text> */}
              </View>
            </TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 10, marginLeft: 10 }}>
          <Text style={{ color: "rgba(0, 0, 0, .4)", fontSize: 12 }}>
            <TextFormatted id="setting.center" />
          </Text>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomColor: "rgba(0, 0, 0, .04)",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Text>
                <TextFormatted id="setting.centerSup" />
              </Text>
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
              borderBottomColor: "rgba(0, 0, 0, .04)",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Text>
                <TextFormatted id="setting.comuti" />
              </Text>
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
              borderBottomColor: "rgba(0, 0, 0, .04)",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Text>
                <TextFormatted id="setting.rule" />
              </Text>
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
              borderBottomColor: "rgba(0, 0, 0, .04)",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Text>
                <TextFormatted id="setting.title" />
              </Text>
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
              borderBottomColor: "rgba(0, 0, 0, .04)",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Text>
                <TextFormatted id="setting.descrip" />
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
            />
          </TouchableOpacity>
          {isLogin ? (
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 16,
                }}
              >
                <Text>
                  <TextFormatted id="setting.request" />
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                style={{ color: "rgba(0, 0, 0, .4)", margin: 14 }}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {isLogin ? (
          <>
            {userData.roleId === roleId.USER && (
              <View style={{ backgroundColor: "#ee4d2d", margin: 10 }}>
                <Button
                  title={
                    language === keyMap.EN
                      ? "Register Vendor Account"
                      : "Đăng ký bán hàng"
                  }
                  color="#020218"
                  onPress={handleRegisterVendor}
                />
              </View>
            )}

            <View style={{ backgroundColor: "#ee4d2d", margin: 10 }}>
              <Button
                title={language === keyMap.EN ? "Logout" : "Đăng xuất"}
                color="#020218"
                onPress={handleLogoutAccount}
              />
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
}
