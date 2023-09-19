import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Link, useNavigation } from "@react-navigation/native";
import fontSize from '../../ultil/constant/fontSize';
import color from '../../ultil/constant/color';



export default function Chat() {
  const navigation = useNavigation();

  const handleNavigate = (namePage) => {
    return navigation.navigate(namePage);
  };


  const [text, setText] = useState('');
  
  return (

    <>
            <View style={styles.container}>
              
              <View style={styles.header_container}>
                
                  <TouchableOpacity style={styles.icon_header} onPress={() => handleNavigate(namePage.INFORMATION)} >
                    
                    <AntDesign name="arrowleft" size={24} color="black"  />

                  </TouchableOpacity>

                
                  <View style={styles.text_header_container}>
                      <Text style={styles.text_header}>
                        Chat
                      </Text>
                  </View>
              </View>

              <View style={styles.content_container}>
                
                  <View style={styles.content_search}>
                    <View style={styles.box_search}>
                      <EvilIcons name="search" size={22} color="grey" style={styles.searchIcon} />

                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Search" 
                      onChangeText={(value) => setText(value)}
                      value={text}
                      />
                  </View>

                  <ScrollView>  

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content} >
                          
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View >
                        
                      </TouchableOpacity>

                  </View>
                  

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>


                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>

                  <View style={styles.padding_content}>
                      <TouchableOpacity style={styles.content} onPress={() => handleNavigate(namePage.MESS)}>
                        <View style={styles.image_chat}>
                          <Image style={styles.Image_Content} source='https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG'/>
                        </View>
                        <View style={styles.box_content}>
                            <View style={styles.header_content}>
                                <View style={styles.name_chat}>
                                    <Text style={styles.text_name_chat } >
                                      jogger.offical
                                    </Text>
                                </View>
                                <View style={styles.date_chat}>
                                    <Text style={styles.text_date_chat}>
                                      Thứ sáu
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.header_content}>
                                <View style={styles.content_chat}>
                                    <Text style={styles.text_content_chat} numberOfLines={1} >
                                    Nhằm đồng hành các đội tuyển Việt Nam thi đấu quốc tế ở giải đấu FECC. Sự kiện mang đến hàng loạt những siêu phẩm ICONS, Century Club miễn phí đang chờ đón các HLV tại sự kiện ingame trong bản cập nhật lần này.
                                    </Text>
                                </View>
                                <View style={styles.number_chat}>
                                    <Text style={styles.text_number_chat} >
                                      3
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                      </TouchableOpacity>

                  </View>
        </ScrollView>

              </View>


              <StatusBar style="auto" />
            </View>

    </>
  

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ccc',
    // padding: 10,
    borderRadius: 20
  },
  content_search:{
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    
    
    
  },
  box_search:{
    backgroundColor:'#dcd1d1',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10

  },
  searchIcon:{

    // padding: 10
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor:'#dcd1d1',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
  
  },
  header_container:{
  // flex: 1,  
  width:'100%', 
  height: '10%', 
  backgroundColor:'white',
  flexDirection: 'row',
  paddingHorizontal: '5%'
    
  },
  text_header_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
  text_header:{
    fontSize: fontSize.h1

  },
  icon_header:{
  position: 'absolute',
  top: '20%',
  padding: 10
    
  },
  content_container: {

    flex: 7
  },
  padding_content:{
    padding: 5
  },
  content:{
    flex: 1, 
    flexDirection: 'row',
    padding: 10,
    alignItems:'center',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#ccc'

    
  },
  Image_Content:{
    width: '100%',
    height: '100%',
  },
  image_chat: {
    justifyContent: 'center',
    
    width: 45, 
    height: 45, 
    borderRadius: 35, 
    overflow: 'hidden'

  },
  box_content: {
    flex: 1,
    borderTopWidth: 0.2,
    borderTopColor: '#f1f1f1'
  },
  header_content:{
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  name_chat: {

  },
  text_content_chat:{
    color: '#6f6f6f',
    fontSize: fontSize.h3,
    paddingVertical: 5
  },
  text_name_chat: {
    fontWeight: '700',
    fontSize: fontSize.h2

  },
  text_date_chat:{
    fontSize: fontSize.h3,
    color: 'grey'
  },
  number_chat:{
    backgroundColor: '#fe6232',
    borderRadius: 11,
    paddingHorizontal: 8,
    paddingVertical: 5

  },
  text_number_chat:{
    fontSize: 10
  },
  content_chat:{
    maxWidth: '85%'

  },
  date_chat:{

  }

  

});




