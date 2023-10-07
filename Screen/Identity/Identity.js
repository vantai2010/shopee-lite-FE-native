import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo, Ionicons, FontAwesome, FontAwesome5, SimpleLineIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import namePage from '../../utils/constant/namePage';


function Identity() {

    const navigation = useNavigation()
    const [isLogin, setIsLogin] = useState(true)

    const handleNavigate = (namePage) => {
        return navigation.navigate(namePage)
    }

    return (

        <ScrollView style={styles.container}>

            {isLogin
                ?
                <TouchableOpacity onPress={() => handleNavigate(namePage.SETPROFILE)}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <TouchableOpacity onPress={() => handleNavigate(namePage.SETPROFILE)}>
                                <Image style={styles.avatar} source={require('../../Image/background10.png')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 10 }}>
                                <TouchableOpacity >
                                    <Text style={styles.nameAccount} onPress={() => handleNavigate(namePage.SETPROFILE)}>Lehuyhoang</Text>
                                </TouchableOpacity>
                                <Text style={styles.role}>Thành viên</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={{ color: '#fff', fontSize: 12 }}>Người theo dõi 0</Text>
                                    <Text style={{ marginLeft: 10, color: '#fff', fontSize: 12 }}>Đang theo dõi 0</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => handleNavigate(namePage.SETTING)}>
                                <AntDesign name="setting" size={24} style={{ color: '#fff', padding: 8, }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleNavigate(namePage.CART)}>
                                <Feather name="shopping-cart" size={24} style={{ color: '#fff', padding: 8 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                :
                <View style={{ backgroundColor: '#ee4d2d', height: 100 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                        <TouchableOpacity onPress={() => handleNavigate(namePage.SETTING)}>
                            <AntDesign name="setting" size={24} style={{ color: '#fff', padding: 8 }} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Feather name="shopping-cart" size={24} style={{ color: '#fff', padding: 8 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="account" size={50} color="white" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, height: 40 }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#ee4d2d' }}>Đăng ký</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#fff', height: 40, marginHorizontal: 10, padding: 10 }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', }}>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }


            <View style={styles.body}>
                <View style={styles.margin10fff}>
                    <View style={styles.rowFlexStartBottom}>
                        <Text>9.9 Shopee Live Làm đẹp </Text>
                    </View>
                    <View style={styles.spaceAround}>
                        <View style={styles.alignItemCenter}>
                            <MaterialCommunityIcons name="home-circle-outline" size={24} style={{ color: '#edb50f', fontSize: 36 }} />
                            <Text style={styles.fontsizeMargin}>Trang</Text>
                            <Text style={styles.fontsizeColor}>chính</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Entypo name="back-in-time" size={24} style={{ color: '#044dbf', fontSize: 36 }} />
                            <Text style={styles.fontsizeMargin}>Khung giờ</Text>
                            <Text style={styles.fontsizeColor}>săn sale</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Ionicons name="shirt-sharp" size={24} style={{ fontSize: 36, color: '#e34309' }} />
                            <Text style={styles.fontsizeMargin}>Mã giảm</Text>
                            <Text style={styles.fontsizeColor}>giá</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Entypo name="video-camera" size={24} style={{ fontSize: 36, color: '#e34309' }} />
                            <Text style={styles.fontsizeMargin}>Giảm</Text>
                            <Text style={styles.fontsizeColor}>50%</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.05)' }}>
                        <View style={styles.rowFlexStartBottom}>
                            <FontAwesome name="mobile-phone" size={24} style={{ fontSize: 24, color: '#0abea2', marginRight: 10, lineHeight: 28 }} />
                            <Text style={{ lineHeight: 28 }}>Đơn Nạp thẻ và Dịch vụ</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ marginVertical: 14, color: 'rgba(0, 0, 0, .4)' }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <FontAwesome5 name="clipboard-list" size={24} style={{ fontSize: 20, color: '#0b57d0', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Đơn mua</Text>
                            </View>
                            <View style={styles.rowFlexEnd} >
                                <Text style={styles.fontsizeColor08}>Xem lịch sử mua hàng</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {isLogin
                        ?
                        <View style={styles.rowSpaceBetween14}>
                            <TouchableOpacity>
                                <View style={styles.alignItemCenter}>
                                    <SimpleLineIcons name="envelope-letter" size={24} style={{ marginBottom: 10, color: 'rgba(0,0,0,.5)' }} />
                                    <Text style={styles.fontsizeMarginTopColor}>Chờ xác nhận</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.alignItemCenter}>
                                    <Feather name="package" size={24} style={{ marginBottom: 10, color: 'rgba(0,0,0,.5)' }} />
                                    <Text style={styles.fontsizeMarginTopColor}>Chờ lấy hàng</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.alignItemCenter}>
                                    <MaterialCommunityIcons name="truck-fast-outline" size={24} style={{ marginBottom: 10, color: 'rgba(0,0,0,.5)' }} />
                                    <Text style={styles.fontsizeMarginTopColor}>Đang giao</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.alignItemCenter}>
                                    <MaterialCommunityIcons name="star-circle-outline" size={24} style={{ marginBottom: 10, color: 'rgba(0,0,0,.5)' }} />
                                    <Text style={styles.fontsizeMarginTopColor}>Đánh giá</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        <></>
                    }
                </View>

                <View style={styles.margin10fff}>
                    <View style={styles.rowFlexStartBottom}>
                        <AntDesign name="wallet" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                        <Text style={{ lineHeight: 28 }}>Tiện ích của tôi</Text>
                    </View>
                    <View style={styles.spaceAround}>
                        <TouchableOpacity>
                            <View style={styles.alignItemCenter}>
                                <Ionicons name="wallet-outline" size={24} style={{ color: '#ee4d2d', marginBottom: 10 }} />
                                <Text style={styles.fontsizeMarginBottom}>Ví ShopeePay</Text>
                                <Text style={{ fontSize: 10, color: 'rgba(0,0,0,.😎' }}>Sử dụng ngay</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.alignItemCenter}>
                                <FontAwesome5 name="coins" size={24} style={{ color: '#edb50f', marginBottom: 10 }} />
                                <Text style={styles.fontsizeMarginBottom}>Shopee Xu</Text>
                                <Text style={{ fontSize: 12, color: '#ee4d2d' }}>3.300 Xu</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.alignItemCenter}>
                                <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} style={{ color: '#ee4d2d', marginBottom: 10 }} />
                                <Text style={styles.fontsizeMarginBottom}>Kho Voucher</Text>
                                <Text style={{ fontSize: 12, color: '#ee4d2d' }}>50+ Voucher</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 14, borderBottomColor: 'rgba(0,0,0,.05)', borderBottomWidth: 1 }}>
                        <TouchableOpacity>
                            <View style={styles.rowFlexStart}>
                                <Ionicons name="shield-checkmark-outline" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Bảo hiểm của tôi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {isLogin
                    ?
                    <View>
                        <View style={styles.margin10fff}>
                            <TouchableOpacity>
                                <View style={styles.spaceBetween}>
                                    <View style={styles.rowFlexStart}>
                                        <SimpleLineIcons name="handbag" size={24} style={{ color: '#edb50f', marginRight: 10, lineHeight: 28 }} />
                                        <Text style={{ lineHeight: 28 }}>Mua lại</Text>
                                    </View>
                                    <View style={styles.rowFlexEnd}>
                                        <Text style={styles.fontsizeColor08}>Xem thêm sản phẩm</Text>
                                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ padding: 14 }}>
                                <ScrollView horizontal >
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.scrollItem}>
                                            <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                            <Text style={styles.note}>Shop bạn đã mua</Text>
                                            <View style={styles.rowSpaceBetween}>
                                                <Text style={styles.price}>đ78.000</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </ScrollView>
                            </View>
                        </View>

                        <View style={styles.margin10fff}>
                            <TouchableOpacity>
                                <View style={styles.rowSpaceBetween14}>
                                    <View style={styles.rowFlexStart}>
                                        <MaterialIcons name="storefront" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                                        <Text style={{ color: '#ee4d2d', lineHeight: 28 }}>Bắt đầu bán</Text>
                                    </View>
                                    <View style={styles.rowFlexEnd}>
                                        <Text style={{ color: 'rgba(0,0,0,.4)', fontSize: 12, lineHeight: 28 }}>Đăng ký miễn phí</Text>
                                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <></>
                }

                <View style={styles.margin10fff}>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <Entypo name="medal" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Khách hàng thân thiết </Text>
                            </View>
                            <View style={styles.rowFlexEnd}>
                                <Text style={styles.fontsizeColor08}>Thành viên</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <AntDesign name="hearto" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Đã thích </Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <MaterialCommunityIcons name="store-clock-outline" size={24} style={{ color: '#edb50f', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Shop đang theo dõi </Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <   MaterialCommunityIcons name="gift" size={24} style={{ color: '#044dbf', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Săn Thưởng Shopee</Text>
                            </View>
                            <View style={styles.rowFlexEnd}>
                                <Text style={styles.fontsizeColor08}>Lấy ngay 1,000 Xu</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <Ionicons name="time-outline" size={24} style={{ color: '#044dbf', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Đã xem gần đây </Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <FontAwesome5 name="money-check-alt" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Số dư TK Shopee </Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <FontAwesome5 name="coins" size={24} style={{ color: '#edb50f', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Shopee Xu </Text>
                            </View>
                            <View style={styles.rowFlexEnd}>
                                <Text style={styles.fontsizeColor08}>3.300 Xu</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <Feather name="star" size={24} style={{ color: '#0abea2', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Đánh giá của tôi </Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.spaceBetween}>
                            <View style={styles.rowSpaceBetween}>
                                <SimpleLineIcons name="bag" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                                <Text style={{ lineHeight: 28 }}>Shopee Tiếp Thị Liên Tiếp </Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', lineHeight: 28 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.margin10fff}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.05)' }}>
                        <View style={styles.rowFlexStart14}>
                            <Ionicons name="md-person-outline" size={24} style={{ color: '#044dbf', marginRight: 10, lineHeight: 28 }} />
                            <Text style={{ lineHeight: 28 }}>Thiết lập tài khoản</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', margin: 14 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.05)' }}>
                        <View style={styles.rowFlexStart14}>
                            <MaterialIcons name="contact-support" size={24} style={{ color: '#0abea2', marginRight: 10, lineHeight: 28 }} />
                            <Text style={{ lineHeight: 28 }}>Trung tâm hỗ trợ</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', margin: 14 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.05)' }}>
                        <View style={styles.rowFlexStart14}>
                            <AntDesign name="customerservice" size={24} style={{ color: '#ee4d2d', marginRight: 10, lineHeight: 28 }} />
                            <Text style={{ lineHeight: 28 }}>Trò Chuyện Với Shopee</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ color: 'rgba(0, 0, 0, .4)', margin: 14 }} />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 120,
        backgroundColor: '#ee4d2d',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        marginLeft: 10
    },
    avatar: {
        resizeMode: 'contain',
        height: 55,
        width: 55,
        borderRadius: 50
    },
    body: {
        backgroundColor: 'rgba(0,0,0,.05)',
        flex: 1
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0,0,0,.05)',
        borderBottomWidth: 1,
        padding: 14
    },
    nameAccount: {
        fontSize: 16,
        color: '#fff'
    },
    role: {
        fontSize: 10,
        backgroundColor: '#fff',
        color: '#ee4d2d',
        width: 55,
        marginVertical: 4
    },
    rowFlexStartBottom: {
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: 'rgba(0,0,0,.05)',
        borderBottomWidth: 1
    },
    rowFlexStart14: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 14
    },
    rowFlexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    spaceAround: {
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(0,0,0,.05)',
        borderBottomWidth: 1,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowSpaceBetween14: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14
    },
    margin10fff: {
        margin: 10,
        backgroundColor: '#fff'
    },
    rowFlexEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    imageWidthHeight: {
        width: '100%',
        height: 90
    },
    fontsizeMargin: {
        fontSize: 10,
        margin: 4
    },
    fontsizeMarginTopColor: {
        fontSize: 12,
        marginTop: 4,
        color: 'rgba(0,0,0,.5)'
    },
    fontsizeColor: {
        fontSize: 10,
        color: 'rgba(0,0,0,.4)'
    },
    fontsizeColor08: {
        fontSize: 12,
        color: 'rgba(0,0,0,.5)',
        lineHeight: 28
    },
    fontsizeMarginBottom: {
        fontSize: 10,
        marginBottom: 4
    },
    scrollItem: {
        width: 100,
        marginRight: 10,
        borderColor: 'rgba(0,0,0,.2)',
        borderWidth: 1,
    },
    price: {
        fontSize: 12,
        marginLeft: 5,
        color: '#ee4d2d'
    },
    note: {
        fontSize: 8,
        marginVertical: 5,
        marginLeft: 5,
        color: 'rgba(0,0,0,.4)'
    }
})

export default Identity;

