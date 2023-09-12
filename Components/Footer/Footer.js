import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import namePage from '../../ultil/constant/namePage';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
    const navigation = useNavigation()

    const handleNavigate = (namePage) => {
        return navigation.navigate(namePage)
    }


    return (
        <>

            <View style={styles.Footer}>
                <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
                    <View style={styles.Footer_Button}>
                        <AntDesign name="home" size={24} color="black" />
                        <Text style={styles.TextFooter}>
                            Home
                        </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
                    <View style={styles.Footer_Button}>
                        <SimpleLineIcons name="handbag" size={24} color="black" />
                        <Text style={styles.TextFooter}>
                            Mall
                        </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
                    <View style={styles.Footer_Button}>
                        <MaterialIcons name="live-tv" size={24} color="black" />
                        <Text style={styles.TextFooter}>
                            Live
                        </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate(namePage.HOME)}>
                    <View style={styles.Footer_Button}>
                        <Feather name="video" size={24} color="black" />
                        <Text style={styles.TextFooter}>
                            Video
                        </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate(namePage.INFORMATION)}>
                    <View style={styles.Footer_Button}>
                        <AntDesign name="notification" size={24} color="black" />
                        <Text style={styles.TextFooter}>
                            Thông báo
                        </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate(namePage.IDENTITY)}>
                    <View style={styles.Footer_Button}>
                        <Ionicons name="person-outline" size={24} color="black" />
                        <Text style={styles.TextFooter}>
                            Tôi
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>

        </>

    );

}

const styles = StyleSheet.create({

    Footer: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: 75,
        backgroundColor: 'white',
        borderTopColor: '#ccc',
        borderTopWidth: 0.5

    },
    Footer_Button: {
        padding: 8,
        alignItems: 'center'
    },
    TextFooter: {
        fontSize: 8,
        textAlign: 'center',
        padding: 3

    }





});