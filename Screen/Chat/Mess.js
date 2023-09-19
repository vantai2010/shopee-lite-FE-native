import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import fontSize from '../../ultil/constant/fontSize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from '../../ultil/constant/color';


export default function Mess() {

  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };


  const [text, setText] = useState('');
  
  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // Điều chỉnh vị trí đẩy lên
    >

      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

        <View style={styles.container}>

            <View style ={styles.header}>
              <TouchableOpacity style={styles.icon1_header} onPress={() => handleNavigate(namePage.CHAT)}> 
                <AntDesign name="arrowleft" size={24} color="black"/>
              </TouchableOpacity>
              <View style={styles.content_header}>

                <TouchableOpacity style={styles.image_chat} onPress={() => handleNavigate(namePage.SETPROFILE)}>
                  <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                </TouchableOpacity>

                <View style={styles.box_header}> 
                  <View style={styles.likeAndName}>
                      <View style={styles.status_header}>
                        <Text style={{fontSize: fontSize.h4, backgroundColor: color.THEME, color: 'white'}}>
                          Yêu thích+
                        </Text>
                      </View>

                      <TouchableOpacity style={styles.name_header} onPress={() => handleNavigate(namePage.SETPROFILE)}>
                        <Text style={{fontSize: fontSize.h2}} >
                            @datStore.TheBest
                        </Text>
                      </TouchableOpacity>

                  </View>

                    <View style={styles.time_header}>
                      <Text style={{fontSize: fontSize.h3, color: '#787878'}}>
                          Active 23 minutes ago
                      </Text>
                    </View>

                </View>
  
              </View>
                  <TouchableOpacity style={styles.icon2_header}>
                  <MaterialCommunityIcons name="dots-horizontal-circle" size={24} color="black" />
                  </TouchableOpacity>

            </View>

            <ScrollView style={styles.container_content}>
              <View style={styles.content}>
                <TouchableOpacity style={{padding: 10}}>
                    <View style={styles.header_content}>
                      <View style={styles.img_header_content}>
                        <Image style={styles.img_product} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                      </View>
                      
                      <View style={styles.info_content}>
                        <View style={styles.code_info} >
                          <Text style={{fontSize: fontSize.h3}}>
                              Mã đơn hàng: 19247312
                          </Text>
                        </View>

                        <View style={styles.total_info} >
                          <Text style={{fontSize: fontSize.h3}}>
                              Tổng đơn hàng: 999.999Đ
                          </Text>
                        </View>

                        <View style={styles.result_info} >
                          <Text style={{color:'#fd5e32', fontSize: fontSize.h3}}>
                              Thành công
                          </Text>
                        </View>
                      </View>

                    </View>

                </TouchableOpacity>


                <View style={styles.date_chat}>
                    <Text style={styles.text_date_chat}>08 thg 2 2022</Text>
                </View>

              <TouchableOpacity style={styles.chat}>
                  <View style={styles.box_mess}>
                    <View style={styles.text_box_mess}>
                      <Text style={{fontSize: fontSize.h2}}>
                      Các HLV có thể sử dụng FC/MC để dễ dàng chinh phục mùa thẻ mới Century Club cùng nhiều siêu phẩm khác với vòng quay FECC Đặc Biệt. Chỉ với 50 lượt chơi, chắc chắn rinh ngay dàn sao BOE mạ vàng cùng HLV FW đặc biệt (6 sao) cực kỳ xịn sò. Đặc biệt khi chạm được mốc tích lũy cao nhất sẽ được sở hữu ngay siêu quà BTB 80 (+8) 
                      </Text>
                    </View>
                    <View style={styles.date_box_mess}>
                      <Text style={{fontSize: fontSize.h3, color: '#787878'}}>
                        20:57
                      </Text>
                    </View>

                  </View>

              </TouchableOpacity>

              <View style={styles.date_chat}>
                    <Text style={styles.text_date_chat}>08 thg 2 2022</Text>
                </View>

              <TouchableOpacity style={styles.chat}>
                  <View style={styles.box_mess}>
                    <View style={styles.text_box_mess}>
                      <Text style={{fontSize: fontSize.h2}}>
                      Các HLV có thể sử dụng FC/MC để dễ dàng chinh phục mùa thẻ mới Century Club cùng nhiều siêu phẩm khác với vòng quay FECC Đặc Biệt. Chỉ với 50 lượt chơi, chắc chắn rinh ngay dàn sao BOE mạ vàng cùng HLV FW đặc biệt (6 sao) cực kỳ xịn sò. Đặc biệt khi chạm được mốc tích lũy cao nhất sẽ được sở hữu ngay siêu quà BTB 80 (+8) 
                      </Text>
                    </View>
                    <View style={styles.date_box_mess}>
                      <Text style={{fontSize: fontSize.h3, color: '#787878'}}>
                        20:57
                      </Text>
                    </View>

                  </View>

              </TouchableOpacity>
              <TouchableOpacity style={styles.chat}>
                  <View style={styles.box_mess}>
                    <View style={styles.text_box_mess}>
                      <Text style={{fontSize: fontSize.h2}}>
                      Các HLV có thể sử dụng FC/MC để dễ dàng chinh phục mùa thẻ mới Century Club cùng nhiều siêu phẩm khác với vòng quay FECC Đặc Biệt. Chỉ với 50 lượt chơi, chắc chắn rinh ngay dàn sao BOE mạ vàng cùng HLV FW đặc biệt (6 sao) cực kỳ xịn sò. Đặc biệt khi chạm được mốc tích lũy cao nhất sẽ được sở hữu ngay siêu quà BTB 80 (+8) 
                      </Text>
                    </View>
                    <View style={styles.date_box_mess}>
                      <Text style={{fontSize: fontSize.h3, color: '#787878'}}>
                        20:57
                      </Text>
                    </View>

                  </View>
              </TouchableOpacity>

              <View style={styles.date_chat}>
                    <Text style={styles.text_date_chat}>09 thg 2 2022</Text>
              </View>

              <TouchableOpacity style={styles.rechat}>
                  <View style={styles.rebox_mess}>
                    <View style={styles.retext_box_mess}>
                      <Text style={{fontSize: fontSize.h2}}>
                      Bạn cứ cho mình món đồ đắt nhất ở đây nhé! Càng đắt càng tốt
                      </Text>
                    </View>
                    <View style={styles.redate_box_mess}>
                      <Text style={{fontSize: fontSize.h3, color: '#787878'}}>
                        20:57
                      </Text>
                    </View>

                  </View>

              </TouchableOpacity>

              </View>
            </ScrollView>
              
              <View style={styles.footer} >
              
              <TouchableOpacity style={styles.footer_add}>
              <Ionicons name="add-circle-outline" size={30} color="black" />
              </TouchableOpacity>
              <View style={styles.content_footer}>
                <View style={styles.text_footer}>
                  
                  <TextInput
                      style={styles.input}
                      placeholder="Search" 
                      onChangeText={(value) => setText(value)}
                      value={text}
                  />
                    
                      <TouchableOpacity style={styles.icon_footer}>
                      <FontAwesome5 name="smile" size={24} color="black" />
                      </TouchableOpacity>
                  
                  </View>

              </View>

            </View>
  
        <StatusBar style="auto" />
        </View>

        {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  container_content:{
    backgroundColor: '#ccc'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 0.2,
    borderColor: '#ccc',



  },
  likeAndName: {
    flexDirection: 'row',
    padding: 5
    
  },
  icon1_header: {
    flex: 1,
    justifyContent:'center'

  },
  image_chat: {
    justifyContent: 'center',
    
    width: 45, 
    height: 45, 
    borderRadius: 35,
    overflow: 'hidden'
  },
  Image_Content:{
    width: '100%',
    height: '100%',
  },
  content_header: {
    flexDirection: 'row',
    flex: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  icon2_header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  status_header: {
    paddingRight: 5, 
    justifyContent: 'center'
    
  },
  time_header: {
    paddingHorizontal: 5,

  },
  img_header_content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: 10
  },
  img_product: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',
  },
  header_content: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 90,
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  info_content: {
    flex: 4,
    padding: 10
  },
  code_info: {
    paddingVertical: 3
  },
  total_info: {
    paddingVertical: 3
  },
  result_info:{
    paddingVertical: 3
  },
  date_chat: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
    marginVertical: 15

  },
  text_date_chat: {
    color: '#787878',
    fontSize: fontSize.h3
  },
  chat: {
    padding: 10
  },
  box_mess:{
    maxWidth: '85%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
text_box_mess:{
  

},
date_box_mess: {
  alignSelf: 'flex-end',
  padding: 5
},
rechat: {
  padding: 10,
  alignItems: 'flex-end',
  
},
rebox_mess: {

    maxWidth: '85%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#d7f1ee'
},
redate_box_mess: {
  padding: 5

},
footer: {
  // bottom: 0 ,
  flexDirection: 'row',
  paddingVertical: 20,
  // position: 'absolute'
},
text_footer:{
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  width: 320,
  borderWidth: 1,
  borderColor: '#ccc',
  height: 40,
  flexDirection: 'row',
  borderRadius: 20
},
content_footer:{
  justifyContent: 'center'
},
footer_add: {
  paddingHorizontal: 5,
  paddingVertical: 5,
  justifyContent: 'center'
},
icon_footer: {
  flex: 0.5,
  justifyContent: 'center',
  alignItems: 'flex-end'
},
input: {
  flex: 4.5,
},
});




