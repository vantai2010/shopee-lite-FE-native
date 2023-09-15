import { ScrollView , TouchableOpacity,Image, View, Text} from "react-native";
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cart () {
    return (
        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,.05)'}}>
            <View style={{marginTop:20, backgroundColor:'#fff'}}>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start', padding:10}}>
                    <Image style={{width:80, height:80}} resizeMode='contain' source={require('../../../Image/background13.png')} />
                    <View style={{ marginLeft:28,height:160 ,justifyContent:'space-between',flex:1}}>
                        <Text style={{fontSize:16}}>Ốp bảo vệ Mac.book, Case, Bọc Sạc</Text>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-start', backgroundColor:'rgba(0,0,0,.08)'}}>
                            <Text style={{color:'rgba(0,0,0,.8)', lineHeight:28}}>Phân loại: ( M ) 60W, 61W, 67W </Text>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="rgba(0,0,0,.5)" style={{lineHeight:28}} />
                        </TouchableOpacity>
                        <Image style={{width:125, height:20}} source={require('../../../Image/background7.png')} />
                        <Text style={{color:'#ee4d2d'}}>đ79.000</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                                <TouchableOpacity style={{borderWidth:1, borderColor:'rgba(0,0,0,.4)', padding:4}}>
                                    <MaterialCommunityIcons name="minus" size={16} color="rgba(0,0,0,.4)" />
                                </TouchableOpacity>
                                <View style={{ borderBottomWidth:1, borderTopWidth:1, borderColor:'rgba(0,0,0,.4)'}}>
                                    <Text style={{paddingHorizontal:20,paddingVertical:4,}}>1</Text>
                                </View>
                                <TouchableOpacity style={{borderWidth:1, borderColor:'rgba(0,0,0,.4)', padding:4}}>
                                    <MaterialCommunityIcons name="plus" size={16} color="rgba(0,0,0,.4)" />
                                </TouchableOpacity>
                            </View>
                            <Text style={{color:'#ee4d2d'}}>Còn 6 sản phẩm</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}