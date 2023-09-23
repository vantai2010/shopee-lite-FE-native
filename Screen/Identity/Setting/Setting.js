import { ScrollView, View , Text, TouchableOpacity, Button} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

export default function Setting () {

    const [isLogin, setIsLogin] = useState(true)

    return(
        <ScrollView style={{flex:1, backgroundColor:'rgba(0, 0, 0, .04)'}}>
           {isLogin
                ?
                <View>
                    <View style={{marginVertical:10, marginLeft: 10}}>
                        <Text style={{color:'rgba(0, 0, 0, .4)', fontSize:12 }}>Tài khoản của tôi</Text>
                    </View>

                    <View style={{backgroundColor:'#fff'}}>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16, }}>
                                <Text>Tài khoản và Bảo mật</Text>

                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16,}}>
                                <Text>Địa chỉ</Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                                <Text>Tài khoản / Thẻ ngân hàng</Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <></>
           }

           <View style={{marginVertical:10, marginLeft: 10}}>
                <Text style={{color:'rgba(0, 0, 0, .4)', fontSize:12 }}>Cài đặt</Text>
           </View>

           <View style={{backgroundColor:'#fff'}}>
                {isLogin
                    ?
                    <View>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                                <Text>Cài đặt Chat</Text>

                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16, }}>
                                <Text>Cài đặt thông báo</Text>

                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                                <Text>Cài đặt riêng tư</Text>

                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                                <Text>Người dùng đã bị chặn</Text>

                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                        </TouchableOpacity>
                    </View>
                    :
                    <></>
                }
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                        <View>
                            <Text>Ngôn ngữ / Language</Text>
                            <Text style={{marginTop:4, fontSize:12, color:'rgba(0, 0, 0, .4)'}}>Tiếng Việt</Text>
                        </View>

                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                </TouchableOpacity>
            </View>
           <View style={{marginVertical:10, marginLeft: 10}}>
                <Text style={{color:'rgba(0, 0, 0, .4)', fontSize:12 }}>Hỗ trợ</Text>
           </View>

           <View style={{backgroundColor:'#fff'}}>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16, }}>
                        <Text>Trung tâm hỗ trợ</Text>

                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                        <Text>Tiêu chuẩn cộng đồng</Text>

                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16,}}>
                        <Text>Điều khoản Shopee</Text>

                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                        <Text>Hài lòng với Shopee? Hãy đánh giá ngay!</Text>

                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', borderBottomColor:'rgba(0, 0, 0, .04)', borderBottomWidth:1}}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                        <Text>Giới thiệu</Text>

                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                </TouchableOpacity>
                {isLogin
                    ?
                    <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', }}>
                        <View style={{ flexDirection:'row', justifyContent:'space-between',padding:16}}>
                            <Text>Yêu cầu hủy tài khoản</Text>

                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{  color:'rgba(0, 0, 0, .4)', margin:14}} />

                    </TouchableOpacity>
                    :
                    <></>
                }
           </View>

           {isLogin
                ?
                <View style={{backgroundColor:'#ee4d2d', margin:10}}>
                    <Button title='Đăng xuất' color='#fff' />
                </View>
                :
                <></>
           }
        </ScrollView>
    )
}