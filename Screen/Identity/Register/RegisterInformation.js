import { useEffect, useRef, useState } from "react";
import { ScrollView, View, Text, TextInput, Button, TouchableOpacity, Image, ImageManipulator } from "react-native";
import { Picker } from "@react-native-picker/picker"
import fontSize from "../../../utils/constant/fontSize";
import { useDispatch, useSelector } from "react-redux";
import keyMap from "../../../utils/constant/keyMap";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchRegisterInformationThunk } from "../../../store/slices/appSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import namePage from "../../../utils/constant/namePage";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import TextFormatted from "../../../Components/TextFormatted/TextFormatted"

export default function RegisterInformation() {
    const navigation = useNavigation()
    const route = useRoute()
    const accountId = route.params?.accountId
    const language = useSelector(state => state.app.language)
    const dispatch = useDispatch()
    const idTime = useRef()
    const options = [
        { labelEN: 'Male', labelVI: "Nam", value: keyMap.MALE },
        { labelEN: 'Female', labelVI: "Nữ", value: keyMap.FEMALE },
    ]
    const [arrSuggess, setSuggess] = useState([])

    const [inputForm, setInputForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        genderId: "",
        image: "",
    })

    const [errMess, setErrMess] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        genderId: "",
        image: "",
        result: ""
    })

    const handleChangeText = (type, text) => {

        setInputForm({
            ...inputForm,
            [type]: text
        })

    }

    const handleRegister = async () => {
        let { firstName, lastName, address, phoneNumber, genderId, image } = inputForm
        if (!firstName) {
            setErrMess({
                firstName: language === keyMap.EN ? "You must enter this field" : "Bạn phải nhập trường này",
                lastName: "",
                address: "",
                phoneNumber: "",
                genderId: "",
                image: "",
                result: ""
            })
            return
        }
        if (!lastName) {
            setErrMess({
                firstName: "",
                lastName: language === keyMap.EN ? "You must enter this field" : "Bạn phải nhập trường này",
                address: "",
                phoneNumber: "",
                genderId: "",
                image: "",
                result: ""
            })
            return
        }
        if (!address) {
            setErrMess({
                firstName: "",
                lastName: "",
                address: language === keyMap.EN ? "You must enter this field" : "Bạn phải nhập trường này",
                phoneNumber: "",
                genderId: "",
                image: "",
                result: ""
            })
            return
        }
        if (!phoneNumber) {
            setErrMess({
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: language === keyMap.EN ? "You must enter this field" : "Bạn phải nhập trường này",
                genderId: "",
                image: "",
                result: ""
            })
            return
        }
        if (!genderId) {
            setErrMess({
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: "",
                genderId: language === keyMap.EN ? "You must enter this field" : "Bạn phải nhập trường này",
                image: "",
                result: ""
            })
            return
        }
        if (isNaN(phoneNumber)) {
            setErrMess({
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: language === keyMap.EN ? "This field must be numeric" : "Trường này phải là số",
                genderId: "",
                image: "",
                result: ""
            })
            return
        }

        let response = await dispatch(fetchRegisterInformationThunk({
            ...inputForm,
            accountId: accountId,
        }))
        let data = unwrapResult(response)
        if (data && data.errCode === 0) {
            setErrMess({
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: "",
                genderId: "",
                image: "",
                result: language === keyMap.EN ? data.messageEN : data.messageVI
            })

            navigation.navigate(namePage.LOGIN)

        } else {
            setErrMess({
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: "",
                genderId: "",
                image: "",
                result: language === keyMap.EN ? data.messageEN : data.messageVI
            })
        }

    }


    const openImageLibrary = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.status !== 'granted') {
            alert('Permission to access media library is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3], // Tùy chỉnh khung ảnh
        });

        if (!result.cancelled) {
            setInputForm({ ...inputForm, image: result.uri });
        }
    };




    const handleSuggestion = (text) => {
        if (idTime.current) {
            clearTimeout(idTime.current)
        }
        idTime.current = setTimeout(async () => {
            axios
                .get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(text)}`)
                .then((response) => {
                    if (response.data) {
                        console.log(response.data);
                        setSuggess(response.data);
                    }
                })
                .catch((error) => {
                    console.error('Lỗi khi tìm kiếm gợi ý địa chỉ:', error);
                });
        }, 650)
    }



    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.05)' }}>
            <View style={{ backgroundColor: '#fff', margin: 30 }}>
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}><TextFormatted id="register.firstName" /></Text>
                <TextInput
                    onChangeText={text => handleChangeText("firstName", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.firstName && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.firstName}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}><TextFormatted id="register.lastName" /></Text>
                <TextInput
                    onChangeText={text => handleChangeText("lastName", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.lastName && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.lastName}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}><TextFormatted id="register.address" /></Text>

                <TextInput
                    value={inputForm.address}
                    onChangeText={text => { handleChangeText("address", text); handleSuggestion(text) }}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                <View style={{ alignItems: "center" }}>
                    {
                        arrSuggess.length > 0 && <ScrollView style={{ marginTop: 5, borderTopWidth: 1, maxHeight: 210, borderLeftWidth: 1, borderRightWidth: 1, width: "88.5%", borderColor: "#f5f5f5" }}>
                            {
                                arrSuggess.map(item => {
                                    return (

                                        <TouchableOpacity
                                            style={{
                                                borderBottomWidth: 1, borderColor: "#261c00", borderBottomWidth: 1, shadowColor: '#000',
                                                shadowOffset: { width: 0, height: 2 },
                                                shadowOpacity: 0.5,
                                                shadowRadius: 2,
                                                elevation: 2,
                                            }}
                                            onPress={() => { setInputForm({ ...inputForm, address: item.display_name }); setSuggess([]); }}
                                        >
                                            <Text
                                                style={{ fontSize: fontSize.h2, padding: 10, }}>
                                                {item.display_name}
                                            </Text>
                                        </TouchableOpacity>

                                    )
                                })
                            }

                        </ScrollView>
                    }
                </View>


                {errMess.address && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.address}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}><TextFormatted id="register.phone" /></Text>
                <TextInput
                    onChangeText={text => handleChangeText("phoneNumber", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.phoneNumber && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.phoneNumber}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}><TextFormatted id="register.gender" /></Text>
                {/* <TextInput
                    onChangeText={text => handleChangeText("genderId", text)}
                    style={{ marginHorizontal: 20, marginBottom: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                /> */}

                <Picker
                    selectedValue={inputForm.genderId}
                    onValueChange={(itemValue, itemIndex) => setInputForm({ ...inputForm, genderId: itemValue })}
                >
                    {options.map((option, index) => (
                        <Picker.Item
                            key={index}
                            label={language === keyMap.EN ? option.labelEN : option.labelVI}
                            value={option.value}
                        />
                    ))}
                </Picker>
                {errMess.genderId && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.genderId}</Text>}

                <Button title={language === keyMap.EN ? "Pick an Image" : "Chọn ảnh"} onPress={() => openImageLibrary()} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {inputForm.image && <Image source={{ uri: inputForm.image }} style={{ width: 200, height: 200 }} />}
                </View>

                {errMess.result && <Text style={{ color: "green", fontSize: fontSize.h3 }}>{errMess.result}</Text>}
                <View style={{ backgroundColor: '#ee4d2d', marginTop: 30, paddingVertical: 8 }}>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text><TextFormatted id="register.register" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}