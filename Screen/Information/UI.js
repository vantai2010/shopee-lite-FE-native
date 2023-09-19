import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import color from '../../ultil/constant/color';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import fontSize from '../../ultil/constant/fontSize';


function UI() {
    const navigation = useNavigation();

    const handleNavigate = (namePage) => {
      return navigation.navigate(namePage);
    };
  
    return ( 

        <>
        <ScrollView>

          <View style={styles.logIn}>
              <View style={styles.header}>
                <Text style={styles.text_header}>
                  Bạn cần phải đăng nhập để có thể sử dụng được dịch vụ của chúng tôi

                </Text>
              </View>
              
                  <TouchableOpacity style={styles.Content} onPress={() => handleNavigate(namePage.LOGIN)}>     
                        <Text style={styles.text_content}>Đăng nhập tại đây</Text>
                  </TouchableOpacity>

          </View>

        </ScrollView>
      </>
     );
}

export default UI;
const styles = StyleSheet.create({
    logIn: {
      flex: 1,
      width: '100%',
      height: 500,
      justifyContent: 'center',
      padding: 30
    },header:{
        paddingVertical: 30
      },
      Content: {
       
       backgroundColor: color.THEME,
       padding: 10,
       borderRadius: 15
        
      },
      text_content:{
        textAlign: 'center',
        fontSize: fontSize.h2
      },
      text_header:{
        fontSize: fontSize.h1,
        textAlign: 'center'
      }
    
    
    });
    
    