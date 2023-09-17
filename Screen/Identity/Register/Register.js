import { ScrollView, View, Text, TextInput, Button } from "react-native";

export default function Register () {
    return (
        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,.05)'}}>
            <View style={{backgroundColor:'#fff', margin:30}}>
                <Text style={{margin:20, marginBottom: 10, fontSize:16}}>FirstName</Text>
                <TextInput  
                    style={{marginHorizontal:20, borderColor:'rgba(0,0,0,.05)', borderWidth:1, padding:12, fontSize:16}}
                />
                <Text style={{margin:20, marginBottom: 10, fontSize:16}}>LastName</Text>
                <TextInput  
                    style={{marginHorizontal:20, borderColor:'rgba(0,0,0,.05)', borderWidth:1, padding:12, fontSize:16}}
                /> 
                <Text style={{margin:20, marginBottom: 10, fontSize:16}}>Address</Text>
                <TextInput  
                    style={{marginHorizontal:20, borderColor:'rgba(0,0,0,.05)', borderWidth:1, padding:12, fontSize:16}}
                />
                <Text style={{margin:20, marginBottom: 10, fontSize:16}}>Phone</Text>
                <TextInput  
                    style={{marginHorizontal:20, borderColor:'rgba(0,0,0,.05)', borderWidth:1, padding:12, fontSize:16}}
                />
                <Text style={{margin:20, marginBottom: 10, fontSize:16}}>Gentle</Text>
                <TextInput  
                    style={{marginHorizontal:20, marginBottom:20, borderColor:'rgba(0,0,0,.05)', borderWidth:1, padding:12, fontSize:16}}
                />
                <View style={{backgroundColor:'#ee4d2d', marginTop:30, paddingVertical:8}}>
                    <Button title="Đăng ký" color='#fff' />
                </View>
            </View>
        </ScrollView>
    )
}