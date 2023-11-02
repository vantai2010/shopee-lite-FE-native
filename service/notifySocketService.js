import { io } from 'socket.io-client'
import environment from '../utils/constant/environment'
import AsyncStorage from '@react-native-async-storage/async-storage'
const connectToNotifySocket = async () => {
    // let url = env.REACT_APP_URL_BACK_END ? env.REACT_APP_URL_BACK_END + '/notify' : `${URL_BACK_END}/notify`
    // let nameLocalStore = env.REACT_APP_LOCAL_STORE_TOKEN_NAME ? env.REACT_APP_LOCAL_STORE_TOKEN_NAME : NAME_LOCAL_STORED

    let url = environment.URL_BE + '/notify'
    let nameLocalStore = environment.KEY_TOKEN_STORE
    let token = await AsyncStorage.getItem(nameLocalStore)
    if (token) {
        return io.connect(url, {
            auth: {
                token: token
            }
        })
    } else {
        return null
    }
}

export {
    connectToNotifySocket
}