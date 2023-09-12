import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';


function Identity() {

    return (

        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image style={styles.avatar} source={require('../../Image/background10.png')} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.nameAccount}>Lehuyhoang</Text>
                        <Text style={styles.role}>Thành viên</Text>
                        <View style={styles.rowSpaceBetween}>
                            <Text style={{ color: '#fff', fontSize: 12 }}>Người theo dõi 0</Text>
                            <Text style={{ marginLeft: 10, color: '#fff', fontSize: 12 }}>Đang theo dõi 0</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.margin10fff}>
                    <View style={styles.rowFlexStartBottom}>
                        <Text>9.9 Shopee Live Làm đẹp </Text>
                    </View>
                    <View style={styles.spaceAround}>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMargin}>Trang</Text>
                            <Text style={styles.fontsizeColor}>chính</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMargin}>Khung giờ</Text>
                            <Text style={styles.fontsizeColor}>săn sale</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMargin}>Mã giảm</Text>
                            <Text style={styles.fontsizeColor}>giá</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMargin}>Giảm</Text>
                            <Text style={styles.fontsizeColor}>50%</Text>
                        </View>
                    </View>
                    <View style={styles.rowFlexStartBottom}>
                        <Text>Đơn Nạp thẻ và Dịch vụ</Text>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Đơn mua</Text>
                        </View>
                        <View style={styles.rowFlexEnd} >
                            <Text style={styles.fontsizeColor08}>Xem lịch sử mua hàng</Text>
                        </View>
                    </View>
                    <View style={styles.rowSpaceBetween14}>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginTopColor}>Chờ xác nhận</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginTopColor}>Chờ lấy hàng</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginTopColor}>Đang giao</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginTopColor}>Đánh giá</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.margin10fff}>
                    <View style={styles.rowFlexStartBottom}>
                        <Text>Tiện ích của tôi</Text>
                    </View>
                    <View style={styles.spaceAround}>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginBottom}>Ví ShopeePay</Text>
                            <Text style={{ fontSize: 10, color: 'rgba(0,0,0,.😎' }}>Sử dụng ngay</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginBottom}>Shopee Xu</Text>
                            <Text style={{ fontSize: 12, color: '#ee4d2d' }}>3.300 Xu</Text>
                        </View>
                        <View style={styles.alignItemCenter}>
                            <Text style={styles.fontsizeMarginBottom}>Kho Voucher</Text>
                            <Text style={{ fontSize: 12, color: '#ee4d2d' }}>50+ Voucher</Text>
                        </View>
                    </View>
                    <View style={{ padding: 14, borderBottomColor: 'rgba(0,0,0,.05)', borderBottomWidth: 1 }}>
                        <View style={styles.rowFlexStart}>
                            <Text>Bảo hiểm của tôi</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.margin10fff}>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowFlexStart}>
                            <Text>Mua lại</Text>
                        </View>
                        <View style={styles.rowFlexEnd}>
                            <Text style={styles.fontsizeColor08}>Xem thêm sản phẩm</Text>
                        </View>
                    </View>
                    <View style={{ padding: 14 }}>
                        <ScrollView horizontal >
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                            <View style={styles.scrollItem}>
                                <Image style={styles.imageWidthHeight} resizeMode='contain' source={require("../../Image/background10.png")} />
                                <Text style={styles.note}>Shop bạn đã mua</Text>
                                <View style={styles.rowSpaceBetween}>
                                    <Text style={styles.price}>đ78.000</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.margin10fff}>
                    <View style={styles.rowSpaceBetween14}>
                        <View style={styles.rowFlexStart}>
                            <Text style={{ color: '#ee4d2d' }}>Bắt đầu bán</Text>
                        </View>
                        <View style={styles.rowFlexEnd}>
                            <Text style={{ color: 'rgba(0,0,0,.😎', fontSize: 12 }}>Đăng ký miễn phí</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.margin10fff}>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Khách hàng thân thiết </Text>
                        </View>
                        <View style={styles.rowFlexEnd}>
                            <Text style={styles.fontsizeColor08}>Thành viên</Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Đã thích </Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Shop đang theo dõi </Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Săn Thưởng Shopee</Text>
                        </View>
                        <View style={styles.rowFlexEnd}>
                            <Text style={styles.fontsizeColor08}>Lấy ngay 1,000 Xu</Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Đã xem gần đây </Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Số dư TK Shopee </Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Shopee Xu </Text>
                        </View>
                        <View style={styles.rowFlexEnd}>
                            <Text style={styles.fontsizeColor08}>3.300 Xu</Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Đánh giá của tôi </Text>
                        </View>
                    </View>
                    <View style={styles.spaceBetween}>
                        <View style={styles.rowSpaceBetween}>
                            <Text>Shopee Tiếp Thị Liên Tiếp </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.margin10fff}>
                    <View style={styles.rowFlexStart14}>
                        <Text>Thiết lập tài khoản</Text>
                    </View>
                    <View style={styles.rowFlexStart14}>
                        <Text>Trung tâm hỗ trợ</Text>
                    </View>
                    <View style={styles.rowFlexStart14}>
                        <Text>Trò Chuyện Với Shopee</Text>
                    </View>
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
        marginTop: 20,
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
        color: 'rgba(0,0,0,.5)'
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

