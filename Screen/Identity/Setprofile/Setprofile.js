import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';


export default function Setprofile () {
    return (
        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,.05)'}} >
            <View style={{height:200, backgroundColor:'#ee4d2d', justifyContent:'space-between'}}>
                <View>

                </View>
                <TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                        <Image style={{ width:60, height:60, borderRadius:50}} source={require('../../../Image/background12.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding:5, backgroundColor:'#582e0a', width:'100%', alignItems:'center'}}>
                        <Text style={{color:'#fff'}}>Chạm để thay đổi</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10, borderBlockColor: 'rgba(0,0,0,.05)', borderWidth:1}}>
                        <Text>Tên</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text style={{color:'#ee4d2d'}}> Thiết lập ngay</Text>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                        <Text>Bio</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text style={{color:'rgba(0,0,0,.4)'}}> Thiết lập ngay</Text>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:20}}>
            <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10, borderBlockColor: 'rgba(0,0,0,.05)', borderWidth:1}}>
                        <Text>Giới tính</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text style={{color:'rgba(0,0,0,.4)'}}>Thiết lập ngay</Text>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10,  borderBlockColor: 'rgba(0,0,0,.05)', borderWidth:1}}>
                        <Text>Ngày sinh</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text style={{color:'rgba(0,0,0,.4)'}}> Thiết lập ngay</Text>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10,  borderBlockColor: 'rgba(0,0,0,.05)', borderWidth:1}}>
                        <Text>Điện thoại</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text>********58</Text>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10,  borderBlockColor: 'rgba(0,0,0,.05)', borderWidth:1}}>
                        <Text>Email</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text>l*****2@gmail.com </Text>
                            <Text style={{color:'#ee4d2d'}}>Xác nhận ngay</Text>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                        <Text>Tài khoản kiên kết</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <AntDesign name="right" size={24} color='rgba(0,0,0,.4)' style={{fontSize:14, fontWeight:200, marginLeft:4}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}