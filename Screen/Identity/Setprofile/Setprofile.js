import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Avata from "../../Avatar/Avata";
import TextFormatted from "../../../Components/TextFormatted/TextFormatted";

export default function Setprofile() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "rgba(0,0,0,.05)" }}>
      <View
        style={{
          height: 200,
          backgroundColor: "#ee4d2d",
          justifyContent: "space-between",
        }}
      >
        <View></View>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View
            style={{
              alignItems: "center",
              overflow: "hidden",
              borderRadius: 50,
              width: 90,
              height: 90,
            }}
          >
            <Avata avatarUrl="https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              padding: 5,
              backgroundColor: "#582e0a",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              <TextFormatted id="setProfile.touch" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBlockColor: "rgba(0,0,0,.05)",
              borderWidth: 1,
            }}
          >
            <Text>Tên</Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ color: "#ee4d2d" }}>
                {" "}
                <TextFormatted id="setProfile.settings" />
              </Text>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text>Bio</Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ color: "rgba(0,0,0,.4)" }}>
                <TextFormatted id="setProfile.settings" />
              </Text>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBlockColor: "rgba(0,0,0,.05)",
              borderWidth: 1,
            }}
          >
            <Text>
              {" "}
              <TextFormatted id="setProfile.sex" />
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ color: "rgba(0,0,0,.4)" }}>
                <TextFormatted id="setProfile.settings" />
              </Text>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBlockColor: "rgba(0,0,0,.05)",
              borderWidth: 1,
            }}
          >
            <Text>
              <TextFormatted id="setProfile.DateOfBirth" />
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ color: "rgba(0,0,0,.4)" }}>
                {" "}
                <TextFormatted id="setProfile.settings" />
              </Text>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBlockColor: "rgba(0,0,0,.05)",
              borderWidth: 1,
            }}
          >
            <Text>
              <TextFormatted id="setProfile.Phone" />
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text>********58</Text>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBlockColor: "rgba(0,0,0,.05)",
              borderWidth: 1,
            }}
          >
            <Text>Email</Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text>l*****2@gmail.com </Text>
              <Text style={{ color: "#ee4d2d" }}>
                <TextFormatted id="setProfile.confirm" />
              </Text>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text>
              <TextFormatted id="setProfile.linkAccounts" />
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <AntDesign
                name="right"
                size={24}
                color="rgba(0,0,0,.4)"
                style={{ fontSize: 14, fontWeight: 200, marginLeft: 4 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
