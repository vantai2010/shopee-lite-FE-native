import { ScrollView, TouchableOpacity, Image, View, Text } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux"
import { deleteCartService, getAllCartService, updateQuantityCartService } from "../../../service/appService";
import keyMap from "../../../utils/constant/keyMap";
import { useState } from "react";
import { useEffect } from "react";
import handleFormatMoney from "../../../utils/formatMoney"
import { useNavigation } from "@react-navigation/native";
import namePage from "../../../utils/constant/namePage";

export default function Cart() {
    const language = useSelector(state => state.app.language)
    const navigation = useNavigation()
    const [listCarts, setListCarts] = useState([])
    const getListCarts = async () => {
        const response = await getAllCartService()
        if (response && response.errCode === 0) {
            setListCarts(response.data)
        } else {
            alert(language === keyMap.EN ? response.messageEN : response.messageVI)
        }
    }

    useEffect(() => {
        getListCarts()
    }, [])

    const handleQuantity = async (type, item) => {
        let quantity = item.quantity
        if (type === "increase") {
            if (quantity === item.quantityType) {
                return
            }
            quantity = quantity + 1
        } else if (type === "decrease") {
            if (quantity === 0) {
                return
            }
            quantity = quantity - 1
        }
        let response = await updateQuantityCartService({
            cartId: item.cartId,
            quantity: quantity,
            productFee: item.price * (quantity)
        })
        if (response && response.errCode === 0) {
            getListCarts()

        } else {
            alert(language === keyMap.EN ? response.messageEN : response.messageVI)
        }
    }

    const handleBuyProduct = (cart) => {
        navigation.navigate(namePage.PAY, {
            data: {
                productId: cart.productId,
                productTypeId: cart.productTypeId,
                quantity: cart.quantity,
                supplierId: cart.supplierId,
                productFee: cart.productFee,
                product: cart.productCartData,
                cartId: cart.id
            }
        })
    }

    const handleDeleteCart = async (cart) => {
        const response = await deleteCartService(cart.id)
        if (response && response.errCode === 0) {
            getListCarts()
        } else {
            alert(language === keyMap.EN ? response.messageEN : response.messageVI)
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.05)' }}>
            <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
                {
                    listCarts.length > 0 ?
                        listCarts.map(item => {
                            return (
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10 }} key={item.id}>
                                    <Image style={{ width: 80, height: 80 }} resizeMode='contain' source={{ uri: item.productCartData.image[0] ? environment.BASE_URL_BE_IMG + item.productCartData.image[0] : null }} />
                                    <View style={{ marginLeft: 28, height: 160, justifyContent: 'space-between', flex: 1 }}>
                                        <Text style={{ fontSize: 16 }}>{item.productCartData.name}</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'rgba(0,0,0,.08)' }}>
                                            <Text style={{ color: 'rgba(0,0,0,.8)', lineHeight: 28 }}>Phân loại: ( {item.productTypeCartData.type} ) {item.productTypeCartData.size} </Text>
                                            <MaterialIcons name="keyboard-arrow-down" size={24} color="rgba(0,0,0,.5)" style={{ lineHeight: 28 }} />
                                        </TouchableOpacity>
                                        <Image style={{ width: 125, height: 20 }} source={require('../../../Image/background7.png')} />
                                        <Text style={{ color: '#ee4d2d' }}>{handleFormatMoney(item.productFee)}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,.4)', padding: 4 }}
                                                    onPress={() => handleQuantity("decrease", { cartId: item.id, price: item.productCartData.price, quantity: item.quantity, quantityType: item.productTypeCartData.quantity })}
                                                >
                                                    <MaterialCommunityIcons name="minus" size={16} color="rgba(0,0,0,.4)" />
                                                </TouchableOpacity>
                                                <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'rgba(0,0,0,.4)' }}>
                                                    <Text style={{ paddingHorizontal: 20, paddingVertical: 4, }}>{item.quantity}</Text>
                                                </View>
                                                <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,.4)', padding: 4 }}
                                                    onPress={() => handleQuantity("increase", { cartId: item.id, price: item.productCartData.price, quantity: item.quantity, quantityType: item.productTypeCartData.quantity })}
                                                >
                                                    <MaterialCommunityIcons name="plus" size={16} color="rgba(0,0,0,.4)" />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{ color: '#ee4d2d' }}>Còn {item.productTypeCartData.quantity} sản phẩm</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => handleBuyProduct(item)}><Text>Mua ngay</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleDeleteCart(item)}><Text>Xoá</Text></TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                        :
                        <Text>Chưa có sản phẩm nào</Text>
                }

            </View>
        </ScrollView>
    )
}