import React, { useEffect, useRef, useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Button
} from "react-native";
import bg5 from "../../Image/background5.png";
import { getListHistoriesByUserService, getTransactionByUserService, handleCancelBuyProductService } from "../../service/appService";
import keyMap from "../../utils/constant/keyMap";
import { useSelector } from "react-redux";
import { Toast } from 'toastify-react-native'
import { useNavigation } from "@react-navigation/native";
import namePage from "../../utils/constant/namePage";
import environment from "../../utils/constant/environment";
import handleFormatMoney from "../../utils/formatMoney";

const BoughtProduct = () => {
    const navigation = useNavigation()
    const language = useSelector(state => state.app.language)
    const [listData, setListData] = useState([])

    const getListData = async () => {
        let response = await getListHistoriesByUserService()
        if (response && response.errCode === 0) {
            setListData(response.data)
        } else {
            alert(language === keyMap.EN ? response.messageEN : response.messageVI)
        }
    }

    useEffect(() => {
        getListData()
    }, [])



    return (
        <>

            <ScrollView style={styles.container}>

                {
                    listData.length > 0 ?
                        listData.map(item => {
                            return (
                                <TouchableOpacity key={item.id} style={styles.infoProduct} onPress={() => navigation.navigate(namePage.PRODUCTDETAILS, { productId: item.productCartData?.id })}>
                                    <View style={styles.nameShop}>
                                        <Text style={styles.textName}>Shopee Mall</Text>
                                        <Text style={{ marginLeft: 20, fontWeight: "600" }}>{language === keyMap.EN ? `${item.userSupplierCartData?.firstName} ${item.userSupplierCartData?.lastName}` : `${item.userSupplierCartData?.lastName} ${item.userSupplierCartData?.firstName}`}</Text>
                                    </View>

                                    <View style={styles.product}>
                                        <View>
                                            <Image style={{ width: 70, height: 50 }} source={{ uri: environment.BASE_URL_BE_IMG + item.productCartData?.image[0] }} />
                                        </View>
                                        <View>
                                            <Text
                                                numberOfLines={1}
                                                ellipsizeMode="tail"
                                                style={{ fontSize: 17, maxWidth: "80%", marginLeft: 10 }}
                                            >
                                                {item.productCartData?.name}
                                            </Text>
                                            <Text style={{ marginLeft: 10, color: "#a19f9f" }}>
                                                {item.productTypeCartData?.type}{item.productTypeCartData?.size ? `- ${item.productTypeCartData.size}` : ""}
                                            </Text>
                                            <Text style={styles.goods}>7 ngày trả hàng</Text>
                                        </View>
                                    </View>

                                    <View style={styles.payComplete}>
                                        <Text style={{ color: "#a19f9f", fontSize: 16 }}>Sản phẩm</Text>
                                        <Text style={{ color: "#a19f9f", fontSize: 16 }}>
                                            Thành tiền:
                                            <Text style={{ color: "red", fontWeight: "500", fontSize: 16 }}>
                                                {handleFormatMoney(item.productFee + item.shipFee)}
                                            </Text>
                                        </Text>
                                    </View>

                                </TouchableOpacity>
                            )
                        })
                        :
                        <Text>Không có đơn hàng nào</Text>
                }
            </ScrollView>
        </>

    );
};

export default BoughtProduct;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cccccc",
        height: "auto",
        marginBottom: 100
    },
    infoProduct: {
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },
    nameShop: {
        padding: 10,
        backgroundColor: "#ffffff",
        flexDirection: "row",
    },
    textName: {
        backgroundColor: "red",
        color: "#ffffff",
        paddingHorizontal: 5,
        borderRadius: 2,
    },
    product: {
        padding: 10,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
    },
    goods: {
        marginLeft: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "red",
        width: "57%",
        color: "red",
    },
    payComplete: {
        paddingTop: 5,
        backgroundColor: "#ffffff",
        padding: 10,
        flexDirection: "row",
        borderTopWidth: 0.3,
        justifyContent: "space-between",
    },
    statusNew: {
        backgroundColor: "#ffffff",
        padding: 10,
        paddingVertical: 5,
        borderTopWidth: 0.3,
    },
});
