import { useEffect, useState } from "react";
import { ScrollView, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import fontSize from "../../../utils/constant/fontSize";
import { useDispatch, useSelector } from "react-redux";
import keyMap from "../../../utils/constant/keyMap";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchRegisterInformationThunk } from "../../../store/slices/appSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import namePage from "../../../utils/constant/namePage";
import * as ImagePicker from "expo-image-picker"
import { convertToBase64 } from "../../../utils/Image/convertToBase64";

export default function RegisterInformation() {
    const navigation = useNavigation()
    const route = useRoute()
    const accountId = route.params?.accountId
    const language = useSelector(state => state.app.language)
    const dispatch = useDispatch()

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

    const handleRegister = () => {
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

        let response = dispatch(fetchRegisterInformationThunk({
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
            setTimeout(() => {
                navigation.navigate(namePage.LOGIN)
            }, 3000)
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

    // const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    // const [image, setImage] = useState(null)

    // useEffect(() => {
    //     (
    //         async () => {
    //             const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
    //             setHasGalleryPermission(galleryStatus.status === 'granted')
    //         }
    //     )();
    // }, [])

    const pickImage = async () => {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (galleryStatus.status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quantity: 1,

            })

            if (!result.canceled) {
                let imageBase64 = await convertToBase64(result.uri)
                setInputForm(imageBase64);
            }
        }

    }



    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.05)' }}>
            <View style={{ backgroundColor: '#fff', margin: 30 }}>
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}>FirstName</Text>
                <TextInput
                    onChangeText={text => handleChangeText("firstName", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.firstName && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.firstName}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}>LastName</Text>
                <TextInput
                    onChangeText={text => handleChangeText("lastName", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.lastName && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.lastName}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}>Address</Text>
                <TextInput
                    onChangeText={text => handleChangeText("address", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.address && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.address}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}>Phone</Text>
                <TextInput
                    onChangeText={text => handleChangeText("phoneNumber", text)}
                    style={{ marginHorizontal: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.address && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.address}</Text>}
                <Text style={{ margin: 20, marginBottom: 10, fontSize: 16 }}>Gender</Text>
                <TextInput
                    onChangeText={text => handleChangeText("genderId", text)}
                    style={{ marginHorizontal: 20, marginBottom: 20, borderColor: 'rgba(0,0,0,.05)', borderWidth: 1, padding: 12, fontSize: 16 }}
                />
                {errMess.genderId && <Text style={{ color: "red", fontSize: fontSize.h3 }}>{errMess.genderId}</Text>}

                <Button title="pickImage" onPress={() => pickImage()} />
                {inputForm.image && <Image source={{ uri: inputForm.image }} style={{ flex: 1 / 2 }} />}

                <View style={{ backgroundColor: '#ee4d2d', marginTop: 30, paddingVertical: 8 }}>
                    {errMess.result && <Text style={{ color: "green", fontSize: fontSize.h3 }}>{errMess.result}</Text>}
                    <TouchableOpacity onPress={handleRegister}>
                        <Text>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}